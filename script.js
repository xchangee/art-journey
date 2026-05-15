const basePath = "artworks/";

const artworks = [
  {
    file: "sunflowers.png",
    video: "sunflowers.mp4",
    title: "向 日 葵",
    artist: "VINCENT VAN GOGH",
    year: "1888",
    place: "梵高美术馆，阿姆斯特丹",
    description: "梵高用炽热的色彩与奔放的笔触，描绘生命的热烈与希望的光芒。"
  },
  {
    file: "cafe-terrace-at-night.png",
    title: "夜 间 咖 啡 馆",
    artist: "VINCENT VAN GOGH",
    year: "1888",
    place: "克勒勒-米勒博物馆，荷兰",
    description: "蓝色夜幕下的街角燃起暖光，城市在笔触里变得亲密而辽阔。"
  },
  {
    file: "a-sunday-afternoon-on-the-island-of-la-grande-jatte.png",
    title: "大 碗 岛",
    artist: "GEORGES SEURAT",
    year: "1886",
    place: "芝加哥艺术博物馆",
    description: "点彩汇聚成周日下午的宁静，人群、草地与河岸像被阳光慢慢拼合。"
  },
  {
    file: "woman-with-fans.png",
    title: "执 扇 女 子",
    artist: "ÉDOUARD MANET",
    year: "1879",
    place: "奥赛博物馆，巴黎",
    description: "黑色折扇与浅色背景彼此映衬，人物的姿态在松弛中保留锋利的现代感。"
  },
  {
    file: "flowers-in-a-crystal-vase.png",
    title: "玻 璃 花 瓶",
    artist: "ÉDOUARD MANET",
    year: "1882",
    place: "奥赛博物馆，巴黎",
    description: "微凉的花束在暗色背景里发亮，日常静物也有短暂而清澈的呼吸。"
  },
  {
    file: "the-ballet-class.png",
    title: "舞 蹈 课",
    artist: "EDGAR DEGAS",
    year: "1874",
    place: "奥赛博物馆，巴黎",
    description: "练功房里的光、裙摆与姿态凝成瞬间，舞者的等待也成为表演。"
  },
  {
    file: "napoleon-crossing-the-alps.png",
    title: "拿 破 仑",
    artist: "JACQUES-LOUIS DAVID",
    year: "1801",
    place: "凡尔赛宫，法国",
    description: "马蹄踏碎风暴，英雄叙事在斜线构图中获得近乎戏剧的速度。"
  },
  {
    file: "the-church-at-auvers.png",
    title: "奥 维 尔 教 堂",
    artist: "VINCENT VAN GOGH",
    year: "1890",
    place: "奥赛博物馆，巴黎",
    description: "教堂在深蓝天空下微微扭动，建筑被转化成精神与色彩的回声。"
  },
  {
    file: "travelers-among-mountains-and-streams.png",
    title: "溪 山 行 旅",
    artist: "FAN KUAN",
    year: "约 1000",
    place: "台北故宫博物院",
    description: "山势如碑，行旅如尘，中国山水把天地尺度压进一卷静默长卷。"
  },
  {
    file: "woman-with-a-parasol.png",
    title: "撑 伞 女 子",
    artist: "CLAUDE MONET",
    year: "1875",
    place: "国家美术馆，华盛顿",
    description: "风穿过草地与白裙，人物像停在空气中，也像正要被光带走。"
  },
  {
    file: "ancient-pastoral-scroll.png",
    title: "古 卷 牧 歌",
    artist: "CHINESE HANDSCROLL",
    year: "宋元时期",
    place: "纸本设色长卷",
    description: "人物与动物散落在古树旁，留白让画卷拥有缓慢而悠远的呼吸。"
  },
  {
    file: "painter-and-girl.png",
    title: "画 家 与 少 女",
    artist: "MARY CASSATT",
    year: "1880",
    place: "印象派收藏",
    description: "栏杆、树影与人物目光构成温柔的停顿，画面像一段未说完的话。"
  },
  {
    file: "the-gleaners.png",
    title: "拾 穗 者",
    artist: "JEAN-FRANÇOIS MILLET",
    year: "1857",
    place: "奥赛博物馆，巴黎",
    description: "弯腰的劳动者占据田野前景，朴素动作里有沉默而坚实的尊严。"
  },
  {
    file: "young-woman-seated-at-a-virginal.png",
    title: "静 坐 女 子",
    artist: "JOHANNES VERMEER",
    year: "1665",
    place: "荷兰黄金时代绘画",
    description: "室内的克制光线落在人物身上，静默因此变成可被凝视的时间。"
  },
  {
    file: "the-ninth-wave.png",
    title: "暴 风 雨",
    artist: "IVAN AIVAZOVSKY",
    year: "1850",
    place: "俄罗斯博物馆，圣彼得堡",
    description: "浪峰、乌云与人影互相逼近，自然的力量在冷光里显得震荡不安。"
  },
  {
    file: "dwellings-by-the-stream.png",
    title: "溪 岸 人 家",
    artist: "CHINESE LANDSCAPE",
    year: "明代",
    place: "纸本设色长卷",
    description: "稀疏人物与远处屋舍被留白包围，画面像一段慢慢展开的古典诗。"
  },
  {
    file: "girl-reading-a-letter-at-an-open-window.png",
    title: "阅 读 少 女",
    artist: "JOHANNES VERMEER",
    year: "1657",
    place: "德累斯顿历代大师画廊",
    description: "柔暗背景里的人物低头沉思，阅读的瞬间被处理成亲密的内心风景。"
  },
  {
    file: "the-red-studio.png",
    title: "红 色 画 室",
    artist: "HENRI MATISSE",
    year: "1911",
    place: "现代艺术博物馆，纽约",
    description: "红色空间把家具与画作压成平面，马蒂斯让房间变成色彩本身。"
  },
  {
    file: "court-ladies-preparing-newly-woven-silk.png",
    title: "仕 女 行 乐",
    artist: "CHINESE FIGURE PAINTING",
    year: "唐宋风格",
    place: "绢本设色",
    description: "人物在简净背景里错落行进，衣袂和器物让叙事保持轻盈节奏。"
  },
  {
    file: "the-luncheon-on-the-grass.png",
    title: "草 地 上 的 午 餐",
    artist: "ÉDOUARD MANET",
    year: "1863",
    place: "奥赛博物馆，巴黎",
    description: "古典姿态与现代日常并置，马奈把观看本身推到观众面前。"
  },
  {
    file: "pure-and-remote-view-of-streams-and-mountains.png",
    title: "溪 山 清 远",
    artist: "CHINESE LANDSCAPE",
    year: "明清时期",
    place: "纸本水墨",
    description: "山石与树影在淡墨里层层铺开，远近之间留出可游可居的空间。"
  },
  {
    file: "woman-at-a-window.png",
    title: "倚 窗 少 女",
    artist: "JOHANNES VERMEER",
    year: "1657",
    place: "德累斯顿历代大师画廊",
    description: "窗边的光落在侧影上，室内空间因此拥有了等待与秘密。"
  },
  {
    file: "luncheon-of-the-boating-party.png",
    title: "船 上 午 宴",
    artist: "PIERRE-AUGUSTE RENOIR",
    year: "1881",
    place: "菲利普斯收藏馆，华盛顿",
    description: "水面、白帆与人物围成轻快的社交场景，阳光在船舷边闪动。"
  },
  {
    file: "old-man-at-the-window.png",
    title: "窗 边 老 人",
    artist: "REMBRANDT VAN RIJN",
    year: "1650",
    place: "荷兰绘画收藏",
    description: "暗处人物贴近窗沿，强烈明暗让一段普通凝望拥有戏剧重量。"
  },
  {
    file: "a-thousand-li-of-rivers-and-mountains.png",
    title: "青 绿 山 水",
    artist: "WANG XIMENG",
    year: "1113",
    place: "故宫博物院，北京",
    description: "矿物色铺出山峦的清辉，长卷在宏大与精微之间缓缓流动。"
  },
  {
    file: "the-langlois-bridge-at-arles.png",
    title: "阿 尔 勒 吊 桥",
    artist: "VINCENT VAN GOGH",
    year: "1888",
    place: "克勒勒-米勒博物馆，荷兰",
    description: "桥梁、河岸与明亮色块彼此呼应，日常景象被转化成热烈结构。"
  },
  {
    file: "admonitions-of-the-instructress-to-the-court-ladies.png",
    title: "女 史 箴 图",
    artist: "GU KAIZHI",
    year: "东晋",
    place: "大英博物馆，伦敦",
    description: "线条纤细而坚定，人物关系在克制的动作与留白里展开。"
  },
  {
    file: "the-dream.png",
    title: "热 带 雨 林",
    artist: "HENRI ROUSSEAU",
    year: "1910",
    place: "现代艺术博物馆，纽约",
    description: "植物层层叠起，卢梭用梦境般的密度创造出想象中的丛林。"
  },
  {
    file: "napoleon-crossing-the-alps-alternate.png",
    title: "拿 破 仑 雪 径",
    artist: "JACQUES-LOUIS DAVID",
    year: "1801",
    place: "凡尔赛宫，法国",
    description: "马蹄踏碎风暴，英雄叙事在斜线构图中获得近乎戏剧的速度。"
  },
  {
    file: "the-beach-at-trouville.png",
    title: "海 边 散 步",
    artist: "CLAUDE MONET",
    year: "1882",
    place: "奥赛博物馆，巴黎",
    description: "浅蓝海岸与远处人影相遇，画面里有一种刚被海风吹开的安静。"
  },
  {
    file: "visiting-a-friend-in-the-mountains.png",
    title: "远 山 访 友",
    artist: "CHINESE FIGURE PAINTING",
    year: "清代",
    place: "绢本设色",
    description: "人物穿行于山石与松影之间，叙事像从画卷边缘轻声走来。"
  },
  {
    file: "the-angelus.png",
    title: "晚 钟",
    artist: "JEAN-FRANÇOIS MILLET",
    year: "1857",
    place: "奥赛博物馆，巴黎",
    description: "暮色里的两位农人停下劳作，低头祈祷，田野因此拥有安静而深沉的重量。"
  },
  {
    file: "the-coronation-of-napoleon.png",
    title: "拿 破 仑 加 冕",
    artist: "JACQUES-LOUIS DAVID",
    year: "1807",
    place: "卢浮宫，巴黎",
    description: "宏大的宫廷仪式被推至舞台中央，权力、秩序与凝视在光线中层层展开。"
  },
  {
    file: "cafe-terrace-at-night-alternate.png",
    title: "夜 间 咖 啡 馆",
    artist: "VINCENT VAN GOGH",
    year: "1888",
    place: "克勒勒-米勒博物馆，荷兰",
    description: "阿尔勒的夜色被黄色灯光点亮，街道像在星空下缓慢呼吸。"
  },
  {
    file: "samurai-with-a-lantern.png",
    title: "武 士 提 灯",
    artist: "JAPANESE PAINTING",
    year: "江户时期",
    place: "纸本设色",
    description: "人物被大片留白托起，线条与姿态让武士形象显得轻捷而克制。"
  },
  {
    file: "travelers-in-a-winter-landscape.png",
    title: "雪 景 行 旅",
    artist: "CHINESE LANDSCAPE",
    year: "古代山水",
    place: "纸本水墨",
    description: "山径与行旅隐入浅淡墨色，寒意在空白与远山之间缓缓散开。"
  },
  {
    file: "birds-and-plum-blossoms.png",
    title: "花 鸟 枝 影",
    artist: "CHINESE FLOWER-AND-BIRD PAINTING",
    year: "明清风格",
    place: "纸本水墨",
    description: "枝叶与鸟影以墨色交错，轻盈的自然片段被凝成一段静默诗意。"
  },
  {
    file: "the-magpie.png",
    title: "喜 鹊",
    artist: "CLAUDE MONET",
    year: "1869",
    place: "奥赛博物馆，巴黎",
    description: "雪后的庭院安静明亮，细小的鸟影让冬日光线显得更加轻盈。"
  },
  {
    file: "joan-of-arc-at-the-coronation-of-charles-vii.png",
    title: "圣 女 贞 德",
    artist: "JULES EUGÈNE LENEPVEU",
    year: "1889",
    place: "万神殿，巴黎",
    description: "宗教与历史叙事交织在肃穆空间里，人物像被光线推向命运的节点。"
  },
  {
    file: "interior-in-strandgade.png",
    title: "室 内",
    artist: "VILHELM HAMMERSHØI",
    year: "1901",
    place: "丹麦国家美术馆",
    description: "空房间、白墙与椅子构成近乎无声的空间，日常被处理成冷静的冥想。"
  },
  {
    file: "houses-at-auvers.png",
    title: "奥 维 尔 人 家",
    artist: "VINCENT VAN GOGH",
    year: "1890",
    place: "奥维尔，法国",
    description: "村舍与树影被厚重笔触重新组织，平凡景物在色彩里变得炽热。"
  },
  {
    file: "fishing-boats-at-sea.png",
    title: "海 上 渔 船",
    artist: "WILLIAM TURNER",
    year: "1796",
    place: "泰特美术馆，伦敦",
    description: "船帆、海面与阴云交织，海风中的光让画面保持不稳定的运动感。"
  },
  {
    file: "young-woman-in-the-garden.png",
    title: "花 园 少 女",
    artist: "BERTHE MORISOT",
    year: "1880",
    place: "印象派收藏",
    description: "柔和色块包围静坐人物，花园里的空气像被阳光轻轻擦亮。"
  },
  {
    file: "the-third-class-carriage.png",
    video: "the-third-class-carriage.mp4",
    title: "三 等 车 厢",
    artist: "HONORÉ DAUMIER",
    year: "1864",
    place: "大都会艺术博物馆，纽约",
    description: "拥挤车厢里的沉默人物让现代城市生活显出朴素而尖锐的真实。"
  },
  {
    file: "along-the-river-during-the-qingming-festival.png",
    title: "清 明 上 河 图",
    artist: "ZHANG ZEDUAN",
    year: "北宋",
    place: "故宫博物院，北京",
    description: "桥梁、街市与行人沿长卷展开，城市生活被压缩成可缓慢游历的时间。"
  },
  {
    file: "the-church-at-auvers-alternate.png",
    title: "奥 维 尔 教 堂",
    artist: "VINCENT VAN GOGH",
    year: "1890",
    place: "奥赛博物馆，巴黎",
    description: "教堂与村路在笔触中微微震动，建筑像一段被色彩推动的精神回声。"
  },
  {
    file: "wheatfield-with-crows.png",
    title: "麦 田 群 鸦",
    artist: "VINCENT VAN GOGH",
    year: "1890",
    place: "梵高美术馆，阿姆斯特丹",
    description: "金色麦田与远处天空相互压迫，乌鸦掠过画面，留下不安而强烈的余响。"
  },
  {
    file: "boating-on-the-seine.png",
    title: "塞 纳 河 泛 舟",
    artist: "PIERRE-AUGUSTE RENOIR",
    year: "1879",
    place: "印象派收藏",
    description: "船只、人物与水光组成轻快的夏日片段，社交场景在河面边缘闪烁。"
  },
  {
    file: "farmhouse-in-provence.png",
    title: "普 罗 旺 斯 农 舍",
    artist: "VINCENT VAN GOGH",
    year: "1888",
    place: "法国阿尔勒",
    description: "土墙、干草与柏树在阳光里展开，南法乡间被转化成明亮的色彩结构。"
  },
  {
    file: "terrace-at-sainte-adresse.png",
    title: "圣 阿 德 雷 斯 花 园",
    artist: "CLAUDE MONET",
    year: "1867",
    place: "大都会艺术博物馆，纽约",
    description: "海边露台上的人物望向船影与远方，风、旗帜和海面共同组织出轻快节奏。"
  },
  {
    file: "flower-and-bird-scroll.png",
    title: "花 鸟 卷",
    artist: "CHINESE FLOWER-AND-BIRD PAINTING",
    year: "古代绘画",
    place: "纸本水墨",
    description: "细枝与禽鸟在淡墨中若隐若现，画面像从安静空气里浮出来。"
  },
  {
    file: "two-women-at-the-window.png",
    title: "窗 边 女 子",
    artist: "BARTOLOMÉ ESTEBAN MURILLO",
    year: "1670",
    place: "国家美术馆，华盛顿",
    description: "窗框里的两位女子向外凝望，亲密笑意让画面跨过了室内与街道的边界。"
  },
  {
    file: "the-angelus-alternate.png",
    title: "晚 钟",
    artist: "JEAN-FRANÇOIS MILLET",
    year: "1857",
    place: "奥赛博物馆，巴黎",
    description: "低垂的天空、田野与静止人物构成祈祷时刻，沉默里有朴素的庄严。"
  }
];

