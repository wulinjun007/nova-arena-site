# NOVA ARENA 星曜竞技场 — 游戏官网（虚构演示）

参考 rov.in.th（Arena of Valor 泰国官网）的**功能架构**，使用 `design-system-extraction-2026-10/sites/03-zcode` 暗色设计语言构建的 5V5 MOBA 游戏官网演示。所有游戏内容均为虚构；图片来自 Unsplash（见 CREDITS.md）。

## 页面

| 页面 | 对应 rov.in.th 模块 |
|---|---|
| index.html | 顶部导航 / 全屏轮播 / 新闻区 / 本周英雄 + 最新英雄 + 每周免费 / 电竞横幅 / 下载区 / 页脚 |
| news.html | 新闻列表（分类筛选 + 分页 + 深链 `#n-<id>` 直开详情模态） |
| heroes.html | 英雄图鉴（职业筛选 + 详情模态 + 深链 `#hero-<slug>`） |
| esports.html | RoV eSports（NPL 联赛赛程 / 国际赛 / 历届冠军） |
| guide.html | วิธีการเล่น 游戏指南（四步上手 / 地图模式 / 段位体系） |
| support.html | 客服 + 欠费查询（FAQ 手风琴 / 充值查询 demo / 反馈表单 demo） |
| terms / privacy / 404 | 法务与容错页 |

## 设计语言（03-zcode Token 适配层）

- 底色 `#161616` / 面板 `#1C1C1C` / 升面 `#2A2A2A`，hairline `white/8` 分层，**无阴影体系**
- 品牌金 `#F59E0B`（badge/冠军/CTA）/ 信息蓝 sky-500（kicker/资讯分类）/ 增强 `#22C55E` · 削弱 `#EF4444`（补丁 delta，复用 git diff 语义）
- 白胶囊 = 唯一高亮实体（下载 CTA）；type：H1 60/700 · H2 36/600 · H3 24/600；mono 用于版本号 / 日期 / 段位英文
- 断点 640 / 768 / 1024；`prefers-reduced-motion` 全覆盖；focus-visible sky ring

## 开发

```bash
node tools/gen-art.js   # 重新生成英雄 SVG 立绘 / logo / qr
node tools/build.js     # partials + pages → 根目录 HTML
# 本地预览：python3 -m http.server 或任意静态服务器
```

内容数据集中在 `assets/js/data.js`（新闻 / 英雄 / 赛程 / FAQ）。

## 部署

GitHub（唯一可信源）→ Netlify Production（见仓库 Actions / 本地 `netlify deploy`）。纯静态零外部依赖（图片全部本地化）。
