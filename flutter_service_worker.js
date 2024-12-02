'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eb8ffafaf5af8fc9a4f65e3ff20703e0",
"version.json": "640b12013833d59c0c4e64c78f5d45bf",
"index.html": "a5486f3e38b328543b76360aaf28ebf1",
"/": "a5486f3e38b328543b76360aaf28ebf1",
"main.dart.js": "a983872a11512a9806f288ff2f204ae6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"manifest.json": "35d3e8d97cbaec5efe18943cf8899377",
".git/ORIG_HEAD": "15e8bdb35833cdb9f97d2cb5e7640731",
".git/config": "220e74e1c226f0855c5dec3d5cb95eb9",
".git/objects/3e/f8e532c1c599c7b3c7f14cdf17eb20d6a4dc3c": "a6fc48c0812a81b7cfe63386edca285e",
".git/objects/57/354893efbfe0ee75f6a6152930d0778d99011e": "3c3125addf32d52b9f56fe454f199d20",
".git/objects/57/a494a1798371dd8d7521a8339803f4f4e407c1": "28759e75e54790cb951f17115583dd9e",
".git/objects/3b/91d0d40e7c5eaca83ab2706eb5bb900655c220": "d64cc682c0ccfa8c5089eee9343a9313",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9e/95c781ade4f5d1aad3c2847214f1b3e2737ec0": "1e75932fbc132a39f43da99a0d4868e9",
".git/objects/3c/1ac3c8c4b5d92eb2017922ad3c71177c23d7b6": "1ec8d0579ff752a48b084e8b0f815a2a",
".git/objects/56/8b951f65d7b04fd6b3f3b7685e24075515c06a": "d88c4f53e38da8b94cbb0c46b92c5f77",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/32b2da977f54ba452548db3aad32a668923050": "36c7a01c4b1246d69e446c3ae9922991",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/32e33058d0ef499c2a99d01512042a2b6feb2b": "a8dc0f04c8b4436b37f438d00048b1b3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/cf55b65e6c65687c7f729a90694a9247f9a495": "5592908d2396a92dae97e88841a1a413",
".git/objects/a2/fa7d79ffed926441c1c8931bf3aa6a508667dd": "ef84c3252b86922d1ace033481e54044",
".git/objects/bd/0902873b079a23a585f97672695d454062d4fb": "0493fc311ccafdac94af202b3f135f28",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/cf/8b9b6e5b7052398b1f3a34d75c44d342f2784e": "21a97f0d799f0a9577d9c153beb2b3c3",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/21890a9c1e6dc02c5ca28f48ef5ae5e6f5b57a": "1378b6c2ad7adc58bded86ad06875cfe",
".git/objects/11/40f5eb7314f698369099d11b56fbc255e2ad60": "60551ec73846f485f3e616106a55c198",
".git/objects/29/5f51733785cd69eb4a02dffe7d2276d9184f91": "f602405ea3f5cd38bb20eb2b4cb92cb7",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/b6431330aa8f9b7d206b93ec9ffe4582ee3b07": "cd7f0b3a696e4e1a419e708d095639b0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7eb196eee702ae59364ffcb814bb0489ad0e28": "5de0d149d55a01706d9573d09e31fe7a",
".git/objects/87/3d26f48bae08e22282d621603da2aed45a06d2": "7bcbb12f096cb64bb69174a059d2ccf9",
".git/objects/1a/e30d6e62bf8e2a0d6f9a98c10888e6f73b3c5a": "0ff3f9e28e31492c16598eb5247c2e2c",
".git/objects/1a/e70933e3d01b3ac034acb2fc0ded9b9680342c": "98aaa730a02c4b570672173e810604b6",
".git/objects/8f/fcc0a619de140bb6a65d1cc686d0ba86f46500": "e6447d30df053fbc828e9c080b224e7e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/511b4387c36f25d4fbf46800e8c0437942ef17": "66f871b7273c360bf7fd3f498ddf2e58",
".git/objects/10/a043abde6a8e531785815cd89e586d60e17e5b": "32556755d90a7f27506ba67da00c2b97",
".git/objects/86/583932a66d863996c96f728c9a9b903816c187": "ec86320dab6dccfe97fe5c7fe7e67f45",
".git/objects/2f/57cfa35818a7cb790d5eab477fa891808d8163": "8279860a48a1517aa8b1caec44ec735d",
".git/objects/2f/1ce06410c6a79907e6a2e3c1890333f62a9690": "599ea335f475894a3171013d5236311b",
".git/objects/88/9dcf79f05fe4562a35ebc4ceada1ffd07078ae": "a6260d2625ee186284fb708a11aee4c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8a735bb14abd1b9da89dffc7ceb69d629d6be4": "fc6ede67887ce97c0f3b69c92c3b00a7",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/2ac761ade7a022f563c9aff06af2821062b740": "f5ff9e628a6f2ecd4359166ed0004647",
".git/objects/62/de3097c678e9f14d585bb08e0163246bc04276": "4f784962e4159ac898d7993ad6930159",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/ee61910b88361e689cc7ec8b068e89e7d68e7f": "7c7e1e954162a2fd10152d979f70d8af",
".git/objects/99/74fa4a390ecc4dade44ecc10ed67a2492b6dfc": "d112c066159cc132a0e433560ed1a545",
".git/objects/99/0d77cbeb16e22292e8815674eccc07e193ed1b": "702de67f85e250f49eb810e35a769bc6",
".git/objects/52/e31fbd71b99ee4039740d1f86cbf572652b247": "a4b779cab8be76e44f16fc17be6a859e",
".git/objects/55/779e013821ae3698aba077fa5e3e3978aee64c": "49b0c46f99e3f4fe249783b54281e813",
".git/objects/63/66393ab23f65681b05ca47d4d0fda4b4e9b4e3": "99d937863a48c13563028983b0ba1421",
".git/objects/63/c24761606c4ff27a30d88e0eb9be0326dd2b12": "b859c5d804b137aea2b9d0e3e420e92e",
".git/objects/0f/9faca45b680c4784e158472d3e643581471a70": "faeb7498e57b7723dbecca59876d6236",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d5/bd00fa9d13b16eda171067fe47e8241f1c114f": "055e326da8af204707a5450a14f2a8d2",
".git/objects/d5/25455d5c1783af8d82cb69c32d4a685df9e27b": "a2e4191ca764c066a3460129c22dfd9c",
".git/objects/af/bb368bc9b1384d8f12c3442c66418e2da4ab74": "9b16cf187123d0f221a7a609ab918906",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9f4fa953d5fd2c07b90754444f0301a40b62ca": "90cc49a953fbe92d72778f5420f793fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/4f94fc455262ae38ac27e22625068d227a0422": "6bd0d19d4af993263c9db8d4b0f6c1bc",
".git/objects/f9/3594ed34723054e9ba16d3ab815129908c26d8": "a7b5fabecc097cfc32af202cd4362fe1",
".git/objects/f0/7801a7c53ad28024a0cea2d636c27a2e0139ed": "7706b7402093787804bd455159fb0210",
".git/objects/fa/3d211de3cec51cf61b680cd8da071fd6451e2a": "64c3af21091910fd2908f8bb0a6374ed",
".git/objects/ff/39baa182e25943cd0c48ca6af1402b4d762a80": "fdf4a926f452c2a723e4b7db5e259828",
".git/objects/e9/ee88a1c9902f09355f1178407bb6870a8d6431": "80d3a66c610a44447b6e547c7fc61f53",
".git/objects/f1/94cde65cabd3142965331408994860852dec06": "ccd3fa116f90f5c14c44bd7563e3fe79",
".git/objects/f1/8caf6f714a7381652d3922c789893b692d24f2": "64dca34b965ace56232a4e50a32d6939",
".git/objects/cb/75e958b3b4436c828af6f2cd212270612f287b": "930d7b21567a23acfed9a6b9c54330b5",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/e0/ddd7b4665bf1417699e070b628222493c8e3cc": "51753eb2757a2f3fa588e14aaa962ef1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/53239588448cff70a90bc7a2b576bfc5dd898a": "ae58fe2a8c839b244fe1a16ace212d65",
".git/objects/77/ce4ab9c31aa0fe0e06482c4d806b2348b0da5b": "fbcdbbfa3e7eb9526bc62f561927efc6",
".git/objects/70/d847921cf91a0d69ca7bc7fb0dcb80811a1766": "0038d260cd5839ed1b71d3436d68d3c2",
".git/objects/4a/8b2c086097b5d86e17a7fd36fa29357ebed9d1": "e2dc8d338c29c22ac6421e7571d9a222",
".git/objects/8d/d42d5f12a3f65be9c3a38008ac51152b99a124": "ab9826f60905fdb4a9173758d9860171",
".git/objects/12/307753b97222dcbc860bd626ec4f5ea7fa175a": "c407a3332ef8034de8c2138c90b591b4",
".git/objects/85/ed1807f3b1c56c2c63875d2176c91ba9ef7ace": "63682b45c5bd20eb6f6dbbfaacd496c4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/62a9fc1112b9035d27f4d24d9e1b1a6a4026e1": "d9e7497e37317110638b74b67cbff98e",
".git/objects/8b/ad39761a5fd1a74880910332c6ea555856001d": "6f7d4e1b571146b088f04a951ba40a27",
".git/objects/14/c131f6800cfc6b653f1801fb33d55c01469afb": "35e56df1ce37c286e2283e824c9bb544",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f4bcc6c802a460108c7ce4a96ebaeaa",
".git/logs/refs/heads/develop": "23c75ba924001ede1391ad6aa30b3401",
".git/logs/refs/heads/main": "ac1c4c5e0a8dbebf00123848ee919f96",
".git/logs/refs/remotes/origin/develop": "1481753e5e3bddce91da84b204d8936f",
".git/logs/refs/remotes/origin/main": "e1a9dcb4b2ce24c7c413cb4942bb310c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/develop": "15e8bdb35833cdb9f97d2cb5e7640731",
".git/refs/heads/main": "96df0806bd366642a740833c7e59bbd8",
".git/refs/remotes/origin/develop": "15e8bdb35833cdb9f97d2cb5e7640731",
".git/refs/remotes/origin/main": "b4601ac1e1d1a1718fc140512489df65",
".git/index": "12bcc7c14c8af66077de553df0f81d72",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "478fde4dd9307133b60539658623b310",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "40cc15e50c5a86d5f0b9ff62af2b5a4c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c4f8840eb0b8bc4a7439a8f7fff5c17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6e9f863d0492f0f28bab13c40e44f427",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
