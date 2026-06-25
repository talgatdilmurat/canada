// unit.js — Unit detail: segmented [Study Companion | Words] with the grounded Companion + photo import.
import { elFrom, escapeHtml, on, toast, openSheet, confirmLight } from '../util.js';
import * as store from '../store.js';
import { unitById } from '../units.js';
import { CONTENT, hasContent, sourceUrl } from '../unit-content.js';
import { statusOf } from '../scheduler.js';
import { ic } from '../icons.js';
import { speak } from '../audio.js';
import * as ai from '../ai.js';

export const unitDetail = {
  id: 'unit',
  mount(view, ctx, param) {
    const unit = unitById(param);
    if (!unit) { ctx.setTitle('Unit'); view.innerHTML = '<div class="center-state"><p>Unit not found.</p></div>'; return; }
    ctx.setTitle(unit.titleEn);
    ctx.setBack(() => ctx.navigate('units'));
    ctx.setMeta(`<button class="iconbtn" data-gear aria-label="Settings">${ic.gear}</button>`);
    const gear = document.querySelector('#screen-meta [data-gear]');
    if (gear) gear.addEventListener('click', () => ctx.navigate('settings'));

    let tab = 'companion';
    const render = () => {
      view.innerHTML = '';
      const seg = elFrom(`<div class="seg2">
        <button class="${tab === 'companion' ? 'on' : ''}" data-seg="companion">Study Companion</button>
        <button class="${tab === 'words' ? 'on' : ''}" data-seg="words">Words</button></div>`);
      view.appendChild(seg);
      seg.querySelectorAll('[data-seg]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.seg; render(); }));
      const body = elFrom('<div class="unit-body"></div>');
      view.appendChild(body);
      if (tab === 'companion') renderCompanion(body, unit, ctx);
      else renderWords(body, unit, ctx);
    };
    render();
  },
};

/* ============ Companion ============ */
function renderCompanion(body, unit, ctx) {
  const c = CONTENT[unit.id];
  if (!hasContent(unit.id)) {
    body.innerHTML = `
      <div class="cmp-card">
        <div class="eyebrow">Study Companion</div>
        <p class="cmp-summary">This chapter's companion is being prepared from the official <i>Discover Canada</i> guide — a plain-language summary, a concept diagram, the toughest words, and a Turkish voice Ask.</p>
        <div class="soon-list" style="margin-top:14px"><span>Summary</span><span>Diagram</span><span>Toughest words</span><span>Ask</span></div>
        <a class="cmp-source" style="margin-top:14px" href="${sourceUrl(unit.id)}" target="_blank" rel="noopener">Read the official chapter ↗</a>
      </div>`;
    return;
  }
  let lang = 'en';
  const thread = [];
  const paint = () => {
    body.innerHTML = '';
    const top = elFrom(`<div class="cmp-top">
      <button class="cmp-toggle" data-toggle>${lang === 'en' ? 'Türkçe oku' : 'Read in English'}</button>
      <a class="cmp-source" href="${sourceUrl(unit.id)}" target="_blank" rel="noopener">Official chapter ↗</a></div>`);
    body.appendChild(top);
    top.querySelector('[data-toggle]').addEventListener('click', () => { lang = lang === 'en' ? 'tr' : 'en'; paint(); });

    // Summary
    body.appendChild(elFrom(`<div class="cmp-card"><span class="eyebrow">Summary</span>
      <div class="cmp-summary ${lang === 'tr' ? 'tr' : ''}">${escapeHtml(lang === 'tr' ? c.summaryTr : c.summaryEn)}</div></div>`));

    // Diagram
    if (c.diagram) {
      body.appendChild(elFrom(`<div class="cmp-card"><span class="eyebrow">Diagram</span>
        <div class="dg">${diagramHtml(c.diagram, lang, 0)}</div></div>`));
    }

    // Toughest words
    if (c.toughWords && c.toughWords.length) {
      const card = elFrom(`<div class="cmp-card"><span class="eyebrow">Toughest words</span><div class="tw-list"></div></div>`);
      const list = card.querySelector('.tw-list');
      c.toughWords.forEach((w, i) => {
        const row = elFrom(`<div class="tw-row">
          <button class="tw-head" data-i="${i}"><span class="tw-term">${escapeHtml(w.term)}</span><span class="tw-tr">${escapeHtml(w.turkish)}</span></button>
          <div class="tw-body" hidden>
            <div class="row-en">${escapeHtml(w.easyEn || '')}</div>
            <div class="row-tr">${escapeHtml(w.easyTr || '')}</div>
            <button class="tw-add" data-add="${i}">${ic.plus} Add to this unit</button>
          </div></div>`);
        list.appendChild(row);
        const bodyEl = row.querySelector('.tw-body');
        row.querySelector('.tw-head').addEventListener('click', () => { bodyEl.hidden = !bodyEl.hidden; });
        const addBtn = row.querySelector('.tw-add');
        if (store.findByTerm(w.term)) markAdded(addBtn);
        addBtn.addEventListener('click', () => {
          const { created } = store.addCard({ term: w.term, english: w.easyEn || '', turkish: w.turkish || w.easyTr || '', type: /\s/.test(w.term) ? 'phrase' : 'word', unitId: unit.id });
          markAdded(addBtn);
          toast(created ? `Added “${w.term}”.` : `“${w.term}” already saved.`, { ok: created });
        });
      });
      body.appendChild(card);
    }

    // Ask
    const ask = elFrom(`<div class="cmp-card"><span class="eyebrow">Ask</span>
      <div class="ask-prompt">Bu ünite hakkında soru sor — Türkçe yazabilir ya da klavyedeki mikrofona dokunup konuşabilirsin.</div>
      <div class="ask-thread"></div>
      <div class="ask-inputrow"><textarea placeholder="Sorunu buraya yaz…" rows="1"></textarea>
        <button class="ask-send" aria-label="Ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>
      <div class="ask-hint">${ic.mic} Tap the mic on your keyboard to speak Turkish.</div></div>`);
    const threadEl = ask.querySelector('.ask-thread');
    const ta = ask.querySelector('textarea');
    const send = ask.querySelector('.ask-send');
    const paintThread = () => {
      threadEl.innerHTML = thread.map(m => m.role === 'q'
        ? `<div class="ask-q">${escapeHtml(m.text)}</div>`
        : `<div class="ask-a ${m.pending ? '' : 'tr'}">${m.pending ? '<span class="spinner"></span>' : escapeHtml(m.text)}</div>`).join('');
      threadEl.scrollTop = threadEl.scrollHeight;
    };
    const doAsk = async () => {
      const q = ta.value.trim(); if (!q) return;
      if (!c.chapterText) { toast('This chapter isn’t prepared yet.'); return; }
      if (!(await ai.ensureKey())) return;
      ta.value = '';
      thread.push({ role: 'q', text: q });
      const a = { role: 'a', text: '', pending: true }; thread.push(a); paintThread();
      try { a.text = (await ai.askChapter(c.chapterText, q, unit.titleEn)).trim(); a.pending = false; }
      catch (e) { a.text = e.kind === 'auth' ? 'Anahtar reddedildi — Ayarlar’dan kontrol et.' : 'AI’ya ulaşılamadı — bağlantını kontrol et.'; a.pending = false; }
      paintThread();
    };
    send.addEventListener('click', doAsk);
    ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doAsk(); } });
    body.appendChild(ask);
  };
  paint();
}