const musicTracks = [
  {
    title: "Satie · Gymnopédie No. 1",
    src: "audio/satie-gymnopedie-no-1.mp3"
  },
  {
    title: "Debussy · Clair de lune",
    src: "audio/debussy-clair-de-lune.mp3"
  },
  {
    title: "Ravel · Pavane",
    src: "audio/ravel-pavane.mp3"
  }
];

const heroImage = document.querySelector("#heroImage");
const heroVideo = document.querySelector("#heroVideo");
const artistLabel = document.querySelector("#artistLabel");
const titleLabel = document.querySelector("#titleLabel");
const yearLabel = document.querySelector("#yearLabel");
const placeLabel = document.querySelector("#placeLabel");
const descriptionLabel = document.querySelector("#descriptionLabel");
const gallery = document.querySelector("#gallery");
const thumbTrack = document.querySelector("#thumbTrack");
const pager = document.querySelector("#pager");
const nextButton = document.querySelector("#nextButton");
const musicPlayer = document.querySelector("#musicPlayer");
const musicTrackName = document.querySelector("#musicTrackName");
const loadingScreen = document.querySelector("#loadingScreen");
const loadingParticles = document.querySelector("#loadingParticles");
const startExploreButton = document.querySelector("#startExplore");
const mainStage = document.querySelector("#mainStage");

