'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "39b2515db252a388895a273a6f1b232d",
".git/config": "d26fb8d98c388f10debced4cefb30e80",
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
".git/index": "c07071a8478b5f278d46a62b88732f02",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53236cb16b8a1ae7056f6f54ff3d0b86",
".git/logs/refs/heads/main": "0b89acdd098acd920579a07b5451b131",
".git/logs/refs/remotes/origin/main": "ab98cc32b97c4c4bf6388727b1b56f92",
".git/objects/00/e70a49f42a9fa47ed044f04763f31388ea28e5": "dc9efbb71b328ade7e0d89514ff52875",
".git/objects/04/90561098a69ff13ae54855ffba327a465c81d1": "7d52f09b01e6fb261f133fa05288e178",
".git/objects/05/1928074024292fe48cca66fbf13f4624009a07": "8fe0272b91b9fc840f898ac09f95f89f",
".git/objects/06/2c03069aa53be4f0767ffe20272c9de9c2a25b": "383bc677ab7c9df4d2c7e6485e7c0719",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/11/ba85da33989b7369a3771b902f5ea1b37dc8ce": "ced182acdbc38e116ba7640433746119",
".git/objects/13/e8d8cfa6b60f88ae561edfb5ceb5de840963ee": "8282bae663eb0722e8f47b4db6f0d202",
".git/objects/13/f22d038291d2ad68f4adf90d7eedb47018f20b": "53872d64202ac44bb17b66035c0165a4",
".git/objects/14/bb81b66a3928732f945355f45409583c8ea4d6": "8cb60bcf61a29b0dffc94ec8568d47a5",
".git/objects/15/1eef510d5bb2d851e36e8b6718b6b2c83aed83": "21982a141c813524d761770df81f855c",
".git/objects/18/010cce474805e8582f0c3f8f793cde0c52ca85": "8d0ce2c043b6716230a7c07c4a75e6fe",
".git/objects/19/db77e98a3c60f26cf48ad0e333487d157825f9": "b577e66b722832b6873ca6eee820ed87",
".git/objects/1a/063d4e22aea3f6fedd4cd57da9e3c227cfef46": "fc6910ba5aa25ce5cb6f2dfe5226f37a",
".git/objects/1d/454f22ca8173d72058ab7f6500f9cba39b4d00": "32cc438999a3c6b2112cb2c99709d5a7",
".git/objects/20/fd6fa56cafca56532023a23cc36e122e7135d3": "ae2e31c7412fd83cca7fb48cd2cb88ad",
".git/objects/21/cb1821fd4f528527f986cdc2bd86252b6b671f": "2f05a6527815eade24cbfef0a97cf07f",
".git/objects/26/0554250b0e52f7bca51486e44e7ca3aceb1ed9": "f52a1486e5620029fab9457e0a0b0f8b",
".git/objects/28/8844bb287e67c2d782ed3f97d505bdc94034e1": "0869bb951bc95c0eb41266db2eac020a",
".git/objects/2c/13a984608009efc90c49deb9d30ed22a029bd6": "9f360b01e57b9120047e29c5a8e9ac59",
".git/objects/2f/41b0da0e80ef59d5f99c4e0bba6ee3f129a748": "b3c43d8bf40d769cf4455aac31240341",
".git/objects/30/ea6f26c23d5b5e256bb97af0455e9c80c11d6e": "a728c82afbbd4c535c1dc5e99df8d931",
".git/objects/31/afb375145b6058f1b76bde2a11dbb300da1e97": "0a29e4418da0a870246999be15f7e31f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/931fb22b871b8defea844029ade9b051095db2": "e70749155b3d81a7ce07802d9cd4c606",
".git/objects/34/8f7aa5a5f6d56382398fc30f90190bace17e1b": "295668e8a6615c8f3933c1dfa5824cac",
".git/objects/34/e6b76105237d9f1c174c80ecbd5241c7a1ab1e": "1305b004fd94bc3d785073fc443676fc",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/fd4d8762cba7fabe882aada6db642763884b84": "52eb609184e14a050c0011c80d9848f9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/5dd7f40f72dfcf64b12485a7214c754514ac0e": "9fb806e1a5c4439a6ed48b4392bbd850",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/cd43a605fb234cacb2a52f83bfb67b35d564f2": "58aaccf80675e9a8c6ef531e7c329293",
".git/objects/49/187a07a9cbd07e55addcb136d8862688fc02e7": "acce7295747ca3010d45265ea523edd8",
".git/objects/4a/9efab913252ab9cffe6e4b8d9869f88c7d767c": "9c3ec6c0ab35ea4f96d2b10740bcc63a",
".git/objects/4b/2702d65fc3f4f97d25cf67dbbef2eb08f7dc5c": "168762736fc14adb94615a819782f3cd",
".git/objects/4d/8a24aed18f5df787a5b9ccca4e4deac6bcb5f1": "5cea6fbe97bcbde151848ce3ae2047bf",
".git/objects/4f/6a8219f7110ee6a95131d48052a9bcc6c84284": "fe21e14d4fda5b7575f49d4583ace543",
".git/objects/4f/7017902d22817d95c7efe7efabf424ee5d2f34": "866224441f3acefa00b25eea62e644ee",
".git/objects/4f/9558219cd7917fc9621925d09c64cb4c736752": "f1fc72b8ce545772f09625a91a91d00d",
".git/objects/53/e0d8b9bef37daaf02ed0671e353ce351ffe360": "0605ca5f181bea9c2e788a5e6b53bdeb",
".git/objects/57/8d39eb4603e05688a6177ddc337972929937f1": "9c68dcd60649e602727f8fd6450ef535",
".git/objects/59/57612b7c4c3e6249a47dd6500320fc5d9efc56": "0dfb9fb9ffc4f609ff490c466dc796f4",
".git/objects/5c/0ec607d4525f18aa15b1783c2a4cecadc6753c": "581cc7f7428d6bf171aa62ca4e0540d3",
".git/objects/5c/d165d33fd80ed74c08d4d3d4062496b6da5d5c": "04ccad950c5cedcab652517590ac13fd",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/137827d8f0ae90ecca637f4903fe359ec59679": "59ee872c53c65edbf7cfe464f745f387",
".git/objects/60/3d82fbab723203471aa339314d7c9c420822ab": "bcbf27a585793ac0e883303e8d070a1f",
".git/objects/61/939471d501253be2d5e070cb70daa74e7ada83": "e46e45b98b98f741b3e3f9f7a29b6dd7",
".git/objects/63/ba5570f178cb97e15e0a5a44431a4e398462d5": "0e0a264fb0ad8e2c22252df1ca2c1ae4",
".git/objects/66/fe586ace050381dd8181709e1c7c14b4cf7e87": "d1693b852d1584ab87c3f60eb99e6ad7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/a3b55c079a4d98be56ef5025f9da1e7b5198a3": "69304059d120d7aca78ddb22e4ad75ae",
".git/objects/6d/be65b25af4293dd108dcf413059bb391256159": "f4c5d4d99386299d3d1fabafd63481aa",
".git/objects/73/4dc74c7363acafdc6f34dfe176fb140006d6a6": "b5ef1e11eb174462c0e0912a4bd9e330",
".git/objects/75/07c64aa331d5688750a48f70c61b2f060bcb92": "f6fcccb19b197acbe78f4e2e8d5f3f86",
".git/objects/78/8d880b9fdc480b3fa48cf5244ac7f36fa2bc6d": "7b573ab906efd56dbb3d513fca9d75d1",
".git/objects/7c/184e22a2cc6a191264ea36975a2bff6cb34816": "1d6d831ceed8b52efeeed6416438208f",
".git/objects/7d/6ca00f977363d212a6cda42998118551d6eedf": "3dd40e75302abf996ac51aca80dd1d3b",
".git/objects/7e/6267f1275b690f8c1b540b43d7852ea7dd7fe1": "6aa07db6d9a2c248f483fc1957a497ca",
".git/objects/80/c6c5833ec2c24a401c95db78811a46821429a9": "9f9a4b464962a02cbcda87114006ea32",
".git/objects/81/a8c835e229e0ac3203fd9294cee8dcfe6ad599": "0beb770c8338f217d820b8cfef5434c2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/7aba3882b8cb6f74d7fefb687543456899dfc4": "6879db5dc8ff8239adcf02a4919fce8a",
".git/objects/86/d347cb63253ffd2aa17c9963ff9c4528ed6a6a": "f69a93786a14b5b0cb5cc92d7d4d1bb7",
".git/objects/86/ea1d965829ee20fdc9d6329ad53f0ad03802e9": "cca70dd6f9cacd4499f1baba69d36d38",
".git/objects/87/7bf188865130c227734b93a426047ae6c81baf": "c5810f6f564d60fe1fb9234e1ac81afb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/976f25e10ed84180948771ccaf6101bdf51374": "99503efa01442746e67a6629dfedde8c",
".git/objects/8b/b420b14764d8e4dff84e80a5ae2bc0a94aa3b0": "82bfcb732f263740b7652786118ad38c",
".git/objects/8c/1ac740a4a4e6f5d7a23663734d3db1e08d2690": "3bc4f59d2c39b8261ee480ba222b261e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/5b203f6353cbf91abf5642654f5af48931a9eb": "0ff90e01218f39835d0635f87cd99d2f",
".git/objects/93/7d8e69c57c8982cab2128f639871cc69d3c31e": "ee152aa9a9fda29c1c37e0f6e736f1b2",
".git/objects/93/81b02a269fa7fe82c41f45ef8f117307493ae2": "37647bfd302e110c6995ccf8e36be849",
".git/objects/96/78fc8e18f97e01e78cb89e9399752109b3ee04": "e3be48e507d8823a8f24e741e6979a42",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/327b3f6c0b66b518e6c8064073be6143d19ddf": "43a8dc074562899f24b088bbd1972768",
".git/objects/9d/d45b220e8fc7df5c05530d76de75bfdf700e1f": "1263d243d457856a3c979b43f01295a8",
".git/objects/9e/48f237ff7df43da604be8d0ff194e35bef6e83": "0293a833d50650b30fc5b68ad3ef2e73",
".git/objects/9e/e096a72ff3c34152edf8a1bd44b73dad23296a": "67dd36f78684343176db737b3cc8625a",
".git/objects/a0/baca6115ce5cf1ea25d161eadf6cef62dcc358": "60bfe3b4fa6d8f00ba41bfe9b812159d",
".git/objects/a2/85c7e8dbc2871cd8da9f351cae120145b75ced": "d457f95fd423e67b35b766ee8375917a",
".git/objects/a4/5dfb842c9e03633abeba1ec2dcb96902b6791e": "e314d8994958550ede25c43d4d625f2c",
".git/objects/a4/645b68ff9d3b9914600649003165ac91dc0356": "0d5e17f1485115a6503f420142a90297",
".git/objects/a5/b2061e077be3571546eed57e3decd95f0a73e1": "84382e6f5ad3d6ee48e854fb004621fd",
".git/objects/a6/bd52d06ccc503c4b858ae2bdb2085b0021b7f7": "8a2dd59ff68cbc7337e1175ed2d825e2",
".git/objects/a9/37ff49f31d261fc5e6c8d6576995fec0997154": "4d615e17297af52d431f39d0b6330d7c",
".git/objects/aa/a51b5ed0b1b266b0e8d60129ba1a74d992b3c4": "86f30b6cf0d6eab78093a20babe237c6",
".git/objects/ad/a734fcff3cc96f114500fe94e453347c2ae2e4": "b840a36314678245e7893085e9422ade",
".git/objects/af/ef2c05b655d671aaa80220b82fb504a8836927": "e82a8b90db9ca99636f5522267f42c12",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/94d12dac1731bda1f941615db7bb5a2e5de708": "9e281898c50158911a5515d49caf6908",
".git/objects/b3/e85ede026368cb2738a5698321e099bd023f0d": "88e1c9ee72283991747f9492b0f7cc59",
".git/objects/b4/647247b85d286066019c9892e574fa1d8d9c30": "cf0d4d0cf1161c7aeca879327888e65b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/00751176d65a12036400709e99377764721306": "372e32c302c51874c695c71df6b62b80",
".git/objects/b8/9cffbdd6b98b6fc59a8babff325008b75647ae": "1f348484283b21a855943b785ef8d98d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cfbf1fa3762aa3745da13b3558888fcdeb85ab": "d56abe9b17c9f9664aac9209fa9ae1d9",
".git/objects/ba/af48ca9ef78d2c80bc5506c10d01c3fc0d286f": "818e1967556d21c4e5dfdbf383e61ea3",
".git/objects/bb/1e12a03585fa26da3587b2ca40954981e04b24": "b7967202484785e9e9e3fa9ce88b7c88",
".git/objects/bb/32c47ed35f4f9c4bcd40fc6a3471d161cc479a": "0c519cea3a27a559d7a8736217b8d473",
".git/objects/bd/ec412f1cc4b0f57e487c436c608e6cd4d44bdb": "94fe9eef94ff3fb5eab552d27e8d1e85",
".git/objects/c4/19c753b9aee637b31de8f689ec967c8edb7b02": "ddb5658b319769468ccefbfdcf58599a",
".git/objects/c7/559a7f7cf505171e8371ce9bbb8a70f18b2bc9": "a527804d74031bd25d8e8577029c0e7a",
".git/objects/c7/a42ca2a4de9b273d8e39c4909d2ce05734374e": "e9f5d9888e75774cc9e8389c7f16fd53",
".git/objects/c8/634c442d13961f3da2c70dd383819cb9cb25b7": "1e90c85c792dfe032fa253ff7729d2e5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/c93634073c44ddf6f920b47a9a35d25c0aeb48": "c4ece74ac963fa172332c5b061375261",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/c4f8c38be91b39217318a81c5ae8e226522513": "be63560b895580f0caf918dcb0818b6c",
".git/objects/d6/946909bb81ceeb59d95fa7dcfb2d19128536d8": "4be00c13ffeceb96045f5f21861d2515",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7aacbd2b889fe7cfbd4a03b15fb231a97801fd": "cc1a24a801ac5baea720769a437c5a88",
".git/objects/d7/8a1db10fdd4592ec8011cbb688e62d38d37a0a": "cfb28797cb9d0ef22d4490fffe58bfbc",
".git/objects/d8/dfe4ce3c1ab545f73c073aa114dc0a24f8b186": "01177e68137b04cfbc596dbdd31cdfae",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dd/222010414ebb63980cddcce590e891a41f45cd": "c8e8d676824653ee60dccd07b30e89cd",
".git/objects/e0/4c4c2ebd66341171b7495ef3cd0c1a22110071": "e9aacc13d2f9d5ce77993430484c6eff",
".git/objects/e1/032e2f2a62f8c88dafd9041b41867c63589268": "a7a5b5e0570a716ce35c45e16bb735d8",
".git/objects/e1/8209754f332f646bd960a7eb7ace39785a9ffb": "be74ab5f42bfe9ee2cbf209d2c3a833f",
".git/objects/e1/f6c280ab86342486de9e959a605b3f941d635d": "c88f90a59fc415eb27cd4610ba7b60fd",
".git/objects/e2/0ccf9958626c6b1398bb219b92778c36507839": "b6c6e3b0740f4a4706a9fd7eca0deb30",
".git/objects/e8/cf99321afac6df5c7c35ebcd254d91150663d5": "cc678d5a777d73176e14e2f1db0827ec",
".git/objects/e9/78b2c0fe979bf72aad13f3a2c66edf4323ab47": "5bf0cf76d380f6079803362839ebca06",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/81f4662fdfb131cd6accbe50fffdaaa72251df": "dc783a5b1b49418b9707e524a3082f23",
".git/objects/f0/d572a76e676b6b7a8383f31da77a64cbde572a": "64afaa6cba25a84440cfb21c217329b6",
".git/objects/f1/3e42fa9d452191b9d97100e750c066a0fe7b50": "959f456f2a5bbe71479aa382e5039b2b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/89f8a43ef931fd959134a4f6ce73d355a16447": "9c442d00c8e758baf3919f7644485d9d",
".git/objects/f8/e9e97f483cc8c6f240023dbbbf0f5a9b0084b3": "6f29f4a53f2274256bfc89f4266d38e5",
".git/objects/fa/9b52cc6f39155acdcc2dcafa77a9e12998a5c9": "897f1ecc7b37bdd8cc7fae43c2e79a81",
".git/objects/fd/adb1057cd80553c9c0b70139b84c934eff266d": "1fa643f0e8d5251b02c40a8b45c22e28",
".git/refs/heads/main": "70765db15203953ae25e7dad59f128f5",
".git/refs/remotes/origin/main": "70765db15203953ae25e7dad59f128f5",
"assets/AssetManifest.bin": "3debc5a8dc60f399651a745a890aed07",
"assets/AssetManifest.bin.json": "9117d74063fd5c45be7a3fbe3a440b4e",
"assets/AssetManifest.json": "e26ab0f0a9ebee8025260de29a88a4ca",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "7242e23fcfb328aa14ac7bd24a0809bb",
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
"flutter_bootstrap.js": "38a7fed5a36052b221bcc1055b9f9904",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e4fa1f7eecde0ce4720895bc1df3b9d",
"/": "9e4fa1f7eecde0ce4720895bc1df3b9d",
"main.dart.js": "fcdabec5bcde20166dcdd209e0c90551",
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
