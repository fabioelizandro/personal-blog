(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // A short message at the bottom of the screen.
  const whisperEl = document.querySelector('.whisper');
  let whisperTimer;
  const whisper = (text) => {
    if (!whisperEl) return;
    whisperEl.textContent = text;
    whisperEl.classList.add('is-shown');
    clearTimeout(whisperTimer);
    whisperTimer = setTimeout(() => whisperEl.classList.remove('is-shown'), 3200);
  };

  // Section list: mark the section being read.
  const rail = document.querySelector('.toc-rail');
  const heads = [...document.querySelectorAll('.prose h2[id]')];
  if (rail && heads.length) {
    const links = new Map();
    rail.querySelectorAll('a[href^="#"]').forEach((a) => links.set(decodeURIComponent(a.hash.slice(1)), a));
    let current = null;
    let queued = false;
    const pick = () => {
      queued = false;
      const line = innerHeight * 0.3;
      let active = null;
      for (const h of heads) {
        if (h.getBoundingClientRect().top <= line) active = h;
        else break;
      }
      const link = active ? links.get(active.id) : null;
      if (link === current) return;
      if (current) current.removeAttribute('aria-current');
      if (link) link.setAttribute('aria-current', 'location');
      current = link;
    };
    addEventListener('scroll', () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(pick);
    }, { passive: true });
    pick();
  }

  // The collapsed section list closes once a section is chosen.
  const inlineToc = document.querySelector('.toc-inline');
  if (inlineToc) {
    inlineToc.addEventListener('click', (e) => {
      if (e.target.closest('a')) inlineToc.open = false;
    });
  }

  // Code blocks: name the language and offer a copy button.
  const LANGS = { go: 'Go', html: 'HTML', bash: 'Shell', sh: 'Shell', shell: 'Shell', json: 'JSON', yaml: 'YAML', toml: 'TOML', js: 'JavaScript', javascript: 'JavaScript', ts: 'TypeScript', sql: 'SQL', ruby: 'Ruby', text: 'Text' };
  document.querySelectorAll('.prose pre').forEach((pre) => {
    const code = pre.querySelector('code');
    if (!code) return;
    const box = pre.closest('.highlight') || pre;
    const wrap = document.createElement('div');
    wrap.className = 'code';
    box.replaceWith(wrap);

    const head = document.createElement('div');
    head.className = 'code-head';
    const lang = document.createElement('span');
    const id = (code.dataset.lang || '').toLowerCase();
    lang.textContent = LANGS[id] || (id && id !== 'fallback' ? id : 'Code');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy';
    button.textContent = 'Copy';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Selected';
      }
      setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    });
    head.append(lang, button);
    wrap.append(head, box);
  });

  // Type "zen": everything but the sheet steps back. Esc brings it back.
  const setZen = (on) => {
    root.classList.toggle('zen', on);
    // Nothing from the full stop's invitation carries over into zen.
    root.classList.remove('can-grab');
    document.querySelectorAll('.is-near').forEach((el) => el.classList.remove('is-near'));
    whisper(on ? 'Zen. Press Esc to come back.' : 'Welcome back.');
  };
  let typed = '';
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('zen')) {
      setZen(false);
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    const t = e.target;
    if (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    typed = (typed + e.key.toLowerCase()).slice(-3);
    if (typed === 'zen') {
      typed = '';
      setZen(!root.classList.contains('zen'));
    }
  });

  // Set by the hills below, so the game can make them answer.
  let raiseSwell = null;

  // The hills at the top of the ground are drawn by the page itself and are
  // still when it loads. They slide past one another as the top of the page
  // scrolls away, and a click on them raises a swell that parts and travels
  // outwards, the nearest hills first.
  const hills = [...document.querySelectorAll('.motif path')].map((path, i, all) => {
    const n = (key) => Number(path.dataset[key]);
    return { path, base: n('base'), amp: n('amp'), l1: n('l1'), l2: n('l2'), p: n('p'), swell: n('swell'), slide: n('slide'), sink: n('sink'), delay: (all.length - 1 - i) * 0.09 };
  });
  if (hills.length && !reduceMotion.matches) {
    const GROUND = 'html, body, .page, .site-header, .site-footer';
    const H = 440;
    const W = 2880;
    const SWELL_S = 2.2;
    let swells = [];
    let frame = 0;
    let scrolled = 0;

    const draw = (now) => {
      frame = 0;
      swells = swells.filter((s) => (now - s.at) / 1000 < SWELL_S + 0.4);
      for (const hill of hills) {
        const slide = scrolled * hill.slide;
        const sink = scrolled * hill.sink;
        // Each swell rises quickly, splits in two and fades as the halves travel apart.
        const live = [];
        for (const s of swells) {
          const t = (now - s.at) / 1000 - hill.delay;
          if (t <= 0 || t >= SWELL_S) continue;
          const fade = 1 - t / SWELL_S;
          live.push({ x: s.x, reach: 300 * t, height: hill.swell * 0.75 * Math.min(1, t / 0.22) * fade * fade });
        }
        let d = 'M0 ' + H;
        for (let x = 0; x <= W; x += 16) {
          const u = x + slide;
          let y = hill.base - hill.amp * (0.6 * Math.sin(u / hill.l1 + hill.p) + 0.4 * Math.sin(u / hill.l2 + hill.p * 3.1)) + sink;
          for (const s of live) {
            const a = (x - s.x - s.reach) / 130;
            const b = (x - s.x + s.reach) / 130;
            y -= s.height * (Math.exp(-a * a) + Math.exp(-b * b));
          }
          d += 'L' + x + ' ' + y.toFixed(1);
        }
        hill.path.setAttribute('d', d + 'L' + W + ' ' + H + 'Z');
      }
      if (swells.length) frame = requestAnimationFrame(draw);
    };
    const wake = () => { if (!frame) frame = requestAnimationFrame(draw); };

    const onScroll = () => {
      const next = Math.min(scrollY, H);
      if (next === scrolled) return;
      scrolled = next;
      wake();
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    raiseSwell = (clientX) => {
      swells.push({ x: clientX - document.documentElement.clientWidth / 2 + W / 2, at: performance.now() });
      if (swells.length > 3) swells.shift();
      wake();
    };
    addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !(e.target instanceof Element) || !e.target.matches(GROUND)) return;
      if (e.clientY + scrollY >= H || root.classList.contains('zen')) return;
      raiseSwell(e.clientX);
    });
  }

  // The full stop is loose. Come near and it bobs; pick it up and throw it.
  // While it is out the pointer carries a bar, the whole window is the field,
  // and every kick off the bar is counted where the stop used to sit. The
  // bottom of the window is the only way to miss: when the stop lands there
  // the match is over and it flies home, ready to be picked up again. Steer
  // it back into its place in the monogram and the run is banked. A click,
  // Escape or scrolling ends it too.
  //
  // With a mouse or trackpad the loose stop is the monogram's. On a touch
  // screen it is the one that closes a post, so the home link stays a link:
  // tap it to send it up, and tap it again to keep it there.
  const fine = matchMedia('(pointer: fine)').matches;
  const stop = document.querySelector(fine ? '.brand .mark-dot' : '.post-end .mark-dot');
  if (stop && !reduceMotion.matches) {
    const brand = stop.closest('.brand, .post-end');
    const SIZE = 7;
    const GRAVITY = 1050;
    const WALL = 0.62;
    // Off the bar the stop always leaves at the same speed, a little more if
    // the bar is on its way up. That regular bounce is what makes it playable.
    const KICK = 700;
    const KICK_LIFT = 180;
    // It never leaves straight up. Where it lands on the bar sets which way it
    // goes and how fast, and even a dead-centre hit drifts sideways.
    const DRIFT = 300;
    const DRIFT_LEAST = 110;
    // Half the bar's width. It starts wide and loses a little with every
    // kick, and the pace quickens too, so a run gets harder the longer it lasts.
    const BAR_WIDE = 56;
    const BAR_NARROW = 13;
    const BAR_SHRINK = 0.94;
    const BAR_THICK = 5;
    const QUICKEN = 0.012;
    const QUICKEST = 1.45;
    const STOP_TONE = getComputedStyle(stop).fill || '#8F85C2';
    const count = brand.querySelector('.mark-count');
    const mouse = { x: -99, y: -99, vx: 0, vy: 0, at: 0, out: false };
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    let layer = null;
    let paint = null;
    let ball = null;
    let tick = 0;
    let before = 0;
    let streak = 0;
    let bar = BAR_WIDE;
    let barWas = 0;
    let pace = 1;
    let lastKick = 0;
    let ring = null;
    let swallowClick = false;
    let swallowTimer = 0;
    let best = 0;
    try { best = Number(localStorage.getItem('fe-best')) || 0; } catch { best = 0; }

    const home = () => {
      const box = stop.getBoundingClientRect();
      return { x: box.left + box.width / 2, y: box.top + box.height / 2, r: box.width / 2 };
    };
    const reach = (x, y, r) => Math.hypot(mouse.x - x, mouse.y - y) < r;
    // The count is set in the monogram itself, where the full stop was.
    const show = (text, lift) => {
      if (!count) return;
      count.textContent = text;
      if (lift && count.animate) count.animate([{ transform: 'translateY(-3px)' }, { transform: 'translateY(0)' }], { duration: 220, easing: 'ease-out' });
    };
    const swallow = () => { clearTimeout(swallowTimer); swallowClick = true; };

    const fitLayer = () => {
      const ratio = Math.min(devicePixelRatio || 1, 2);
      layer.width = Math.round(innerWidth * ratio);
      layer.height = Math.round(innerHeight * ratio);
      paint.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint.lineCap = 'round';
    };

    // A run is over. Only a good one, or a new best, is worth a note.
    const endRun = (banked) => {
      const run = streak;
      streak = 0;
      pace = 1;
      show('0');
      if (!run) return;
      const record = run > best;
      if (record) {
        best = run;
        try { localStorage.setItem('fe-best', String(best)); } catch { /* private mode */ }
      }
      if (banked) whisper(run + ', and home.' + (record ? ' A new best.' : ''));
      else if ((record && run >= 3) || run >= 5) whisper(run + ' in a row.' + (record ? ' A new best.' : ' Best ' + best + '.'));
    };

    const settle = () => {
      cancelAnimationFrame(tick);
      tick = 0;
      ball = null;
      ring = null;
      show('');
      brand.classList.remove('is-loose');
      root.classList.remove('grabbing', 'playing');
      if (paint) paint.clearRect(0, 0, innerWidth, innerHeight);
    };
    const goHome = (now) => {
      if (!ball || ball.going || ball.held) return;
      endRun(false);
      show('');
      ball.going = { x: ball.x, y: ball.y, r: ball.r, at: now, ms: 760 };
    };

    const kick = (now, dx, lift, carry) => {
      const edge = clamp(dx / bar, -1, 1);
      // Never so hard that the top of the bounce leaves the window.
      ball.vy = -Math.min(KICK + KICK_LIFT * lift, Math.sqrt(2 * GRAVITY * Math.max(40, ball.y - 14))) * pace;
      // Off to one side, always: towards the end of the bar it landed nearer,
      // or, dead centre, the way it was already going.
      const side = Math.abs(edge) > 0.05 ? Math.sign(edge) : (Math.sign(ball.vx) || (Math.random() < 0.5 ? -1 : 1));
      ball.vx = side * Math.max(DRIFT_LEAST, Math.abs(edge) * DRIFT) * pace + carry;
      if (Math.abs(ball.vx) < DRIFT_LEAST * 0.75) ball.vx = side * DRIFT_LEAST * 0.75;
      if (now - lastKick < 140) return;
      // A bar that has not moved since the last kick keeps the ball up but does not score.
      if (!fine || mouse.at > Math.max(lastKick, ball.freeAt)) {
        streak += 1;
        pace = Math.min(QUICKEST, 1 + streak * QUICKEN);
        show(String(streak), true);
      }
      lastKick = now;
      ring = { x: ball.x, y: ball.y + ball.r, at: now };
    };

    const step = (now) => {
      const dt = Math.min(0.024, before ? (now - before) / 1000 : 0.016);
      before = now;
      const moving = now - mouse.at < 70;
      if (root.classList.contains('zen')) { endRun(false); settle(); return; }
      if (ball.going) {
        const from = ball.going;
        const to = home();
        const p = Math.min(1, (now - from.at) / from.ms);
        const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        const a = 1 - e;
        const mx = (from.x + to.x) / 2;
        const my = Math.min(from.y, to.y) - 80;
        ball.x = a * a * from.x + 2 * a * e * mx + e * e * to.x;
        ball.y = a * a * from.y + 2 * a * e * my + e * e * to.y;
        ball.r = from.r + (to.r - from.r) * e;
        if (p >= 1) { settle(); return; }
      } else if (ball.held) {
        // In the hand: it follows the pointer and takes its speed.
        ball.r += (SIZE - ball.r) * 0.2;
        ball.x += (mouse.x - ball.x) * 0.45;
        ball.y += (mouse.y - ball.y) * 0.45;
        ball.vx = moving ? mouse.vx : 0;
        ball.vy = moving ? mouse.vy : 0;
      } else if (ball.down) {
        // Missed: it lies where it landed for a beat, then flies home.
        if (now >= ball.down) goHome(now);
      } else {
        ball.r += (SIZE - ball.r) * 0.16;
        // A quicker pace is the same bounce played faster: more gravity, same height.
        ball.vy += GRAVITY * pace * pace * dt;
        for (let i = 0; i < 3 && !ball.down; i++) {
          ball.x += (ball.vx * dt) / 3;
          ball.y += (ball.vy * dt) / 3;
          if (ball.x < ball.r) { ball.x = ball.r; ball.vx = Math.abs(ball.vx) * WALL; }
          if (ball.x > innerWidth - ball.r) { ball.x = innerWidth - ball.r; ball.vx = -Math.abs(ball.vx) * WALL; }
          if (ball.y < ball.r) {
            // The top of the window, which is where the hills are: they feel it.
            ball.y = ball.r;
            ball.vy = Math.abs(ball.vy) * 0.4;
            if (raiseSwell && scrollY < 200) raiseSwell(ball.x);
          }
          // The bar. It leaves a freshly thrown ball alone for a moment, and
          // its kicking edge is a little wider than it is drawn.
          if (fine && now - ball.freeAt > 250) {
            const dx = ball.x - mouse.x;
            const barVy = moving ? mouse.vy : 0;
            const within = Math.abs(dx) < bar + 7;
            const touching = ball.y + ball.r >= mouse.y - BAR_THICK && ball.y <= mouse.y + 4;
            const swept = barWas - BAR_THICK > ball.y && mouse.y <= ball.y;
            if (within && ball.vy - barVy > 0 && (touching || swept)) {
              ball.y = mouse.y - BAR_THICK - ball.r;
              kick(now, dx, clamp(-barVy / 900, 0, 1), clamp(moving ? mouse.vx : 0, -400, 400) * 0.1);
            }
          }
          if (ball.y > innerHeight - ball.r) {
            ball.y = innerHeight - ball.r;
            ball.vx = 0;
            ball.vy = 0;
            ball.down = now + 350;
            endRun(false);
          }
        }
        barWas = mouse.y;
        if (fine && !ball.down) {
          // Steered back into its own place in the monogram, the run is banked.
          const at = home();
          if (streak > 0 && now - ball.freeAt > 900 && Math.hypot(ball.x - at.x, ball.y - at.y) < 15) {
            endRun(true);
            settle();
            return;
          }
          if (now - mouse.at > 4000) goHome(now);
        }
      }

      paint.clearRect(0, 0, innerWidth, innerHeight);
      // The stop, flattened for an instant by a kick.
      const squash = ball.going || ball.held ? 0 : Math.max(0, 1 - (now - lastKick) / 120) * 0.3;
      paint.fillStyle = STOP_TONE;
      paint.beginPath();
      paint.ellipse(ball.x, ball.y, ball.r * (1 + squash), ball.r * (1 - squash), 0, 0, Math.PI * 2);
      paint.fill();
      if (ring) {
        const age = (now - ring.at) / 220;
        if (age >= 1) ring = null;
        else {
          paint.globalAlpha = 0.3 * (1 - age);
          paint.strokeStyle = STOP_TONE;
          paint.lineWidth = 1.5;
          paint.beginPath();
          paint.arc(ring.x, ring.y, 7 + 11 * age, 0, Math.PI * 2);
          paint.stroke();
          paint.globalAlpha = 1;
        }
      }
      // The bar under the pointer, in the stop's own lavender. It eases to its
      // new width after each kick and dips for a moment when it kicks.
      const wide = Math.max(BAR_NARROW, BAR_WIDE * Math.pow(BAR_SHRINK, streak));
      bar += (wide - bar) * 0.18;
      if (fine && !ball.held && !mouse.out) {
        const give = Math.max(0, 1 - (now - lastKick) / 160);
        paint.strokeStyle = STOP_TONE;
        paint.lineWidth = BAR_THICK * 2;
        paint.beginPath();
        paint.moveTo(mouse.x - bar + BAR_THICK, mouse.y + give * give * 5);
        paint.lineTo(mouse.x + bar - BAR_THICK, mouse.y + give * give * 5);
        paint.stroke();
      }
      tick = requestAnimationFrame(step);
    };

    const pickUp = () => {
      if (!layer) {
        layer = document.createElement('canvas');
        layer.className = 'play';
        layer.setAttribute('aria-hidden', 'true');
        document.body.append(layer);
        paint = layer.getContext('2d');
        const hint = document.createElement('p');
        hint.className = 'play-hint';
        hint.setAttribute('aria-hidden', 'true');
        hint.textContent = fine ? 'Click or Esc to stop' : 'Scroll to stop';
        document.body.append(hint);
      }
      fitLayer();
      const from = home();
      ball = { x: from.x, y: from.y, r: from.r, vx: 0, vy: 0, held: true, down: 0, going: null, freeAt: 0 };
      streak = 0;
      pace = 1;
      bar = BAR_WIDE;
      barWas = mouse.y;
      show('0');
      brand.classList.add('is-loose');
      brand.classList.remove('is-near');
      root.classList.add('grabbing', 'playing');
      root.classList.remove('can-grab');
      before = 0;
      tick = requestAnimationFrame(step);
    };

    const letGo = () => {
      if (!ball || !ball.held) return;
      ball.held = false;
      ball.freeAt = performance.now();
      // However it is let go, it leaves the hand upwards, so there is always
      // time to get the bar under it for a first bounce.
      ball.vx = clamp(ball.vx, -520, 520);
      ball.vy = Math.min(clamp(ball.vy, -1000, 1000), -560);
      root.classList.remove('grabbing');
    };

    // Ending the game from wherever it is.
    const quit = () => {
      if (!ball) return;
      letGo();
      goHome(performance.now());
    };
    // A press on the stop that has not yet turned into a drag.
    let pending = null;

    if (fine) {
      addEventListener('pointermove', (e) => {
        const now = performance.now();
        const dt = Math.max(1, now - mouse.at) / 1000;
        if (now - mouse.at < 120) {
          mouse.vx = mouse.vx * 0.5 + ((e.clientX - mouse.x) / dt) * 0.5;
          mouse.vy = mouse.vy * 0.5 + ((e.clientY - mouse.y) / dt) * 0.5;
        } else {
          mouse.vx = 0;
          mouse.vy = 0;
        }
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.at = now;
        mouse.out = false;
        if (ball || root.classList.contains('zen')) return;
        if (pending) {
          // Only a drag picks the stop up; a plain click stays a click on the home link.
          if (Math.hypot(e.clientX - pending.x, e.clientY - pending.y) > 4) {
            pending = null;
            swallow();
            pickUp();
          }
          return;
        }
        // The invitation: near the monogram the full stop bobs a couple of times.
        const at = home();
        brand.classList.toggle('is-near', reach(at.x, at.y, 56));
        root.classList.toggle('can-grab', reach(at.x, at.y, at.r + 9));
      }, { passive: true });

      addEventListener('pointerdown', (e) => {
        if (e.button !== 0 || e.ctrlKey || root.classList.contains('zen')) return;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (ball) {
          // Any press while the stop is out ends the game, and goes no further:
          // the cursor is hidden, so nothing under it should be activated.
          if (!ball.held) {
            e.preventDefault();
            swallow();
            quit();
          }
          return;
        }
        const at = home();
        if (reach(at.x, at.y, at.r + 9)) pending = { x: e.clientX, y: e.clientY };
      });
      const release = () => { pending = null; letGo(); };
      addEventListener('pointerup', release);
      addEventListener('pointercancel', release);
      addEventListener('contextmenu', () => { pending = null; quit(); });
      // Dragging the stop must not start dragging the link it sits in.
      brand.addEventListener('dragstart', (e) => e.preventDefault());
      // When the pointer leaves the window the bar goes with it.
      document.documentElement.addEventListener('pointerleave', () => {
        mouse.out = true;
        pending = null;
        brand.classList.remove('is-near');
        root.classList.remove('can-grab');
        letGo();
      });
    } else {
      // Touch. The stop is launched by a tap, not by a touch that turns into a
      // scroll; once it is up, each touch on it keeps it there.
      addEventListener('click', (e) => {
        if (ball || root.classList.contains('zen')) return;
        const now = performance.now();
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.at = now;
        const at = home();
        if (!reach(at.x, at.y, 28)) return;
        e.preventDefault();
        pickUp();
        ball.held = false;
        ball.freeAt = now;
        ball.vx = e.clientX < at.x ? 140 : -140;
        ball.vy = -760;
        root.classList.remove('grabbing');
      });
      addEventListener('pointerdown', (e) => {
        if (!ball || root.classList.contains('zen')) return;
        const now = performance.now();
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.at = now;
        if (!reach(ball.x, ball.y, 52)) return;
        // A touch on the stop never reaches a link underneath, whatever the stop is doing.
        swallow();
        if (ball.going || ball.down) return;
        const dx = clamp((ball.x - e.clientX) * 9, -360, 360);
        kick(now, 0, 0, 0);
        ball.vx = dx;
      });
    }

    // A press that kicks the full stop or ends the game must not also activate
    // whatever lies under it. The click that follows is swallowed; if the
    // browser sends none, the flag clears itself shortly after the press ends.
    const unswallow = () => {
      clearTimeout(swallowTimer);
      swallowTimer = setTimeout(() => { swallowClick = false; }, 400);
    };
    const forget = () => {
      clearTimeout(swallowTimer);
      swallowClick = false;
      pending = null;
    };
    addEventListener('pointerup', unswallow);
    addEventListener('pointercancel', unswallow);
    addEventListener('click', (e) => {
      if (!swallowClick) return;
      swallowClick = false;
      e.preventDefault();
      e.stopPropagation();
    }, true);
    addEventListener('scroll', () => goHome(performance.now()), { passive: true });
    addEventListener('resize', () => { if (ball) fitLayer(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') quit(); });
    // If the page is put away mid-game, the game is over and nothing is left armed.
    addEventListener('blur', () => { forget(); quit(); });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) return;
      forget();
      if (ball) { endRun(false); settle(); }
    });
  }

  // For whoever opens the console.
  console.log(
    "%cHey! I'm Fabio.",
    'font: 600 16px Georgia, serif; color: #473B8F',
    '\nSince you are looking under the hood: pick up the full stop in the monogram and throw it, keep it up with the bar, and try steering it back into its place. Also: click the hills, and type "zen".'
  );
})();
