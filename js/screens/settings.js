// settings.js — the gear screen: API key, daily target, backup, about.
import { elFrom, toast } from '../util.js';
import * as store from '../store.js';
import * as ai from '../ai.js';

export const settings = {
  id: 'settings',
  mount(view, ctx) {
    ctx.setTitle('Settings');
    ctx.setBack(() => (history.length > 1 ? history.back() : ctx.navigate('units')));
    const render = () => {
      const hasKey = store.hasApiKey();
      const target = store.getSetting('dailyTarget', 10);
      view.innerHTML = '';
      view.appendChild(elFrom(`
        <div class="settings">
          <div class="set-group">
            <button class="set-row" data-act="key">
              <div><div class="set-label">Anthropic API key</div><div class="set-sub">${hasKey ? 'Saved on this device' : 'Not set — needed for AI features'}</div></div>
              <span class="set-val">${hasKey ? 'Change' : 'Add'}</span>
            </button>
            <div class="set-row">
              <div><div class="set-label">Daily review target</div><div class="set-sub">A gentle goal</div></div>
              <select class="set-select" data-act="target">${[5, 10, 15, 20, 30].map(n => `<option value="${n}"${n == target ? ' selected' : ''}>${n} cards</option>`).join('')}</select>
            </div>
          </div>
          <div class="set-group">
            <button class="set-row" data-act="export"><div class="set-label">Export backup</div><span class="set-val">JSON</span></button>
            <button class="set-row" data-act="import"><div class="set-label">Import backup</div><span class="set-val">Restore</span></button>
          </div>
          <div class="set-about">Lexikon — Canada edition · v1<br>Your key and words stay on this device.</div>
        </div>`));
      view.querySelector('[data-act="key"]').addEventListener('click', async () => { await ai.promptForKey(); render(); });
      view.querySelector('[data-act="target"]').addEventListener('change', e => { store.setSetting('dailyTarget', Number(e.target.value)); toast('Saved.', { ok: true }); });
      view.querySelector('[data-act="export"]').addEventListener('click', () => { if (store.getCards().length === 0) return toast('Nothing to export yet.'); store.exportDeck(); toast('Backup downloaded.', { ok: true }); });
      view.querySelector('[data-act="import"]').addEventListener('click', () => importFlow(render));
    };
    render();
  },
};

function importFlow(done) {
  const input = elFrom('<input type="file" accept="application/json,.json" style="display:none">');
  document.body.appendChild(input);
  input.addEventListener('change', () => {
    const f = input.files[0]; input.remove(); if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { const { added, skipped } = store.importDeck(r.result); toast(`Imported ${added} new${skipped ? `, skipped ${skipped}` : ''}.`, { ok: true }); done && done(); } catch (e) { toast(e.message || 'Import failed.'); } };
    r.readAsText(f);
  });
  input.click();
}
