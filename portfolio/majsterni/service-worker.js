if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,r,s)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}})).then(e=>{const i=s(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./js/main.9b1b65d5a06e8c76185c.js",revision:"2914065595b9fe256d65e2fa7bc74d03"},{url:"./styles/main.9b1b65d5a06e8c76185c.css",revision:"66be2829305226dc89345ef605079c85"},{url:"about.html",revision:"b122e79b934d0e62134766873790f422"},{url:"architecture.html",revision:"a7152766c8f09ef30ec24d903794db65"},{url:"blog.html",revision:"d60462e12d5ca021c4c1ec4b75a9d096"},{url:"career.html",revision:"508c5910eb148801e2c45b3b5af02f9e"},{url:"case.html",revision:"2df4487aee06ce7327e75447485edf96"},{url:"community.html",revision:"100ac40bb7f7d7a956f253b97b9cafbe"},{url:"events.html",revision:"de849c355a26206fdad62d47adc57d74"},{url:"fonts/CeraPro-Light.eot",revision:"25ecb0ea3804ef5476dc91c114999597"},{url:"fonts/CeraPro-Light.ttf",revision:"deec3c75dea68cb562000d6893f8a48f"},{url:"fonts/CeraPro-Light.woff",revision:"a9821ec431598f380d926e5528425e89"},{url:"fonts/CeraPro-Medium.eot",revision:"12cb515cf96257eb006975f7ec5c251a"},{url:"fonts/CeraPro-Medium.ttf",revision:"bafc951d7d329580e96345cc473c4d3b"},{url:"fonts/CeraPro-Medium.woff",revision:"f095019108fd2d78d76b6575a2af80de"},{url:"fonts/CeraPro-Regular.eot",revision:"d845af5681386c04bec48b4b918c2df8"},{url:"fonts/CeraPro-Regular.ttf",revision:"f582d3a21e59803eb6af6411dd730f32"},{url:"fonts/CeraPro-Regular.woff",revision:"8fa6dc48a21663687f973f5cb8b1c111"},{url:"fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"images/TFTL_logo.svg",revision:"f3c0381d653ccecfb11d8aef6592fff5"},{url:"images/TFTL_logo_dark.svg",revision:"acc4defe816467f0b4146d306d00655b"},{url:"images/advantages/1.png",revision:"9e9663c4247133574e4866cd71df84e9"},{url:"images/advantages/2.png",revision:"aa51d1d242cd1a46bb08e96da1833371"},{url:"images/advantages/3.png",revision:"814b3020b656fcf259a8484623a3dd4f"},{url:"images/arrow_left_white.svg",revision:"91d0db7788c796b4712e076edcbb3793"},{url:"images/arrow_right_dark.png",revision:"483931e04572c8689c587e35b36b2731"},{url:"images/arrow_right_dark.svg",revision:"f87e9d1b28d91cb6f0145d530408483e"},{url:"images/arrow_right_white.png",revision:"483931e04572c8689c587e35b36b2731"},{url:"images/arrow_right_white.svg",revision:"e0a03d806bb2a3f40595c9b7998c3e3d"},{url:"images/articles/1.png",revision:"252b13185d48075aed434388714845aa"},{url:"images/articles/2.png",revision:"dde5d9e471e8e3b35e6175e96a20218e"},{url:"images/articles/3.png",revision:"ecec0809169c79c34d08cf97e571d66d"},{url:"images/articles/4.png",revision:"3124da5cccd9b093b86631ba9d3ad252"},{url:"images/articles/5.png",revision:"a7d91dec1a28d6d71f0b2e31817a4ee8"},{url:"images/articles/6.png",revision:"22b5fe1a83a5be255d7b50a43010fe24"},{url:"images/bg/architecture_main.jpg",revision:"1a35d6e492c4461e9e6795e8e15dc7b8"},{url:"images/bg/case.png",revision:"a9379f958fb28de4682f087031959b1a"},{url:"images/bg/comm_mailing.png",revision:"df00f45f603e2c169b377c83e17671bb"},{url:"images/bg/community.png",revision:"14b0694d52542467141a1390136b94b1"},{url:"images/bg/image1.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/bg/technologies.png",revision:"1895f5b79f81ebfa63d5368d94956111"},{url:"images/cases/1.png",revision:"f903c62072bbbc99fe747f2d17a3676d"},{url:"images/cases/image1.jpg",revision:"0a885cf9e9b6bacca9d1f59a93af597f"},{url:"images/cases/image2.jpg",revision:"70208fa75644275d3892b2e8db7a4c98"},{url:"images/cases/next.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/cases/pic1.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/pic2.jpg",revision:"af7e67ad5d1978b82e393219dbdb3289"},{url:"images/cases/pic3.jpg",revision:"14d0a05c0267a6118588825a4e5e81e9"},{url:"images/cases/pic4.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/slide2.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/slide3.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/chevron-left_dark.svg",revision:"c021c7e718960b13c9f40dd5e66227b1"},{url:"images/chevron-left_dark_pagin.svg",revision:"548bdd7e950f2aac901405731f2ef319"},{url:"images/chevron-left_white_pagin.svg",revision:"e79ae4158506de720ce17d1c3a894579"},{url:"images/chevron-right_dark.svg",revision:"7e4afa4e5f321a17a96eaaa37d9a5c99"},{url:"images/chevron-right_dark_pagin.svg",revision:"8c52dd881c5aa6511f07253889507cd2"},{url:"images/chevron-right_white.svg",revision:"bd28cad171e3ad792887c3c6d3989632"},{url:"images/chevron-right_white_pagin.svg",revision:"462172e5d7f36972c87573624d5eac8b"},{url:"images/cursor.png",revision:"e46cacf932aebb08c21eaabbdae95477"},{url:"images/cursor.svg",revision:"43b2667674c44764baf81bc60e20da08"},{url:"images/cursor_dark.png",revision:"3f6d99dd54e113d82d9fa164c8d89c4e"},{url:"images/gallery/1.png",revision:"e236f2f7b20d62f8df934c9495b88e3d"},{url:"images/gallery/2.png",revision:"a9379f958fb28de4682f087031959b1a"},{url:"images/gallery/3.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/gallery/4.png",revision:"b2e084d40e39f188438d6488731118e2"},{url:"images/gallery/5.png",revision:"6a6537d773a60db866780e68e3120268"},{url:"images/gallery/7.png",revision:"319070dcfc3240002b7eec18a5cee663"},{url:"images/gallery/8.png",revision:"a125c7e6835895da14cfe9f6c68e209c"},{url:"images/gallery/9.png",revision:"df00f45f603e2c169b377c83e17671bb"},{url:"images/logo.svg",revision:"28c64a880f7adb650306650f56557b32"},{url:"images/logo_dark.svg",revision:"40a72459400577732e21546edd61ba82"},{url:"images/main-back.jpg",revision:"9b7400bf2a5a5ed066747d9d2614c6be"},{url:"images/main/2.jpg",revision:"1a35d6e492c4461e9e6795e8e15dc7b8"},{url:"images/map.png",revision:"cc1579582017909a5ef6577fa0f1001b"},{url:"images/search_close.svg",revision:"5b952e68ffb17ad5dbc5a5424663c5aa"},{url:"images/search_icon.svg",revision:"8e94f0fa500db1525affa2c020ef1116"},{url:"images/search_icon_dark.svg",revision:"5cc13b0e775772c6b6d88497ac128ed8"},{url:"images/services/1.png",revision:"b70635b49060b6075756353e906db584"},{url:"images/services/2.png",revision:"8db42abec752a1d0491d045fc1abc669"},{url:"images/services/3.png",revision:"23132a5107168edc5277b8b206398670"},{url:"images/slides/1.png",revision:"ecec0809169c79c34d08cf97e571d66d"},{url:"images/slides/2.png",revision:"ecec0809169c79c34d08cf97e571d66d"},{url:"images/slides/3.png",revision:"e4dcb4f7a9bf136d579fa82b0d8f8a77"},{url:"images/slides/4.png",revision:"38afc166c2d55f5f7d0ad2f7d6710216"},{url:"images/techs/1.png",revision:"e7a3ef9921089b869e3252bab56e22bd"},{url:"images/techs/2.png",revision:"8db42abec752a1d0491d045fc1abc669"},{url:"images/techs/3.png",revision:"23132a5107168edc5277b8b206398670"},{url:"images/whatsapp_icon.svg",revision:"3014e50bc28bf6faf59330083b9126b0"},{url:"images/whatsapp_icon_dark.svg",revision:"99495708e6fff84ba03a7931838393a4"},{url:"interior-design.html",revision:"751de11ee9fa864643928ba684911f0f"},{url:"media.html",revision:"44c43df882d0d9c5d0647e371b14a75d"},{url:"search.html",revision:"69d2f96c31b67f36abdd492253803e01"},{url:"technologies.html",revision:"1a18fc333159b73280aceae9a07c5561"}],{})}));
//# sourceMappingURL=service-worker.js.map