let activeIndex = 0;
let switchTimer;
let mediaSwitchId = 0;
let railScrollTimer;
let railIntroTimer;
let activeMusicIndex = 0;

const backgroundMusic = new Audio();
backgroundMusic.preload = "auto";
backgroundMusic.volume = 0.55;

const preloadRule = Object.freeze({
  priorityImageCount: 10,
  imageConcurrency: 5,
  videoConcurrency: 1,
  idleTimeout: 700,
  videoWarmupTimeout: 14000
});

const mediaPreloadState = {
  isStarted: false,
  imageCache: new Map(),
  videoCache: new Map(),
  videoElements: new Map(),
  imagesLoaded: 0,
  videosLoaded: 0,
  imagesTotal: 0,
  videosTotal: 0
};

const staticImageAssets = [
  "artworks/loading-cover.png",
  "artworks/art-journey-preview.png"
];

function imagePath(artwork) {
  return `${basePath}${artwork.file}`;
}

function videoPath(artwork) {
  return `${basePath}${artwork.video}`;
}

function keepVideoSilent(video) {
  video.defaultMuted = true;
  video.muted = true;
  video.volume = 0;
}

function uniqueAssets(paths) {
  return [...new Set(paths.filter(Boolean))];
}

function runPreloadQueue(items, worker, concurrency) {
  if (items.length === 0) return Promise.resolve();

  let nextIndex = 0;
  const workerCount = Math.min(concurrency, items.length);
  const workers = Array.from({ length: workerCount }, async () => {
    while (nextIndex < items.length) {
      const item = items[nextIndex];
      nextIndex += 1;
      await worker(item);
    }
  });

  return Promise.all(workers);
}

