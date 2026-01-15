window.BENCHMARK_DATA = {
  "lastUpdate": 1768470899004,
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
          "id": "b688eedd7c60b6e58f7cad25ad99b1c09f18a364",
          "message": "doc TokenLanguageModelKNN: add \"n_gpu_layers\" option",
          "timestamp": "2025-11-28T15:32:05+09:00",
          "tree_id": "ae505a4f862ac5a3b95b190eb9fd371e013bc879",
          "url": "https://github.com/komainu8/groonga/commit/b688eedd7c60b6e58f7cad25ad99b1c09f18a364"
        },
        "date": 1764312207729,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.360951438000086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018614999999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2845683159999908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018356999999999873 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015851121999958195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044499999999980666 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015026890000058302,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003950000000004228 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6834589329999972,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000022253 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2279545100000746,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008627999999999622 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13417431499993882,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007038000000000766 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017348441999956776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002219999999999861 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016594828999927813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015170000000001571 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0659594320000565,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008366999999999986 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0694532900000695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009085999999999567 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017779255000050398,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017049999999998455 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024484261000111474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017359999999994324 s\nthreads: undefined"
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
          "id": "822ab84ed510dff7604ee410d96bca32efe99ca7",
          "message": "Update contents",
          "timestamp": "2025-11-28T18:30:51+09:00",
          "tree_id": "92b673af0848c4040d4ba711dcc5241410e4adc9",
          "url": "https://github.com/komainu8/groonga/commit/822ab84ed510dff7604ee410d96bca32efe99ca7"
        },
        "date": 1764324689269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3560648530000776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016687999999999897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26690339199990376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012713999999999837 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014996295000059945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034099999999995245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015163656999902742,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003210000000004598 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5192035260000125,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016199999999982895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22586684900005594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007961000000000093 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13597667500005173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00833599999999976 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017432853000002524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018719999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016362404000119568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001488999999999463 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06416037899992943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006788000000000072 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06440290699998741,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006990000000000357 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018267841000010776,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016169999999999518 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017417131000001973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015120000000000966 s\nthreads: undefined"
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
          "id": "bc84badb17cfaf5e6313c6889f6181ace8e0fcde",
          "message": "doc news: update release date",
          "timestamp": "2025-12-02T14:45:00+09:00",
          "tree_id": "b750f6bdf33b6a130ca3a02692d148757d144fb8",
          "url": "https://github.com/komainu8/groonga/commit/bc84badb17cfaf5e6313c6889f6181ace8e0fcde"
        },
        "date": 1764654757497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3688170750001518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019658999999999982 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27700443100002303,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01591200000000023 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015301797000006445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015291819000140094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036000000000036003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5950145030000158,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015899999999982595 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22557633199994598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007232999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13510616999991498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006519999999999554 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01620110500005012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016800000000001536 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01620377999995526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001372000000000595 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06137596799999301,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007466000000000014 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06679007199994658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0071240000000001025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017649671000071976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014650000000004104 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020760453000036705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015999999999999903 s\nthreads: undefined"
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
          "id": "b1186d9f7a067fbd1e1437cd11150a48d8f493f5",
          "message": "Fix style",
          "timestamp": "2025-12-03T15:44:31+09:00",
          "tree_id": "05c9c0e81ef2ad67575025ae61e9cdc99d918dbc",
          "url": "https://github.com/komainu8/groonga/commit/b1186d9f7a067fbd1e1437cd11150a48d8f493f5"
        },
        "date": 1764744710694,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34959213899998076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016046999999999673 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.284131565999985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017999999999999988 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015437599000051705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003939999999997834 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015870497999969757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043900000000005046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6030123770000273,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00030999999999992145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22721776399993132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008789000000000033 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1351265310000258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007468999999999906 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016492708999919614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016410000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017620871999952215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001718999999999804 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0639191409999853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007379999999999415 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06625727900001266,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007777000000000006 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018044902999974965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999996167 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01791645400004427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016530000000005707 s\nthreads: undefined"
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
          "id": "cad547e80727c54704610b598e3fd2b61a8ed568",
          "message": "Fix style",
          "timestamp": "2025-12-03T16:32:11+09:00",
          "tree_id": "15f7a91ff38275a54b9d066956bb3611f8f11080",
          "url": "https://github.com/komainu8/groonga/commit/cad547e80727c54704610b598e3fd2b61a8ed568"
        },
        "date": 1764748077941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35165688899996894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016436000000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26481181500003004,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013363000000000153 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015152781999915987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039999999999995595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015224538999916604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003600000000001935 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6923729600000001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000296000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23042268099993635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008627999999999775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1360770539999976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007090000000000207 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016976748999979918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017099999999999338 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01683669600004123,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001728999999999925 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0633931219998658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008072999999999872 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06389215099994772,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008289000000000601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0174353929999711,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001577000000000689 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026145936000034453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001467999999999442 s\nthreads: undefined"
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
          "id": "e5600c319307a5a106715518bc3de69c7977de02",
          "message": "Disable conversion warning",
          "timestamp": "2025-12-03T17:36:14+09:00",
          "tree_id": "0eba5a87083b0bc9ad5455c3b5fa3e3e968269be",
          "url": "https://github.com/komainu8/groonga/commit/e5600c319307a5a106715518bc3de69c7977de02"
        },
        "date": 1764751562445,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37988433800001076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02224700000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28273313500000086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01798399999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016267163000122764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039900000000026026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015385644999980741,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005030000000003088 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6801950839999904,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036799999999992394 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22947564300011436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010548000000000043 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13494139699997731,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066869999999999985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017437729999926432,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016790000000004301 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016945830999929967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016290000000000748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06390132600012066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007745000000000141 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0684031660000528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008575999999999945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01753851999995959,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015839999999992527 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.023281426000039573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020879999999996735 s\nthreads: undefined"
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
          "id": "9faa7dea306d460bd02b5169c1b0ac16132bcd1b",
          "message": "Test",
          "timestamp": "2025-12-03T18:07:52+09:00",
          "tree_id": "1277b2d76589527416f3450075b4e02a772968e7",
          "url": "https://github.com/komainu8/groonga/commit/9faa7dea306d460bd02b5169c1b0ac16132bcd1b"
        },
        "date": 1764753813540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3559990029999085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017292999999999878 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2773424430001228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015233000000000052 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016288485000018227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003839999999997179 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01720536299995956,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004730000000000567 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5182283070000153,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00028099999999989245 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22855150799989588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006717999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13506464900001447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007348999999999994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01697240199996486,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017550000000001176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01636580700005652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013950000000003127 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06244076600017934,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007607000000000003 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06231787000001532,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073209999999998 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017921385000079226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016790000000000138 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026090815000088696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016990000000004502 s\nthreads: undefined"
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
          "id": "452f962f32bb7279b6cd7f642485fa9a4925c82f",
          "message": "Suppress the conversion warning in GNU like C compiler",
          "timestamp": "2025-12-04T16:42:05+09:00",
          "tree_id": "2c88e3732110b70e72b37956d121ac37a3b380fc",
          "url": "https://github.com/komainu8/groonga/commit/452f962f32bb7279b6cd7f642485fa9a4925c82f"
        },
        "date": 1764834464466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3642585860000622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01799699999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2906211569999755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019337000000000215 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015361358999939512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003630000000003353 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014938458000017363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000336000000000114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3996597409999936,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00021200000000012875 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2330386940000153,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005324000000000051 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13349155599991036,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0048980000000002355 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017016930000067987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016069999999997475 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016436943000087467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014230000000001464 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060853764999933446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007480999999999516 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06126621300006718,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007062999999999847 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01770332899997129,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001538999999999957 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01904600000005985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013309999999999433 s\nthreads: undefined"
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
          "id": "63949502a206b512f5aa7db10ea864d1681cfa75",
          "message": "Add tests for update",
          "timestamp": "2025-12-17T17:26:21+09:00",
          "tree_id": "d6acf3aedf7d0b6dee9df2b0ac25a2f30c76a41c",
          "url": "https://github.com/komainu8/groonga/commit/63949502a206b512f5aa7db10ea864d1681cfa75"
        },
        "date": 1765960414187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35827998900003877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018738000000000227 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2732568230001675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017359999999999876 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015588698999977169,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004579999999994866 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015412620000006427,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003379999999999772 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.624567155999955,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017599999999978744 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22910320600010436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011337999999999682 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13736613699984446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007687999999999695 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01666625699999713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019100000000000783 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017568749000076878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001896000000000314 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06431970399995635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008091999999999766 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06445146200007912,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008109000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017328261999921324,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001573999999999881 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025905966000038916,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015970000000001539 s\nthreads: undefined"
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
          "id": "29862d3527d5f95d6cb72d0b736816b06c9df235",
          "message": "doc news: add 15.2.2 entry",
          "timestamp": "2025-12-19T18:34:38+09:00",
          "tree_id": "850f5df64074586333f151a91e3f78551ef9b9cc",
          "url": "https://github.com/komainu8/groonga/commit/29862d3527d5f95d6cb72d0b736816b06c9df235"
        },
        "date": 1766137454952,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3494269179999492,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014036000000000284 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2642934339999101,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013036999999999965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01473913699987861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035799999999985843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01330857399989327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000365000000000254 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7103188639999871,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014999999999995572 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2070745830001215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009802999999999895 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11931721199994172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006944999999999604 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017837315999940984,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015499999999999403 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014766986999802612,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014560000000001239 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06564043800017316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007183000000000293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060212507000073856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007927000000000406 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017370779000088987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001448999999999409 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015471728999955303,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001467000000000565 s\nthreads: undefined"
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
          "id": "a6b930be892678b92d776681b95bc3baab4116b4",
          "message": "Remove a needless new line",
          "timestamp": "2025-12-24T14:53:55+09:00",
          "tree_id": "6be2001ff4d5896ac2c9973790c7f855f785a3a5",
          "url": "https://github.com/komainu8/groonga/commit/a6b930be892678b92d776681b95bc3baab4116b4"
        },
        "date": 1766556102274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3619505620000325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01838699999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2877178390000381,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019597999999999866 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015487165000024561,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003649999999998099 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015020450000008623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045400000000039853 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4616192370000078,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015900000000007575 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2249421120000079,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005817999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13752205500000514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006880999999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016838863000003812,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001578999999999775 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016834130000006553,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001725999999999811 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06545807499992407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008421999999999874 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06224385699997015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008049999999999558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017441442999967194,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015769999999994955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017352320000014743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015989999999996007 s\nthreads: undefined"
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
          "id": "c6bbc9abeb889dfda0b5bb83968a411a9600288e",
          "message": "language_model_knn test: increase the timeout period\n\nBecause language_model/options/k/minus/{one,three}.test may fail by\n\"column_create\" takes time.",
          "timestamp": "2026-01-14T12:11:46+09:00",
          "tree_id": "f4d9cfafe46b46f9ebb03b1a3cab77686fd82b53",
          "url": "https://github.com/komainu8/groonga/commit/c6bbc9abeb889dfda0b5bb83968a411a9600288e"
        },
        "date": 1768360974605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38273147799986873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022166999999999965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26221832699997094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012838000000000266 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014918180999984543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000352000000000241 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015239316000020153,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000017874 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.382313937000049,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000403000000000181 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22794857399992452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007379000000000149 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13472485199997664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005734000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01704268700001421,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015229999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016412758000001304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014490000000003112 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06265867799999114,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007193000000000449 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06477663200001871,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006161000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017611302000034357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015299999999998093 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02601036999999451,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001455000000000345 s\nthreads: undefined"
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
          "id": "4f220610dcdb6bc330de8d6519914a9165422de4",
          "message": "language_model_knn test: increase the timeout period\n\nBecause language_model/options/k/minus/{one,three}.test may fail by\n\"column_create\" takes time.",
          "timestamp": "2026-01-14T13:50:15+09:00",
          "tree_id": "ea4355ab642978b5ee1d053170920f45d802ae85",
          "url": "https://github.com/komainu8/groonga/commit/4f220610dcdb6bc330de8d6519914a9165422de4"
        },
        "date": 1768366467719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3824824440000043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023150999999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2621226550000415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013483999999999746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015635408999969513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042500000000034177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015143501000011383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003320000000005263 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4895289460000072,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003269999999997719 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2292074340000454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008678000000000019 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13920197099997722,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007138000000000144 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016250587000001815,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015240000000001364 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016404113999954006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015019999999997258 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06321392100005596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007221999999999687 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06635130199993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008477000000000234 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01740785199996253,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014300000000000979 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02639126399998304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016410000000002534 s\nthreads: undefined"
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
          "id": "d1294407a17da4257d3805edcaf3936746c361d3",
          "message": "add read-timeout\n\nBecause \"column_create\"’s response can be slow.",
          "timestamp": "2026-01-14T15:38:10+09:00",
          "tree_id": "7af56e96c828fe12fe90838eb38de0a8e1d4df7a",
          "url": "https://github.com/komainu8/groonga/commit/d1294407a17da4257d3805edcaf3936746c361d3"
        },
        "date": 1768373030243,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3726511179999932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023023999999999767 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2690961819999984,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01412700000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014728507000000945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039300000000030977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015146117999989883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999999232 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.378917735000016,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015099999999998448 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22385049599995455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0053620000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13632991199997946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005914000000000252 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01625840100007281,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014690000000000258 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016348128000061024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015189999999999926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06322839900019517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006062999999999777 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06290354299977707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065890000000002336 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01704334599997992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001513999999999599 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0171820749999938,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014559999999999296 s\nthreads: undefined"
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
          "id": "167598adbfc5b40c4b25daee3bcdc54ad5125a2a",
          "message": "language_model_knn test: use more suitable sample data\n\nIn using current data, the order of search results to change depending on precision of language model.\nSo, we modify to use less relevant data.\n\nIf the problem is no solved even if we apply this modification,\nwe load all same data into Data table\nBecause the purpose of these tests is to confirm the number of hit.",
          "timestamp": "2026-01-15T11:15:29+09:00",
          "tree_id": "16a8059caf6108c591403f3594b80358f158998e",
          "url": "https://github.com/komainu8/groonga/commit/167598adbfc5b40c4b25daee3bcdc54ad5125a2a"
        },
        "date": 1768445602049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3514224840001816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01382899999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25426509699991584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01167099999999971 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01637787299989668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004659999999996195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.009116138999843315,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004189999999999472 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.900157222999951,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017500000000014726 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.20662248100006764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007060000000000025 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11727983100001893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005796999999999886 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017927413000052184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001372000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014220431000012468,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0011890000000003842 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05957526100007726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069340000000000165 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05640722299983736,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007864999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018243928999822856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001445000000000099 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.014916008999989572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001306999999999739 s\nthreads: undefined"
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
          "id": "189ff3c96d87c8807fd83288acb41cbb1ac9fa16",
          "message": "language_model_knn test: use more suitable sample data\n\nIn using current data, the order of search results to change depending on precision of language model.\nSo, we modify to use less relevant data.\n\nIf the problem is no solved even if we apply this modification,\nwe load all same data into Data table\nBecause the purpose of these tests is to confirm the number of hit.",
          "timestamp": "2026-01-15T14:10:50+09:00",
          "tree_id": "d9088237c4e346e5190fea77d71a39772b26838c",
          "url": "https://github.com/komainu8/groonga/commit/189ff3c96d87c8807fd83288acb41cbb1ac9fa16"
        },
        "date": 1768454089930,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37571404799996344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02222200000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28453000299992937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017895000000000078 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015301432000001114,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000457000000000124 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024589760000026217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041200000000007897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7967423749999512,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00038599999999999746 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2269127459999254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006152999999999978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1344892980001191,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005611999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01642106099995999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014569999999999583 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01652806099997406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014249999999997875 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06450350100016067,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007262999999999659 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06558017099996505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007465999999999806 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017205549999914638,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016400000000000858 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026538688999949045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018010000000004134 s\nthreads: undefined"
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
          "id": "9a42ad27a44dcbf549225e3fc808e16fe1f00685",
          "message": "arch-linux: Update to 15.2.3",
          "timestamp": "2026-01-15T18:48:15+09:00",
          "tree_id": "d9590286769f01d074218f3bf2f2b2a4d311e4c6",
          "url": "https://github.com/komainu8/groonga/commit/9a42ad27a44dcbf549225e3fc808e16fe1f00685"
        },
        "date": 1768470897990,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3589903529999674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01757100000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2630420030000664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012654999999999694 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015557908000005227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004580000000000417 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02437327499995945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004119999999996904 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5093932629999927,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032400000000024076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22806062000000793,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006507000000000096 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13643931600006454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005576000000000164 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016420597999911024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015769999999999396 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016584472999966238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001550999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061554671000067174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008038999999999838 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06770030900008805,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007872000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01819314099998337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017569999999998143 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01735333900006708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017000000000003124 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}