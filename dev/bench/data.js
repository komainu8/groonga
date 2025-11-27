window.BENCHMARK_DATA = {
  "lastUpdate": 1764230096134,
  "repoUrl": "https://github.com/komainu8/groonga",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "ae9690c4ffada9d61739544eca145b275324cd48",
          "message": "cmake: suppress declaration-after-statement warning for BASE64\n\nWe got the following error when we built Groonga with MariaDB.\n\n```\n/home/runner/work/mroonga/mroonga/mariadb.build/_deps/base64-src/lib/arch/generic/64/enc_loop.c: In function ‘enc_loop_generic_64_inner’:\n/home/runner/work/mroonga/mroonga/mariadb.build/_deps/base64-src/lib/arch/generic/64/enc_loop.c:15:9: error: ISO C90 forbids mixed declarations and code [-Werror=declaration-after-statement]\n   15 |         const size_t index0 = (src >> 52) & 0xFFFU;\n      |         ^~~~~\n```\n\nWhen building Groonga with MariaDB, the bundled\nbase64 triggers `-Werror`.\n\nUpstream base64 doesn't use C99 or earlier standardeven. It is unlikely to change this style, so we suppress the warning by\nexplicitly passing -Wno-declaration-after-statement in Debug and RelWithDebInfo builds.",
          "timestamp": "2025-10-08T17:35:02+09:00",
          "tree_id": "6f1f760f4ae4fc7c910c24096b14d2fa3d165a7b",
          "url": "https://github.com/komainu8/groonga/commit/ae9690c4ffada9d61739544eca145b275324cd48"
        },
        "date": 1759913550670,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3572633420000102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015270000000000172 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27486690799992175,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01584599999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015327127999853474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000000946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015286741000068105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004049999999999887 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4443382690000135,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001949999999998897 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23815077900007964,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00617600000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13357999299978474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00599199999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016227916999923764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001516999999999824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01696356000002197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014859999999998763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06507653000005575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007001000000000618 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07206497300001047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006261000000000627 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018055802000162657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015440000000001008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022018141000103242,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013890000000000846 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "4b701ab4338d97efd3dd66257ceafccf5903831c",
          "message": "doc install amazonlinux: Remove the install procudere of groonga-token-mecab package\n\nBecause we don't provide the groonga-token-mecab package in Amazon Linux 2023.",
          "timestamp": "2025-10-30T10:30:56+09:00",
          "tree_id": "1b2139f9e2511467888a169baf2c7124ba570259",
          "url": "https://github.com/komainu8/groonga/commit/4b701ab4338d97efd3dd66257ceafccf5903831c"
        },
        "date": 1761788348123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3681819990000008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025034000000000126 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2722906189998753,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02172099999999974 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01775252999999566,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041500000000008197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016096730000015214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005219999999999114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8623132719999944,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00027500000000024727 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24607004400007781,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009311999999999793 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14339861700011625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009819000000000105 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01676859800005559,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015929999999998723 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01818903200000932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017370000000000163 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06549472700015713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008955000000000185 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.068631564000043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008899000000000046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0185491209998645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019690000000000263 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02785123000001022,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017540000000001998 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "c4b6255bcfbaf9446e811409e82cb7952f0c2974",
          "message": "doc install amazonlinux: Remove the install procudere of groonga-token-mecab package\n\nBecause we don't provide the groonga-token-mecab package in Amazon Linux 2023.",
          "timestamp": "2025-10-30T12:23:30+09:00",
          "tree_id": "f344b0013c07cf95871904673b638ba876fca603",
          "url": "https://github.com/komainu8/groonga/commit/c4b6255bcfbaf9446e811409e82cb7952f0c2974"
        },
        "date": 1761795144039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39018794000003254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022621000000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27082273000004875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015248000000000483 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015774080000028334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004130000000004408 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015200653000022157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039099999999989143 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.594965158999969,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23918751600001542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00676699999999987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1339176029998157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006013000000000199 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015846367999984068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001473000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016672163999942313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017420000000001323 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06228919900007668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007421000000000483 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06361948200003553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0070730000000002735 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017322299999989355,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017820000000000336 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017798862999882203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001889999999999864 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "bde50ddc1dc7550ef4286de9ea8b42990866a71a",
          "message": "ci ubuntu: disable host name resolved",
          "timestamp": "2025-10-31T18:27:16+09:00",
          "tree_id": "b42cc72c3dd626425de707a7086ad7db2288a716",
          "url": "https://github.com/komainu8/groonga/commit/bde50ddc1dc7550ef4286de9ea8b42990866a71a"
        },
        "date": 1761903347921,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3723142909999524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017519000000000284 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2796604139999772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016786000000000384 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015385476000005838,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004059999999997399 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015576076999991528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004290000000000127 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5321045219999974,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001780000000003168 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23839684699993313,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008753000000000233 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13246199299993577,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061859999999998305 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016139275999989877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016270000000000173 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01692671299997528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017339999999996802 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06296678800009659,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007403000000000548 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06600492400013991,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008955000000000296 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017261247000078583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017020000000000368 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02664233000001559,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016490000000004001 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "9d1ff7ae3febe98473bba88a293aa6c76bfc8254",
          "message": "doc news: add 15.1.9 entry",
          "timestamp": "2025-11-04T11:38:08+09:00",
          "tree_id": "74e8f68f430b3ce1cd3220984e28acbf83d4bf2d",
          "url": "https://github.com/komainu8/groonga/commit/9d1ff7ae3febe98473bba88a293aa6c76bfc8254"
        },
        "date": 1762224305018,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3725608440000201,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017100999999999922 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2743854839999358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013728999999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015170415000056892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003729999999998457 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01520935600001394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034999999999985043 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4583292070000198,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031000000000003247 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24831121899995878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007361999999999869 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1389857829999528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005338999999999899 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01694288400011601,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013819999999999666 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01687818300001709,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015289999999999748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06743846099999473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011850000000000166 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06286488699998927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008279000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017220928000028835,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001505999999999813 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026356243000009272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015030000000009203 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "e04c6599a12438f82f0ad7e0e75e6463f82cdcf0",
          "message": "doc c-api: add the missing param\n\ngrn_tokenizer_build_func()'s parameter \"ctx\" is not documented.",
          "timestamp": "2025-11-04T11:55:21+09:00",
          "tree_id": "63f1b111c3553a9f33a3a5136fbd4e6f354c36cc",
          "url": "https://github.com/komainu8/groonga/commit/e04c6599a12438f82f0ad7e0e75e6463f82cdcf0"
        },
        "date": 1762225577752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4019300969999904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021884999999999877 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30364263299992444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021297999999999734 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015588328999967871,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003889999999995286 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015519410999957017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999998677 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5917603620000023,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015899999999968717 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24780654900013133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007343000000000044 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14042733100001215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006172000000000094 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016829775000076097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016539999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016689038999970762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015759999999997165 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06871464800002514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008851000000000178 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06511821899999859,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008113000000000675 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01791201900005035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014830000000000398 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017578791000005367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001498999999999917 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "d28fd4cc998a385687a9913ea36c48707d3b3149",
          "message": "Fix a typo",
          "timestamp": "2025-11-05T15:30:14+09:00",
          "tree_id": "25d8af5dc0ea0f25431f2268a75b771aad891204",
          "url": "https://github.com/komainu8/groonga/commit/d28fd4cc998a385687a9913ea36c48707d3b3149"
        },
        "date": 1762324600671,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3690801860000761,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01629900000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29576232299996263,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019308999999999743 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01565395099999023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033700000000025376 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015372614999989764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003260000000000485 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4721105209999905,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015600000000001724 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2484257810000372,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008201000000000097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14230796200001805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006906000000000162 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016713053999922067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017870000000002328 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017374640000014097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018920000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06957384400010369,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011249999999999982 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06686757800008536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007538999999999713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01734516299995903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016520000000002366 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02754032000012785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021440000000001735 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "47fd9ba2f60691eba56d3d467bf60c345b14d90c",
          "message": "Reproduce",
          "timestamp": "2025-11-05T21:55:30+09:00",
          "tree_id": "49713e9fbafdd0c53d975b7729f15714ffca2c96",
          "url": "https://github.com/komainu8/groonga/commit/47fd9ba2f60691eba56d3d467bf60c345b14d90c"
        },
        "date": 1762347767928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37354574400001184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016699000000000103 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27186316499995655,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013345999999999636 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01576696899991248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004069999999996021 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015459438999982922,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004260000000000097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4848109369999634,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015100000000006775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2472489439999208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00639799999999989 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1428619080000999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006935999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016636795000010807,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999998188 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016562537000027078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014749999999999763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06628020499994136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006685000000000205 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06116522600012786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006624000000000241 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01750368799997659,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015059999999998686 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021138875000076496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015779999999998573 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "55b86cf1396bd47f13b233d46cc330c2edf943da",
          "message": "Test",
          "timestamp": "2025-11-06T21:40:59+09:00",
          "tree_id": "15315987e8621fe2de7c9e0aad5e253abb4a2593",
          "url": "https://github.com/komainu8/groonga/commit/55b86cf1396bd47f13b233d46cc330c2edf943da"
        },
        "date": 1762433243098,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37370908599996255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016194000000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2754157310000096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013634000000000396 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01584038499993312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004499999999998672 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016209731999992982,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005840000000003065 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6960853369999995,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016299999999994097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2523374190000709,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008950000000000527 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14530501700005516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007875000000000382 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017755906999980198,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001846000000000153 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016555876999973407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014990000000000836 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06642036300002019,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007392000000000287 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0655497800000262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007728999999999764 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01821713700002192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017100000000003501 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01792137800009641,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016459999999999253 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "3ab087f4be4cbc105105f0ed5656f2c2072261ae",
          "message": "doc install amazonlinux: Remove the install procudere of groonga-token-mecab package\n\nBecause we don't provide the groonga-token-mecab package in Amazon Linux 2023.",
          "timestamp": "2025-11-25T14:44:06+09:00",
          "tree_id": "ca7ffea6ce0338807194cd19b3df0224af02b29a",
          "url": "https://github.com/komainu8/groonga/commit/3ab087f4be4cbc105105f0ed5656f2c2072261ae"
        },
        "date": 1764049803226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3507377990000009,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016349000000000127 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2617133369999465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014028000000000235 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015286451999998008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003570000000000517 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015023236999979872,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003839999999997179 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4415910569999824,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00023700000000001498 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22135210100003633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061160000000001075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1316430500000365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006309999999999705 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016530858999942666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014240000000002306 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01667096599993556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016539999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06036126099991179,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00651800000000019 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060805009000034715,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006638000000000338 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018350249999969037,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015139999999997933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01729807200013056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016060000000003294 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "0992f959d43988b5d8abff270d4c4231fe131c73",
          "message": "doc reference language_model_knn: add document for \"k\" option",
          "timestamp": "2025-11-27T15:01:14+09:00",
          "tree_id": "eab247410b5b8a8228565968862f5efecf982e5a",
          "url": "https://github.com/komainu8/groonga/commit/0992f959d43988b5d8abff270d4c4231fe131c73"
        },
        "date": 1764223693585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3967687439998713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02243499999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27160914200004527,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013006999999999602 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01550396999999748,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004389999999999672 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01971618199996783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038899999999975066 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5698429239999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00026800000000012925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24093133999997463,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006298999999999957 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14175040500003888,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006290999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01774103799994009,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022419999999998275 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016796256000134235,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015190000000000758 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06270445199993446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00912600000000012 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06192090899986624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006695999999999841 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0188033399999199,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018550000000004396 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025781886999936887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001573999999999881 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "committer": {
            "email": "horimoto@clear-code.com",
            "name": "Horimoto Yasuhiro",
            "username": "komainu8"
          },
          "distinct": true,
          "id": "9f8be3c7ea3fd0ea315e4763dd3079b5cde2f6b9",
          "message": "Add missing new example files",
          "timestamp": "2025-11-27T16:51:04+09:00",
          "tree_id": "cfaf3de9fb489754ac746ef267a117cb5f07a415",
          "url": "https://github.com/komainu8/groonga/commit/9f8be3c7ea3fd0ea315e4763dd3079b5cde2f6b9"
        },
        "date": 1764230095099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3614357200000029,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015531000000000197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25237503199991806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00965800000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015412609999998494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033500000000033503 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013329638000044497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00030100000000010674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8012411069999814,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016399999999994197 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21389480800002048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008617999999999973 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12052645599999323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006462999999999733 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016817496000015808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012770000000001669 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02322203599999284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015209999999995644 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06677550999998516,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010234000000000111 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06060208600001715,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008017000000000565 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017348696999988533,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014700000000000685 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01521571800003585,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012760000000002492 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}