function schedulePreloadWork(callback) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: preloadRule.idleTimeout });
    return;
  }

  window.setTimeout(callback, 0);
}

function markImagePreloaded() {
  mediaPreloadState.imagesLoaded += 1;
}

function markVideoPreloaded() {
  mediaPreloadState.videosLoaded += 1;
}

function preloadImageAsset(src, shouldDecode = false) {
  if (mediaPreloadState.imageCache.has(src)) {
    return mediaPreloadState.imageCache.get(src);
  }

  const promise = new Promise((resolve) => {
    const image = new Image();
    let isSettled = false;
    const complete = async (isLoaded) => {
      if (isSettled) return;
      isSettled = true;

      if (isLoaded && shouldDecode && image.decode) {
        await image.decode().catch(() => {});
      }

      resolve({ src, isLoaded });
    };

    image.decoding = "async";
    image.loading = "eager";
    image.onload = () => complete(true);
    image.onerror = () => complete(false);
    image.src = src;

    if (image.complete) {
      complete(true);
    }
  }).then((result) => {
    markImagePreloaded();
    return result;
  });

  mediaPreloadState.imageCache.set(src, promise);
  return promise;
}

function preloadVideoAsset(src) {
  if (mediaPreloadState.videoCache.has(src)) {
    return mediaPreloadState.videoCache.get(src);
  }

  const promise = new Promise((resolve) => {
    const video = document.createElement("video");
    let isSettled = false;

    const finish = (isLoaded) => {
      if (isSettled) return;
      isSettled = true;
      window.clearTimeout(timeoutId);
      video.removeEventListener("canplaythrough", handleLoaded);
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("error", handleError);
      resolve({ src, isLoaded });
    };

    const handleLoaded = () => finish(true);
    const handleError = () => finish(false);
    const timeoutId = window.setTimeout(() => finish(video.readyState > 0), preloadRule.videoWarmupTimeout);

    keepVideoSilent(video);
    video.playsInline = true;
    video.preload = "auto";
    video.addEventListener("canplaythrough", handleLoaded);
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("error", handleError);
    video.src = src;
    mediaPreloadState.videoElements.set(src, video);
    video.load();
  }).then((result) => {
    markVideoPreloaded();
    return result;
  });

  mediaPreloadState.videoCache.set(src, promise);
  return promise;
}