function markAdded(btn) { btn.classList.add('added'); btn.innerHTML = `${ic.check} Added`; }

function diagramHtml(node, lang, depth) {
  const label = lang === 'tr' ? (node.labelTr || node.labelEn) : node.labelEn;
  const kids = (node.children || []).map(k => diagramHtml(k, lang, depth + 1)).join('');
  const cls = depth === 0 ? 'dg-root' : 'dg-node';
  return `<div class="${cls}"><span class="dg-label">${escapeHtml(label)}</span>${kids ? `<div class="dg-children">${kids}</div>` : ''}</div>`;
}

/* ============ Words ============ */
function renderWords(body, unit, ctx) {
  const cards = store.cardsInUnit(unit.id).sort((a, b) => b.createdAt - a.createdAt);
  const s = store.unitStats(unit.id);
  body.innerHTML = '';
  body.appendChild(elFrom(`<div class="deck-prog"><b>${s.total}</b> ${s.total === 1 ? 'word' : 'words'} · <b>${s.learned}</b> learned</div>`));
  const actions = elFrom(`<div class="unit-actions">
    <button class="btn" data-act="study"${s.total ? '' : ' disabled'}>Study this unit</button>
    <button class="btn ghost" data-act="quiz"${s.total ? '' : ' disabled'}>Quiz this unit</button></div>`);
  body.appendChild(actions);
  actions.querySelector('[data-act="study"]').addEventListener('click', () => ctx.navigate('study', 'u' + unit.id));
  actions.querySelector('[data-act="quiz"]').addEventListener('click', () => ctx.navigate('quiz', 'u' + unit.id));

  const add = elFrom(`<button class="btn subtle add-words" data-act="add">${ic.plus} Add words to this unit</button>`);
  body.appendChild(add);
  add.addEventListener('click', () => openAddMenu(unit, () => renderWords(body, unit, ctx)));

  const list = elFrom('<div class="list"></div>');
  body.appendChild(list);
  if (cards.length === 0) {
    list.innerHTML = `<div class="center-state" style="min-height:140px"><p>No words in this unit yet — add some from a photo, the Toughest Words list, or by typing.</p></div>`;
    return;
  }
  list.innerHTML = cards.map(c => {
    const st = statusOf(c);
    return `<button class="row" data-id="${c.id}"><div>
      <div class="term"><span class="word">${escapeHtml(c.term)}</span>${c.type === 'phrase' ? '<span class="ph">phrase</span>' : ''}</div>
      ${c.turkish ? `<div class="gloss">${escapeHtml(c.turkish)}</div>` : ''}</div>
      <span class="status st-${st}"></span></button>`;
  }).join('');
  on(list, 'click', '.row', (e, el) => openDetail(el.dataset.id, unit, () => renderWords(body, unit, ctx)));
}

