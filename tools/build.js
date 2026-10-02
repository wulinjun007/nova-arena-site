#!/usr/bin/env node
/**
 * build.js — 组装静态站：partials/(head|foot).html + pages/*.html → 根目录 *.html
 * 运行：node tools/build.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const PAGES = [
  { file: 'index',   title: 'NOVA ARENA 星曜竞技场 — 5V5 英雄公平竞技手游（虚构演示）', desc: 'NOVA ARENA 星曜竞技场官方网站：版本资讯、英雄图鉴、电竞赛事、新手攻略与游戏下载。5V5 公平竞技，为荣耀而战。（虚构演示项目）' },
  { file: 'news',    title: '资讯中心 — NOVA ARENA 星曜竞技场', desc: '版本更新、赛事战报、活动公告与运营公告。' },
  { file: 'heroes',  title: '英雄图鉴 — NOVA ARENA 星曜竞技场', desc: '12 位星曜英雄：坦克、战士、刺客、法师、射手、辅助，技能与背景故事一览。' },
  { file: 'esports', title: '赛事中心 — NOVA ARENA 星曜竞技场', desc: 'NOVA PRO LEAGUE 职业联赛、AIC 国际邀请赛与 WCN 世界冠军赛。' },
  { file: 'guide',   title: '新手攻略 — NOVA ARENA 星曜竞技场', desc: '从下载注册到排位上分：基础操作、英雄选择、段位体系与地图机制。' },
  { file: 'support', title: '客服中心 — NOVA ARENA 星曜竞技场', desc: '常见问题、问题反馈与充值查询。' },
  { file: 'terms',   title: '服务条款 — NOVA ARENA 星曜竞技场', desc: '服务条款（虚构演示文本）。' },
  { file: 'privacy', title: '隐私政策 — NOVA ARENA 星曜竞技场', desc: '隐私政策（虚构演示文本）。' },
  { file: '404',     title: '页面不存在 — NOVA ARENA 星曜竞技场', desc: '你访问的页面不存在。' },
];
const head = fs.readFileSync(path.join(ROOT, 'partials/head.html'), 'utf8');
const foot = fs.readFileSync(path.join(ROOT, 'partials/foot.html'), 'utf8');
for (const p of PAGES) {
  const body = fs.readFileSync(path.join(ROOT, 'pages', `${p.file}.html`), 'utf8');
  const html = head.replace('{{TITLE}}', p.title).replace('{{DESC}}', p.desc) + body + foot;
  fs.writeFileSync(path.join(ROOT, `${p.file}.html`), html);
  console.log('built', `${p.file}.html`, `(${(html.length / 1024).toFixed(1)} KB)`);
}