function beginSiteMediaPreload() {
  if (mediaPreloadState.isStarted) return;

  mediaPreloadState.isStarted = true;

  const imageAssets = uniqueAssets([...staticImageAssets, ...artworks.map(imagePath)]);
  const videoAssets = uniqueAssets(artworks.map((artwork) => artwork.video && videoPath(artwork)));
  const priorityImages = imageAssets.slice(0, preloadRule.priorityImageCount);
  const backgroundImages = imageAssets.slice(preloadRule.priorityImageCount);

  mediaPreloadState.imagesTotal = imageAssets.length;
  mediaPreloadState.videosTotal = videoAssets.length;

  runPreloadQueue(
    priorityImages,
    (src) => preloadImageAsset(src, true),
    preloadRule.imageConcurrency
  ).then(() => {
    schedulePreloadWork(() => {
      runPreloadQueue(
        backgroundImages,
        (src) => preloadImageAsset(src),
        preloadRule.imageConcurrency
      );
      runPreloadQueue(videoAssets, preloadVideoAsset, preloadRule.videoConcurrency);
    });
  });
}

function seededValue(index, salt) {
  const value = Math.sin(index * 77.7 + salt * 131.9) * 10000;
  return value - Math.floor(value);
}

function renderLoadingParticles() {
  if (!loadingParticles) return;

  const particles = document.createDocumentFragment();
  const particleCount = 70;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    const size = 1.8 + seededValue(index, 1) * 6.8;
    const driftX = -42 + seededValue(index, 2) * 84;
    const driftY = -124 - seededValue(index, 3) * 118;
    const duration = 6.6 + seededValue(index, 4) * 8.8;
    const delay = -seededValue(index, 5) * duration;
    const alpha = 0.18 + seededValue(index, 6) * 0.58;
    const blur = seededValue(index, 7) > 0.68 ? 1.8 : 0.35 + seededValue(index, 8) * 0.8;

    particle.className = "loading-particle";
    particle.style.setProperty("--x", `${4 + seededValue(index, 9) * 92}%`);
    particle.style.setProperty("--y", `${8 + seededValue(index, 10) * 82}%`);
    particle.style.setProperty("--size", `${size.toFixed(2)}px`);
    particle.style.setProperty("--drift-x", `${driftX.toFixed(1)}px`);
    particle.style.setProperty("--drift-y", `${driftY.toFixed(1)}px`);
    particle.style.setProperty("--duration", `${duration.toFixed(2)}s`);
    particle.style.setProperty("--delay", `${delay.toFixed(2)}s`);
    particle.style.setProperty("--alpha", alpha.toFixed(2));
    particle.style.setProperty("--blur", `${blur.toFixed(2)}px`);
    particles.appendChild(particle);
  }

  loadingParticles.appendChild(particles);
}