/* ---- add menu: from a photo / type ---- */
function openAddMenu(unit, onSaved) {
  const body = elFrom(`<div>
    <h2>Add to ${escapeHtml(unit.titleEn)}</h2>
    <div class="add-menu">
      <button class="btn" data-act="photo">${ic.camera} From a photo</button>
      <button class="btn ghost" data-act="type">${ic.plus} Type a word</button>
    </div></div>`);
  const { close } = openSheet(body);
  body.querySelector('[data-act="type"]').addEventListener('click', () => { close(); openWordForm({ unit, onSaved }); });
  body.querySelector('[data-act="photo"]').addEventListener('click', async () => {
    close();
    if (!(await ai.ensureKey())) return;
    if (!(await screenshotNoticeOnce())) return;
    pickPhoto(unit, onSaved);
  });
}

function pickPhoto(unit, onSaved) {
  const input = elFrom('<input type="file" accept="image/*" style="display:none">');
  document.body.appendChild(input);
  input.addEventListener('change', async () => {
    const file = input.files[0]; input.remove(); if (!file) return;
    let img; try { img = await downscaleImage(file); } catch { return toast('Couldn’t read that image.'); }
    const loading = openSheet(elFrom(`<div style="text-align:center;padding:20px 0"><div class="spinner" style="margin:0 auto 12px;border-color:rgba(47,80,67,.3);border-top-color:var(--accent)"></div><div class="sheet-sub">Reading the page…</div></div>`));
    let candidates;
    try { candidates = await ai.extractCandidates(img.base64, img.mediaType); }
    catch (e) { loading.close(); return toast(e.kind === 'auth' ? 'Key rejected — check Settings.' : (e.message || 'AI error.')); }
    loading.close();
    if (!candidates.length) return toast('No new words found on that page.');
    showCandidates(unit, candidates, onSaved);
  });
  input.click();
}

