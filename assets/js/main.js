/* ============================================================
   NOVA ARENA · 交互层（原生 JS，零依赖）
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const N = window.NOVA;
  const ICONS = {
    arrowR: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    chevL: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3 5 8l5 5"/></svg>',
    chevR: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3l5 5-5 5"/></svg>',
    plus: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 3v10M3 8h10"/></svg>',
    close: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 2l10 10M12 2 2 12"/></svg>',
    warn: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 2 1.5 13.5h13L8 2Z"/><path d="M8 7v3M8 11.8v.2"/></svg>',
    chat: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1.5 1.5H8l-3.5 3v-3h-1A1.5 1.5 0 0 1 2 9.5v-6Z"/></svg>',
  };

  /* ---------- 导航激活态 / 抽屉 / 年份 ---------- */
  function initNav() {
    const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    $$('.nav__links a, .drawer a').forEach(a => {
      const href = (a.getAttribute('href') || '').replace('.html', '').replace('#', '');
      if (href === page) a.classList.add('is-active');
      if (page === 'index' && a.getAttribute('href') === 'index.html') a.classList.add('is-active');
    });
    const burger = $('.nav__burger'), drawer = $('.drawer');
    if (burger && drawer) {
      burger.addEventListener('click', () => {
        const open = drawer.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', open);
      });
    }
    const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
    const v = $('#nav-version'); if (v && N.VERSION) v.textContent = N.VERSION.code;
  }

  /* ---------- 轮播 ---------- */
  function initCarousel() {
    const root = $('[data-carousel]'); if (!root) return;
    const slides = $$('.slide', root);
    const dotsWrap = $('.carousel__dots', root);
    let cur = 0, timer = null;
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `切换到第 ${i + 1} 张`);
      b.addEventListener('click', () => go(i, true));
      dotsWrap.appendChild(b);
    });
    const dots = $$('button', dotsWrap);
    function go(i, manual) {
      cur = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('is-on', k === cur));
      dots.forEach((d, k) => {
        d.classList.toggle('is-on', k === cur);
        d.setAttribute('aria-current', k === cur ? 'true' : 'false');
      });
      if (manual) restart();
    }
    function restart() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000); }
    $('.carousel__arrow--prev', root).addEventListener('click', () => go(cur - 1, true));
    $('.carousel__arrow--next', root).addEventListener('click', () => go(cur + 1, true));
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', restart);
    let sx = 0;
    root.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 48) go(cur + (dx < 0 ? 1 : -1), true);
    }, { passive: true });
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') go(cur - 1, true);
      if (e.key === 'ArrowRight') go(cur + 1, true);
    });
    go(0); restart();
  }

  /* ---------- 模态 ---------- */
  let lastFocus = null;
  function openModal(html) {
    let modal = $('#modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal'; modal.className = 'modal'; modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.innerHTML = '<div class="modal__mask" data-close></div><div class="modal__panel"><button class="modal__close" data-close aria-label="关闭">' + ICONS.close + '</button><div class="modal__slot"></div></div>';
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    }
    $('.modal__slot', modal).innerHTML = html;
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    $('.modal__close', modal).focus();
  }
  function closeModal() {
    const modal = $('#modal'); if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
    if (location.hash.startsWith('#n-') || location.hash.startsWith('#hero-')) history.replaceState(null, '', location.pathname);
  }

  /* ---------- 新闻渲染 ---------- */
  const CAT_CLASS = { '版本': 'badge--gold', '赛事': 'badge--sky', '活动': 'badge--green', '公告': 'badge--neutral' };
  function newsCard(n) {
    return `<article class="news-card" data-news="${n.id}">
      <div class="news-card__media"><img src="${n.img}" alt="${n.title} 配图" loading="lazy"><span class="badge ${CAT_CLASS[n.cat]}">${n.cat}</span></div>
      <div class="news-card__body">
        <h3 class="news-card__title">${n.title}</h3>
        <p class="news-card__excerpt">${n.excerpt}</p>
        <div class="news-card__foot"><span class="meta-mono">${n.date}</span><span class="link-more">阅读 ${ICONS.arrowR}</span></div>
      </div></article>`;
  }
  function openNewsModal(id) {
    const n = N.NEWS.find(x => x.id === id); if (!n) return;
    openModal(`<div class="news-modal__body">
      <div class="news-modal__meta"><span class="badge ${CAT_CLASS[n.cat]}">${n.cat}</span><span class="meta-mono">${n.date} · ${N.VERSION.code}</span></div>
      <h2 class="h2">${n.title}</h2>
      <div class="news-modal__banner"><img src="${n.img}" alt="${n.title} 配图"></div>
      <div class="news-modal__content">${n.body}</div>
      <p class="meta-mono" style="margin-top:24px">NOVA ARENA 运营团队 · 本站为设计演示，内容均为虚构</p>
    </div>`);
  }
  function bindNewsClicks(scope) {
    $$('[data-news]', scope).forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => openNewsModal(el.dataset.news));
    });
  }

  function initHome() {
    const feat = $('[data-news-featured]'), grid = $('[data-news-grid]');
    if (!feat || !grid) return;
    const sorted = [...N.NEWS].sort((a, b) => b.date.localeCompare(a.date));
    const f = sorted[0];
    feat.innerHTML = `<div class="news-featured" data-news="${f.id}">
      <div class="news-featured__media"><img src="${f.img}" alt="${f.title} 配图"><span class="badge ${CAT_CLASS[f.cat]}" style="position:absolute;top:16px;left:16px">${f.cat}</span></div>
      <div class="news-featured__body">
        <span class="meta-mono">${f.date}</span>
        <h3 class="h2">${f.title}</h3>
        <p class="body">${f.excerpt}</p>
        <span class="btn btn--ghost btn--sm">阅读全文 ${ICONS.arrowR}</span>
      </div></div>`;
    grid.innerHTML = sorted.slice(1, 7).map(newsCard).join('');
    bindNewsClicks(feat); bindNewsClicks(grid);

    /* 每周英雄 */
    const w = $('[data-weekly-hero]');
    if (w) {
      const h = N.HEROES.find(x => x.slug === 'vera');
      const role = N.ROLES[h.role];
      w.innerHTML = `<div class="weekly__portrait"><img src="assets/img/heroes/${h.slug}.svg" alt="${h.cn} · ${h.title} 立绘"></div>
      <div class="weekly__info">
        <span class="kicker kicker--gold">WEEKLY HERO · 本周英雄</span>
        <h3 class="weekly__name">${h.cn}<span class="en">${h.en}</span></h3>
        <div class="weekly__tags"><span class="badge badge--gold">${h.title}</span><span class="badge badge--neutral" style="color:${role.color}">${role.label}</span><span class="badge badge--neutral">${h.lane}</span>${h.badges.map(b => `<span class="badge badge--gold">${b}</span>`).join('')}</div>
        <p class="weekly__story">${h.story}</p>
        <div class="stats">${Object.entries(h.stats).map(([k, v]) => `<div class="stat"><div class="stat__top"><span>${k}</span><span class="val">${v}/10</span></div><div class="stat__track"><div class="stat__fill" style="width:${v * 10}%"></div></div></div>`).join('')}</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn--gold btn--sm" href="heroes.html">查看全部英雄 ${ICONS.arrowR}</a><button class="btn btn--ghost btn--sm" data-hero="vera">技能详情</button></div>
      </div>`;
      bindHeroClicks(w);
    }

    /* 最新英雄 */
    const latest = $('[data-latest-heroes]');
    if (latest) {
      latest.innerHTML = N.HEROES.slice(-3).reverse().map(h => `
        <button class="hero-card hero-card--latest" data-hero="${h.slug}">
          <img src="assets/img/heroes/${h.slug}.svg" alt="${h.cn} · ${h.title} 立绘" loading="lazy">
          <span class="hero-card__name">${h.cn} · ${h.title}<span class="sub meta-mono">NEW HERO · ${N.ROLES[h.role].label}</span></span>
        </button>`).join('');
      bindHeroClicks(latest);
    }

    /* 每周免费 */
    const free = $('[data-free-heroes]');
    if (free) {
      const slugs = ['vera', 'yue', 'li', 'rin', 'jin', 'an'];
      free.innerHTML = slugs.map(s => {
        const h = N.HEROES.find(x => x.slug === s);
        return `<button class="hero-card" data-hero="${s}" aria-label="${h.cn} 详情">
          <img src="assets/img/heroes/${h.slug}.svg" alt="${h.cn} · ${h.title}" loading="lazy">
          <span class="hero-card__name">${h.cn}<span class="sub">${N.ROLES[h.role].label} · ${h.title}</span></span>
        </button>`;
      }).join('');
      bindHeroClicks(free);
    }
  }

  /* ---------- 英雄模态 ---------- */
  function heroModalHTML(h) {
    const role = N.ROLES[h.role];
    return `<div class="hero-modal">
      <div class="hero-modal__media"><img src="assets/img/heroes/${h.slug}.svg" alt="${h.cn} · ${h.title} 立绘"></div>
      <div class="hero-modal__body">
        <span class="kicker kicker--gold">${h.en}</span>
        <h2 class="h2">${h.cn} <span style="font-size:.5em;color:var(--text-2);font-weight:400">· ${h.title}</span></h2>
        <div class="weekly__tags">
          <span class="badge badge--neutral" style="color:${role.color}">${role.label}</span>
          <span class="badge badge--neutral">${h.lane}</span>
          <span class="badge badge--gold">难度 ${h.difficulty}/10</span>
          ${h.badges.map(b => `<span class="badge badge--gold">${b}</span>`).join('')}
        </div>
        <p class="body" style="font-size:14px">${h.story}</p>
        <div class="stats" style="grid-template-columns:repeat(2,1fr);max-width:360px">${Object.entries(h.stats).map(([k, v]) => `<div class="stat"><div class="stat__top"><span>${k}</span><span class="val">${v}/10</span></div><div class="stat__track"><div class="stat__fill" style="width:${v * 10}%"></div></div></div>`).join('')}</div>
        <h3 class="h3" style="font-size:16px">技能</h3>
        <div class="hero-modal__skills">${h.skills.map(s => `
          <div class="skill"><span class="skill__key ${s.passive ? 'skill__key--passive' : ''}">${s.key}</span><div><b>${s.name}${s.passive ? ' <span class="meta-mono">被动</span>' : ''}</b><p>${s.desc}</p></div></div>`).join('')}</div>
      </div></div>`;
  }
  function bindHeroClicks(scope) {
    $$('[data-hero]', scope).forEach(el => el.addEventListener('click', () => {
      const h = N.HEROES.find(x => x.slug === el.dataset.hero);
      if (h) openModal(heroModalHTML(h));
    }));
  }

  /* ---------- 英雄页 ---------- */
  function initHeroesPage() {
    const grid = $('[data-heroes-grid]'); if (!grid) return;
    const row = $('[data-filter-row]');
    const roles = [['all', '全部']].concat(Object.entries(N.ROLES).map(([k, v]) => [k, v.label]));
    row.innerHTML = roles.map(([k, label], i) => `<button class="filter-pill ${i === 0 ? 'is-on' : ''}" data-role="${k}">${label}</button>`).join('');
    function render(role) {
      const list = N.HEROES.filter(h => role === 'all' || h.role === role);
      grid.innerHTML = list.map(h => `
        <button class="hero-card" data-hero="${h.slug}">
          <img src="assets/img/heroes/${h.slug}.svg" alt="${h.cn} · ${h.title} 立绘" loading="lazy">
          <span class="badge badge--neutral hero-card__tag" style="color:${N.ROLES[h.role].color}">${N.ROLES[h.role].label}</span>
          <span class="hero-card__name">${h.cn}<span class="sub">${h.title}</span></span>
        </button>`).join('');
      bindHeroClicks(grid);
    }
    row.addEventListener('click', e => {
      const b = e.target.closest('[data-role]'); if (!b) return;
      $$('.filter-pill', row).forEach(x => x.classList.toggle('is-on', x === b));
      render(b.dataset.role);
    });
    render('all');
  }

  /* ---------- 新闻页：筛选 + 分页 + 深链 ---------- */
  function initNewsPage() {
    const grid = $('[data-news-page]'); if (!grid) return;
    const PAGE_SIZE = 6;
    let cat = '全部', page = 1;
    const chips = $('[data-cat-row]');
    ['全部', '版本', '赛事', '活动', '公告'].forEach(c => {
      const b = document.createElement('button');
      b.className = 'filter-pill' + (c === '全部' ? ' is-on' : '');
      b.textContent = c; b.dataset.cat = c;
      chips.appendChild(b);
    });
    function render() {
      const list = [...N.NEWS].sort((a, b) => b.date.localeCompare(a.date)).filter(n => cat === '全部' || n.cat === cat);
      const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
      page = Math.min(page, pages);
      const slice = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
      grid.innerHTML = slice.map(newsCard).join('');
      bindNewsClicks(grid);
      const pager = $('[data-pager]');
      if (pages <= 1) { pager.innerHTML = ''; return; }
      let html = `<button ${page === 1 ? 'disabled' : ''} data-p="${page - 1}" aria-label="上一页">${ICONS.chevL}</button>`;
      for (let i = 1; i <= pages; i++) html += `<button class="${i === page ? 'is-on' : ''}" data-p="${i}">${i}</button>`;
      html += `<button ${page === pages ? 'disabled' : ''} data-p="${page + 1}" aria-label="下一页">${ICONS.chevR}</button>`;
      pager.innerHTML = html;
    }
    chips.addEventListener('click', e => {
      const b = e.target.closest('[data-cat]'); if (!b) return;
      cat = b.dataset.cat; page = 1;
      $$('.filter-pill', chips).forEach(x => x.classList.toggle('is-on', x === b));
      render();
    });
    $('[data-pager]').addEventListener('click', e => {
      const b = e.target.closest('[data-p]'); if (!b || b.disabled) return;
      page = +b.dataset.p; render();
      window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
    });
    render();
    /* 深链 #n-xxx 直接打开 */
    if (location.hash.startsWith('#n-')) openNewsModal(location.hash.slice(1));
    if (location.hash.startsWith('#hero-')) {
      const h = N.HEROES.find(x => x.slug === location.hash.slice(6));
      if (h) openModal(heroModalHTML(h));
    }
  }

  /* ---------- 电竞页 ---------- */
  function initEsports() {
    const tbody = $('[data-schedule]'); if (!tbody) return;
    tbody.innerHTML = N.ESPORTS.schedule.map(m => `<tr>
      <td class="num">${m.date} ${m.time}</td>
      <td style="font-weight:600">${m.match}</td>
      <td style="color:var(--text-2)">${m.stage}</td>
      <td><span class="badge ${m.tag === '已结束' ? 'badge--neutral' : 'badge--gold'}">${m.tag}</span></td>
    </tr>`).join('');
    $('[data-international]').innerHTML = N.ESPORTS.international.map(t => `
      <div class="trophy-card"><span class="season">${t.date}</span>
        <span class="champ" style="color:var(--text-1);font-size:18px">${t.name}</span>
        <span style="font-size:13px;color:var(--text-2)">${t.place}</span>
        <p class="small">${t.desc}</p></div>`).join('');
    $('[data-trophies]').innerHTML = N.ESPORTS.trophies.map(t => `
      <div class="trophy-card"><span class="season">${t.season} · FMVP ${t.mvp}</span>
        <span class="champ">${t.champ}</span>
        <span class="runner">亚军 · ${t.runner}</span></div>`).join('');
  }

  /* ---------- 客服页 ---------- */
  function initSupport() {
    const faq = $('[data-faq]'); if (!faq) return;
    faq.innerHTML = N.FAQ.map((g, gi) => `
      <h3 class="h3" style="font-size:17px;margin:28px 0 14px">${g.group}</h3>
      ${g.items.map((it, ii) => `<div class="faq-item" data-faq="${gi}-${ii}">
        <button class="faq-item__q" aria-expanded="false"><span>${it.q}</span>${ICONS.plus}</button>
        <div class="faq-item__a">${it.a}</div></div>`).join('')}`).join('');
    faq.addEventListener('click', e => {
      const q = e.target.closest('.faq-item__q'); if (!q) return;
      const item = q.parentElement;
      const open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', open);
    });
    /* 反馈表单：演示模式，不伪造提交结果 */
    const form = $('[data-feedback-form]');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const box = $('[data-form-result]');
      box.innerHTML = `<div class="notice">${ICONS.warn}<div><b>演示环境提示</b><br>本站为静态设计演示，反馈未真实发送。正式环境中，表单将接入客服工单系统并在 48 小时内回复。</div></div>`;
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    const pay = $('[data-pay-form]');
    pay.addEventListener('submit', e => {
      e.preventDefault();
      const oid = $('#pay-order').value.trim();
      const box = $('[data-pay-result]');
      box.innerHTML = `<div class="notice notice--sky">${ICONS.warn}<div><b>查询结果（演示）</b><br>订单 <span class="mono">${oid ? oid.replace(/[<>&]/g, '') : '—'}</span>：本站为静态演示，未接入支付系统。正式环境中此处将显示订单支付状态与到账时间。</div></div>`;
    });
  }

  /* ---------- 攻略页动态（免费英雄 + 版本信息） ---------- */
  function initGuide() {
    const v = $('[data-version-chip]'); if (!v) return;
    v.textContent = `${N.VERSION.code} · ${N.VERSION.name} · 更新于 ${N.VERSION.updated}`;
  }

  /* ---------- 滚动入场 ---------- */
  function initReveal() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav(); initCarousel(); initHome(); initHeroesPage(); initNewsPage();
    initEsports(); initSupport(); initGuide(); initReveal();
  });
})();