function enterGallery() {
  if (!loadingScreen) return;

  mainStage?.removeAttribute("inert");
  mainStage?.setAttribute("aria-hidden", "false");
  loadingScreen.setAttribute("aria-hidden", "true");
  loadingScreen.classList.add("is-leaving");
  showInitialRailHint();

  window.setTimeout(() => {
    loadingScreen.hidden = true;
    mainStage?.focus({ preventScroll: true });
  }, 860);
}

function cleanTitle(artwork) {
  return artwork.title.replaceAll(" ", "");
}

function beginMediaSwitch() {
  window.clearTimeout(switchTimer);
  heroImage.classList.add("is-switching");
  heroVideo.classList.add("is-switching");
}

function finishMediaSwitch(activeElement) {
  const inactiveElement = activeElement === heroImage ? heroVideo : heroImage;

  inactiveElement.classList.remove("is-visible", "is-switching");
  activeElement.classList.add("is-visible");

  switchTimer = window.setTimeout(() => {
    heroImage.classList.remove("is-switching");
    heroVideo.classList.remove("is-switching");
  }, 90);
}

function stopHeroVideo() {
  heroVideo.pause();
  heroVideo.removeAttribute("src");
  heroVideo.removeAttribute("poster");
  heroVideo.load();
}

function showImageArtwork(artwork, switchId) {
  const nextSrc = imagePath(artwork);
  const loader = new Image();

  loader.onload = () => {
    if (switchId !== mediaSwitchId) return;

    stopHeroVideo();
    heroImage.src = nextSrc;
    heroImage.alt = cleanTitle(artwork);
    finishMediaSwitch(heroImage);
  };

  loader.src = nextSrc;
}

