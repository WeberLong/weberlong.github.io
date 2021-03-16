/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68e113c461ee75f9baa6df025ee07568"
  },
  {
    "url": "500.gif",
    "revision": "8de5363ae8e8ecde9288acb54023855a"
  },
  {
    "url": "about/index.html",
    "revision": "0a2f0eedba89e280293e2b020a80b6b5"
  },
  {
    "url": "archives/component.html",
    "revision": "3aeee903256d36beeb3b50361c5a69a1"
  },
  {
    "url": "archives/index.html",
    "revision": "8b13bdf75a7eb2d86f2bb1f44c3df2aa"
  },
  {
    "url": "archives/rtlcss.html",
    "revision": "9921089582e035988e88104ccddbee6a"
  },
  {
    "url": "archives/webpack.html",
    "revision": "f3da4a073f7128153ab1f7c9d2cb67be"
  },
  {
    "url": "assets/css/0.styles.ac40f347.css",
    "revision": "465ba7511db9aeb232498564679d6ec4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.84f91b07.js",
    "revision": "eaebf31a55b2923c8e1d9ae58be68da3"
  },
  {
    "url": "assets/js/11.6fa454d6.js",
    "revision": "2e89b0d284f52c6abee30fac29ea0721"
  },
  {
    "url": "assets/js/12.14662e90.js",
    "revision": "b757491a5c3b1a5494972c2af6caf205"
  },
  {
    "url": "assets/js/13.776917ed.js",
    "revision": "147a55c94b643f62e1bca609981f2994"
  },
  {
    "url": "assets/js/14.106302c5.js",
    "revision": "410f988a846c6071be838506052bfef1"
  },
  {
    "url": "assets/js/15.593f51f4.js",
    "revision": "7f6c15ddbfcc9c9f7342002d63a10c3e"
  },
  {
    "url": "assets/js/16.2bdd1777.js",
    "revision": "8f18f123dd0fbd4113ea8ea5d9290649"
  },
  {
    "url": "assets/js/17.5c23e380.js",
    "revision": "fb9f67f2dc8232ed273be77b28315f7b"
  },
  {
    "url": "assets/js/2.adbbee52.js",
    "revision": "c1007103228988cd2f702e1bd0ad5576"
  },
  {
    "url": "assets/js/3.69da9bb4.js",
    "revision": "0a439425d658f674f501b9a7e260c465"
  },
  {
    "url": "assets/js/4.945a9220.js",
    "revision": "0802973c6b359108ba103923aa8e4039"
  },
  {
    "url": "assets/js/5.7793b709.js",
    "revision": "69f6952180332f40a3bde5e98df6d7ec"
  },
  {
    "url": "assets/js/6.1cb05da6.js",
    "revision": "05d963c786b04eccdc8b17cf07f539f1"
  },
  {
    "url": "assets/js/7.47d40ad1.js",
    "revision": "fb10bd61a3af8dd4ebc90061551d1ebb"
  },
  {
    "url": "assets/js/8.170ae87a.js",
    "revision": "28af590dfa73888f739616f0f1f9416a"
  },
  {
    "url": "assets/js/9.a379bd63.js",
    "revision": "88b8af03245d3e8fa019ac07e031ef36"
  },
  {
    "url": "assets/js/app.a2f9b1f8.js",
    "revision": "2a81e76e7bf4fa4d9b06cec9a7cfb03c"
  },
  {
    "url": "component.png",
    "revision": "17f037ddfee9734842d14cb6a3bac0d4"
  },
  {
    "url": "guitar.gif",
    "revision": "e1f0f60ae84489d733c4f50f60e42fa8"
  },
  {
    "url": "home/index.html",
    "revision": "148c4f3359474a61895bc5c3d51dc3fa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/android-chrome-maskable-192x192.png",
    "revision": "845a39478d0e2d4d5d32a092de2de250"
  },
  {
    "url": "icons/android-chrome-maskable-512x512.png",
    "revision": "2695f5feb66cdb0c6f09d0e415824cf9"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4e857233cbd3bb2d2db4f78bed62a52f"
  },
  {
    "url": "index.html",
    "revision": "5f55d95a9ffce8a303027a473185a7b5"
  },
  {
    "url": "lifecycle.png",
    "revision": "1d3dae65499d59846dfbfaaa7daae963"
  },
  {
    "url": "logo.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "long-ui/guide.html",
    "revision": "b03fffdaadcd92d52b404793bc9ff7b7"
  },
  {
    "url": "long-ui/index.html",
    "revision": "cc2e5b8cdb5eed8410dca927ac4f81af"
  },
  {
    "url": "long-ui/tree.html",
    "revision": "99ec4ac5055b15b8969684b06d38fdc6"
  },
  {
    "url": "rtl_0.jpg",
    "revision": "1672f23d9606e6be5f89dfb900ee389c"
  },
  {
    "url": "rtl_1.png",
    "revision": "c0c29c6db5b1e18bc577fbbe04233013"
  },
  {
    "url": "rtl_2.png",
    "revision": "c6f96182e3b0e0b275cb1047498f52b8"
  },
  {
    "url": "what-is-webpack.png",
    "revision": "f78661bef717cf2cc2c2e5158f196384"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
