#!/usr/bin/env node
/**
 * gen-art.js — 生成静态美术资产（英雄星曜立绘 SVG ×12 / Logo / Favicon / 二维码占位）
 * 运行：node tools/gen-art.js
 * 输出：assets/img/heroes/*.svg · assets/img/logo.svg · favicon.svg · qr-download.svg
 * 风格依据：design-system-extraction-2026-10/sites/03-zcode（#161616 暗色 + hairline + 无阴影 + mono）
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'img');
fs.mkdirSync(path.join(OUT, 'heroes'), { recursive: true });

// ---------- 确定性伪随机（同一种子 → 同一画面，构建可复现） ----------
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- 12 位英雄（与 assets/js/data.js 保持一致） ----------
const ROLES = {
  tank:    { label: '坦克', c1: '#8FA3B8', c2: '#46596E' },
  warrior: { label: '战士', c1: '#F87171', c2: '#7F1D1D' },
  assassin:{ label: '刺客', c1: '#A78BFA', c2: '#4C1D95' },
  mage:    { label: '法师', c1: '#38BDF8', c2: '#0C4A6E' },
  marksman:{ label: '射手', c1: '#FBBF24', c2: '#78350F' },
  support: { label: '辅助', c1: '#34D399', c2: '#064E3B' },
};
const HEROES = [
  { slug: 'vera', en: 'VERA', cn: '薇拉', title: '圣殿游侠', role: 'marksman' },
  { slug: 'rin',  en: 'RIN',  cn: '凛',   title: '月刃行者', role: 'assassin' },
  { slug: 'lan',  en: 'LAN',  cn: '苍岚', title: '岚拳武僧', role: 'warrior' },
  { slug: 'ye',   en: 'YE',   cn: '玄夜', title: '影缝师',   role: 'assassin' },
  { slug: 'yue',  en: 'YUE',  cn: '磐岳', title: '山堡守卫', role: 'tank' },
  { slug: 'li',   en: 'LI',   cn: '霜璃', title: '霜咒术士', role: 'mage' },
  { slug: 'jin',  en: 'JIN',  cn: '烬',   title: '烬火骑士', role: 'warrior' },
  { slug: 'an',   en: 'AN',   cn: '澜心', title: '潮汐祭司', role: 'support' },
  { slug: 'qian', en: 'QIAN', cn: '千羽', title: '风隼斥候', role: 'marksman' },
  { slug: 'mo',   en: 'MO',   cn: '墨辰', title: '星轨占星师', role: 'mage' },
  { slug: 'tie',  en: 'TIE',  cn: '铁垣', title: '机甲壁垒', role: 'tank' },
  { slug: 'yin',  en: 'YIN',  cn: '拾音', title: '回响歌者', role: 'support' },
];

function stars(rnd, n, w, h, color) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = (rnd() * w).toFixed(1), y = (rnd() * h).toFixed(1);
    const r = (rnd() * 1.4 + 0.3).toFixed(2), o = (rnd() * 0.5 + 0.15).toFixed(2);
    s += `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${o}"/>`;
  }
  return s;
}

// 星座主图案：围绕中心的折线星座，每位英雄由种子决定形状
function constellation(rnd, cx, cy, spread, color, n = 7) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rnd() * 0.9;
    const rr = spread * (0.45 + rnd() * 0.55);
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.82]);
  }
  let s = '';
  for (let i = 0; i < n; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % n];
    s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="1" opacity="0.5"/>`;
  }
  pts.forEach(([x, y], i) => {
    const r = i === 0 ? 5 : 3;
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${color}"/>`;
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r + 5}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.35"/>`;
  });
  return s;
}

function heroSVG(h, idx) {
  const role = ROLES[h.role];
  const rnd = mulberry32(1000 + idx * 77);
  const W = 600, H = 750;
  const gid = `g${idx}`, sid = `s${idx}`;
  const letter = h.en[0];
  const ringTilt = (rnd() * 40 - 20).toFixed(1);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${h.cn} · ${h.title}">
<defs>
  <linearGradient id="${gid}" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="${role.c2}" stop-opacity="0.85"/>
    <stop offset="0.55" stop-color="#1C1C1C"/>
    <stop offset="1" stop-color="#161616"/>
  </linearGradient>
  <radialGradient id="${sid}" cx="0.5" cy="0.42" r="0.55">
    <stop offset="0" stop-color="${role.c1}" stop-opacity="0.28"/>
    <stop offset="1" stop-color="${role.c1}" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="#161616"/>
<rect width="${W}" height="${H}" fill="url(#${gid})"/>
<rect width="${W}" height="${H}" fill="url(#${sid})"/>
${stars(rnd, 90, W, H * 0.72, '#E6E6E6')}
<g transform="rotate(${ringTilt} ${W / 2} ${H * 0.4})">
  <ellipse cx="${W / 2}" cy="${H * 0.4}" rx="200" ry="66" fill="none" stroke="${role.c1}" stroke-opacity="0.22" stroke-width="1"/>
  <ellipse cx="${W / 2}" cy="${H * 0.4}" rx="150" ry="46" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1"/>
</g>
<text x="${W / 2}" y="${H * 0.47}" font-family="ui-monospace,'SF Mono',Menlo,monospace" font-size="330" font-weight="700" fill="${role.c1}" fill-opacity="0.14" text-anchor="middle" dominant-baseline="middle">${letter}</text>
${constellation(rnd, W / 2, H * 0.4, 150, role.c1)}
<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#FFFFFF" stroke-opacity="0.08"/>
</svg>`;
}

// ---------- Logo：新星四芒 + 轨道环 ----------
const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" role="img" aria-label="NOVA ARENA Logo">
<defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#FBBF24"/><stop offset="1" stop-color="#F59E0B"/>
</linearGradient></defs>
<circle cx="20" cy="20" r="17.5" fill="none" stroke="#F59E0B" stroke-opacity="0.35"/>
<ellipse cx="20" cy="20" rx="17.5" ry="6.5" fill="none" stroke="#F59E0B" stroke-opacity="0.35" transform="rotate(-24 20 20)"/>
<path d="M20 6 L23 17 L34 20 L23 23 L20 34 L17 23 L6 20 L17 17 Z" fill="url(#lg)"/>
<circle cx="20" cy="20" r="3" fill="#161616"/>
</svg>`;

const faviconSVG = logoSVG.replace('width="40" height="40"', 'width="64" height="64"');

// ---------- 二维码占位（明确标注 DEMO，不伪装可扫） ----------
function qrSVG() {
  const rnd = mulberry32(42);
  const N = 21, C = 8, PAD = 2, SZ = (N + PAD * 2) * C;
  let m = '';
  const finder = (fx, fy) => {
    for (let y = 0; y < 7; y++) for (let x = 0; x < 7; x++) {
      const edge = x === 0 || y === 0 || x === 6 || y === 6;
      const core = x >= 2 && x <= 4 && y >= 2 && y <= 4;
      if (edge || core) m += `<rect x="${(fx + x) * C}" y="${(fy + y) * C}" width="${C}" height="${C}"/>`;
    }
  };
  let cells = '';
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const inFinder = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    if (!inFinder && rnd() > 0.52) cells += `<rect x="${x * C}" y="${y * C}" width="${C}" height="${C}"/>`;
  }
  finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SZ}" height="${SZ + 34}" viewBox="0 0 ${SZ} ${SZ + 34}" role="img" aria-label="下载二维码占位（演示用）">
<rect width="${SZ}" height="${SZ + 34}" fill="#FFFFFF" rx="8"/>
<g transform="translate(${PAD * C} ${PAD * C})" fill="#161616">${m}${cells}</g>
<rect x="${SZ / 2 - 26}" y="${SZ / 2 - 26}" width="52" height="52" rx="8" fill="#FFFFFF"/>
<text x="${SZ / 2}" y="${SZ / 2 + 7}" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="20" font-weight="700" fill="#F59E0B">N</text>
<text x="${SZ / 2}" y="${SZ + 24}" text-anchor="middle" font-family="-apple-system,'PingFang SC',sans-serif" font-size="15" fill="#161616">演示占位 · 非真实二维码</text>
</svg>`;
}

HEROES.forEach((h, i) => fs.writeFileSync(path.join(OUT, 'heroes', `${h.slug}.svg`), heroSVG(h, i)));
fs.writeFileSync(path.join(OUT, 'logo.svg'), logoSVG);
fs.writeFileSync(path.join(OUT, 'favicon.svg'), faviconSVG);
fs.writeFileSync(path.join(OUT, 'qr-download.svg'), qrSVG());
console.log(`OK: ${HEROES.length} hero SVGs + logo + favicon + qr -> ${path.relative(ROOT, OUT)}`);
