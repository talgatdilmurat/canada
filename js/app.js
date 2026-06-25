// app.js — router + the locked floating glass nav (now 5 tabs, Units = home).
import { units } from './screens/units.js';
import { study } from './screens/study.js';
import { hazine } from './screens/hazine.js';
import { quiz } from './screens/quiz.js';
import { decode } from './screens/decode.js';
import { unitDetail } from './screens/unit.js';
import { settings } from './screens/settings.js';
import { tabIcons } from './icons.js';
import { showWelcome } from './welcome.js';

const TABS = { units, study, hazine, quiz, decode };
const ORDER = ['units', 'study', 'hazine', 'quiz', 'decode'];
const LABEL = { units: 'Units', study: 'Study', hazine: 'Hazine', quiz: 'Quiz', decode: 'Decode' };
const ROUTES = { ...TABS, unit: unitDetail, settings };

const view = document.getElementById('view');
const titleEl = document.getElementById('screen-title');
const metaEl = document.getElementById('screen-meta');
const backEl = document.getElementById('screen-back');
const nav = document.getElementById('nav');

nav.innerHTML = ORDER.map(r =>
  `<button class="ptab" data-route="${r}" aria-label="${LABEL[r]}">${tabIcons[r]}<span class="lbl">${LABEL[r]}</span></button>`
).join('');
nav.querySelectorAll('.ptab').forEach(btn => btn.addEventListener('click', () => go(btn.dataset.route)));

let backHandler = null;
function setBack(fn) { backHandler = fn || null; backEl.hidden = !fn; }
backEl.addEventListener('click', () => { if (backHandler) backHandler(); });

const ctx = {
  navigate: (route, param) => go(route, param),
  setTitle: t => { titleEl.textContent = t; },
  setMeta: html => { metaEl.innerHTML = html || ''; },
  setBack,
};

function parseHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '');
  const [r, p] = raw.split('/');
  return { route: ROUTES[r] ? r : 'units', param: p };
}

function renderRoute() {
  const { route, param } = parseHash();
  const screen = ROUTES[route];
  const activeTab = TABS[route] ? route : (route === 'unit' ? 'units' : null);
  nav.querySelectorAll('.ptab').forEach(b => b.classList.toggle('active', b.dataset.route === activeTab));
  setBack(null);
  metaEl.innerHTML = '';
  titleEl.textContent = screen.title ? screen.title() : '';
  view.scrollTop = 0;
  view.innerHTML = '';
  ctx.param = param;
  try { screen.mount(view, ctx, param); }
  catch (e) { console.error(e); view.innerHTML = '<div class="center-state"><p>Something went wrong on this screen.</p></div>'; }
}

function go(route, param) {
  const target = ROUTES[route] ? route : 'units';
  const hash = '#' + target + (param != null ? '/' + param : '');
  if (location.hash === hash) renderRoute();
  else location.hash = hash;
}

window.addEventListener('hashchange', renderRoute);
renderRoute();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

showWelcome();
