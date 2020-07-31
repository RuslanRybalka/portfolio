if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,s,a)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}})).then(e=>{const i=a(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./js/main.d0db79fb5a1f6f0e7783.js",revision:"83cb820bdc21c2b53194d151b9be31b7"},{url:"./styles/main.d0db79fb5a1f6f0e7783.css",revision:"d21b4af568f688bbaec3d1662920a0cc"},{url:"architecture.html",revision:"ed450a38b8c25b1e0f6ffdd82eb65a27"},{url:"case.html",revision:"83642af83013af5f53fd81dd88b832a2"},{url:"contacts.html",revision:"a67b681a259b265bfc95b658b12e4529"},{url:"fonts/CeraPro-Light.eot",revision:"25ecb0ea3804ef5476dc91c114999597"},{url:"fonts/CeraPro-Light.ttf",revision:"deec3c75dea68cb562000d6893f8a48f"},{url:"fonts/CeraPro-Light.woff",revision:"a9821ec431598f380d926e5528425e89"},{url:"fonts/CeraPro-Medium.eot",revision:"12cb515cf96257eb006975f7ec5c251a"},{url:"fonts/CeraPro-Medium.ttf",revision:"bafc951d7d329580e96345cc473c4d3b"},{url:"fonts/CeraPro-Medium.woff",revision:"f095019108fd2d78d76b6575a2af80de"},{url:"fonts/CeraPro-Regular.eot",revision:"d845af5681386c04bec48b4b918c2df8"},{url:"fonts/CeraPro-Regular.ttf",revision:"f582d3a21e59803eb6af6411dd730f32"},{url:"fonts/CeraPro-Regular.woff",revision:"8fa6dc48a21663687f973f5cb8b1c111"},{url:"fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"images/TFTL_logo.svg",revision:"f3c0381d653ccecfb11d8aef6592fff5"},{url:"images/arrow_left_white.svg",revision:"91d0db7788c796b4712e076edcbb3793"},{url:"images/arrow_right_dark.png",revision:"483931e04572c8689c587e35b36b2731"},{url:"images/arrow_right_dark.svg",revision:"f87e9d1b28d91cb6f0145d530408483e"},{url:"images/arrow_right_white.png",revision:"483931e04572c8689c587e35b36b2731"},{url:"images/arrow_right_white.svg",revision:"e0a03d806bb2a3f40595c9b7998c3e3d"},{url:"images/bg/architecture_main.jpg",revision:"1a35d6e492c4461e9e6795e8e15dc7b8"},{url:"images/bg/case.png",revision:"a9379f958fb28de4682f087031959b1a"},{url:"images/bg/image1.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/cases/1.png",revision:"f903c62072bbbc99fe747f2d17a3676d"},{url:"images/cases/image1.jpg",revision:"0a885cf9e9b6bacca9d1f59a93af597f"},{url:"images/cases/image2.jpg",revision:"70208fa75644275d3892b2e8db7a4c98"},{url:"images/cases/next.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/cases/pic1.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/pic2.jpg",revision:"af7e67ad5d1978b82e393219dbdb3289"},{url:"images/cases/pic3.jpg",revision:"14d0a05c0267a6118588825a4e5e81e9"},{url:"images/cases/pic4.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/slide2.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cases/slide3.jpg",revision:"f10d8ee9df8e49e69a09b824cc800e1f"},{url:"images/cursor.png",revision:"e46cacf932aebb08c21eaabbdae95477"},{url:"images/cursor.svg",revision:"43b2667674c44764baf81bc60e20da08"},{url:"images/cursor_dark.png",revision:"3f6d99dd54e113d82d9fa164c8d89c4e"},{url:"images/gallery/1.png",revision:"e236f2f7b20d62f8df934c9495b88e3d"},{url:"images/gallery/2.png",revision:"a9379f958fb28de4682f087031959b1a"},{url:"images/gallery/3.png",revision:"3c1a2ef11019c445636a70fc3ce6a2cf"},{url:"images/gallery/4.png",revision:"b2e084d40e39f188438d6488731118e2"},{url:"images/gallery/5.png",revision:"6a6537d773a60db866780e68e3120268"},{url:"images/logo.svg",revision:"28c64a880f7adb650306650f56557b32"},{url:"images/main-back.jpg",revision:"9b7400bf2a5a5ed066747d9d2614c6be"},{url:"images/main/2.jpg",revision:"1a35d6e492c4461e9e6795e8e15dc7b8"},{url:"images/map.png",revision:"cc1579582017909a5ef6577fa0f1001b"},{url:"images/search_icon.svg",revision:"8e94f0fa500db1525affa2c020ef1116"},{url:"images/services/1.png",revision:"b70635b49060b6075756353e906db584"},{url:"images/services/2.png",revision:"8db42abec752a1d0491d045fc1abc669"},{url:"images/services/3.png",revision:"23132a5107168edc5277b8b206398670"},{url:"images/slides/1.png",revision:"ecec0809169c79c34d08cf97e571d66d"},{url:"images/techs/1.png",revision:"e7a3ef9921089b869e3252bab56e22bd"},{url:"images/techs/2.png",revision:"8db42abec752a1d0491d045fc1abc669"},{url:"images/techs/3.png",revision:"23132a5107168edc5277b8b206398670"},{url:"images/whatsapp_icon.svg",revision:"3014e50bc28bf6faf59330083b9126b0"},{url:"interior-design.html",revision:"9d23919a0f10dd3442f9bff58da53166"}],{})}));
//# sourceMappingURL=service-worker.js.map