function showVideoArtwork(artwork, switchId) {
  const posterSrc = imagePath(artwork);
  const nextSrc = videoPath(artwork);

  heroVideo.addEventListener(
    "error",
    () => {
      if (switchId === mediaSwitchId) {
        showImageArtwork(artwork, switchId);
      }
    },
    { once: true }
  );

  heroImage.src = posterSrc;
  heroImage.alt = cleanTitle(artwork);
  keepVideoSilent(heroVideo);
  heroVideo.poster = posterSrc;
  heroVideo.src = nextSrc;
  heroVideo.load();
  finishMediaSwitch(heroVideo);

  const playPromise = heroVideo.play();
  if (playPromise) {
    playPromise.catch(() => {});
  }
}

function renderGallery() {
  const thumbs = document.createDocumentFragment();
  const dots = document.createDocumentFragment();

  artworks.forEach((artwork, index) => {
    const thumb = document.createElement("button");
    thumb.className = "thumb-card";
    thumb.type = "button";
    thumb.dataset.index = String(index);
    thumb.setAttribute("aria-label", `查看作品：${cleanTitle(artwork)}`);
    thumb.innerHTML = `
      <img src="${imagePath(artwork)}" alt="${cleanTitle(artwork)}" loading="${index < 7 ? "eager" : "lazy"}" />
      <span>${cleanTitle(artwork)}</span>
    `;
    thumbs.appendChild(thumb);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.dataset.index = String(index);
    dot.setAttribute("aria-label", `第 ${index + 1} 幅`);
    dots.appendChild(dot);
  });

  thumbTrack.appendChild(thumbs);
  pager.appendChild(dots);
}

function centerThumbInRail(button) {
  const left = button.offsetLeft - (thumbTrack.clientWidth - button.offsetWidth) / 2;
  thumbTrack.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
}

function updateRailProgress() {
  const maxScroll = thumbTrack.scrollWidth - thumbTrack.clientWidth;
  const progress = maxScroll > 0 ? thumbTrack.scrollLeft / maxScroll : 0;
  const nearestIndex = Math.round(progress * (artworks.length - 1));

  gallery.style.setProperty("--rail-progress", progress.toFixed(4));

  document.querySelectorAll(".pager button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-in-view", Math.abs(buttonIndex - nearestIndex) <= 1);
  });
}

function pulseRailScroll() {
  gallery.classList.add("is-wheel-scrolling");
  window.clearTimeout(railScrollTimer);
  railScrollTimer = window.setTimeout(() => {
    gallery.classList.remove("is-wheel-scrolling");
  }, 900);
}

function showInitialRailHint() {
  gallery.classList.add("is-intro-visible");
  window.clearTimeout(railIntroTimer);
  railIntroTimer = window.setTimeout(() => {
    gallery.classList.remove("is-intro-visible");
  }, 10000);
}

