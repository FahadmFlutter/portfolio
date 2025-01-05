'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d941d518e46e7d3e4eb94886cf0c8fe6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "97b32405aef0383c4fbc3b9ee572742f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbb23237cc856aaf57d5af74e829b161",
".git/logs/refs/heads/main": "2dc4533708a28ba6619df4b8da93b33c",
".git/logs/refs/remotes/origin/main": "139bfde66217afbcb4635f3ab3f97b4b",
".git/objects/02/35c837ab75da637c4c9c013e4b1cac17ee03b7": "48583885619586f5530d3f15878bff1c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/bb9a5e9e09a32908141aed2e4f023ad5e6d6d7": "c8db44147b1394145db7a538c24fc780",
".git/objects/0a/38f8304a82100efc07980ff5158828b425f787": "9031043d050dbe979d1a395c2188d6f8",
".git/objects/15/1eef510d5bb2d851e36e8b6718b6b2c83aed83": "21982a141c813524d761770df81f855c",
".git/objects/17/fea488729fad879e39e7a7b71e6c9ce14d0dc7": "a38cf90bcf13c94599ca14248568f0c2",
".git/objects/19/de0815f5bfb15b829641660204cc8cc2bfaca9": "dac20c7e32dee24b80fce6b0fec59b2c",
".git/objects/24/03846ba755407008238ff82dc84a8cd8371cc9": "bddb71c1dc41cd9d6813268659f9742a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/931fb22b871b8defea844029ade9b051095db2": "e70749155b3d81a7ce07802d9cd4c606",
".git/objects/34/ddfbead54bde598d18f43e60705a503075ab58": "c2109f2fb7eb40c74d968f246bcf6be9",
".git/objects/36/ecd6e8ace7d650f8a6af4187e3ef8d08b1a5c0": "8080eb0f58e03888a8f1e262a9fcef02",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/07d56022af627a011181eece7bd1b848cba6c1": "acf0e9ed6f0236b4a032018c29e4b314",
".git/objects/4b/714157f22cb8c22f33fd40622a9142268e4a95": "0deb4fca17efa8d4475cf147c24dd3fe",
".git/objects/5b/5a50816014b35e0053c221253e7d72ad810f15": "439e21bbd04c0897699d36ab1736a460",
".git/objects/5b/98b0c9bca62b4d8fa506ef55b209f1cff9ffa5": "f32d3f0e601819d655cb472d5743c5b8",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/d64011aceb6a8a34ac13da731bf2455547a773": "d5213f6f48e42c7a939df9a8f205f4f3",
".git/objects/60/137827d8f0ae90ecca637f4903fe359ec59679": "59ee872c53c65edbf7cfe464f745f387",
".git/objects/65/dc36465dae4b6efe1fe10825c07e4bedd9635c": "218cbc634d6dad16cc973ce81a2a9ad8",
".git/objects/69/64937b5c4ea502a1cf046a61d7d4070393157b": "636ce29d95b993abb8525ce3975ad95f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/d669f6763655cee046397837a68be372ae5d9d": "00e946b3eb3753e4b79caf771a34ab6a",
".git/objects/78/8d880b9fdc480b3fa48cf5244ac7f36fa2bc6d": "7b573ab906efd56dbb3d513fca9d75d1",
".git/objects/7b/b0b0f5ec27a28089ae93a754f5e997fdae3762": "846a7ec05771dc2a80984017aa500799",
".git/objects/7f/c7147f0e323670b40967d2221f8a80ddbdb264": "600659c1f4c61b86a383833862792370",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/48f237ff7df43da604be8d0ff194e35bef6e83": "0293a833d50650b30fc5b68ad3ef2e73",
".git/objects/9e/b6a6741bd5eee328192bcd2ac84c5ca34dd827": "2f64185e2afb880ed8ee620c239dd6ed",
".git/objects/ab/e8319576321ae17e336d00061b3f3d9ec42c55": "3912df88235844553a04702dd73898d9",
".git/objects/ad/834a17da8dbb2b9217f781e34da496e830df6b": "253908c7f3c8670c4b3324a776074cd1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9cffbdd6b98b6fc59a8babff325008b75647ae": "1f348484283b21a855943b785ef8d98d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cfbf1fa3762aa3745da13b3558888fcdeb85ab": "d56abe9b17c9f9664aac9209fa9ae1d9",
".git/objects/bc/1dbb64af4256bf40c67642b42548d15fc1ccdc": "5ad3686a44ad805670ad6e6fdff647c7",
".git/objects/be/6da75c3878c5455b541c967ebe485367243423": "ca22191b97570f4b0578d45773809aba",
".git/objects/c0/adc52b9785be93262367f5402bb7185d26dbf2": "e303321dae258e4742c0db1a8fc1e3fa",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/df/87509663ca87ec4da49306fec077ab0ec3f18f": "692579373bb441694bd4da1e3d0a1317",
".git/objects/e2/0ccf9958626c6b1398bb219b92778c36507839": "b6c6e3b0740f4a4706a9fd7eca0deb30",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ea4398e84b78404ebcee6c4a75002651c38218": "26be0b572dbc7e1e801eb7c5acd3a01b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c4a5bfa9bbe58439c1de028eccf1325ee48e48": "65f06dcf57d625d427a65d1074efa0c9",
".git/objects/f4/2fc7082e27522e279243698a7bdf7abba6156c": "7d1d428deef8764750a68ca48d4369f2",
".git/objects/f8/6fda48aa8ccb54b1c70930b29d22a75ebf7db1": "ac952957b98c4f4204ce6827b35d17ef",
".git/objects/fa/4b75c3bfce2a954aae42983a428834df245974": "a5e3db5018134b8b81ee1c207531f607",
".git/objects/fc/cde72786af01ff3e0cc1225782b6fdc71a0be8": "838be78d5e12751a1f9c70f9273bf88a",
".git/refs/heads/main": "50fce56298dc189a5d655b3d7fdb3248",
".git/refs/remotes/origin/main": "50fce56298dc189a5d655b3d7fdb3248",
"assets/AssetManifest.bin": "d99dc209bfdfb0bbdea90536a7806e28",
"assets/AssetManifest.bin.json": "a90e5fc865fcc4063e7db457fd179669",
"assets/AssetManifest.json": "10ad8fc36f866531c38b4333574ceb99",
"assets/assets/images/bullion/Live%2520Chart.png": "e428c7c44625edc3606e5710526ce61e",
"assets/assets/images/bullion/Login.png": "eb2c4c041d7dcae152690a4222943b1e",
"assets/assets/images/bullion/RateAlert.png": "ebaf61fc82449bb5396ec49974ac4327",
"assets/assets/images/bullion/Spot.png": "56ba3f70abf80094fdfb296f0e85a112",
"assets/assets/images/captain/Captain%2520App%2520-%2520Home%2520(Logged).jpg": "a8d61e218585fb6a13521d18e14211c6",
"assets/assets/images/captain/Class%2520Detail%2520Page%2520-%2520Pre%2520event.jpg": "81fb60aae0a7b4eb20751f23fc3cba2d",
"assets/assets/images/captain/Login.jpg": "650837f342a57fb12ed22ebcf9ca87c1",
"assets/assets/images/captain/Scan%2520(Logged).jpg": "5765f11781ba73002c2ea5b0a69497fd",
"assets/assets/images/eco_eats/939d1961": "f6d67d2b176985128de8d9586c35f590",
"assets/assets/images/eco_eats/bg.png": "f3a03c389de25b9d789d23811ed9bf4b",
"assets/assets/images/eco_eats/Details%2520page.png": "f6d67d2b176985128de8d9586c35f590",
"assets/assets/images/eco_eats/fruits%2520page.png": "950204a4e35cf0c766245b2747452908",
"assets/assets/images/eco_eats/Home%2520Page.png": "138ced034acd10c44a039dd2bb03ee40",
"assets/assets/images/eco_eats/Welcome%2520page.png": "343148ef9dd56a30aa45fc9da3e87fcd",
"assets/assets/images/placeholder.png": "dd2a1e439536c292d10128d47b0a8e74",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "31e9b6be57e99100bdc2016a9cf2cc58",
"assets/NOTICES": "070c9d47fc545500b8d62aa00da72ad0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aea93550e544058da3c9d0a2887a678c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f21b37f0347d7289c09f09ac2344afe7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7f1ff47098768bf7edaaebe02a11a1fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3250483ab189e3afb6d6cab2f38fe94",
"/": "b3250483ab189e3afb6d6cab2f38fe94",
"main.dart.js": "383e909f7b59955f82471ec64626d2eb",
"manifest.json": "57fd95ee1dff69b421f74e6c32569b45",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
