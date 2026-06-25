// welcome.js — an elegant per-open greeting for Zahra (EN + TR). Canada edition only.
import { elFrom } from './util.js';

const NAME = 'Zahra';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return { en: 'Good morning', tr: 'Günaydın' };
  if (h < 17) return { en: 'Good afternoon', tr: 'İyi günler' };
  if (h < 22) return { en: 'Good evening', tr: 'İyi akşamlar' };
  return { en: 'Good night', tr: 'İyi geceler' };
}

const LINES = [
  { en: 'A few words today is enough.', tr: 'Bugün birkaç kelime yeter.' },
  { en: 'No rush — you’re doing well.', tr: 'Acele yok, çok iyi gidiyorsun.' },
  { en: 'Small steps, long roads.', tr: 'Küçük adımlarla uzun yollar aşılır.' },
  { en: 'Every word is a small key.', tr: 'Her kelime küçük bir anahtardır.' },
  { en: 'Begin gently.', tr: 'Usulca başla.' },
  { en: 'A calm mind learns best.', tr: 'Sakin bir zihin en iyi öğrenir.' },
  { en: 'Five minutes is already a win.', tr: 'Beş dakika bile bir zafer.' },
  { en: 'Today, a little wiser.', tr: 'Bugün, biraz daha bilge.' },
  { en: 'Be kind to yourself today.', tr: 'Bugün kendine nazik ol.' },
  { en: 'Steady wins. Keep going.', tr: 'İstikrar kazanır. Devam et.' },
  { en: 'You are closer than yesterday.', tr: 'Dünden daha yakınsın.' },
];

const MAPLE = '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8c0-10 9.6-13.4 18.3-12.5 10.1 2.5 105.3 22.6 105.3 22.6s-5-20.1-10.1-35.1c-4.9-15 0-17.5 5.1-22.5z"/></svg>';

export function showWelcome() {
  const g = greeting();
  const line = LINES[Math.floor(Math.random() * LINES.length)];
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const overlay = elFrom(`
    <div class="welcome" role="status" aria-label="${g.en}, ${NAME}">
      <div class="welcome-inner">
        <div class="welcome-maple">${MAPLE}</div>
        <div class="welcome-greet">${g.en}, ${NAME}</div>
        <div class="welcome-rule"></div>
        <div class="welcome-line">${line.en}<span class="tr">${line.tr}</span></div>
        <button class="welcome-enter" aria-label="Enter">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>`);
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('show'));
  let done = false;
  const dismiss = () => {
    if (done) return; done = true;
    clearTimeout(timer);
    overlay.classList.add('out');
    setTimeout(() => overlay.remove(), 650);
  };
  // Tap to enter (button is the clear affordance); tapping anywhere also works.
  // Auto-dismiss is a gentle fallback only, so the greeting no longer vanishes too quickly.
  const timer = setTimeout(dismiss, reduce ? 4000 : 7000);
  overlay.querySelector('.welcome-enter').addEventListener('click', e => { e.stopPropagation(); dismiss(); });
  overlay.addEventListener('click', dismiss);
}
