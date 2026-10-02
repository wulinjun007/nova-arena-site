# RELEASE REPORT — NOVA ARENA 星曜竞技场 V1.0

**发布日期**：2026-10-02 · **性质**：虚构演示站（参考 rov.in.th 功能架构，非任何真实游戏官网）

## 生产状态

| 项 | 值 |
|---|---|
| **生产 URL（LIVE）** | https://wulinjun007.github.io/nova-arena-site/ ✅ 已公网验证 |
| 唯一可信源 | https://github.com/wulinjun007/nova-arena-site (main, b8f02c6 + fix commit) |
| Netlify | 站点已建（nova-arena-site.netlify.app，ID `e936a82f-eb08-49cc-aaf3-763d716e7fe6`），**部署被账户额度阻止**（"Account credit usage exceeded - new deploys are blocked"）。额度恢复后执行：`netlify deploy --prod --dir . --site e936a82f-eb08-49cc-aaf3-763d716e7fe6`，再 `PATCH sso_login=false`（新站默认访客 401） |

> 2026-10-02 当日该 Netlify 账户已连续部署多站触发额度上限，按部署备忘「GitHub 为唯一可信源」以 GitHub Pages 升为生产；sitemap/robots 已指向 Pages 域。Netlify 恢复后切回只需一次 deploy + 改回 sitemap。

## QA（发布前实测）

**构建与静态检查**
- `node tools/build.js`：9 页全部构建成功
- 双视口（1440 / 390）× 9 页横向溢出扫描：0 溢出
- 控制台 / pageerror / requestfailed：本地与线上均 0 错误

**交互测试（Playwright，14 项）**
- FAQ 手风琴展开 ✅ · 反馈表单 demo 提示 ✅（不伪造提交成功）· 充值查询 demo 回显 ✅
- 资讯深链 `#n-<id>` 直开模态 ✅ · 模态补丁增强/削弱色 chip ✅ · Esc 关闭 ✅
- 资讯分类筛选（赛事=3 条）✅ · 分页 3 页翻页 ✅
- 英雄职业筛选（坦克=2）✅ · 英雄模态 4 技能 ✅
- 轮播前进/自动播放/键盘 ✅ · `#download` 锚点滚动（scrollY 4845）✅

**公网验证**
- 17/17 URL（9 页 + sitemap + robots + css/js + 图片样本）全 200
- 线上整页渲染截图与本地一致；线上模态冒烟 PASS

**视觉审查**
- 双端整页截图逐区目检：轮播文字可读性、12 张星座立绘区分度、卡片网格对齐、移动端单列布局 ✅
- 修复记录：①reveal 入场动画导致 no-JS/截图盲区 → `html.js` 门控 + JS 渲染内容去掉 reveal；②英雄卡名字双重显示 → SVG 立绘去除内嵌文字；③攻略页版本日期断行 → nowrap 块化

## 已知边界

- 「下载游戏」按钮为演示占位（`aria-disabled`，不跳转假商店）；二维码明确标注不可扫描
- 表单/充值查询均为 demo 提示，无后端
- 全部游戏内容（名称/英雄/赛事/新闻/条款）为虚构；Unsplash 图片权利记录见 CREDITS.md
