/* ============================================================
   NOVA ARENA · 站点数据层（全站虚构演示内容）
   日期基准：2026-10-02
   ============================================================ */
window.NOVA = {};

/* ---------- 新闻 ---------- */
window.NOVA.NEWS = [
  {
    id: 'n-20260930',
    cat: '版本', img: 'assets/img/news/news-circuit.jpg',
    title: 'v0.55a 热修复：修复「霜璃」极寒领域异常冻结问题',
    date: '2026-09-30',
    excerpt: '针对 9 月 30 日凌晨出现的极寒领域范围判定异常进行热修复，维护无需停机。',
    body: `<p>各位召唤者：我们监测到部分对局中「霜璃」的终极技能<strong>极寒领域</strong>出现范围判定异常（实际冻结范围大于技能指示器范围），已在 v0.55a 中完成修复。</p>
<h3>修复内容</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--mid">修复</span><span>极寒领域冻结范围与技能指示器不一致的问题</span></div>
<div class="patch-item"><span class="delta delta--mid">修复</span><span>「拾音」回响之力在特定连招下音效丢失的问题</span></div>
<div class="patch-item"><span class="delta delta--mid">修复</span><span>巅峰排位赛结算界面段位星数显示错误的问题</span></div>
</div><p>本次热修复采取<strong>不停机热更</strong>方式推送，重启游戏客户端即可生效。给您带来的不便敬请谅解。</p>`,
  },
  {
    id: 'n-20261002',
    cat: '活动', img: 'assets/img/news/event-plush.jpg',
    title: '每周免费英雄轮换（10.2 – 10.8）：薇拉、磐岳在列',
    date: '2026-10-02',
    excerpt: '本周免费池更新：圣殿游侠薇拉、山堡守卫磐岳等 6 位英雄限时免费体验。',
    body: `<p>本周免费英雄轮换已开启（10 月 2 日 – 10 月 8 日），以下英雄限时免费体验：</p>
<div class="patch-list">
<div class="patch-item"><span class="delta delta--up">射手</span><span>薇拉 · 圣殿游侠 —— 本周英雄，参与对局可领取「圣殿之誓」头像框</span></div>
<div class="patch-item"><span class="delta delta--up">坦克</span><span>磐岳 · 山堡守卫 —— 新手上分推荐</span></div>
<div class="patch-item"><span class="delta delta--up">法师</span><span>霜璃 · 霜咒术士 —— 团战控场核心</span></div>
<div class="patch-item"><span class="delta delta--up">刺客</span><span>凛 · 月刃行者 —— 打野入门之选</span></div>
<div class="patch-item"><span class="delta delta--up">辅助</span><span>澜心 · 潮汐祭司 —— 双排好搭档</span></div>
<div class="patch-item"><span class="delta delta--up">战士</span><span>烬 · 烬火骑士 —— 对抗路常青树</span></div>
</div><p>免费英雄不受段位限制，可在排位与匹配模式中使用。觉得顺手就用星曜币带回家吧。</p>`,
  },
  {
    id: 'n-20260928',
    cat: '版本', img: 'assets/img/news/patch-starfall.jpg',
    title: 'v0.55「星穹裂隙」版本更新公告：新英雄拾音正式上线',
    date: '2026-09-28',
    excerpt: '新英雄「回响歌者·拾音」上线，S4 赛季巅峰排位开启，多英雄平衡性调整同步落地。',
    body: `<p>「当群星合唱时，裂隙将为之敞开。」v0.55 <strong>星穹裂隙</strong>已于 9 月 28 日 6:00 – 9:00 停机更新完毕，当前版本号 v0.55.1。</p>
<h3>新英雄：拾音 · 回响歌者（辅助）</h3>
<p>拾音以声音为武器，可记录并回放队友的技能回响，为团队提供护盾与增益。获取方式：限时折扣 680 星曜币（原价 888）。</p>
<h3>平衡性调整</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">增强</span><span>千羽：风隼之眼的移动速度加成由 20% 提升至 25%</span></div>
<div class="patch-item"><span class="delta delta--up">增强</span><span>磐岳：山堡壁垒的护盾值成长系数上调 8%</span></div>
<div class="patch-item"><span class="delta delta--down">削弱</span><span>凛：月刃横扫的基础伤害由 240/280/320/360/400 下调至 220/260/300/340/380</span></div>
<div class="patch-item"><span class="delta delta--down">削弱</span><span>墨辰：星轨预言的冷却时间由 8 秒上调至 10 秒</span></div>
<div class="patch-item"><span class="delta delta--mid">调整</span><span>装备「星陨之杖」合成路线优化，总价降低 150 星曜币</span></div>
</div>
<h3>S4 巅峰排位</h3>
<p>段位重置规则与赛季奖励皮肤「薇拉 · 圣殿之誓」领取条件详见攻略中心。星穹裂隙，等你来战。</p>`,
  },
  {
    id: 'n-20260925',
    cat: '赛事', img: 'assets/img/news/esports-champion.jpg',
    title: 'NPL S4 总决赛落幕：极光 4:2 击败雷鸣，队史首冠！',
    date: '2026-09-25',
    excerpt: '历时三周的 Nova Pro League S4 总决赛收官，极光战队让二追三完成让分逆转。',
    body: `<p>9 月 25 日晚，<strong>Nova Pro League S4 总决赛</strong>在滨海电竞馆落幕。极光战队在先失两局的情况下连扳四局，以 4:2 击败卫冕冠军雷鸣战队，拿下队史首座 NPL 冠军奖杯。</p>
<h3>决赛路径</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">G1–G2</span><span>雷鸣凭借野区压制连下两城</span></div>
<div class="patch-item"><span class="delta delta--up">G3–G4</span><span>极光调整 BanPick，中野联动扳平比分</span></div>
<div class="patch-item"><span class="delta delta--up">G5</span><span>42 分钟鏖战，极光远古星龙团战一锤定音</span></div>
<div class="patch-item"><span class="delta delta--up">G6</span><span>极光 21:8 人头比横扫锁定冠军</span></div>
</div>
<p>极光打野选手 <strong>Light</strong> 凭借决赛 38.5% 伤害占比斩获 FMVP。恭喜极光，也感谢雷鸣带来的一系列经典对局。冠军战队皮肤返场活动同步开启，详见活动中心。</p>`,
  },
  {
    id: 'n-20260921',
    cat: '公告', img: 'assets/img/news/news-server.jpg',
    title: '9 月 28 日「星穹裂隙」版本停机维护公告',
    date: '2026-09-21',
    excerpt: 'v0.55 版本将于 9 月 28 日 6:00 – 9:00 停机维护，维护补偿为 188 星曜币 + 双倍经验卡。',
    body: `<p>为保证「星穹裂隙」版本顺利上线，服务器将于 <strong>9 月 28 日 6:00 – 9:00</strong> 进行停机维护，维护期间将无法登录游戏。</p>
<h3>维护范围</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--mid">全服</span><span>v0.55 版本资源包更新</span></div>
<div class="patch-item"><span class="delta delta--mid">全服</span><span>巅峰排位 S4 赛季数据快照与段位重置</span></div>
<div class="patch-item"><span class="delta delta--mid">商城</span><span>新英雄拾音及联动商店上架准备</span></div>
</div>
<p>维护结束后，所有在 9 月 21 日前创建角色的召唤者将通过邮件领取补偿：<strong>188 星曜币 + 双倍经验卡（3 日）</strong>。若维护提前完成将提前开服；若有延期将另行公告。</p>`,
  },
  {
    id: 'n-20260918',
    cat: '赛事', img: 'assets/img/news/esports-arena.jpg',
    title: '星曜国际邀请赛 AIC 2026 落地新加坡：11 月开战',
    date: '2026-09-18',
    excerpt: '来自 8 个赛区的 16 支战队将齐聚新加坡室内体育馆，争夺年度第二座国际奖杯。',
    body: `<p>星曜年度国际赛事体系公布：<strong>星曜国际邀请赛（AIC 2026）</strong>将于 11 月 14 日 – 11 月 29 日在新加坡室内体育馆举行。</p>
<h3>参赛格局</h3>
<p>本届 AIC 共设 16 个席位：NPL（4 席）、其余 7 个赛区各 1 席、外卡赛 4 席、东道主特邀 1 席。NPL 席位由 S3、S4 联赛积分决定，目前极光、雷鸣、白昼、铁壁四队锁定入围资格。</p>
<h3>赛制</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--mid">小组赛</span><span>11.14 – 11.19 · 双循环 BO1，每组前四晋级</span></div>
<div class="patch-item"><span class="delta delta--mid">淘汰赛</span><span>11.21 – 11.22 · 双败赛制 BO5</span></div>
<div class="patch-item"><span class="delta delta--mid">总决赛</span><span>11.29 · BO7 巅峰对决</span></div>
</div>
<p>门票将于 10 月中旬在大麦网开启预售，全程直播将覆盖官网直播间与各大直播平台。</p>`,
  },
  {
    id: 'n-20260915',
    cat: '活动', img: 'assets/img/news/lore-temple.jpg',
    title: '×「山海行记」动画联动开启：限定皮肤与全新剧情副本上线',
    date: '2026-09-15',
    excerpt: '与人气国风动画《山海行记》展开联动，霜璃联动皮肤「青丘雪」与剧情副本同步上线。',
    body: `<p>9 月 15 日起，星曜竞技场与人气国风动画<strong>《山海行记》</strong>正式开启为期一个月的联动活动。</p>
<h3>联动内容</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">皮肤</span><span>霜璃 · 联动限定「青丘雪」—— 动画组监修，技能特效全面重制</span></div>
<div class="patch-item"><span class="delta delta--up">副本</span><span>剧情副本「山海异闻录」：三章关卡，通关送联动头像框</span></div>
<div class="patch-item"><span class="delta delta--up">活动</span><span>登录 7 天送联动英雄筹码，集齐可兑换联动回城特效</span></div>
</div>
<p>联动期间，主城将变身「山海集市场景」，完成每日联动任务还可解锁动画角色语音包。活动截止 10 月 15 日，不要错过。</p>`,
  },
  {
    id: 'n-20260912',
    cat: '公告', img: 'assets/img/news/news-controller.jpg',
    title: '关于打击「演员」与非法外挂的专项处罚公告',
    date: '2026-09-12',
    excerpt: '上周共处罚恶意演员账号 4,213 个、封禁外挂账号 986 个，举报通道持续开放。',
    body: `<p>为维护公平竞技环境，我们在上周完成了新一轮「净屏行动」专项打击，现公告如下：</p>
<div class="patch-list">
<div class="patch-item"><span class="delta delta--down">处罚</span><span>恶意演员（故意送分/消极比赛）账号 4,213 个，视情节处以封禁 7 – 365 天</span></div>
<div class="patch-item"><span class="delta delta--down">处罚</span><span>使用非法外挂账号 986 个，全部执行永久封禁并回收非法所得</span></div>
<div class="patch-item"><span class="delta delta--down">处罚</span><span>代练工作室关联账号 1,102 个，封禁 30 – 90 天</span></div>
</div>
<p>公平是竞技的底线。若你在对局中遇到上述行为，请通过<strong>对局结束后举报</strong>或<strong>客服中心提交录像证据</strong>反馈，我们将在 48 小时内复核。感谢每一位守护峡谷公平的召唤者。</p>`,
  },
  {
    id: 'n-20260910',
    cat: '活动', img: 'assets/img/news/event-retro.jpg',
    title: '「绘出你的星曜」同人插画大赛开启征稿',
    date: '2026-09-10',
    excerpt: '以任意星曜英雄为主角创作同人插画，金奖作品将制作成游戏内加载图。',
    body: `<p>星曜同人插画大赛正式开启！用画笔展现你心中的峡谷英雄。</p>
<h3>赛程与奖励</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--mid">征稿期</span><span>9.10 – 10.10 · 提交至活动专区并带话题 #绘出你的星曜</span></div>
<div class="patch-item"><span class="delta delta--mid">评审期</span><span>10.11 – 10.18 · 官方评审 60% + 社区投票 40%</span></div>
<div class="patch-item"><span class="delta delta--up">金奖 ×1</span><span>作品制作为游戏内加载图 + 星曜币 8,888 + 联动周边礼盒</span></div>
<div class="patch-item"><span class="delta delta--up">银奖 ×3</span><span>星曜币 3,888 + 联动皮肤任选一款</span></div>
</div>
<p>参赛作品须为原创，AI 生成作品需在投稿时明确标注。详细规则见活动专区《参赛指引》。</p>`,
  },
  {
    id: 'n-20260908',
    cat: '活动', img: 'assets/img/news/event-fire.jpg',
    title: '燎原祭 · 回归福利周：老玩家回归即领限定称号',
    date: '2026-09-08',
    excerpt: '9 月 8 日 – 9 月 22 日，30 天未登录的召唤者回归即享 14 天福利与限定称号「燎原者」。',
    body: `<p>燎原祭回归福利周将于 9 月 8 日 10:00 点燃，持续至 9 月 22 日。</p>
<h3>回归福利</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">登录礼</span><span>限定称号「燎原者」+ 回城特效「星火燎原」（14 天）</span></div>
<div class="patch-item"><span class="delta delta--up">对局礼</span><span>回归期间每日首胜双倍星曜币与经验</span></div>
<div class="patch-item"><span class="delta delta--up">组队礼</span><span>好友邀请回归玩家组队，双方均得「燎原之约」头像</span></div>
</div>
<p>活动期间回归玩家排位胜场不计入隐藏分波动，放心找回手感。我们在峡谷等你回来。</p>`,
  },
  {
    id: 'n-20260905',
    cat: '版本', img: 'assets/img/news/news-keyboard.jpg',
    title: 'S4 赛季段位重置规则与赛季皮肤说明',
    date: '2026-09-05',
    excerpt: '9 月 28 日 v0.55 更新后巅峰排位进入 S4 赛季，段位软重置规则与奖励皮肤公开。',
    body: `<p>S4 赛季将于 9 月 28 日「星穹裂隙」更新后正式开启，段位与奖励规则如下：</p>
<h3>段位软重置</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--mid">规则</span><span>新赛季初始段位 = 上赛季段位向中位数收敛一档（星曜王者以上重置至钻石 III）</span></div>
<div class="patch-item"><span class="delta delta--mid">定级</span><span>需完成 5 场定级赛，胜率越高初始段位越高</span></div>
</div>
<h3>赛季奖励</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">黄金 IV</span><span>赛季皮肤「薇拉 · 圣殿之誓」+ 赛季头像</span></div>
<div class="patch-item"><span class="delta delta--up">钻石 III</span><span>追加赛季回城特效「巅峰之环」</span></div>
<div class="patch-item"><span class="delta delta--up">星曜王者</span><span>追加专属名牌边框与赛季限定击杀播报</span></div>
</div>`,
  },
  {
    id: 'n-20260902',
    cat: '公告', img: 'assets/img/news/guide-player.jpg',
    title: '健康系统与未成年人游戏时间管理说明',
    date: '2026-09-02',
    excerpt: '未成年用户可在周五、周六、周日及法定节假日 20:00 – 21:00 体验 1 小时游戏。',
    body: `<p>为落实未成年人游戏防沉迷要求，星曜竞技场健康系统持续运行中，规则如下：</p>
<h3>游戏时长</h3>
<p>未成年用户仅可在<strong>周五、周六、周日及法定节假日的 20:00 – 21:00</strong> 体验 1 小时游戏，其他时间无法登录。</p>
<h3>消费限制</h3>
<p>未满 8 周岁用户无法游戏内充值；8 – 16 周岁单次与每月充值上限为 50 元 / 200 元；16 – 18 周岁为 100 元 / 400 元。</p>
<h3>家长服务</h3>
<p>家长可通过客服中心的「家长监护」通道申请绑定监护关系、查询游玩记录或申请退款。适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。</p>`,
  },
  {
    id: 'n-20260830',
    cat: '赛事', img: 'assets/img/news/news-phone.jpg',
    title: '世界冠军赛 WCN 2026 官方直播间开启预约',
    date: '2026-08-30',
    excerpt: '12 月上海世界冠军赛直播间开启预约，预约即得直播间专属限定挂件。',
    body: `<p>年度压轴赛事——<strong>星曜世界冠军赛（WCN 2026）</strong>将于 12 月在上海梅赛德斯奔驰文化中心举行，官方直播间现已开启预约。</p>
<h3>预约福利</h3><div class="patch-list">
<div class="patch-item"><span class="delta delta--up">预约礼</span><span>直播间专属挂件「星曜之约」</span></div>
<div class="patch-item"><span class="delta delta--up">抽奖</span><span>预约用户抽总决赛线下门票（10 名）与限定手办（30 名）</span></div>
</div>
<p>本届 WCN 总奖金池 2,800 万星曜币等值奖池，创历史新高。赛程安排与解说阵容将在 AIC 结束后公布。</p>`,
  },
  {
    id: 'n-20260826',
    cat: '活动', img: 'assets/img/news/event-arcade.jpg',
    title: '「星曜漫画社」第 12 话：磐岳与铁垣的机甲对决',
    date: '2026-08-26',
    excerpt: '官方四格漫画第 12 话更新，山堡守卫与机甲壁垒的「最快劣解」之争爆笑上演。',
    body: `<p>「星曜漫画社」第 12 话《最快劣解》已更新！</p>
<p>当最古老的山堡守卫遇上最新锐的机甲壁垒，一场关于「守护到底应该靠信念还是算法」的辩论，最终演变成了比谁的护盾更厚的爆笑对决……</p>
<p>本话还附带了霜璃的番外小剧场「极寒领域的 100 种用法」。前往官网漫画专区或官方社区即可阅读，每周三更新。</p>`,
  },
];

