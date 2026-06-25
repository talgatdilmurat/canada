// units.js — the Units grid: home of the Canada edition. An elegant contents page.
import { elFrom, escapeHtml, on } from '../util.js';
import * as store from '../store.js';
import { UNITS } from '../units.js';
import { ic } from '../icons.js';

export const units = {
  id: 'units',
  title: () => 'Discover Canada',
  mount(view, ctx) {
    ctx.setTitle('Discover Canada');
    ctx.setMeta(`<button class="iconbtn" data-gear aria-label="Settings">${ic.gear}</button>`);
    const gear = document.querySelector('#screen-meta [data-gear]');
    if (gear) gear.addEventListener('click', () => ctx.navigate('settings'));

    view.innerHTML = '';
    view.appendChild(elFrom(`<div class="units-sub">Citizenship study · ${UNITS.length} units</div>`));
    const grid = elFrom('<div class="ugrid"></div>');
    grid.innerHTML = UNITS.map(u => {
      const s = store.unitStats(u.id);
      const hint = s.total ? `${s.total} word${s.total === 1 ? '' : 's'} · ${s.learned} learned` : 'No words yet';
      return `<button class="ucard" data-unit="${u.id}">
        <div class="un">${u.id}</div>
        <div class="ut">${escapeHtml(u.titleEn)}</div>
        <div class="uh">${hint}</div>
      </button>`;
    }).join('');
    view.appendChild(grid);
    on(grid, 'click', '.ucard', (e, el) => ctx.navigate('unit', el.dataset.unit));
  },
};