function showCandidates(unit, candidates, onSaved) {
  const sel = new Set(candidates.map((_, i) => i)); // default: all selected
  const body = elFrom(`<div>
    <h2>Add to ${escapeHtml(unit.titleEn)}</h2>
    <div class="sheet-sub">Tap to choose which words to keep.</div>
    <div class="cand-list"></div>
    <div class="sheet-actions"><button class="btn ghost" data-act="cancel">Cancel</button><button class="btn" data-act="add"></button></div>
  </div>`);
  const list = body.querySelector('.cand-list');
  const addBtn = body.querySelector('[data-act="add"]');
  const paint = () => {
    list.innerHTML = candidates.map((c, i) => `<button class="cand ${sel.has(i) ? 'sel' : ''}" data-i="${i}">
      <span class="cb">${sel.has(i) ? ic.check : ''}</span>
      <span><span class="tm">${escapeHtml(c.term)}</span><span class="gl">${escapeHtml(c.turkish || c.english)}</span></span></button>`).join('');
    addBtn.textContent = `Add ${sel.size} to Unit ${unit.id}`;
    addBtn.toggleAttribute('disabled', sel.size === 0);
    list.querySelectorAll('.cand').forEach(el => el.addEventListener('click', () => {
      const i = +el.dataset.i; sel.has(i) ? sel.delete(i) : sel.add(i); paint();
    }));
  };
  paint();
  const { close } = openSheet(body);
  body.querySelector('[data-act="cancel"]').addEventListener('click', close);
  addBtn.addEventListener('click', () => {
    let n = 0;
    candidates.forEach((c, i) => { if (sel.has(i)) { const { created } = store.addCard({ term: c.term, english: c.english, turkish: c.turkish, type: /\s/.test(c.term) ? 'phrase' : 'word', unitId: unit.id }); if (created) n++; } });
    close(); onSaved && onSaved(); toast(`Added ${n} to this unit.`, { ok: n > 0 });
  });
}

/* ---- detail + word form (manual) ---- */
function openDetail(id, unit, onChange) {
  const card = store.getCard(id); if (!card) return;
  const pron = [card.pos ? `<span class="pos">${escapeHtml(card.pos)}</span>` : '', card.respelling ? `<span class="say">${escapeHtml(card.respelling)}</span>` : ''].filter(Boolean).join(' · ');
  const body = elFrom(`<div class="detail">
    <div class="back-head" style="border:none;padding-bottom:6px"><span class="headword">${escapeHtml(card.term)}</span>
      <button class="speak sm" data-speak aria-label="Play">${ic.speakerSm}</button></div>
    ${pron ? `<div class="pron" style="margin-top:0">${pron}</div>` : ''}
    <div class="defs" style="margin-top:16px">
      ${card.english ? `<div class="defrow"><span class="lang en">EN</span><span class="meaning">${escapeHtml(card.english)}</span></div>` : ''}
      ${card.turkish ? `<div class="defrow"><span class="lang tr">TR</span><span class="meaning tr">${escapeHtml(card.turkish)}</span></div>` : ''}</div>
    ${card.example && card.example.en ? `<div class="example"><div class="eyebrow">Example</div><div class="ex-row"><p>${escapeHtml(card.example.en)}</p></div></div>` : ''}
    <div class="detail-actions"><button class="btn ghost" data-act="edit">Edit</button><button class="btn ghost danger" data-act="delete">Delete</button></div></div>`);
  const { close } = openSheet(body);
  body.querySelector('[data-speak]').addEventListener('click', e => speak(card.term, e.currentTarget));
  body.querySelector('[data-act="edit"]').addEventListener('click', () => { close(); openWordForm({ unit, card, onSaved: onChange }); });
  body.querySelector('[data-act="delete"]').addEventListener('click', async () => {
    if (await confirmLight(`Delete “${card.term}”?`, { okText: 'Delete', danger: true })) { store.deleteCard(card.id); close(); onChange && onChange(); toast('Deleted.'); }
  });
}