function setMusicTrack(index) {
  activeMusicIndex = (index + musicTracks.length) % musicTracks.length;
  backgroundMusic.src = musicTracks[activeMusicIndex].src;
  backgroundMusic.load();
  updateMusicPlayer();
}

function updateMusicPlayer() {
  if (!musicPlayer || !musicTrackName) return;

  const track = musicTracks[activeMusicIndex];
  const isPlaying = !backgroundMusic.paused && !backgroundMusic.ended;
  musicTrackName.textContent = track.title;
  musicPlayer.classList.toggle("is-playing", isPlaying);
  musicPlayer.setAttribute("aria-pressed", String(isPlaying));
  musicPlayer.setAttribute(
    "aria-label",
    `${isPlaying ? "暂停" : "播放"}背景音乐：${track.title}`
  );
  musicPlayer.title = `${isPlaying ? "暂停" : "播放"}背景音乐`;
}

async function playBackgroundMusic() {
  try {
    await backgroundMusic.play();
  } catch (error) {
    updateMusicPlayer();
  }
}

function wheelToHorizontalScroll(event) {
  const maxScroll = thumbTrack.scrollWidth - thumbTrack.clientWidth;
  const scrollSpeedMultiplier = 2;
  if (maxScroll <= 0) return;

  const dominantDelta =
    Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (dominantDelta === 0) return;

  const modeMultiplier =
    event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 32
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? thumbTrack.clientWidth
        : 1;

  event.preventDefault();
  thumbTrack.scrollLeft += dominantDelta * modeMultiplier * scrollSpeedMultiplier;
  updateRailProgress();
  pulseRailScroll();
}

function setActiveArtwork(index, shouldScroll = true) {
  const normalizedIndex = (index + artworks.length) % artworks.length;
  const artwork = artworks[normalizedIndex];
  activeIndex = normalizedIndex;

  const switchId = ++mediaSwitchId;
  beginMediaSwitch();

  if (artwork.video) {
    showVideoArtwork(artwork, switchId);
  } else {
    showImageArtwork(artwork, switchId);
  }

  artistLabel.textContent = artwork.artist;
  titleLabel.textContent = artwork.title;
  yearLabel.textContent = artwork.year;
  placeLabel.textContent = artwork.place;
  descriptionLabel.textContent = artwork.description;

  document.querySelectorAll(".thumb-card").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === normalizedIndex);
    button.setAttribute("aria-pressed", String(buttonIndex === normalizedIndex));
    if (buttonIndex === normalizedIndex && shouldScroll) {
      centerThumbInRail(button);
    }
  });

  document.querySelectorAll(".pager button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === normalizedIndex);
  });
}

renderGallery();
renderLoadingParticles();
setActiveArtwork(0, false);
updateRailProgress();
setMusicTrack(0);
beginSiteMediaPreload();
showInitialRailHint();

startExploreButton?.addEventListener("click", () => {
  enterGallery();
  playBackgroundMusic();
});

gallery.addEventListener("wheel", wheelToHorizontalScroll, { passive: false });
thumbTrack.addEventListener("scroll", updateRailProgress, { passive: true });

thumbTrack.addEventListener("click", (event) => {
  const button = event.target.closest(".thumb-card");
  if (!button) return;
  setActiveArtwork(Number(button.dataset.index));
});

pager.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  setActiveArtwork(Number(button.dataset.index));
});

nextButton.addEventListener("click", () => setActiveArtwork(activeIndex + 1));

musicPlayer.addEventListener("click", () => {
  if (!backgroundMusic.paused) {
    backgroundMusic.pause();
    return;
  }

  playBackgroundMusic();
});

backgroundMusic.addEventListener("play", updateMusicPlayer);
backgroundMusic.addEventListener("pause", updateMusicPlayer);
backgroundMusic.addEventListener("ended", () => {
  setMusicTrack(activeMusicIndex + 1);
  playBackgroundMusic();
});
backgroundMusic.addEventListener("error", updateMusicPlayer);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    setActiveArtwork(activeIndex + 1);
  }
  if (event.key === "ArrowLeft") {
    setActiveArtwork(activeIndex - 1);
  }
});