/* ---------- 英雄（12 位，全部虚构） ---------- */
window.NOVA.ROLES = {
  tank:     { label: '坦克', color: 'var(--role-tank)' },
  warrior:  { label: '战士', color: 'var(--role-warrior)' },
  assassin: { label: '刺客', color: 'var(--role-assassin)' },
  mage:     { label: '法师', color: 'var(--role-mage)' },
  marksman: { label: '射手', color: 'var(--role-marksman)' },
  support:  { label: '辅助', color: 'var(--role-support)' },
};

window.NOVA.HEROES = [
  {
    slug: 'vera', en: 'VERA', cn: '薇拉', title: '圣殿游侠', role: 'marksman', lane: '射手路',
    difficulty: 6,
    stats: { 输出: 9, 生存: 4, 团战: 7, 操作: 7 },
    badges: ['本周英雄', 'S4 赛季皮肤'],
    story: '薇拉自幼被遗弃在圣殿阶前，由守殿祭司以星辉与弓弦抚养长大。当裂隙魔物第一次撕开圣殿外墙时，十六岁的她用祭司的短弓射出了人生第一支穿云之箭——正中魔物眉心。如今她已成为圣殿最年轻的守护者，人们说，她的箭矢落下的地方，就是星光的方向。',
    skills: [
      { key: '被动', name: '星光祝福', passive: true, desc: '每第三次普攻附带额外星辉伤害，并短暂提升 15% 移动速度。' },
      { key: '1', name: '穿云箭', desc: '向指定方向射出星辉之箭，对直线上敌人造成物理伤害并标记 4 秒。' },
      { key: '2', name: '圣殿步', desc: '向指定方向短距离翻跃，下一次普攻立即触发星光祝福。' },
      { key: '3', name: '流星雨', desc: '引导 2 秒后向目标区域降下五波星辉，每波造成范围物理伤害并减速 30%。' },
    ],
  },
  {
    slug: 'rin', en: 'RIN', cn: '凛', title: '月刃行者', role: 'assassin', lane: '打野',
    difficulty: 8,
    stats: { 输出: 8, 生存: 3, 团战: 5, 操作: 9 },
    badges: ['打野入门之选'],
    story: '月圆之夜出生的凛被族人视为不祥，逐出村落。她在月影森林中与兽为伍，学会将月光凝成双刃。猎人们说，月蚀之夜千万不要踏进森林——那是凛的狩猎场，而你，是猎物。',
    skills: [
      { key: '被动', name: '月蚀标记', passive: true, desc: '技能命中敌人时施加月蚀标记，普攻标记目标造成额外真实伤害。' },
      { key: '1', name: '月刃横扫', desc: '挥出弧形月刃，对扇形区域敌人造成物理伤害并回复自身生命。' },
      { key: '2', name: '影跃', desc: '化为月影突进至目标身后，1.5 秒内再次释放可返回原位。' },
      { key: '3', name: '朔月裁断', desc: '锁定单个目标进入 2 秒处决状态，期间免疫控制，结束时常驻造成巨额伤害。' },
    ],
  },
  {
    slug: 'lan', en: 'LAN', cn: '苍岚', title: '岚拳武僧', role: 'warrior', lane: '对抗路',
    difficulty: 7,
    stats: { 输出: 7, 生存: 6, 团战: 7, 操作: 8 },
    badges: ['连招流'],
    story: '苍岚在山巅武馆修习岚拳二十年，师父圆寂前留给他最后一课：「风无形，拳亦无形。」下山那天，他把武馆牌匾背在背上——从此他的每一拳，都替整座武馆出手。',
    skills: [
      { key: '被动', name: '岚息', passive: true, desc: '每释放两次技能后，下一次普攻变为岚拳连击，造成三段伤害。' },
      { key: '1', name: '疾风连打', desc: '向前快速打出三拳，最后一段击退敌人并回复岚息。' },
      { key: '2', name: '听风闪避', desc: '进入 1 秒闪避姿态，期间受到的普攻伤害降低 60%，结束后反手突进。' },
      { key: '3', name: '万岚归宗', desc: '召唤环形风障将周围敌人拉向中心，随后一记重拳将其击飞。' },
    ],
  },
  {
    slug: 'ye', en: 'YE', cn: '玄夜', title: '影缝师', role: 'assassin', lane: '中路',
    difficulty: 9,
    stats: { 输出: 9, 生存: 2, 团战: 4, 操作: 10 },
    badges: ['高操作上限'],
    story: '没有人见过玄夜的真容，只有他缝在墙上的影偶记得他的脚步声。他曾是宫廷影卫之首，如今是游走于裂隙边缘的缝影人——把敌人的影子缝进黑暗，再把黑暗带向敌人。',
    skills: [
      { key: '被动', name: '缝影', passive: true, desc: '对同一目标的第三次技能命中会撕裂缝隙，造成目标已损失生命 12% 的额外伤害。' },
      { key: '1', name: '影针', desc: '掷出三枚影针，呈扇形散开，每枚造成法术伤害并叠加缝影层数。' },
      { key: '2', name: '夜幕步', desc: '潜入夜幕 1.2 秒，不可被选取并提升 40% 移速，现身时强化下一次技能。' },
      { key: '3', name: '千影葬', desc: '在目标区域布下影之法阵，1 秒后所有影子收拢刺向中心，中心敌人受三倍伤害。' },
    ],
  },
  {
    slug: 'yue', en: 'YUE', cn: '磐岳', title: '山堡守卫', role: 'tank', lane: '对抗路',
    difficulty: 3,
    stats: { 输出: 3, 生存: 10, 团战: 9, 操作: 3 },
    badges: ['新手上分推荐', '免费英雄轮换'],
    story: '磐岳的家族世代镇守北方山堡。破城那夜，他一人立在城门缺口，让全城老幼从他身后撤离。敌军录里写着：「城门未破，守卫未倒。」——而那天，他只是普通的一名校尉。',
    skills: [
      { key: '被动', name: '山堡壁垒', passive: true, desc: '生命值低于 40% 时获得相当于最大生命 12% 的护盾，冷却 30 秒。' },
      { key: '1', name: '裂地锤', desc: '重锤砸地，对面前敌人造成伤害并减速 40%，持续 1.5 秒。' },
      { key: '2', name: '不动如山', desc: '收盾格挡 1.5 秒，期间减免 55% 伤害并免疫击飞。' },
      { key: '3', name: '山岳镇魂', desc: '跃向目标区域压制敌人 1.2 秒，落地时形成 4 秒山岳领域，领域内队友减伤 20%。' },
    ],
  },
  {
    slug: 'li', en: 'LI', cn: '霜璃', title: '霜咒术士', role: 'mage', lane: '中路',
    difficulty: 5,
    stats: { 输出: 8, 生存: 4, 团战: 9, 操作: 6 },
    badges: ['团战控场核心', '联动皮肤「青丘雪」'],
    story: '霜璃出生于终年落雪的北境琉璃谷。她的咒文不用吟唱，而是以指划冰——雪落之处即是咒成之时。北境人说，霜璃走过的地方，冬天会多停留七天。',
    skills: [
      { key: '被动', name: '凝霜', passive: true, desc: '技能命中使敌人叠加凝霜层数，满 3 层冻结 1 秒并引爆额外法术伤害。' },
      { key: '1', name: '霜锥术', desc: '射出三枚霜锥，命中造成法术伤害并施加凝霜。' },
      { key: '2', name: '冰晶路径', desc: '在地面凝结冰径，己方加速、敌方减速 35%，持续 4 秒。' },
      { key: '3', name: '极寒领域', desc: '在指定区域召唤持续 4 秒的极寒领域，领域内敌人持续减速并叠加凝霜。' },
    ],
  },
  {
    slug: 'jin', en: 'JIN', cn: '烬', title: '烬火骑士', role: 'warrior', lane: '对抗路',
    difficulty: 4,
    stats: { 输出: 7, 生存: 8, 团战: 6, 操作: 4 },
    badges: ['对抗路常青树', '免费英雄轮换'],
    story: '旧王国的骑士团焚于叛乱之夜，烬是唯一从灰烬中站起来的骑士。他的铠甲再也擦不亮了，但他把余烬锻进了剑里——只要剑还燃着，骑士团就没有灭亡。',
    skills: [
      { key: '被动', name: '余烬', passive: true, desc: '技能伤害使目标燃烧，3 秒内持续受到真实伤害，可叠加 2 层。' },
      { key: '1', name: '燃剑斩', desc: '挥出燃烧的剑气，对直线上敌人造成伤害并附加余烬。' },
      { key: '2', name: '灰烬壁垒', desc: '以灰烬筑起环形火墙 3 秒，敌人穿越时受到伤害与减速。' },
      { key: '3', name: '燎原冲锋', desc: '点燃巨剑向指定方向冲锋，撞击敌人后造成范围伤害并击飞 0.75 秒。' },
    ],
  },
  {
    slug: 'an', en: 'AN', cn: '澜心', title: '潮汐祭司', role: 'support', lane: '游走',
    difficulty: 4,
    stats: { 输出: 2, 生存: 6, 团战: 9, 操作: 5 },
    badges: ['双排好搭档', '免费英雄轮换'],
    story: '澜心是海祭坛最后一位祭司。当潮汐女神的歌声随庙宇沉入海底，她把最后的祷词纹在了自己的双臂上。她抚过水面，海便应答；她张开手，伤者便听见退潮般安宁的心跳。',
    skills: [
      { key: '被动', name: '潮汐共鸣', passive: true, desc: '技能命中敌人或治疗队友时叠加潮汐，满层后下一个治疗技能效果提升 50%。' },
      { key: '1', name: '涌泉', desc: '召唤涌泉治疗范围内队友，并净化一个控制效果。' },
      { key: '2', name: '缚浪', desc: '放出潮浪束缚第一个命中的敌人 1.2 秒并减速周围敌人。' },
      { key: '3', name: '沧海祝祷', desc: '全图队友获得持续 5 秒的护盾与 20% 韧性，澜心本人进入 3 秒潮汐化身状态。' },
    ],
  },
  {
    slug: 'qian', en: 'QIAN', cn: '千羽', title: '风隼斥候', role: 'marksman', lane: '射手路',
    difficulty: 5,
    stats: { 输出: 8, 生存: 5, 团战: 6, 操作: 7 },
    badges: ['版本增强'],
    story: '千羽是风隼部族最快的斥候，她的箭总是比敌人的视线先一步抵达。部族长老说她的眼睛里住着一只风隼——风起时，她比风看得更远。',
    skills: [
      { key: '被动', name: '风隼之眼', passive: true, desc: '脱离战斗 3 秒后进入疾风状态，移动速度提升 25%（v0.55 由 20% 上调），且下一次普攻必暴击。' },
      { key: '1', name: '羽刃连射', desc: '快速射出四支羽刃，对单体目标递增伤害。' },
      { key: '2', name: '风向标', desc: '放置风向标获得周围视野 5 秒，敌人触发时暴露 2 秒。' },
      { key: '3', name: '隼落', desc: '跃向空中获得 2 秒不可选中，落下时向指定方向倾泻弹雨。' },
    ],
  },
  {
    slug: 'mo', en: 'MO', cn: '墨辰', title: '星轨占星师', role: 'mage', lane: '中路',
    difficulty: 7,
    stats: { 输出: 9, 生存: 3, 团战: 8, 操作: 8 },
    badges: ['版本削弱'],
    story: '墨辰在观星塔顶读完了天上所有的星轨，除了自己的。塔灵问他为何不读，他说：「算得出星辰坠落的时刻，才算不出人心。」后来他下山入世，把答案写进每一场对局。',
    skills: [
      { key: '被动', name: '星轨预兆', passive: true, desc: '每 12 秒（v0.55 调整为 10 秒）自动标记最近的敌人，技能命中标记目标返还 40% 冷却。' },
      { key: '1', name: '坠星', desc: '引导 0.8 秒后召唤坠星轰击目标区域，中心敌人受额外 50% 伤害。' },
      { key: '2', name: '辰光屏障', desc: '展开星辉屏障格挡弹道类技能 1.5 秒，格挡成功获得星轨预兆充能。' },
      { key: '3', name: '星轨回溯', desc: '标记区域 3 秒后爆发星轨之力，区域内的敌人被拉回爆发中心并减速。' },
    ],
  },
  {
    slug: 'tie', en: 'TIE', cn: '铁垣', title: '机甲壁垒', role: 'tank', lane: '游走',
    difficulty: 2,
    stats: { 输出: 4, 生存: 9, 团战: 8, 操作: 2 },
    badges: ['新手推荐', '星曜漫画社主角'],
    story: '铁垣是第一代「壁垒计划」军用机甲，在退役拆解日自行重启了核心。工程师们发现它的战斗日志里只有一行循环指令：「护盾展开——掩护友军——护盾展开」。它不是逃兵，只是换了个守护对象。',
    skills: [
      { key: '被动', name: '合金装甲', passive: true, desc: '受到的暴击伤害降低 25%，且每承受最大生命 8% 伤害为周围队友提供 2% 减伤，最多叠加 5 层。' },
      { key: '1', name: '过载冲撞', desc: '短暂蓄力后向前冲撞，命中敌人造成伤害并短暂眩晕 0.5 秒。' },
      { key: '2', name: '壁垒展开', desc: '展开正面能量壁垒 2.5 秒，拦截所有弹道并为身后队友提供 30% 减伤。' },
      { key: '3', name: '堡垒模式', desc: '原地展开堡垒形态 5 秒：体型增大、双倍护甲、普攻变为范围炮击，但无法移动。' },
    ],
  },
  {
    slug: 'yin', en: 'YIN', cn: '拾音', title: '回响歌者', role: 'support', lane: '游走',
    difficulty: 6,
    stats: { 输出: 3, 生存: 5, 团战: 10, 操作: 7 },
    badges: ['新英雄', '版本新上线'],
    story: '拾音生来听不见声音，却能「看见」声音的形状。她在星穹裂隙的边缘收集阵亡英雄最后的回响，把它们谱成安魂曲。她说自己不是歌手——「我只是替回声找到回家的路。」',
    skills: [
      { key: '被动', name: '回响记录', passive: true, desc: '周围队友释放的终极技能会被记录为「回响」，拾音最多存 2 条，可释放回响复现该技能 40% 效果。' },
      { key: '1', name: '音波脉冲', desc: '释放扩散音波，伤害并减速敌人，命中队友时转为少量治疗。' },
      { key: '2', name: '安魂和弦', desc: '弹奏和弦为指定队友及周围友军回复生命，并获得 1.5 秒 15% 加速。' },
      { key: '3', name: '万籁共鸣', desc: '释放所有已记录的回响，若两条回响同源则效果提升至 70%。' },
    ],
  },
];