function openWordForm({ unit, card = null, onSaved }) {
  const c = card || { term: '', type: 'word', pos: '', respelling: '', english: '', turkish: '', example: null };
  const body = elFrom(`<div>
    <h2>${card ? 'Edit word' : `Add to ${escapeHtml(unit.titleEn)}`}</h2>
    <div class="field"><label for="u-term">Word or phrase</label><input id="u-term" value="${escapeHtml(c.term)}" placeholder="e.g. sovereign" autocapitalize="off"></div>
    ${card ? '' : '<button class="btn ghost" data-act="ai" style="margin-bottom:14px">' + ic.spark + ' Auto-fill with AI</button>'}
    <div class="field row2">
      <div><label for="u-type">Type</label><select id="u-type"><option value="word"${c.type !== 'phrase' ? ' selected' : ''}>word</option><option value="phrase"${c.type === 'phrase' ? ' selected' : ''}>phrase</option></select></div>
      <div><label for="u-pos">Part of speech</label><input id="u-pos" value="${escapeHtml(c.pos)}" placeholder="noun"></div></div>
    <div class="field"><label for="u-resp">Pronunciation</label><input id="u-resp" value="${escapeHtml(c.respelling)}" placeholder="SOV-rin" autocapitalize="off"></div>
    <div class="field"><label for="u-en">English meaning</label><input id="u-en" value="${escapeHtml(c.english)}" placeholder="simple meaning"></div>
    <div class="field"><label for="u-tr">Turkish meaning</label><input id="u-tr" value="${escapeHtml(c.turkish)}" placeholder="anlamı" lang="tr"></div>
    <div class="field"><label for="u-ex">Example (optional)</label><textarea id="u-ex" placeholder="optional">${escapeHtml(c.example && c.example.en ? c.example.en : '')}</textarea></div>
    <div class="sheet-actions"><button class="btn ghost" data-act="cancel">Cancel</button><button class="btn" data-act="save">${card ? 'Save' : 'Add'}</button></div></div>`);
  const { close } = openSheet(body);
  const val = id => body.querySelector(id).value.trim();
  const aiBtn = body.querySelector('[data-act="ai"]');
  if (aiBtn) aiBtn.addEventListener('click', async () => {
    const term = val('#u-term'); if (!term) return toast('Type a word first.');
    if (!(await ai.ensureKey())) return;
    const orig = aiBtn.innerHTML; aiBtn.innerHTML = '<span class="spinner"></span> Filling…'; aiBtn.disabled = true;
    try { const info = await ai.autofillCard(term);
      body.querySelector('#u-type').value = info.type; body.querySelector('#u-pos').value = info.pos;
      body.querySelector('#u-resp').value = info.respelling; body.querySelector('#u-en').value = info.english; body.querySelector('#u-tr').value = info.turkish;
      toast('Filled in.', { ok: true });
    } catch (e) { toast(e.kind === 'auth' ? 'Key rejected — check Settings.' : (e.message || 'AI error.')); }
    finally { aiBtn.innerHTML = orig; aiBtn.disabled = false; }
  });
  body.querySelector('[data-act="cancel"]').addEventListener('click', close);
  body.querySelector('[data-act="save"]').addEventListener('click', () => {
    const term = val('#u-term'); if (!term) return toast('A word is required.');
    const ex = val('#u-ex');
    const data = { term, type: body.querySelector('#u-type').value, pos: val('#u-pos'), respelling: val('#u-resp'),
      english: val('#u-en'), turkish: val('#u-tr'), example: ex ? { en: ex, source: 'manual' } : null, unitId: unit.id };
    if (card) { store.updateCard(card.id, data); toast('Saved.', { ok: true }); }
    else { const { created } = store.addCard(data); toast(created ? 'Added to unit.' : 'Already in your deck.', { ok: created }); }
    close(); onSaved && onSaved();
  });
}

/* ---- image helpers ---- */
function screenshotNoticeOnce() {
  if (store.getSetting('seenShotNotice')) return Promise.resolve(true);
  return new Promise(resolve => {
    const body = elFrom(`<div><h2>About photos</h2>
      <div class="sheet-sub">Your photo is sent to the AI to read it, then discarded. Nothing is stored — saved cards are plain text only.</div>
      <div class="sheet-actions"><button class="btn" data-ok>Got it</button></div></div>`);
    const { close } = openSheet(body, { onClose: () => resolve(false) });
    body.querySelector('[data-ok]').addEventListener('click', () => { store.setSetting('seenShotNotice', true); resolve(true); close(); });
  });
}

function downscaleImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const im = new Image();
    im.onload = () => {
      const max = 1568; let { width: w, height: h } = im;
      const scale = Math.min(1, max / Math.max(w, h)); w = Math.round(w * scale); h = Math.round(h * scale);
      const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
      cv.getContext('2d').drawImage(im, 0, 0, w, h); URL.revokeObjectURL(url);
      resolve({ base64: cv.toDataURL('image/jpeg', 0.85).split(',')[1], mediaType: 'image/jpeg' });
    };
    im.onerror = () => { URL.revokeObjectURL(url); reject(new Error('img')); };
    im.src = url;
  });
}