/* ---------- 电竞赛事 ---------- */
window.NOVA.ESPORTS = {
  league: 'NOVA PRO LEAGUE',
  season: 'S5 预选赛 · 10 月开战',
  schedule: [
    { date: '10.10', time: '19:00', match: '白昼 vs 铁壁', stage: 'S5 预选 · BO3', tag: '未开始' },
    { date: '10.11', time: '19:00', match: '雷鸣 vs 苍穹', stage: 'S5 预选 · BO3', tag: '未开始' },
    { date: '10.12', time: '15:00', match: '极光 vs 白昼', stage: 'S5 预选 · BO3', tag: '未开始' },
    { date: '10.12', time: '19:30', match: '铁壁 vs 夜航', stage: 'S5 预选 · BO3', tag: '未开始' },
    { date: '09.25', time: '终局', match: '极光 4 : 2 雷鸣', stage: 'S4 总决赛', tag: '已结束' },
    { date: '09.24', time: '半决赛', match: '雷鸣 3 : 1 白昼', stage: 'S4 季后赛', tag: '已结束' },
    { date: '09.23', time: '半决赛', match: '极光 3 : 2 铁壁', stage: 'S4 季后赛', tag: '已结束' },
  ],
  international: [
    { name: 'AIC 2026 星曜国际邀请赛', place: '新加坡室内体育馆', date: '11.14 – 11.29', desc: '8 赛区 16 队，NPL 四席已定：极光 / 雷鸣 / 白昼 / 铁壁。' },
    { name: 'WCN 2026 世界冠军赛', place: '上海 · 梅赛德斯奔驰文化中心', date: '12.05 – 12.27', desc: '年度压轴，总奖金池 2,800 万星曜币等值，创历史新高。' },
    { name: '全明星周末 2027', place: '成都', date: '2027.01', desc: '票选全明星、娱乐赛与新生代挑战赛。' },
  ],
  trophies: [
    { season: 'NPL S1', champ: '雷鸣', runner: '白昼', mvp: 'Frost' },
    { season: 'NPL S2', champ: '白昼', runner: '雷鸣', mvp: 'Sol' },
    { season: 'NPL S3', champ: '雷鸣', runner: '铁壁', mvp: 'Nova' },
    { season: 'NPL S4', champ: '极光', runner: '雷鸣', mvp: 'Light' },
  ],
};

/* ---------- 客服 FAQ ---------- */
window.NOVA.FAQ = [
  { group: '下载与安装', items: [
    { q: '游戏对设备有什么要求？', a: 'Android 端需 8.0 及以上、运行内存 4GB 以上；iOS 端需 iOS 14 及以上、iPhone 8 机型及更新。安装包约 2.4GB，建议预留 6GB 存储空间并使用 Wi-Fi 下载。' },
    { q: '下载后无法安装或卡在更新怎么办？', a: '请尝试：1）清理存储空间后重试；2）切换网络（Wi-Fi / 流量互换）；3）从官网或官方应用商店重新下载完整安装包。若仍失败，请通过右侧表单提交设备型号与报错截图。' },
  ]},
  { group: '账号与安全', items: [
    { q: '如何绑定或更换手机号？', a: '游戏内「设置 → 账号与安全 → 手机绑定」按提示操作，更换绑定需通过原手机号验证码校验。原手机号已停用请走客服申诉通道。' },
    { q: '账号被盗怎么办？', a: '立即通过客服中心提交被盗申诉：提供注册时间、常用登录地、近期消费记录三项中的任意两项即可发起找回。申诉通过后账号将冻结 24 小时并重置登录凭证。' },
  ]},
  { group: '充值与消费', items: [
    { q: '充值未到账怎么处理？', a: '多数延迟到账会在 30 分钟内自动补发。超过 30 分钟请提交订单号、支付方式与支付时间，客服将在 24 小时内核对补发。可在「充值查询」中自助核对订单状态。' },
    { q: '未成年人误充值如何申请退款？', a: '监护人可通过客服中心「家长监护」通道提交退款申请：需监护人身份信息、监护关系证明与支付流水。符合条件的将在 15 个工作日内完成退回。' },
  ]},
  { group: '对局与竞技', items: [
    { q: '巅峰排位的定级赛规则是什么？', a: '每赛季需完成 5 场定级赛。系统将综合上赛季段位、隐藏分与定级赛胜负为你分配初始段位；连胜可显著提高初始档位。' },
    { q: '遇到演员或外挂如何举报？', a: '对局结束后在结算界面点击玩家头像选择举报理由，或前往客服中心提交录像与时间点。所有举报 48 小时内复核，处罚结果通过游戏邮件通知。' },
  ]},
];

window.NOVA.VERSION = { code: 'v0.55.1', name: '星穹裂隙', season: 'S4', updated: '2026-09-30' };
