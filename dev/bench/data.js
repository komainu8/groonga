window.BENCHMARK_DATA = {
  "lastUpdate": 1785746137842,
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
          "id": "0fade75908510c09b92ddcab8cd645d30bf6b341",
          "message": "doc news: add 15.2.4 entry",
          "timestamp": "2026-01-20T10:01:36+09:00",
          "tree_id": "cfd30fc2bd91bd0a1537fae9bdd33eeb77fbb81b",
          "url": "https://github.com/komainu8/groonga/commit/0fade75908510c09b92ddcab8cd645d30bf6b341"
        },
        "date": 1768871643058,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37999779199992645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019572999999999674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2660127100000409,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013383000000000034 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015709283999967738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004059999999999342 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01524215099993853,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005700000000001815 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6012808780000114,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017100000000014326 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2434428819999539,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008169999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13740835300006893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006336999999999926 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016815006999991056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016619999999998858 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0165560270000924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016070000000003581 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06300449099990146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007324000000000275 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06601992500020515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00728999999999988 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017599141999994572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016750000000002596 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019921542000020054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018370000000000886 s\nthreads: undefined"
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
          "id": "8bcb2ae2f96d34bdcb5dfef232324cf832f9e1f5",
          "message": "test: Add tests for OpenZL compression and decompression",
          "timestamp": "2026-01-27T16:04:30+09:00",
          "tree_id": "25b8d8535f7ccc1fe20d9d4e89ebbacf7a75a35e",
          "url": "https://github.com/komainu8/groonga/commit/8bcb2ae2f96d34bdcb5dfef232324cf832f9e1f5"
        },
        "date": 1769498330359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38497509299998,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019404000000000143 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2691676769998139,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01335700000000023 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01576641299993753,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004019999999998469 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015251101999865568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003800000000000747 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4301398769999878,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015599999999998948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2393915539998943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005791000000000018 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13503130799995233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005432999999999799 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016108550000126343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014389999999998015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016361295000024256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014480000000002546 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06229030700023941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006782000000000288 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06533267199984039,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006530999999999648 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01712679400009165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001527000000000056 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02590082300002905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014949999999997188 s\nthreads: undefined"
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
          "id": "a1de2bbfdd6d9506162f0821f30178925f15bf17",
          "message": "Fix grammar error",
          "timestamp": "2026-01-28T17:08:43+09:00",
          "tree_id": "3bf7f00a450702fdcc278435842ad3efbcb4d4c5",
          "url": "https://github.com/komainu8/groonga/commit/a1de2bbfdd6d9506162f0821f30178925f15bf17"
        },
        "date": 1769587977706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3706620759999453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016271000000000008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27471510200004445,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014855999999999758 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014838142000002108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038400000000013423 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024262710999977344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040999999999996595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.572326543999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037299999999992894 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24214183099999786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006957000000000088 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13731193999998936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005950999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01681808500001125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014560000000000684 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016860575000066547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015999999999999348 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06179426799997145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00688199999999993 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06473399899999777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007838999999999402 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016789590999991333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015530000000002764 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017058157000008123,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015300000000003366 s\nthreads: undefined"
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
          "id": "a5d0e30d917a35781c7ea4ff31b273c1d46d35d5",
          "message": "Implement compression process using OpenZL",
          "timestamp": "2026-01-28T17:36:20+09:00",
          "tree_id": "d488ed8b01bb887490b6e6a80ead2fe6be032ae8",
          "url": "https://github.com/komainu8/groonga/commit/a5d0e30d917a35781c7ea4ff31b273c1d46d35d5"
        },
        "date": 1769590077194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3820062829999529,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020376999999999867 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2726289500000405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016056000000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01521000599996114,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036999999999973165 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01540362999998024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042599999999998195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.670565726999996,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001619999999998012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23979705699997567,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008377000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13938909999995985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007451999999999459 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01685850199999095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016290000000001026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01676249000001917,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016979999999994222 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06564979600000242,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007283999999999763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0672063140000887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009413999999999645 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01698225399997,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015859999999999763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0171675699999696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016340000000001909 s\nthreads: undefined"
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
          "id": "70536f9a134bf94d3d091bc41ca0ffc5440e2ec4",
          "message": "Fix style",
          "timestamp": "2026-01-29T10:39:46+09:00",
          "tree_id": "5f93d697a85a2412f9a2648b96e0d68a734ab372",
          "url": "https://github.com/komainu8/groonga/commit/70536f9a134bf94d3d091bc41ca0ffc5440e2ec4"
        },
        "date": 1769651010783,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3442437279999808,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013519999999999949 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2489360399999896,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010365999999999903 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0154054170000677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003529999999997979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024877043999936177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037600000000037603 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7510915149999846,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003310000000000257 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2126010499999893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0098420000000001 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1189385910001306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007277000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016412280000054125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014350000000002694 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014451846000042678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013519999999997978 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061307292999970286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007066999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06016862699993908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00875199999999994 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018080594999958066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013980000000002601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.014879431999986537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014909999999999923 s\nthreads: undefined"
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
          "id": "f831acf2a157f6ea15842b80269ba03aae20db14",
          "message": "Add missing error handling",
          "timestamp": "2026-01-29T11:57:32+09:00",
          "tree_id": "6e2a3abbd4f58c3a2964ca487ba8a4546d4ac4da",
          "url": "https://github.com/komainu8/groonga/commit/f831acf2a157f6ea15842b80269ba03aae20db14"
        },
        "date": 1769655700436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35257676600002696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01584900000000014 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29331697200007056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020203000000000138 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015073308000012275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015186889999995401,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039799999999989844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4383097509999914,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017499999999995297 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22823650099999782,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007391000000000064 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1386978220000401,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006089999999999984 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016492655000007517,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015859999999998653 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016338449000016908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014359999999999096 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061788894000073924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006742999999999874 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0654096610000181,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006919000000000286 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01732888099999741,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013509999999997413 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026145491999983506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001440000000000552 s\nthreads: undefined"
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
          "id": "ce3ced95037f928535a5319cb77daeb1286025be",
          "message": "Use more suitable variable name",
          "timestamp": "2026-01-29T11:58:33+09:00",
          "tree_id": "39571c0bac2682114f5eacc53e8f3c53782236ef",
          "url": "https://github.com/komainu8/groonga/commit/ce3ced95037f928535a5319cb77daeb1286025be"
        },
        "date": 1769655960312,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35233640999993554,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015948000000000406 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2666669870000362,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013164000000000148 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015903990999987627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042700000000009397 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014920035000017151,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035800000000021925 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4762805359999902,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015999999999996573 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22955081699996072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065699999999997705 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13622946299994965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005687000000000053 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017817295999975613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001591000000000009 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016613879999994197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016079999999998873 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06273436199998628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008807999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06301005699998541,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007296000000000025 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017901424999990923,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016019999999989931 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01772076000000311,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016289999999999916 s\nthreads: undefined"
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
          "id": "444909721b792cae7410a2fd44789f28cca89433",
          "message": "Update processing order to easy to read",
          "timestamp": "2026-01-29T11:59:02+09:00",
          "tree_id": "648a811790662656ffe0dcc59a0fdff6711477ac",
          "url": "https://github.com/komainu8/groonga/commit/444909721b792cae7410a2fd44789f28cca89433"
        },
        "date": 1769656176408,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3787852329999737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018483 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25993814800000337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013008999999999826 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01554163499997685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004100000000000492 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015095323000025473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040600000000032277 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.461566973999993,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015799999999999148 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.240098901000124,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006437999999999902 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1353703469999914,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005256000000000066 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016543510999952105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014610000000001289 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016856425000014497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001488000000000822 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06009633699994765,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006534000000000234 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06324249300007523,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007491999999999971 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01812735500004692,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001615000000000616 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026705717000027107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016940000000001676 s\nthreads: undefined"
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
          "id": "a6e65c2dcbeb8be401188dab91d7480e4f171834",
          "message": "Add missing compressed value size",
          "timestamp": "2026-01-29T12:00:50+09:00",
          "tree_id": "ed79e2cf78d7007526820f519a88c5a5d5e6408a",
          "url": "https://github.com/komainu8/groonga/commit/a6e65c2dcbeb8be401188dab91d7480e4f171834"
        },
        "date": 1769656617013,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3863977880000391,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0215160000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26875078800003394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013887000000000232 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0155765830000405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000496000000000274 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015340619999989258,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040400000000015424 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.808161934999987,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001670000000001115 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23428637000003505,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010308000000000317 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13837718899998208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006450000000000122 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01678522400001725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015739999999998533 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016726623999971935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001591999999999677 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06405451599999878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007616999999999929 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06677250699999604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008189999999999975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017612486000018635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017999999999999128 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026638257000001886,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017199999999996107 s\nthreads: undefined"
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
          "id": "6521f183f0acbedd86a491e2f6542f32401b7b3a",
          "message": "Add missing free of compressed_value",
          "timestamp": "2026-01-29T18:12:12+09:00",
          "tree_id": "d85bfd35939fd5dec8aec90374469376657bf431",
          "url": "https://github.com/komainu8/groonga/commit/6521f183f0acbedd86a491e2f6542f32401b7b3a"
        },
        "date": 1769678540347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3456001269999547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014716999999999786 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2554914839998901,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011375000000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016086671999971713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041399999999991444 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014753866999967613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004670000000004393 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.924353050000036,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00018399999999990646 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21220959900006164,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008818000000000145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12199818199997026,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008735999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018491667000034795,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018549999999999817 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015936581000119077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015150000000001274 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06516434399998161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007714999999999653 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06286027999988164,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008801000000000253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01892940900006579,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016139999999999904 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.029457476999994014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018749999999994604 s\nthreads: undefined"
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
          "id": "f108be53a1cc1d43138c4449b76d946b5518c2d0",
          "message": "Fix an incorrect placed declaration",
          "timestamp": "2026-01-30T15:01:53+09:00",
          "tree_id": "50ab40c254880104bcaaa47f5c67ecb201413591",
          "url": "https://github.com/komainu8/groonga/commit/f108be53a1cc1d43138c4449b76d946b5518c2d0"
        },
        "date": 1769753386160,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35974500299988676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01725600000000009 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28260071800013975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016049000000000174 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01540845600004559,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033500000000008523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01506565900001533,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003929999999998379 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7845781370000395,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00014700000000006375 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23038014899998416,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00867400000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13776946799998768,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006911999999999696 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0161727269999119,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013949999999999796 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016372889999956897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014499999999995072 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060799953000014284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00671199999999951 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0626708939999503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007415000000000643 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017572955999980877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016229999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.030193308000036723,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017210000000005 s\nthreads: undefined"
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
          "id": "f09daac08b0e66a3047c097773c8672c3f9b520b",
          "message": "Disable OpenZL in MinGW\n\nDuplicate zstd definition during linkage as below.\n\n```\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressBound':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:72: multiple definition of `ZSTD_compressBound'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000326.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:5491: multiple definition of `ZSTD_compressCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000327.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_createCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:98: multiple definition of `ZSTD_createCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000349.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_freeCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:182: multiple definition of `ZSTD_freeCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000409.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressStream2':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:6451: multiple definition of `ZSTD_compressStream2'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000337.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_decompress.c.obj): in function `ZSTD_decompress':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/decompress/zstd_decompress.c:1204: multiple definition of `ZSTD_decompress'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000372.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_common.c.obj): in function `ERR_isError':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/common/error_private.h:52: multiple definition of `ZSTD_isError'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000458.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_common.c.obj): in function `ZSTD_getErrorName':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/common/zstd_common.c:40: multiple definition of `ZSTD_getErrorName'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000430.o):(.text+0x0): first defined here\ncollect2.exe: error: ld returned 1 exit status\n```",
          "timestamp": "2026-01-30T16:30:13+09:00",
          "tree_id": "7d2fa9b31702a9ab4f2103ddc788b94438b8bccf",
          "url": "https://github.com/komainu8/groonga/commit/f09daac08b0e66a3047c097773c8672c3f9b520b"
        },
        "date": 1769758480381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3541352070000414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015447000000000002 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2509383379999406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009916000000000189 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01575623199997267,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00031499999999973216 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019680753000017148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043600000000010297 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6534969969999906,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016700000000000048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.20913551999998958,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008521999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1200616400000456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007130000000000275 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016123840999966887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013570000000001498 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014347563000001173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012719999999999815 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06447546300003637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006999000000000477 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0600688479999576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007561999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017321756000001187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012739999999995533 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01510691300001099,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013909999999993095 s\nthreads: undefined"
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
          "id": "ee9267c3ee4ddbaf7d42a6a49a73160efd077395",
          "message": "Disable OpenZL in MinGW\n\nDuplicate zstd definition during linkage as below.\n\n```\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressBound':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:72: multiple definition of `ZSTD_compressBound'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000326.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:5491: multiple definition of `ZSTD_compressCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000327.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_createCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:98: multiple definition of `ZSTD_createCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000349.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_freeCCtx':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:182: multiple definition of `ZSTD_freeCCtx'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000409.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_compress.c.obj): in function `ZSTD_compressStream2':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/compress/zstd_compress.c:6451: multiple definition of `ZSTD_compressStream2'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000337.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_decompress.c.obj): in function `ZSTD_decompress':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/decompress/zstd_decompress.c:1204: multiple definition of `ZSTD_decompress'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000372.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_common.c.obj): in function `ERR_isError':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/common/error_private.h:52: multiple definition of `ZSTD_isError'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000458.o):(.text+0x0): first defined here\nD:/a/_temp/msys64/ucrt64/bin/../lib/gcc/x86_64-w64-mingw32/15.2.0/../../../../x86_64-w64-mingw32/bin/ld.exe: _deps/openzl-build/zstd_build/lib/libzstd.a(zstd_common.c.obj): in function `ZSTD_getErrorName':\nD:/a/groonga/groonga/ci/msys2/src/build-x86_64/_deps/openzl-src/deps/zstd/lib/common/zstd_common.c:40: multiple definition of `ZSTD_getErrorName'; D:/a/_temp/msys64/ucrt64/lib/libzstd.dll.a(libzstd_dll_d000430.o):(.text+0x0): first defined here\ncollect2.exe: error: ld returned 1 exit status\n```",
          "timestamp": "2026-02-02T11:22:06+09:00",
          "tree_id": "504282ea36cb8f4be8232f66a9d9ef536184d885",
          "url": "https://github.com/komainu8/groonga/commit/ee9267c3ee4ddbaf7d42a6a49a73160efd077395"
        },
        "date": 1769999215757,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3936556209999367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01867600000000011 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2692383319999294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01325800000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015933612000026187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038299999999980017 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015312279999989187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003479999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5184087680000289,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00015700000000001824 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25129661599999054,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006044999999999898 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.134456436999983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005877999999999717 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017039951000015208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015199999999999936 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0163033069999301,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014570000000000138 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05983599899980163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006680000000000436 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06351564399989229,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00639300000000062 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017304152000065187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017300000000001758 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02619207399999368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001435999999999965 s\nthreads: undefined"
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
          "id": "c1e3b149beb5e36bc2d0bb8514795fc41e741f78",
          "message": "Remove needless newlines",
          "timestamp": "2026-02-02T14:49:09+09:00",
          "tree_id": "bd242859f91798b3e12b1b628e90a18b88f5d214",
          "url": "https://github.com/komainu8/groonga/commit/c1e3b149beb5e36bc2d0bb8514795fc41e741f78"
        },
        "date": 1770011566026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.393971433000047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019266999999999937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.298716082000027,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021049000000000068 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015723941000004515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003979999999996764 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024417780999982597,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043100000000029226 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5242233519999786,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039900000000001046 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24983450700003118,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007231000000000307 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13603360900000894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00618000000000038 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017010155999997778,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017080000000001816 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016956603000011228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001976000000000172 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06031534800004579,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007045999999999858 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06352102600001786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006894000000000011 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01759193100002676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018239999999993262 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026352729000024055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015690000000002646 s\nthreads: undefined"
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
          "id": "8617e933cd80265821446b492c31c06f8697bd34",
          "message": "Add a missing error handling",
          "timestamp": "2026-02-02T15:03:31+09:00",
          "tree_id": "9c1986035cd84a724636a53d86f5682cc257ca6b",
          "url": "https://github.com/komainu8/groonga/commit/8617e933cd80265821446b492c31c06f8697bd34"
        },
        "date": 1770013353404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35643612100000155,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015624999999999944 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27802248800003326,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01744199999999993 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015379122999945594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000348000000000237 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015025391000023092,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004149999999997489 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5353133189999824,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036799999999997945 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22960025299997255,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007008000000000153 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13575551500002803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006287000000000126 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016588114999990466,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013970000000001759 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016690803999978243,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014619999999999633 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05868386899999223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007386000000000212 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06113216800000032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007608000000000614 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017265354999977944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015439999999995457 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026399569000034262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018249999999993272 s\nthreads: undefined"
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
          "id": "fcd57c00d773420ed2687e8055a1947f4957904e",
          "message": "Don't use goto",
          "timestamp": "2026-02-02T16:33:24+09:00",
          "tree_id": "009fdafb79d61d4179d8da75a51e328fc60143d4",
          "url": "https://github.com/komainu8/groonga/commit/fcd57c00d773420ed2687e8055a1947f4957904e"
        },
        "date": 1770018020949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3868945590000976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022201000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26252100000010614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013087999999999989 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015787522000096033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004129999999997469 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015140725000037492,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003470000000005413 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5692133940000303,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00026499999999987645 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23887428000000455,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010618999999999865 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14219879399990987,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006945000000000229 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016706367999972827,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001560999999999979 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016696637999984887,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015720000000003231 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06418243899986464,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007802000000000253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06713199700016048,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075850000000005635 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0182220880000159,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017470000000004149 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01708899499999461,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013420000000007037 s\nthreads: undefined"
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
          "id": "ecc3c806ffbc8e05cd80df2eca2344edba30c078",
          "message": "Remove a needless error handling",
          "timestamp": "2026-02-03T12:42:43+09:00",
          "tree_id": "89a146f7e606b96a66799102d253981911d3ef33",
          "url": "https://github.com/komainu8/groonga/commit/ecc3c806ffbc8e05cd80df2eca2344edba30c078"
        },
        "date": 1770090595289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3609501870000713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016800999999999428 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26254711199987923,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012784000000000184 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01582351700005802,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003899999999996129 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01573547000009512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003799999999999082 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5480333750000455,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00043499999999979666 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23477517400021952,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069249999999999035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13731810300009784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0055070000000001645 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01646736700024576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015979999999999328 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016544961999898078,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015580000000001148 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06349856299993917,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006836000000000231 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06530516999998781,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007170999999999927 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018018027000039183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016280000000001293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017429122999942592,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016629999999999423 s\nthreads: undefined"
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
          "id": "ef272a031d5811a3965015a9f7f8119f2992dbb8",
          "message": "Use more suitable variable name",
          "timestamp": "2026-02-03T12:54:22+09:00",
          "tree_id": "80e782cf9815b40bd17228f16dbd5fa0845fdaee",
          "url": "https://github.com/komainu8/groonga/commit/ef272a031d5811a3965015a9f7f8119f2992dbb8"
        },
        "date": 1770091143523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3706987799999979,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018917999999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2640019820000248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013475000000000209 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014915219000044999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039599999999989643 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014816750000022694,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003519999999996859 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4372204029999693,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003120000000000067 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23260130800002798,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006387999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13255074099998865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0050240000000001395 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01711483400003999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015390000000001791 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01634884600002806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014839999999999298 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06321829300003401,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006313000000000041 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06297917400007691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076779999999995185 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017224637000026632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015959999999993757 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01721632100009174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016290000000001026 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a2cbe053d41b39cdb5c3f86e736eae4781eb01c",
          "message": "Use upper case\n\nCo-authored-by: Sutou Kouhei <kou@cozmixng.org>",
          "timestamp": "2026-02-03T12:55:31+09:00",
          "tree_id": "e2ce2289d44c0764953c96a99f4b79766b799f96",
          "url": "https://github.com/komainu8/groonga/commit/4a2cbe053d41b39cdb5c3f86e736eae4781eb01c"
        },
        "date": 1770091188830,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36464129999995976,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01767700000000011 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2924063819999958,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0202169999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01518396700004132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003799999999998249 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01565683500001569,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040400000000007097 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4321076869999843,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00026899999999999147 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2349369410000577,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007572999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13591021600007025,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005439999999999778 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016242314000010083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001513999999999821 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01663120699998899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001479000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05836099099991543,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006551999999999725 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061260948000040116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007334999999999869 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01781515199985506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017319999999995117 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025802650999935395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00135399999999955 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6af921688a5fd4e63f9a2699302211b68d7124a",
          "message": "Use more suitable error message\n\nCo-authored-by: Sutou Kouhei <kou@cozmixng.org>",
          "timestamp": "2026-02-03T12:55:57+09:00",
          "tree_id": "c9518614645c8936b7409dffb7e7549076be6531",
          "url": "https://github.com/komainu8/groonga/commit/e6af921688a5fd4e63f9a2699302211b68d7124a"
        },
        "date": 1770091430588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3712464590000195,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019275000000000153 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26300691900001993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013427000000000078 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015920308999966437,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003619999999999457 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015915690999918297,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003450000000004838 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.699981806999972,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00033100000000008123 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2370506369999248,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006400000000000017 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.135580682000068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005832999999999755 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017191106999973726,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013620000000001686 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016883822000067994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014250000000001484 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06686483599997928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008182000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06968089399993005,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010051999999999811 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01805421699998533,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016400000000001969 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02343841999987717,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017229999999997525 s\nthreads: undefined"
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
          "id": "9683527419051d066d34dbdbf7daf157b9f5421b",
          "message": "doc news: add 16.0.0 entry",
          "timestamp": "2026-02-05T16:50:35+09:00",
          "tree_id": "ac46a7231d31bf41b0d92e8e10e2f67f68ae2bec",
          "url": "https://github.com/komainu8/groonga/commit/9683527419051d066d34dbdbf7daf157b9f5421b"
        },
        "date": 1770278726714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37614661300000307,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02069899999999983 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26879947299994456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015047999999999784 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015960311999947407,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003730000000004008 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015599583999971856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033800000000025476 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.613705035999999,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003929999999999767 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2336880959999803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009044999999999831 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13773935400001847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006726000000000093 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01711302399996839,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016850000000002419 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016818924000062907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001550999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06471730300006584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008654000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06717996300000095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008123999999999632 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017810101000009126,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017530000000003099 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017937599999982012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017830000000000068 s\nthreads: undefined"
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
          "id": "7cfa8b4aa2d73179db5cc1aaceaeb56ba319fdf0",
          "message": "Compress and decompress only body",
          "timestamp": "2026-02-05T17:59:35+09:00",
          "tree_id": "7491255dcd79c0dcafd09467e5e122ca760cd5aa",
          "url": "https://github.com/komainu8/groonga/commit/7cfa8b4aa2d73179db5cc1aaceaeb56ba319fdf0"
        },
        "date": 1770282632835,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4056280400000105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023542999999999897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27293292199988173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015312000000000214 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015262065999991137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037499999999993094 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015386190000015176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041099999999991144 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5427484449999724,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003210000000002933 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24422063899993418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00750699999999993 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13591793500000904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006433000000000161 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016428986999983408,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015899999999998138 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01703417900000659,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016259999999995722 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06226184200005491,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008181999999999578 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06995911999985083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007405999999999552 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018128804999946624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017680000000002138 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.010478192999983094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014879999999995452 s\nthreads: undefined"
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
          "id": "a248481bd6e572e5cf77ce46e72219b941cadc92",
          "message": "Use ZL_CCtx_compressMultiTypedRef/ZL_DCtx_decompressMultiTBuffer",
          "timestamp": "2026-02-06T18:00:34+09:00",
          "tree_id": "0717702ee1230a5f2cbd6ec6a5a0787c7feb0709",
          "url": "https://github.com/komainu8/groonga/commit/a248481bd6e572e5cf77ce46e72219b941cadc92"
        },
        "date": 1770368709276,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36561285900006624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016085999999999934 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2896444939999583,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020055000000000184 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015727116999983082,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038699999999999846 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015163834000020415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003499999999991843 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.459863103000032,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00024899999999991596 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2365901020000365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007208000000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13362719100007325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006438999999999667 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01651080300001695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014730000000002796 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01670432299994218,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015129999999998756 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0606627900000376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007703999999999586 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06055356700005632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007175999999998878 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017239562999975533,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001404000000000405 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017010825000056684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014720000000005007 s\nthreads: undefined"
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
          "id": "3668399a57e6c7cbadb192ccc53c55e64b1a3ea3",
          "message": "Use ZL_CCtx_compressMultiTypedRef/ZL_DCtx_decompressMultiTBuffer",
          "timestamp": "2026-02-12T14:04:49+09:00",
          "tree_id": "bf19f8123c77341294cfbfee6cbaa05e23e1ee3c",
          "url": "https://github.com/komainu8/groonga/commit/3668399a57e6c7cbadb192ccc53c55e64b1a3ea3"
        },
        "date": 1770873295229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3656900650000239,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01657699999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26188455699991664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012907999999999725 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015675958000031187,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004099999999997994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.023230269000009685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004279999999996509 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4355209189999982,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003959999999998409 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23653981899997234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00710900000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13250083600001972,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005850999999999856 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016639840000095774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017449999999999966 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016757047999988117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016210000000002611 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06212879000003113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008486999999999967 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06580706800008329,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007248999999999423 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017758723999975246,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015809999999998048 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026502608000100736,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001557999999999421 s\nthreads: undefined"
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
          "id": "6d0bb7492d2e727e3ebe00183df9a080f509d8af",
          "message": "Fix wrong condition",
          "timestamp": "2026-02-12T14:15:06+09:00",
          "tree_id": "a167fe77b4ed7d475b7a1722d3d447faa50f1b14",
          "url": "https://github.com/komainu8/groonga/commit/6d0bb7492d2e727e3ebe00183df9a080f509d8af"
        },
        "date": 1770873927083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38477493300001697,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020609000000000155 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28621508899999526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01890899999999973 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0161568910000085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035900000000022025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.017830093999975816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00047699999999983866 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.77185144500001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00034599999999995745 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24024407999999653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008218999999999893 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14045993100000942,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007226000000000066 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01675283500000546,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016800000000001536 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016958046000013383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015029999999998933 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06486102099995605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007905000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06595844599988254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008941000000000393 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017849418000025707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002083000000000279 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018415501999982098,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019589999999996555 s\nthreads: undefined"
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
          "id": "850c5bfe7b766177776ce6957d139abee4a43331",
          "message": "Fix illegal access",
          "timestamp": "2026-02-12T14:17:17+09:00",
          "tree_id": "1c2a95aea35a7798cb11c658937555c534b072e1",
          "url": "https://github.com/komainu8/groonga/commit/850c5bfe7b766177776ce6957d139abee4a43331"
        },
        "date": 1770874365562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37188853600000016,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018580999999999903 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2776459559999864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01606099999999966 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01534651299999723,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003670000000000062 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020881616999986363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039299999999964363 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4987781730000052,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00041200000000002346 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23440880499998684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006326999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.136170189999973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005706999999999629 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01617048299999624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001605000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016648154000023396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015600000000000336 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06256602199999861,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007490999999999914 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06260876299998586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008202000000000043 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017251071999993428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014700000000000546 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017245371000029763,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015030000000000043 s\nthreads: undefined"
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
          "id": "2e78917658a13e27fac323f13045c8ee8c9d0d12",
          "message": "Add missing free",
          "timestamp": "2026-02-12T14:20:13+09:00",
          "tree_id": "836e8e74904ad693662b16084b312cd34f81a000",
          "url": "https://github.com/komainu8/groonga/commit/2e78917658a13e27fac323f13045c8ee8c9d0d12"
        },
        "date": 1770874587987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3683585679999908,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01760600000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2626572529999862,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012847000000000192 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015217744000011635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003959999999998409 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014948252000010598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035100000000021225 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4506789389999994,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003510000000001845 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24018051400000218,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074680000000002245 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13479900999999472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005292999999999909 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016199801999988495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015559999999997798 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016553482999995595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015030000000001709 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06360566299997572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006984999999999658 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06453573299998538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006833000000000394 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017907321999985015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016269999999998785 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01722942500001068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016670000000002516 s\nthreads: undefined"
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
          "id": "d258c8ccd710ffc13673eaebb9f6e47c0f0d20e7",
          "message": "Add missing free",
          "timestamp": "2026-02-12T14:43:46+09:00",
          "tree_id": "287bf1fc250f7a157dd60de79223fb3f3e8ca945",
          "url": "https://github.com/komainu8/groonga/commit/d258c8ccd710ffc13673eaebb9f6e47c0f0d20e7"
        },
        "date": 1770875508087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37904131199999824,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018088999999999855 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27100405300004127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013255000000000267 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01568291899999963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034100000000014674 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015272358999965263,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036699999999997845 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4320190159999981,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00035400000000002096 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24544160000004922,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006848000000000146 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13641232499995226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065950000000001285 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01628891000001431,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015540000000002496 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016931093000010833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015220000000004674 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.062087166999987176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074459999999999665 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06638834899996482,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007677000000000378 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016970796999970617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016150000000001163 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024304864999976417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017099999999996007 s\nthreads: undefined"
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
          "id": "a2089bc417dbd2b799c739c7e6a33df556b77194",
          "message": "Fix type error",
          "timestamp": "2026-02-12T15:40:44+09:00",
          "tree_id": "cb18bc46db483fb19f2f92177c530ea67c1915ab",
          "url": "https://github.com/komainu8/groonga/commit/a2089bc417dbd2b799c739c7e6a33df556b77194"
        },
        "date": 1770880444106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36409859899998764,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015145999999999965 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.24914146399999026,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009413000000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016272398999944926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038800000000005497 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01316935599993485,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003390000000001031 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7122915990000251,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029199999999995896 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21505228399996668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007338000000000025 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11458760499994014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005828999999999959 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017618016999961128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012759999999997357 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015175239000029705,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013090000000000046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0672059780000609,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007051000000000168 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.061035684000103174,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009103999999999793 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017565398999977333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013579999999995818 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02130766899995251,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017509999999995585 s\nthreads: undefined"
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
          "id": "0115bc83733e80530de2f6ad962ffe90c39dd46a",
          "message": "Remove a duplicate line",
          "timestamp": "2026-02-12T15:45:38+09:00",
          "tree_id": "1908a40b5130f086f764aeb177aca7e6712b2397",
          "url": "https://github.com/komainu8/groonga/commit/0115bc83733e80530de2f6ad962ffe90c39dd46a"
        },
        "date": 1770880489055,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36127949099994794,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016883000000000065 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2617740399999775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012573000000000223 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015403214000002663,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003499999999998227 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014921814000047107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000325000000000103 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.558843631000002,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003759999999999597 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23059886900006177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006166000000000088 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1367581679999148,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006254000000000398 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016561834000015097,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015949999999997078 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018485705999978563,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016030000000003264 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06216255399999682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00696099999999969 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06329585800006043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008208000000000215 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017074324000020624,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001627000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01753872000000456,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017349999999991539 s\nthreads: undefined"
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
          "id": "52671ea0b3ef31d300c746c3a16a815f7b795089",
          "message": "Add a missing null check",
          "timestamp": "2026-02-12T15:46:52+09:00",
          "tree_id": "b212e468347aa250c72f8c1932b5bbad45f1e290",
          "url": "https://github.com/komainu8/groonga/commit/52671ea0b3ef31d300c746c3a16a815f7b795089"
        },
        "date": 1770880980762,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3922724829999993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022012000000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2667271429999971,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014027000000000123 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01589888000000883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004110000000000502 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01234949300001631,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00030700000000005723 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4467547440000033,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003689999999998972 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2418965479999713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007998000000000033 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1343864929999654,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006336000000000203 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016802500000011378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00152199999999994 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016870269999969878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00157199999999999 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06111741600003029,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00743499999999972 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06706281199993214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007735999999999549 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017791358000067703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016560000000003239 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026667868999965094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016500000000002346 s\nthreads: undefined"
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
          "id": "3d8b9dcae13c902affe3ed31a6a6f00c7a94ce91",
          "message": "Add missing error set",
          "timestamp": "2026-02-12T17:05:59+09:00",
          "tree_id": "33464652cc30470cd4accc599c98647bf7828e56",
          "url": "https://github.com/komainu8/groonga/commit/3d8b9dcae13c902affe3ed31a6a6f00c7a94ce91"
        },
        "date": 1770883927917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3680186909999179,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015843000000000107 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2813071439999817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017141999999999893 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015409015999978237,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032999999999999696 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01510182600003418,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004119999999996349 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4375373670000045,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004029999999999867 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24654250100013542,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007300999999999988 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13521350499996743,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006036999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017585912000072312,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015889999999999238 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016786154000044462,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001509000000000038 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06298640599993632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006957000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06271312800004125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00655399999999981 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01766450899992833,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015730000000000466 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017580180999971162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017039999999991506 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f84729d94b917c66e7d113f8b8c29352b97ae1f8",
          "message": "Fix English grammar issue\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-02-12T17:07:41+09:00",
          "tree_id": "1f07cd5817563455353c8a521eef17001b0f0ae3",
          "url": "https://github.com/komainu8/groonga/commit/f84729d94b917c66e7d113f8b8c29352b97ae1f8"
        },
        "date": 1770884124039,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3728860520000694,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016589999999999994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28333763900002396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01754300000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015175902000009955,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003309999999998037 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015075587000012547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003260000000000485 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.396589347000031,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00038099999999979817 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24123751499979562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005410000000000026 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.134084304000055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006808999999999704 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016500103000055333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016120000000001689 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016344140999933643,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014090000000002711 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0598617420000096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006246000000000085 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060654778000014176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00691500000000092 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017225885999948787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015200000000000768 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026467581999952472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015069999999994255 s\nthreads: undefined"
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
          "id": "2ded479ce654ff37a97576b0895b0c12e4737518",
          "message": "Add a check for confirming size mismatch",
          "timestamp": "2026-02-12T21:54:11+09:00",
          "tree_id": "bdf98d3225d710aaace56f99e10eaee464c6cbc4",
          "url": "https://github.com/komainu8/groonga/commit/2ded479ce654ff37a97576b0895b0c12e4737518"
        },
        "date": 1770901248527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36307253000018136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01915100000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26663768600002413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014549000000000312 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015102525999907357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004180000000001405 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014856765000104133,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00030700000000002947 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.411169039000015,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031500000000031503 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23004688599996825,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005749999999999922 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1330531360001146,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005769999999999845 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016942676999974537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016630000000002754 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016510798999945564,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015370000000000106 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060813270999972246,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006497000000000183 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06339636699999573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005929000000000129 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017154780000055325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001566000000000095 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025992439999981798,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001695000000000224 s\nthreads: undefined"
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
          "id": "832c2787d10384dddfe6ed1b7b3e722e14956100",
          "message": "Remove a needless condition",
          "timestamp": "2026-02-12T22:25:56+09:00",
          "tree_id": "083255e6d5ade12dff6cede223bbed5d3711639b",
          "url": "https://github.com/komainu8/groonga/commit/832c2787d10384dddfe6ed1b7b3e722e14956100"
        },
        "date": 1770903201780,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3770334659999435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020981999999999945 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28280709299991713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01856499999999947 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01560683899998594,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003739999999999577 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015011637000043265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003870000000000262 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4234478309999758,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00036700000000003397 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2279522229999884,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005589999999999901 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.134148515999982,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0055369999999996256 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016449316999967323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016460000000001473 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016478078000034202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015180000000002691 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06042548799996439,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006514999999999882 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.062401208999915525,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006179000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0170436059999588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015010000000004464 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024162955000065267,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016059999999997465 s\nthreads: undefined"
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
          "id": "4cffcf8af1b30fd83817fb7cd42b4ff3e998b805",
          "message": "arch-linux: update to 16.0.0",
          "timestamp": "2026-02-13T15:15:05+09:00",
          "tree_id": "fffb65c98d6ed8fc64eb0ecd5eb1cdca6d0b29f8",
          "url": "https://github.com/komainu8/groonga/commit/4cffcf8af1b30fd83817fb7cd42b4ff3e998b805"
        },
        "date": 1770963733992,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35426067200000944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019230999999999943 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2926100590001397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02250499999999958 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016000778000147875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003760000000003483 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015246422999894094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003529999999993816 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3542576380000355,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004240000000000077 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23233902099980241,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007946999999999912 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13779834000001756,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005986000000000102 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016977451999878213,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015649999999996222 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016916559000037523,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017079999999998763 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061270710000030704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0065909999999993335 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06581681000022854,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0072509999999993135 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0176267189998498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016609999999999125 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02641044699998929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017019999999994262 s\nthreads: undefined"
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
          "id": "87fae7ceb91d636ecd40608ae304b5e1f8b12bbf",
          "message": "compress: add support for OpenZL compression and decompression against vector column\n\nThis modification doesn't implement the following features.\n\n- compress with preset by data type\n- learning input data and store learned model\n- compress with learned model\n\nThese features will implement in the following PR.",
          "timestamp": "2026-02-13T16:47:32+09:00",
          "tree_id": "ab382e0d83c7fd6e97476536fb3ed0a46d769f1f",
          "url": "https://github.com/komainu8/groonga/commit/87fae7ceb91d636ecd40608ae304b5e1f8b12bbf"
        },
        "date": 1770969353766,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.353629668999929,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016888999999999987 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2620748670001376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0130269999999999 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015092390000006617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003820000000003265 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013288919000046917,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040399999999994607 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6866009699999722,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037700000000004397 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2097984070000507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008218999999999976 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11790573899992296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006555000000000241 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017537765999975363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014389999999999958 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014464851000013823,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013130000000004527 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05991270199996279,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007306999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0587218059999941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008585999999999816 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016833915000006527,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015250000000003455 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027468264999981784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013380000000003667 s\nthreads: undefined"
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
          "id": "d3543ea2a8e6677be959d0493ffd85461d91b33d",
          "message": "Add tests for compression with OpenZL for vector column",
          "timestamp": "2026-02-13T16:50:14+09:00",
          "tree_id": "e64640d3fde8fc6f1abf381e75a65d40de4b2b1a",
          "url": "https://github.com/komainu8/groonga/commit/d3543ea2a8e6677be959d0493ffd85461d91b33d"
        },
        "date": 1770970670657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3893116090000035,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.026842999999999867 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27899478599994154,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02014499999999958 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015697192000004634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003999999999997339 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015498869999959197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004260000000005648 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4796565139999984,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000280000000000058 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23025065900003483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006973000000000049 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13747313199999667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00579899999999961 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016219188999968992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001677000000000095 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017054658000034806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016969999999998653 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06364557699995999,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007084000000000368 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07068732699997327,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008595999999999729 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017472911000055547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016310000000001046 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02663208299998132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015120000000002076 s\nthreads: undefined"
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
          "id": "5ede2c5d88ec03cf6123a15c7d3a3944ac37dd12",
          "message": "Fix meaningless tests",
          "timestamp": "2026-02-16T12:41:23+09:00",
          "tree_id": "3b56f45a08ba114dfe2eeb437576f2f44b4de6c7",
          "url": "https://github.com/komainu8/groonga/commit/5ede2c5d88ec03cf6123a15c7d3a3944ac37dd12"
        },
        "date": 1771213525748,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37998024200001623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02454300000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2971648079999909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023712000000000122 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015770906000028617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004310000000000147 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024589597999948865,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004329999999999057 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4844170229999918,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00035999999999997145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23048763300002406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007225000000000134 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1370184360000053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005899000000000182 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017218328999973664,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015030000000002541 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017123340999944503,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015200000000003822 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06304593400003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007264000000000381 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06605816299997969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006896999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017792074999988472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015800000000005532 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019544865999989725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016779999999995965 s\nthreads: undefined"
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
          "id": "a02779d3369f97df38264c94d39321e979fb0498",
          "message": "FIx wrong arguments",
          "timestamp": "2026-02-16T12:42:37+09:00",
          "tree_id": "316ab9c2df31b5afdbde7894120ff0e6c30ee4d1",
          "url": "https://github.com/komainu8/groonga/commit/a02779d3369f97df38264c94d39321e979fb0498"
        },
        "date": 1771213738458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3740715779999846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019253999999999966 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30187043500006894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02229900000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015897711999969033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040899999999965964 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01539906699997573,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041299999999977466 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4299422569999933,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00042399999999992444 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24383429600004547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006002000000000091 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13624453199997788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005110999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017285169999979644,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001640999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016888781000091058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001629000000000158 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06060155900007658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006482999999999739 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06355969300000197,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007304999999999312 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017729426000073545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016580000000004091 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024817837999989933,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001406999999999714 s\nthreads: undefined"
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
          "id": "e101118b8dadc8d605c3483140e93b9245a3166d",
          "message": "Add missing copy decompress data",
          "timestamp": "2026-02-16T16:58:29+09:00",
          "tree_id": "900f761f4dc0e227ae509c9e45bc92673757b4db",
          "url": "https://github.com/komainu8/groonga/commit/e101118b8dadc8d605c3483140e93b9245a3166d"
        },
        "date": 1771229097682,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38533817500004375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02444999999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3036588710000103,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025660000000000127 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016141208000021834,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004499999999999227 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015584819000025618,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004979999999999707 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5223046650000072,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004689999999999972 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2414267759999973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007444999999999771 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1362663469999461,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005391999999999814 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017140147999981536,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015079999999998428 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017395114000038348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001720000000000138 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06584437999998727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076050000000002504 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06962825500005465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008695999999999371 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01763931800002183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016160000000002839 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02586924400003454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016650000000001108 s\nthreads: undefined"
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
          "id": "e47d6d9c095de199cea7ddd501c7d8473696d3a5",
          "message": "Fix style",
          "timestamp": "2026-02-16T17:03:07+09:00",
          "tree_id": "8c48e02842bc03796ad9038d6cc2a0fd7aa9778f",
          "url": "https://github.com/komainu8/groonga/commit/e47d6d9c095de199cea7ddd501c7d8473696d3a5"
        },
        "date": 1771229595882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3627572970002575,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018977000000000077 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2738636220000217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017041000000000167 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015832188999979735,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004419999999998314 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015186273999916011,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000474000000000141 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4552519080000366,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002699999999999092 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23073038199993334,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00588400000000007 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1361221930000056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005237999999999715 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01738187899991317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001602000000000131 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016704535000030774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001541999999999738 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06400271699999394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006803000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06785662700008288,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00717499999999982 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017990112000006775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015860000000000596 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017541552000011507,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015270000000002504 s\nthreads: undefined"
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
          "id": "139811aff3ee4a348df25e5c2178483d8c5d0fe1",
          "message": "Extract the body-only compression case into a separate function",
          "timestamp": "2026-02-18T17:56:09+09:00",
          "tree_id": "b3cbe76e7a1b84ccad55f29cc6ec0c4b1dff0826",
          "url": "https://github.com/komainu8/groonga/commit/139811aff3ee4a348df25e5c2178483d8c5d0fe1"
        },
        "date": 1771405524889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4173915490000013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02891400000000005 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.32361059999993813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.027252000000000054 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018531742999982725,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004910000000001302 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019550941000034072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003669999999999507 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6291791880000233,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00042500000000017524 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2531103709999343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007717000000000029 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14578224799987538,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006409999999999999 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019972384000027432,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016180000000002304 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.020456592999948953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016019999999998813 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06634598300001926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006613000000000341 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07351892300010832,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008563000000000126 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02009392999997317,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016440000000002009 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022089549000043007,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014270000000003724 s\nthreads: undefined"
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
          "id": "9b2eb652092a8f43405c9aafe20cbb5c6e26e35b",
          "message": "Extract the sections compression case into a separate function",
          "timestamp": "2026-02-19T12:18:48+09:00",
          "tree_id": "a1cf729825596a0e10e1447a959e9fcad7975410",
          "url": "https://github.com/komainu8/groonga/commit/9b2eb652092a8f43405c9aafe20cbb5c6e26e35b"
        },
        "date": 1771471381857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.35252124900003423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02352699999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28517273700001056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022741000000000094 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016017295999972703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046000000000001595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016067038000045386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00051400000000007 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.554245585000018,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004700000000000537 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2157305849999318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006484999999999963 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13465747100002545,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00560700000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016966817999986006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016780000000002626 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017263747000015428,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016390000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05914339199995311,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007641000000000175 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06302158499991606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007713000000000525 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017347579999977825,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017150000000000776 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.034997195000016745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0025440000000002128 s\nthreads: undefined"
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
          "id": "3f8d0efc5edf4dee6da4b27e195482cb0b8e568a",
          "message": "Fix style",
          "timestamp": "2026-02-19T12:38:56+09:00",
          "tree_id": "fa0bfcdc3458e1ead57d2f709961682aab778f92",
          "url": "https://github.com/komainu8/groonga/commit/3f8d0efc5edf4dee6da4b27e195482cb0b8e568a"
        },
        "date": 1771473155770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3682746119999365,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01847800000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.287521872999946,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02147400000000027 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016164344000060282,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003820000000000212 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015638172000024042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00047700000000028275 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.389901411999972,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032500000000024176 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23965864599995257,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005952000000000179 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13566899499994634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00566400000000003 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016709410000032676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00166100000000019 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016824554000095304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015300000000002811 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05888491699977294,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006869999999999779 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06544905000009749,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006985999999999368 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017961194999998042,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018710000000001503 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018162547999850176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015109999999996515 s\nthreads: undefined"
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
          "id": "175985c891d12763ebbd735505b27e1189cdc18f",
          "message": "Fix memory leak",
          "timestamp": "2026-02-19T15:55:02+09:00",
          "tree_id": "32fe300af5a457e14116052a50cbf3f336a45eed",
          "url": "https://github.com/komainu8/groonga/commit/175985c891d12763ebbd735505b27e1189cdc18f"
        },
        "date": 1771485114466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34221751999996286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012439999999999979 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26354954900000394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013769999999999893 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01630018999992444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00040999999999977166 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012902155999938714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00028699999999970416 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7929548079999904,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003909999999997804 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21331316099991682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007776999999999909 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11386828600006993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005743000000000012 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016549787000030847,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001365000000000477 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014357768000024862,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013660000000001588 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06036050800003068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007468000000000474 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05886848900001951,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007917999999999953 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017042458999924293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013620000000000715 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.021774529999959213,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013700000000001489 s\nthreads: undefined"
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
          "id": "28e5c9d35fb1492a2bbc9090100afaeab973bc47",
          "message": "Extract the body-only compression case into a separate function\n\nExtracted shared logic for header/body/footer compression.\nSeparated the header/body/footer and body-only compression paths into different functions to reduce complexity.",
          "timestamp": "2026-02-19T16:11:55+09:00",
          "tree_id": "05723c380642991657defd5a3ac42c6b627889b3",
          "url": "https://github.com/komainu8/groonga/commit/28e5c9d35fb1492a2bbc9090100afaeab973bc47"
        },
        "date": 1771486912970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.34797778500012555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014924000000000034 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2567890949995899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013682999999999723 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016174376999856577,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004019999999998747 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012850686999968275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00030099999999991245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.746873327000003,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00035899999999991494 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21089681700004803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008666999999999925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1176416150001387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007661000000000057 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016266554999901928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013620000000001964 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02750587799994264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013900000000000856 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0653365789999043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007735999999999993 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06462934000023779,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008152000000000326 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018809118000035596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013960000000003414 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.015124923000030321,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014299999999995705 s\nthreads: undefined"
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
          "id": "ccd8aeef53bc3c3242bf586c2c6535de1915dc72",
          "message": "Insert a line break to easy to read",
          "timestamp": "2026-02-19T17:34:15+09:00",
          "tree_id": "4918bac180c75f22721f4721b361607abbcb3748",
          "url": "https://github.com/komainu8/groonga/commit/ccd8aeef53bc3c3242bf586c2c6535de1915dc72"
        },
        "date": 1771490286414,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38631496499999685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0216640000000001 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2997299199999759,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.024080999999999547 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01602350499996419,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038299999999999446 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01561052500002802,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004940000000000222 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.426452095000002,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003479999999997929 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24029012500000135,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007711999999999983 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1355502860000115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006172000000000344 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017064611000023433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001619999999999705 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01697927099996832,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015519999999999146 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06080698100001314,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006644999999999859 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06592599799998311,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007676000000000904 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018326839000053496,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018930000000003666 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018084899999990967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015300000000003089 s\nthreads: undefined"
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
          "id": "8655bd70c9b75ef716304a9146678119bffc0870",
          "message": "Don't use a array of pointer",
          "timestamp": "2026-02-20T15:28:43+09:00",
          "tree_id": "2b322d63bbea331103e3f1987f600b110a3ac826",
          "url": "https://github.com/komainu8/groonga/commit/8655bd70c9b75ef716304a9146678119bffc0870"
        },
        "date": 1771569179064,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3875139850000551,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02023799999999981 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2611520990000429,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012874999999999942 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015146002000022918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033400000000008423 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015509616000031201,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003919999999997259 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4283141410000155,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00028200000000006 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2399310789999447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007473999999999925 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13441843999999037,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0059069999999995515 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016987312000026122,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014830000000001231 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016854804999979933,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001466999999999885 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0584771409999405,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068010000000002235 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06482340700006262,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074640000000004425 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01779195299994285,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015779999999994132 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026373889000012696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001515000000000405 s\nthreads: undefined"
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
          "id": "e75d7ef621bae2c9977d862f768a118a8e987351",
          "message": "Fix a wrong comment",
          "timestamp": "2026-02-20T16:15:27+09:00",
          "tree_id": "af453ac2e5b00a60621ac115fa57737cf4d27942",
          "url": "https://github.com/komainu8/groonga/commit/e75d7ef621bae2c9977d862f768a118a8e987351"
        },
        "date": 1771571958991,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38191608900004326,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019532000000000105 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2755529289999856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016550999999999427 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014758129000000508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003500000000000725 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015264654000020528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003919999999997259 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4256104359999995,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039299999999989343 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23794298100006017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006194000000000061 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13213498899995102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0050420000000000464 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01674927099998058,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001487999999999795 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017142363000033356,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017400000000000748 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0588069560000406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00697600000000019 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06654548699998486,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008264000000000743 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017656958000031864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014439999999995567 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02620215100000678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00143000000000007 s\nthreads: undefined"
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
          "id": "b1ddb56a20722ac5e8e51ef65fac1e3f5891a8d5",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-02-25T15:04:25+09:00",
          "tree_id": "5bb5d4cedba56b8db813ce550f9d648d9bc1a1d8",
          "url": "https://github.com/komainu8/groonga/commit/b1ddb56a20722ac5e8e51ef65fac1e3f5891a8d5"
        },
        "date": 1772000300737,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3670452470003056,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016881999999999925 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27990602099998796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016176000000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015412079000043377,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036500000000022625 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014911735000168846,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038500000000030177 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5139590459999681,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00029200000000009774 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22682274699991467,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007718999999999837 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13563078000004225,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005243999999999721 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015684157000123378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014140000000000263 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016516648000106215,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015969999999999596 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06246982500010745,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00654099999999988 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06410485700007484,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0078940000000004 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016672677999963526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014939999999994957 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02571060199989006,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015000000000000013 s\nthreads: undefined"
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
          "id": "03c324052a693571e797e6ae54133bd75e07cc4d",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-02-25T15:09:20+09:00",
          "tree_id": "5c98f9212ae593cab68457326e0866110ff48918",
          "url": "https://github.com/komainu8/groonga/commit/03c324052a693571e797e6ae54133bd75e07cc4d"
        },
        "date": 1772001053079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3554902719999973,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01577599999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2845737460000919,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017914999999999986 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014791650999995909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003250000000002695 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014854802999934691,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003370000000000595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3548459830000184,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037099999999998245 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22742864199994983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006691999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13787125999988348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006632000000000082 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.015906731000086438,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016339999999999688 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016518606000204272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00151100000000004 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059451862000173605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077499999999995905 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06510973899992223,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006655999999999912 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016838057999962075,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001699999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.025706580999894868,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015160000000003226 s\nthreads: undefined"
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
          "id": "4102799b10c324d7c197bf4d0a3fe4ba902920f8",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-02-25T15:57:07+09:00",
          "tree_id": "bd13eda0b990c507fd45096e31de4019c169dea2",
          "url": "https://github.com/komainu8/groonga/commit/4102799b10c324d7c197bf4d0a3fe4ba902920f8"
        },
        "date": 1772003102534,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.355672898000023,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016272000000000036 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2850915419998614,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017635000000000012 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015315685000018675,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004429999999999712 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.014959960000055617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003219999999997114 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4141410689999816,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004200000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22872540400004482,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006596999999999964 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.139495494000073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006000000000000005 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01696220200000198,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016429999999999778 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016488620000075116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015709999999998225 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0652485640000009,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008459999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06530431899994937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007329999999999753 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017002046999834874,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013869999999997773 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017485588999988977,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015330000000002286 s\nthreads: undefined"
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
          "id": "9a8ed050b949b666f3615a5e6fc2af235072b66d",
          "message": "Add missing error handling",
          "timestamp": "2026-02-25T16:15:10+09:00",
          "tree_id": "30ab56eae1f4360f1e237d7b4533ca455b1845a8",
          "url": "https://github.com/komainu8/groonga/commit/9a8ed050b949b666f3615a5e6fc2af235072b66d"
        },
        "date": 1772005646528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3633979270001646,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016071999999999836 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.269701553999937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014538999999999525 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01577125099998966,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042900000000029026 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015436554999951113,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034800000000015374 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6978851709999958,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003509999999997404 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2406860679999454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00868400000000008 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13563992100000632,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006455000000000127 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016962823000085336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017790000000001416 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026953394000031494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020289999999995034 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06171978499986608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007611000000000145 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0632579519999581,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007935999999999693 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01855667400002403,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018220000000001013 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018205770999998094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017129999999996315 s\nthreads: undefined"
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
          "id": "22564ba1867311b806efd9960c84e729a2bd06f0",
          "message": "Don't use meaningless variable",
          "timestamp": "2026-02-25T16:40:04+09:00",
          "tree_id": "451500fa0838f362f41cde086b5bd4c88f70b9b0",
          "url": "https://github.com/komainu8/groonga/commit/22564ba1867311b806efd9960c84e729a2bd06f0"
        },
        "date": 1772005897221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3729873889999453,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019755999999999635 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2944857780000234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017141000000000378 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014417948000016167,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046200000000026775 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01665434399996002,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039499999999970115 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5757983199999899,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004150000000000542 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23610146500004703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008274000000000059 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1538372589999426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00696499999999961 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016823148000128185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016919999999998048 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01769605300000876,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016290000000003246 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059287378999897555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008274999999999755 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06267439599986346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007648000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017577775000006568,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001761000000000068 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018647307000037472,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001550000000000329 s\nthreads: undefined"
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
          "id": "b3f149f155039c16c5525a24549c0136c442f32e",
          "message": "Use variable",
          "timestamp": "2026-02-26T09:31:57+09:00",
          "tree_id": "0ea152663c91ca726a1c2733ac522de38dc5d4a7",
          "url": "https://github.com/komainu8/groonga/commit/b3f149f155039c16c5525a24549c0136c442f32e"
        },
        "date": 1772066431242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38978649099993845,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.024259000000000044 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.266488569000046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015480000000000216 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016262953000023117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042899999999979066 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0156939910000915,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037200000000003897 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5518327620000036,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004310000000000702 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24933052900013308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008763999999999939 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13662414800006673,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006024000000000307 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01684843999998975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001628999999999936 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01732254599994576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015859999999998098 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05967922200011344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007393999999999651 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06700097899988577,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006912999999999558 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018086569999923086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018270000000001618 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02725648200004116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018239999999996037 s\nthreads: undefined"
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
          "id": "f3e652d6f1ed1199806cad4248d363f046046308",
          "message": "Fix wrong test data",
          "timestamp": "2026-02-26T16:15:01+09:00",
          "tree_id": "756ede346a1964c0266e81ff2520111e8fafc768",
          "url": "https://github.com/komainu8/groonga/commit/f3e652d6f1ed1199806cad4248d363f046046308"
        },
        "date": 1772090498206,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39124287300003857,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02526400000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28304083399996216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020871999999999558 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01613149099998168,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043799999999974415 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01565328899994256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043799999999993844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7121683939999741,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00041900000000033577 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24050589400013678,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00895699999999991 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1384956500000385,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007731000000000321 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01720388399996864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016569999999999363 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017771895000066706,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017420000000001323 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06574944100003677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009237000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07255303700014792,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008989999999999693 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017688775000124224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001738999999999824 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028434860999993816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002085000000000087 s\nthreads: undefined"
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
          "id": "3542292249bb4e0462d586fc1c4562c649d03658",
          "message": "Don't use magic number and add more comments",
          "timestamp": "2026-02-26T16:36:38+09:00",
          "tree_id": "bd9e1318140234dae8ff6e89f3c660e748ab3332",
          "url": "https://github.com/komainu8/groonga/commit/3542292249bb4e0462d586fc1c4562c649d03658"
        },
        "date": 1772091647973,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3678988470001059,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022480000000000083 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29550895300002367,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020756000000000024 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015320458000019244,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000475000000000364 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015600839999990512,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044199999999999795 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5237531729999887,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000425000000000314 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2365051370000515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007755000000000067 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15393922200001953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0067990000000001105 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016639726000050814,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016939999999997235 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017608939000012924,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016579999999997153 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0602271629999791,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009564000000000267 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06315172199998642,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007840000000000041 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017623331999857328,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017559999999994247 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017912236999961806,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017639999999999878 s\nthreads: undefined"
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
          "id": "726282a1ff75833cc99099139fb44d1fff9411be",
          "message": "Use more suitable function name for readability",
          "timestamp": "2026-02-26T16:38:13+09:00",
          "tree_id": "d7b31fa96b64ab8895353923dfff8dee8aab7766",
          "url": "https://github.com/komainu8/groonga/commit/726282a1ff75833cc99099139fb44d1fff9411be"
        },
        "date": 1772092172588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4022423559999595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025524000000000074 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2822248709999826,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01962700000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016243392000035328,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044800000000000395 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.025460433999967336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004449999999996679 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5413247339999998,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004090000000000482 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2393053019999627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006584000000000312 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13857566599995153,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005595000000000155 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01715035799998077,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001665999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017389751999985492,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00173300000000004 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06276304199997185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007073000000000121 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06886371000004488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076210000000007105 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018491221999994423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018549999999996347 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01779722200001288,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015009999999996138 s\nthreads: undefined"
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
          "id": "614d952dcb22c033131814d71383e3c20f9d13db",
          "message": "Remove a condition\n\nIt's not necessary currently.\nBecause this function is called only body compression case currently.",
          "timestamp": "2026-02-26T16:46:23+09:00",
          "tree_id": "86487f02cce32e9c379aed66652a8f035f123068",
          "url": "https://github.com/komainu8/groonga/commit/614d952dcb22c033131814d71383e3c20f9d13db"
        },
        "date": 1772092908641,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4137236970001368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.032039000000000345 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29886659799996096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025988000000000455 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01568306800004393,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004579999999999862 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016149555999959375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004719999999997504 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5940233720000379,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0005440000000001 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24793852899995272,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009565000000000157 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1379244650001965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007044999999999885 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01716929999997774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017400000000002136 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017371907000097053,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015030000000004484 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0638127379999105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007578999999999669 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07061610099981408,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008343000000000184 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.012841615999946043,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020340000000000913 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02703108599985171,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016739999999996202 s\nthreads: undefined"
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
          "id": "67ceb3a58d6e61aca4bd53d462179f0d4212368a",
          "message": "Fix a typo",
          "timestamp": "2026-02-26T16:50:51+09:00",
          "tree_id": "6c87cf873bba5f47dbcc0deed13e40464ace78f8",
          "url": "https://github.com/komainu8/groonga/commit/67ceb3a58d6e61aca4bd53d462179f0d4212368a"
        },
        "date": 1772093527001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38186138299994354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02682800000000038 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2835590420000358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01986099999999974 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015138171000103284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004129999999999967 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015662681000037537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003820000000003265 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5318358729999773,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00044699999999986417 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23546975000016346,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008514999999999912 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15379775700012033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0069579999999998254 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016990358999919408,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015619999999998968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017281608000018878,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015300000000000313 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05742875999999342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008183999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06765478199997688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008298000000000083 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01742344100000537,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018179999999999585 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0180852920000234,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018560000000001353 s\nthreads: undefined"
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
          "id": "430ea4a2d3ea64f86fd286bceef0512b9606af3a",
          "message": "Move a test to a more suitable location",
          "timestamp": "2026-02-26T16:53:26+09:00",
          "tree_id": "56af701c48cb619ff71ca16d410bf60a37a1b684",
          "url": "https://github.com/komainu8/groonga/commit/430ea4a2d3ea64f86fd286bceef0512b9606af3a"
        },
        "date": 1772094015425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3851615580000214,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023607999999999962 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26184336400001484,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015282999999999686 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015218768000011096,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043200000000004346 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015599621999967894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039099999999980817 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4988593760000128,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016599999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24298874099997647,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008154999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13685625499999787,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00678599999999982 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016790966000002072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014390000000000236 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017838662999963617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001598000000000016 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06468587699995965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008605999999999808 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0697452800000633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008002000000000037 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018138260999990052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016679999999997253 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027511726999989605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001710999999999685 s\nthreads: undefined"
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
          "id": "578a83d38e255456038eacc0d850c3971747ee5e",
          "message": "Use body_n_elements",
          "timestamp": "2026-02-26T17:18:46+09:00",
          "tree_id": "8bfecf4de344f2f9c58197419a061e5b6771b5fc",
          "url": "https://github.com/komainu8/groonga/commit/578a83d38e255456038eacc0d850c3971747ee5e"
        },
        "date": 1772095230405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37544168599987415,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02067899999999992 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30239750300012247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02525099999999922 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01743667000005189,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004589999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016209755000033965,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004969999999999697 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 2.000004332000003,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003610000000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24854810600004384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00971499999999964 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14062301500001695,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008561999999999903 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01776153999998087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019089999999999108 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018358082000077047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002212000000000075 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06467648599993936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009110000000000368 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07343943200004333,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008508999999999156 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019578424999963318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022060000000003466 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02142934700003707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023500000000010735 s\nthreads: undefined"
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
          "id": "b000d9bd613b0442f13218c877ffff1c3213f610",
          "message": "Store element size",
          "timestamp": "2026-02-26T17:26:10+09:00",
          "tree_id": "7e71fc35a6e7ae5072b4fe2d8797d601b8e2fed0",
          "url": "https://github.com/komainu8/groonga/commit/b000d9bd613b0442f13218c877ffff1c3213f610"
        },
        "date": 1772096790674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3915211669998939,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022975999999999996 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2866774510000596,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019732000000000083 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01661073100001431,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044599999999994644 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015586586999916108,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003540000000000765 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5130342999999584,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039400000000000546 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2513419159999444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008738000000000051 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14006082899999228,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006863000000000008 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018039582000085375,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019080000000000485 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017320258000040667,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016780000000004014 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06351030299998683,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008501999999999496 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0709550399998875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008566000000000351 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018594675999963783,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001768000000000186 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019119058000001132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002132999999999996 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdba7daf7039dd319fcb17f6efea45f9da001e49",
          "message": "Fix wrong format specification\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-02-26T17:28:46+09:00",
          "tree_id": "9ceb5f8da23f34196ca465cf7a1e8b1cee2807ba",
          "url": "https://github.com/komainu8/groonga/commit/fdba7daf7039dd319fcb17f6efea45f9da001e49"
        },
        "date": 1772098144601,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38457637299998737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019862000000000102 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2759754820000069,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01676999999999937 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01587965700002769,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004569999999996799 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015443627999957243,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004159999999999997 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8450477590000105,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004390000000000782 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25276241800003163,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008917999999999676 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14587818299995092,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009173999999999932 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019404125999983535,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002710000000000129 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017898957000028304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020229999999998582 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06573083399996449,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008714999999999945 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0728722239999513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008567999999999548 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.019849220999986983,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0022780000000004463 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028485573999944336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0025210000000004673 s\nthreads: undefined"
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
          "id": "08254159c1232ddc4bb998cc1e5d4fa09bda799f",
          "message": "Use more appropriate error message",
          "timestamp": "2026-02-26T18:45:03+09:00",
          "tree_id": "0464ab13d17f05ee8c815eb240fc37f214fc444b",
          "url": "https://github.com/komainu8/groonga/commit/08254159c1232ddc4bb998cc1e5d4fa09bda799f"
        },
        "date": 1772099594224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36737393299995347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020415999999999948 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2657224829999336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015644000000000075 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01625044799988018,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00048299999999998344 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.0226500290000331,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037200000000015 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4453397220000284,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004249999999998977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23854349100002992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006236999999999715 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1366032239999413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005538999999999655 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016738780000082443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014810000000001489 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016774705999978323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015540000000002774 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06257629399988218,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007413000000000114 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06382525699996222,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073459999999992975 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017617723999990176,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001701000000000119 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.02491454400001203,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001681999999999656 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6793c4581329eaf8ae9f850cf3a82c1ce6b7cd88",
          "message": "Remove a needless new line",
          "timestamp": "2026-02-26T21:52:43+09:00",
          "tree_id": "4d8e052bbb4f61b490f0f7c7e389341f30893e33",
          "url": "https://github.com/komainu8/groonga/commit/6793c4581329eaf8ae9f850cf3a82c1ce6b7cd88"
        },
        "date": 1772110784522,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3812995350000392,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021679999999999977 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27761018399991144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018762000000000473 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01570912199997565,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041399999999996995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01551075099996524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00034100000000009123 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5318371250000382,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003489999999999882 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24109211999984836,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009304999999999897 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1356196550000277,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0057889999999997666 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.0168936790000771,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001503000000000032 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022473627000010765,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002094999999999958 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061558750000017426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006408000000000441 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06694892199993774,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00768199999999955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017343249999953514,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016029999999996603 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020159120000016628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001680999999999544 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8a2fb20367b105cad404212f609c9752168e917",
          "message": "Use more suitable message",
          "timestamp": "2026-02-26T21:56:04+09:00",
          "tree_id": "80c93830595d2cd7f061377630b59da6432aa33e",
          "url": "https://github.com/komainu8/groonga/commit/c8a2fb20367b105cad404212f609c9752168e917"
        },
        "date": 1772111128565,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3794943699999749,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022465999999999847 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26973364499991703,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016403000000000417 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015877910999961387,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004619999999999902 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016060697999932927,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005329999999999224 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6895387429999573,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0005259999999998599 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24074266100001296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00949300000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1392058530000213,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007640999999999565 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017790390000016032,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018419999999999548 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01729605700012371,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018100000000003946 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06945248999994647,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008520999999999862 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06984142200002452,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008154999999999857 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017884852999998202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017959999999999088 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018330844999979945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017529999999995605 s\nthreads: undefined"
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
          "id": "e3fff84065dbca4edcda70bf194d6cfd9bef977b",
          "message": "Fix style",
          "timestamp": "2026-02-26T22:00:27+09:00",
          "tree_id": "f5db766e4f8d4c19d4ccb30a049ae368418b8d89",
          "url": "https://github.com/komainu8/groonga/commit/e3fff84065dbca4edcda70bf194d6cfd9bef977b"
        },
        "date": 1772113117877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39799230400001306,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.027408000000000043 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2982711200000381,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02492499999999989 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015531189000029144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039500000000020075 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015599235000024692,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.000420000000000309 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4203634950000037,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039799999999989844 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23747881500003132,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006644000000000094 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13484151000002953,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005790999999999935 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017044072999965465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015850000000000863 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017141871999996283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016579999999999373 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06028334299995208,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006500999999999951 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06906374700002971,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008051000000000141 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017461045999993985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015519999999997758 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0266702809999515,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001564999999999983 s\nthreads: undefined"
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
          "id": "8aef31569571f594bc66683377fd73d8d88fd672",
          "message": "Remove a needless modification",
          "timestamp": "2026-02-26T22:01:08+09:00",
          "tree_id": "fc8d8d19c9b88b945b00039eaa97bee8d473bad7",
          "url": "https://github.com/komainu8/groonga/commit/8aef31569571f594bc66683377fd73d8d88fd672"
        },
        "date": 1772114505621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38984841700010975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025990000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3036424220001095,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025470000000000215 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016139582999869617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004169999999999452 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015489157000047271,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042899999999998495 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6750944960000425,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00045300000000014773 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23861608699991166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008391999999999816 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1373618280000528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00788300000000014 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01746504299995877,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016350000000002196 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01735702999997102,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017330000000000123 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06459849499992742,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007241999999999735 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0642513880001161,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007462000000000024 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.008887153999978636,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014519999999999533 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.024521217000028628,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015530000000006094 s\nthreads: undefined"
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
          "id": "27262dce4105960594d0910dd828a5f335109f4d",
          "message": "Add new lines for readability",
          "timestamp": "2026-02-26T22:02:57+09:00",
          "tree_id": "2777ed01858f6b352c2e1db7c2796b1fcceb4f74",
          "url": "https://github.com/komainu8/groonga/commit/27262dce4105960594d0910dd828a5f335109f4d"
        },
        "date": 1772115334666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3892584409999813,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.025868000000000196 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2948661539999762,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02238900000000013 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015457270000013068,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004029999999996259 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015599757000018144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004329999999999057 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.450850628000012,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0005410000000001247 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23990830799994,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005984000000000073 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1323927430000822,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005290999999999962 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016912173999969582,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015290000000001969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01702958300006685,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001510999999999929 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06418982799993955,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006884000000000265 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06724084800003993,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007856999999999864 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017056985000010627,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015169999999997685 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026721878000046217,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015809999999993885 s\nthreads: undefined"
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
          "id": "5e7de9ee21d43ea48e1a23b97775e1852fa8d363",
          "message": "Add a mew line for readability",
          "timestamp": "2026-02-26T22:05:09+09:00",
          "tree_id": "15dbb068c60676846a9b7a9a31057ed99fe269ab",
          "url": "https://github.com/komainu8/groonga/commit/5e7de9ee21d43ea48e1a23b97775e1852fa8d363"
        },
        "date": 1772115526533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38557580000002645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.024435999999999958 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29824751399996785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021280999999999772 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01555973800003585,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045100000000025675 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015453497000009975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045800000000006946 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.509944723999979,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003830000000000222 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23592095600008633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009243000000000043 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15091676900010498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005377999999999855 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016413616999898295,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015429999999997113 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017189496999890252,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015219999999996903 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.058546151000086866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007968999999999948 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.060819726999966406,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007623000000000518 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017670162999820604,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016159999999997843 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026294796999991377,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016980000000000606 s\nthreads: undefined"
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
          "id": "f86119cd659cff2683b1b446782d696229d50219",
          "message": "test: simplify",
          "timestamp": "2026-03-02T17:37:15+09:00",
          "tree_id": "1eb52d28f8c72bf452e1bb89a323c22844b6b630",
          "url": "https://github.com/komainu8/groonga/commit/f86119cd659cff2683b1b446782d696229d50219"
        },
        "date": 1772441370988,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4041633210000555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.027615000000000195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2776756100000739,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016585999999999573 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015883244999997714,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003590000000003868 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02500632799996083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00047500000000022524 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.489971258999958,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003259999999997987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24280705699999316,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007520999999999833 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13656906300002447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005960000000000076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016577786000027572,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015639999999996768 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017244065000056708,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015890000000000348 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06448765799990497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007232999999999878 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06870968900000207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008038999999999796 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017556593000051635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001589999999999786 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018046325000000252,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001625999999999933 s\nthreads: undefined"
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
          "id": "c5bcddc84d64eeec07aa3d39c5ebb3261ebdae28",
          "message": "Don't use ZL_TypedRef_createNumeric when we use vector with weight\n\nBecause ZL_TypedRef_createNumeric expects the unweighted Float32 uvector layout",
          "timestamp": "2026-03-02T17:37:30+09:00",
          "tree_id": "4bb3a5839f449e082127dfd6ab918ecdf1917fb4",
          "url": "https://github.com/komainu8/groonga/commit/c5bcddc84d64eeec07aa3d39c5ebb3261ebdae28"
        },
        "date": 1772441438516,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39842730800000936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.023873000000000033 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27520949699999164,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015610000000000096 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01585543300001291,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004279999999998729 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02294120599992766,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045899999999982066 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.857093212000052,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000356000000000134 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24541844500004117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008155000000000218 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14175121900001386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006561000000000122 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016990082999939204,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016459999999998143 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017211815999985447,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015609999999997293 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06233502299994598,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007385999999999601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07123216199977378,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007949000000000178 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018035640999983116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017000000000001458 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018028737999998157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016930000000000278 s\nthreads: undefined"
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
          "id": "a4e6cb7ca2a764b0b8a07be5b3d6360ba4b47b67",
          "message": "Don't incorrect reference in error message\n\nBecause data->body may pointed unrelated bytes.",
          "timestamp": "2026-03-02T17:49:49+09:00",
          "tree_id": "ead182356c65b460425daaf8cea80e0257e5ff17",
          "url": "https://github.com/komainu8/groonga/commit/a4e6cb7ca2a764b0b8a07be5b3d6360ba4b47b67"
        },
        "date": 1772442872193,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3787057370000184,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020755999999999955 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2953958670000816,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.022878999999999677 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01580742399994506,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037500000000023626 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015831698000113192,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036399999999991994 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6201742279999962,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004090000000000482 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24950193999995918,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007700999999999972 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14134261000009474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00628600000000025 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01763373899996168,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017709999999999393 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017099785000027623,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016339999999999688 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06326691300017728,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007957999999999757 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06788803000011967,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006779000000000479 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018455065000011928,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001546999999999743 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017740995999986353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001515999999999823 s\nthreads: undefined"
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
          "id": "39e48cb5e27321785ef9b76a32600011f814cf04",
          "message": "Use more suitable error message",
          "timestamp": "2026-03-02T18:23:23+09:00",
          "tree_id": "17fd6f00a392ae751f48c8a11155cabdb071fc26",
          "url": "https://github.com/komainu8/groonga/commit/39e48cb5e27321785ef9b76a32600011f814cf04"
        },
        "date": 1772444332983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4087513289999265,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02652900000000022 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27894842099993866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01853700000000072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01674481099996683,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042499999999967564 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.016086096000037742,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004509999999998682 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6363023460000363,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039999999999995595 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24717162499996448,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008843000000000018 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14045682100004342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006565000000000015 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01748058800006902,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015719999999997958 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017254616999991867,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016490000000000116 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06287010699998064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008309000000000191 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07013296500014121,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008737000000000744 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017953834000024926,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001748999999999834 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01963137499996037,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016439999999999788 s\nthreads: undefined"
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
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "071e1aad32d1f46e62fa7e3dae75585abd2097ed",
          "message": "compress openzl: add support for Float32 array compression",
          "timestamp": "2026-03-05T11:52:14+09:00",
          "tree_id": "48d95c93a1723a14d20c774c74fea012138f5c15",
          "url": "https://github.com/komainu8/groonga/commit/071e1aad32d1f46e62fa7e3dae75585abd2097ed"
        },
        "date": 1772679932265,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3750682639997649,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02084399999999989 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27014226800042707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015706000000000248 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015607785000156582,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003759999999998487 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015408315000286166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033900000000025576 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5370542089999617,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0004189999999998639 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24226335599973936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005761999999999934 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14077938900004483,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00552200000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01778392400001394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015789999999999693 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.0174707749999925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001563000000000092 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06172108999999182,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007262000000000171 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06777607600065494,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007579999999999837 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017901710000160165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019670000000000243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01770233199977156,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016069999999999973 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "abe@clear-code.com",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "distinct": true,
          "id": "e79357b9d8fba7daee7b9a467a58e74cbfc6eb6f",
          "message": "compress openzl: add support for Float32 array compression\n\nCo-authored-by: Horimoto Yasuhiro <horimoto@clear-code.com>",
          "timestamp": "2026-03-06T11:03:09+09:00",
          "tree_id": "5b6118f7e31c94eaf211a5a4ea1a1d55fdeca893",
          "url": "https://github.com/komainu8/groonga/commit/e79357b9d8fba7daee7b9a467a58e74cbfc6eb6f"
        },
        "date": 1772762971272,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3950922680000417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02525000000000019 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2651172859999633,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015647000000000272 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015378784999938944,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037300000000012323 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024152285000070606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046099999999982266 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4433190080000031,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00040799999999996395 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23701059999996232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005559999999999898 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1345218110000701,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005510999999999974 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017249275000040143,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016410000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.024570030999996106,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001741000000000159 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06542801000000509,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008357000000000281 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0682254839999814,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0090370000000001 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01775836599995273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015640000000001208 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017782679999982065,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001688999999999996 s\nthreads: undefined"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abe@enzou.tokyo",
            "name": "Abe Tomoaki",
            "username": "abetomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dacb8069cf8ab9054490671cc596037be5ade1ec",
          "message": "Update lib/compressor.c\n\nCo-authored-by: Sutou Kouhei <kou@cozmixng.org>",
          "timestamp": "2026-03-06T11:55:07+09:00",
          "tree_id": "de3194eaf01a770e431dcf3e76fdf32854d8a4f8",
          "url": "https://github.com/komainu8/groonga/commit/dacb8069cf8ab9054490671cc596037be5ade1ec"
        },
        "date": 1772766168512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37528190099988024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02022500000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26848462900022696,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015298000000000062 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016038538999964658,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044699999999989193 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02473637399987183,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004279999999996509 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5347681759999432,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003310000000000535 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24355026699970495,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006638000000000116 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13561215700008233,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005340999999999707 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016640404999975544,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015440000000002396 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01936095899998236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016020000000002699 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06373509800027932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0073410000000002085 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06613636399993084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0074649999999994165 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018370294000078502,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017129999999996592 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018081663999964803,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001687999999999884 s\nthreads: undefined"
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
          "id": "f168892123939bc204d6e636dda345a02ada60f4",
          "message": "ci: remove post announce for X\n\nWe can't use X API well...",
          "timestamp": "2026-04-14T15:44:09+09:00",
          "tree_id": "b2024c801bea7e77e5cce9cbae031b3fd1cebdcc",
          "url": "https://github.com/komainu8/groonga/commit/f168892123939bc204d6e636dda345a02ada60f4"
        },
        "date": 1776150465831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40630059899990556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019681999999999963 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27491359300000795,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011532000000000514 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0150450930000261,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003560000000000507 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015251561999946261,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035500000000010523 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4913860829999521,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00017299999999997873 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25112065299998676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005990999999999996 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14975919100004376,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005697999999999981 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01627168400005985,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015470000000002426 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.025410468000018227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016040000000002719 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06687686899994105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006472999999999909 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.07227409199992962,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00698899999999994 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017791394000084892,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001579000000000108 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01794947299993055,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019030000000004321 s\nthreads: undefined"
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
          "id": "5b6161093c33b844823bb7f6d1c5b3362ac280c2",
          "message": "draft: fix race condition",
          "timestamp": "2026-04-21T18:14:15+09:00",
          "tree_id": "66d3ed555e293e7419cdf482df9f4dad0b0f1fef",
          "url": "https://github.com/komainu8/groonga/commit/5b6161093c33b844823bb7f6d1c5b3362ac280c2"
        },
        "date": 1776763345585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.37946911700004193,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015418000000000043 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2955265730000747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019485000000000086 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015537789000006796,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004470000000000862 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015788058000055116,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004879999999998219 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7912613629999896,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00028000000000025227 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.23709708999996337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00680499999999977 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.13687080199991897,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005823999999999857 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016145229999949606,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015530000000001376 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01720529999994369,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014910000000001034 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06862952500011943,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007027000000000047 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0708837610000046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007764000000000049 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017298030999938874,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015700000000000713 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017741099999909693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001649999999999846 s\nthreads: undefined"
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
          "id": "2229b1158ba4e292a115b43032650e3f5688cc13",
          "message": "cmake: add support for LTO",
          "timestamp": "2026-04-24T09:27:29+09:00",
          "tree_id": "2d7642165a351cae9e9b9d9925a8ecf825267aa4",
          "url": "https://github.com/komainu8/groonga/commit/2229b1158ba4e292a115b43032650e3f5688cc13"
        },
        "date": 1776990978951,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3761716229998342,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013728999999999825 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2776489010000205,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01066199999999981 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015081724000026497,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036900000000011923 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015555890000030104,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005369999999995656 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5781656639999824,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031999999999998696 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22893918700009408,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066139999999998145 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14857269899988523,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00571499999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01638051400010454,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016209999999999836 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01680508800006919,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001595000000000124 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06269486599984475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006874000000000255 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06629301300006318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00764099999999987 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02144363100001101,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005450999999999484 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.022841933999927733,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002232999999999735 s\nthreads: undefined"
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
          "id": "50f1eb374a90fd484de6da2ac16f13678651a1fb",
          "message": "cmake: add -mbig-obj flag to fix 'too many sections' error on Windows",
          "timestamp": "2026-05-01T17:04:53+09:00",
          "tree_id": "4a62dcf07697c2e06dea29f7270a87e2b7f8c91f",
          "url": "https://github.com/komainu8/groonga/commit/50f1eb374a90fd484de6da2ac16f13678651a1fb"
        },
        "date": 1777623332477,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.36801290399995423,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010498999999999967 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26490014099988457,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0077810000000003016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015814096999974936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003789999999999072 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012943774999996549,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003519999999998663 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8262242010000023,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002449999999999952 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2239697069999238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00761299999999987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12911856499999885,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007064000000000195 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01662022200002866,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013400000000001328 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014990396000087003,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0012989999999996477 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0647490759999414,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006543000000000285 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06564560300000721,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008724999999999955 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.018578138000066247,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015339999999999243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01780678699992677,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014710000000008883 s\nthreads: undefined"
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
          "id": "dd0d4f2d46dd8e93e2269195ccf5f355a051d5b0",
          "message": "Test whether occurs error or not",
          "timestamp": "2026-05-07T17:56:38+09:00",
          "tree_id": "8333a6909ddb2ad5eb570376e17b638436a26681",
          "url": "https://github.com/komainu8/groonga/commit/dd0d4f2d46dd8e93e2269195ccf5f355a051d5b0"
        },
        "date": 1778144742873,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3700131559999704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010429999999999925 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2624083759999394,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008469999999999867 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015576004000081412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003500000000000725 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.01447067299994842,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003889999999999727 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.803001232999975,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000233000000000122 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22491741000004595,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007553000000000129 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1275246679999782,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007047999999999693 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017175053000073603,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015670000000001516 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.015490488000011737,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001432000000000197 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0673582630000169,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006971000000000144 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06318310799997562,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007585000000001035 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01843115300005138,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016099999999998893 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028930158000036954,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017800000000001148 s\nthreads: undefined"
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
          "id": "e66a0c2814a047e94314957f1b913b5587677b72",
          "message": "Test",
          "timestamp": "2026-05-08T12:37:23+09:00",
          "tree_id": "becb4fbca0ba0826e526b6d82a1bee04091cd035",
          "url": "https://github.com/komainu8/groonga/commit/e66a0c2814a047e94314957f1b913b5587677b72"
        },
        "date": 1778211664165,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38727574200001413,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016368999999999995 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.29887481199995136,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016371000000000052 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.016402275000046984,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039199999999950386 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015250498999989759,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003330000000003608 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.3971701210000163,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00013499999999999623 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2532741990000318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005809000000000036 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15012888499995825,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005401999999999796 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01639810300002864,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001449999999999979 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01657235199999718,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015500000000000236 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06339295500001185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005970000000000225 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06718352599997957,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0071540000000001325 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017485949000018763,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015499999999999403 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019064371000041547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016149999999999776 s\nthreads: undefined"
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
          "id": "10459df705ed70969d2de33fb82287d6534d8803",
          "message": "Remove needless value",
          "timestamp": "2026-05-08T13:48:51+09:00",
          "tree_id": "a5d62e83956bb46e8db9f009b082e5de1212fa9b",
          "url": "https://github.com/komainu8/groonga/commit/10459df705ed70969d2de33fb82287d6534d8803"
        },
        "date": 1778215960443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3957196199999373,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017684000000000186 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2985037290000321,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017642000000000435 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015252761999988707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003700000000000092 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02434706600004688,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00042999999999993044 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.451942430999992,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00024100000000024102 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25300476199993227,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005637000000000017 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1500943780000341,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005640999999999868 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01650706300003435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016100000000001946 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01728325499999528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016239999999998755 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06550411900002473,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0062910000000005045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06851769800002216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006652999999999604 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.017501871999968444,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014850000000000696 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017224515000009433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015489999999997728 s\nthreads: undefined"
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
          "id": "74c39f4e3ea55c69d6c7adfde11099fd8c16864f",
          "message": "ci msys2: add support for clamg64\n\nNote that this CI fails at this commit.\nA fix will be provided in the following commits.",
          "timestamp": "2026-05-08T15:40:15+09:00",
          "tree_id": "c20d59f1f06036fd9b9a350b5fcfd2f1617fd591",
          "url": "https://github.com/komainu8/groonga/commit/74c39f4e3ea55c69d6c7adfde11099fd8c16864f"
        },
        "date": 1778223038103,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3808183829999052,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015098999999999835 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.3077001070000165,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017295999999999728 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014722959999971863,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00033900000000008923 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015766018000022086,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003880000000002215 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5343036919999804,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00024400000000002198 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25640729000002693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007778000000000257 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15737684500010118,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007969999999999866 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017037412999968637,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019090000000001883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01649145200002522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001674999999999649 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06660226999986207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006556000000000187 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06790750099997922,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007677999999999352 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01766285999997308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018670000000006737 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01794179100005522,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001604000000000133 s\nthreads: undefined"
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
          "id": "9795bb5bbf63b5d24511accd01c60e37c3d1e5e2",
          "message": "ci msys2: add a patch to fix build error for XSimd",
          "timestamp": "2026-05-11T10:41:22+09:00",
          "tree_id": "29d10d46e7dd40481eeb8ab6a1e82b338ff5f03a",
          "url": "https://github.com/komainu8/groonga/commit/9795bb5bbf63b5d24511accd01c60e37c3d1e5e2"
        },
        "date": 1778464244661,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38332974399997966,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014593999999999746 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2948172510000404,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016132000000000285 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015637006000019937,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039200000000000346 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015891881999891666,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999994791 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4811365620000743,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016500000000022053 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25215646000003744,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006523999999999863 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15106393400014895,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0064680000000001125 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016028242999936992,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014140000000003594 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01668185799985622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013789999999998803 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06318090200022652,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006377000000000091 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06901274299980287,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007125999999999383 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02084345299999768,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005124999999999519 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.026942837000092368,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015210000000002999 s\nthreads: undefined"
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
          "id": "db1b3162f358475f7f9717014680be1d13480b3b",
          "message": "Add a missing patch file",
          "timestamp": "2026-05-11T11:14:15+09:00",
          "tree_id": "e18ff12b4c889e7f5ba2643418dcee964ce142e9",
          "url": "https://github.com/komainu8/groonga/commit/db1b3162f358475f7f9717014680be1d13480b3b"
        },
        "date": 1778465898305,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3787276730000144,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014038000000000023 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2808106720000012,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012080000000000646 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01547292900002617,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043799999999985517 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.02203543399997443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003540000000001875 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4514635449999957,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002529999999997534 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25294979700001363,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006484999999999741 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.15112321600008727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006411999999999918 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016222205999980588,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001684999999999992 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017071757999985948,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015740000000001308 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06667255300001784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006519999999999582 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0725605700000358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008256999999999848 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02175773500005107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0054949999999995 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01803511400004254,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018089999999999773 s\nthreads: undefined"
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
          "id": "00a6b00bf384d7d8d5e53e232b6dfecccf25cf50",
          "message": "doc install: update install procedure for AlmaLinux",
          "timestamp": "2026-05-18T18:56:03+09:00",
          "tree_id": "9d95eade5351c1660aa7fb10e9502f998783e133",
          "url": "https://github.com/komainu8/groonga/commit/00a6b00bf384d7d8d5e53e232b6dfecccf25cf50"
        },
        "date": 1779098638870,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3462724190000017,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013073000000000196 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2696765869998785,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011606000000000422 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015685916999984784,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039800000000020375 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.019103456000038932,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00039799999999989844 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8324355880000098,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0002749999999998032 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21762194400014323,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008900999999999964 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14239107999998168,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00815100000000002 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016623187999982747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017190000000000538 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017496490999974412,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019069999999998255 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05696699600019883,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007871000000000433 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05827469399991969,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009134000000000614 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.021692432999941502,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005847999999999853 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.017873227999928076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018340000000001133 s\nthreads: undefined"
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
          "id": "397753f41149ca62c5882f7bd3345bde80398637",
          "message": "doc news: add 16.0.5 entry",
          "timestamp": "2026-05-20T11:23:42+09:00",
          "tree_id": "f465fc48501dd77dd8f753d941e0f37613884c80",
          "url": "https://github.com/komainu8/groonga/commit/397753f41149ca62c5882f7bd3345bde80398637"
        },
        "date": 1779244413831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.358463066000013,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010320999999999914 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.25099962099966433,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007358999999999755 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.017330798000102732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004380000000001605 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.013329699999758304,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003809999999999647 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.953882957000019,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0001970000000000166 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21318001499992079,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008256999999999792 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12383672900011788,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007962000000000247 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.018640922999793474,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020259999999996947 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01904177700021137,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002493000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060027822000051856,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007445999999999689 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05734268600019732,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008367000000000499 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01952921300005528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018380000000002006 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.019941286000062064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016040000000000915 s\nthreads: undefined"
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
          "id": "c307be397fc4efe79c292ace45caf3dcfd257f09",
          "message": "doc news: update release date",
          "timestamp": "2026-05-22T12:11:16+09:00",
          "tree_id": "f0367ac7043fcb75a6d117e90b4ccdfa005017cb",
          "url": "https://github.com/komainu8/groonga/commit/c307be397fc4efe79c292ace45caf3dcfd257f09"
        },
        "date": 1779419927594,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3538087579999001,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01354500000000003 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2687869119999391,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.010992000000000363 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.014716298000109873,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044900000000006046 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015345054999954755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00041599999999997195 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5829588139999942,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00032500000000013074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21504556899992622,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006014000000000214 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1367739460000621,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005321999999999938 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016219798999998147,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016490000000000948 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.016729677999990145,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015150000000001551 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.055404221999936,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00714799999999946 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05455274900009499,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00697399999999973 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01693324100006066,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017790000000004469 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018773409000061747,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015469999999999928 s\nthreads: undefined"
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
          "id": "dd0c79ad8ab9c4af2533932d9f83150074de72c8",
          "message": "doc reference select: add descrption for result_set stage in dynamic column",
          "timestamp": "2026-05-26T18:12:30+09:00",
          "tree_id": "a4d8f6bf2ab5a0bd13176c1fa75d634804007227",
          "url": "https://github.com/komainu8/groonga/commit/dd0c79ad8ab9c4af2533932d9f83150074de72c8"
        },
        "date": 1779787250646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3653438090000236,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014208000000000193 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2697319000000107,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011801000000000575 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015205898999852252,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003949999999999787 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015582593000090128,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004069999999998797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4376243760000307,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.000182000000000071 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24028115399994476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0058040000000000175 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14036091299999498,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005256000000000011 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01649385700000039,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015799999999998593 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.01670123099995635,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016159999999999786 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060378888000400366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006212999999999705 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.059160235000035755,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006741999999999915 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.016766211999879488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016639999999995547 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.0260430319998477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013659999999999506 s\nthreads: undefined"
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
          "id": "b67d4246fdb58b8924e69965f6b06c7de490f639",
          "message": "store: clean up dead code\n\nThis code is never executed because we always return on the first line of this function.",
          "timestamp": "2026-06-12T15:28:17+09:00",
          "tree_id": "c8dc660905b23aeb25a6ad77df6145de6f4ddcb1",
          "url": "https://github.com/komainu8/groonga/commit/b67d4246fdb58b8924e69965f6b06c7de490f639"
        },
        "date": 1781246743070,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3653427179999653,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.015205000000000163 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2870678260001114,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.013869000000000242 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01449552700012191,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003990000000000382 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015244714999994358,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036100000000002797 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.8063843139999562,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00026400000000018076 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21702950099984264,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008486999999999884 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1427648940001518,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008208999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.016003166999894347,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017049999999998733 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017407017999971686,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018079999999999485 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.055203486999971574,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0078050000000003394 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.057918532000144296,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008981000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01767684299989014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017940000000002398 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.018548478000070645,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018240000000000478 s\nthreads: undefined"
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
          "id": "f06a811a187b0547b16950652cb8e4dca102515e",
          "message": "store: expand cplimn size limit to 1TiB from 256GiB\n\nThis is test.",
          "timestamp": "2026-06-12T15:42:26+09:00",
          "tree_id": "5c793b922c68c5ce9359e5269d2e12d69ea3cf6a",
          "url": "https://github.com/komainu8/groonga/commit/f06a811a187b0547b16950652cb8e4dca102515e"
        },
        "date": 1781247208288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3866947390000064,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019298999999999927 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26383530599997584,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011899999999999689 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01618034899996701,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004569999999999297 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015933537000023534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045100000000064533 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.7016761639999913,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003600000000000547 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24501670600000125,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006980999999999904 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1357534019999207,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007374000000000019 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01780616899998222,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016040000000001886 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017132778000075177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017330000000000678 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06092387699993651,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007874999999999854 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06177005899985488,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007881000000000193 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01803789199999528,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017119999999994917 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01779514599996901,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013980000000002601 s\nthreads: undefined"
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
          "id": "0867209255c733dc8491fcbdde16a0895e675f21",
          "message": "store: expand cplimn size limit to 1TiB from 256GiB\n\nThis is test.",
          "timestamp": "2026-06-12T17:01:57+09:00",
          "tree_id": "5b0dcb9cd31acbdc6af1e8a6cb03b4e82b7bd996",
          "url": "https://github.com/komainu8/groonga/commit/0867209255c733dc8491fcbdde16a0895e675f21"
        },
        "date": 1781252660412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3410490399999162,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007692999999999853 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26088729699995383,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008319000000000062 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01567503999999076,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035200000000003284 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012928180999978167,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00032099999999979367 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.535008591999997,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00016200000000007875 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.21083887599999684,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006256999999999985 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.11930055399994899,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005407000000000023 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01675306700005308,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00137699999999992 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.014055189000032442,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013050000000000561 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060840357000017775,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006167999999999896 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.05613547900000526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006062999999999777 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01724297700002353,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014310000000001544 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.01756347499997446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014769999999995065 s\nthreads: undefined"
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
          "id": "0e99233da98e2d1f4b357777ce71094232fc1e31",
          "message": "Remove garbage",
          "timestamp": "2026-07-06T20:48:50+09:00",
          "tree_id": "ec96ed6c1fae8ce29f8597b51af1f5a980a8cfc9",
          "url": "https://github.com/komainu8/groonga/commit/0e99233da98e2d1f4b357777ce71094232fc1e31"
        },
        "date": 1783339015088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3986245879999615,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020910000000000123 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2662051469999369,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01164999999999991 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018080576999977893,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004310000000000702 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020896307999976216,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004200000000000037 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4379476940000018,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003529999999999922 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2448163239999417,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007298999999999584 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14225694199990357,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005630999999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019121995999967112,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016860000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022163659999989704,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015509999999996915 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06075543499991909,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006818999999999437 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06790226400005395,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006562000000000456 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028704788000027293,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018280000000002183 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028323748000104843,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002536999999999706 s\nthreads: undefined"
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
          "id": "dd8833b3405a1646645f8461863b2b997e14b56b",
          "message": "Remove garbage",
          "timestamp": "2026-07-06T20:49:09+09:00",
          "tree_id": "ec96ed6c1fae8ce29f8597b51af1f5a980a8cfc9",
          "url": "https://github.com/komainu8/groonga/commit/dd8833b3405a1646645f8461863b2b997e14b56b"
        },
        "date": 1783339220672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38543569399996613,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01790999999999998 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2763317330000348,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014823000000000197 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.019139247999987674,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004909999999998527 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020752228999981526,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037599999999993194 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4617825240000002,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00038499999999994095 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24242201699996713,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006120000000000084 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14093102500007149,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005473000000000033 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019303436000001284,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015099999999999558 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.021950035000031676,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015409999999999313 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06089405500006251,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0064999999999997005 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06178605000005177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007230000000000264 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.026259292999952777,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020099999999997897 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03190929699997014,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023250000000002435 s\nthreads: undefined"
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
          "id": "37ce66a1ad891a2f87931245f7a9279c3edc7da2",
          "message": "doc news: add missing entries to 16.0.7",
          "timestamp": "2026-07-07T18:13:45+09:00",
          "tree_id": "c56f2e594c8f5e9ebc9be8ccd4b6b45fe09bdc8e",
          "url": "https://github.com/komainu8/groonga/commit/37ce66a1ad891a2f87931245f7a9279c3edc7da2"
        },
        "date": 1783416317903,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40161625399997547,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02192800000000006 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27847810799994477,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014820000000000083 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018268175999935465,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00045899999999976515 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021119437999914226,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004120000000002455 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5951218010000048,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039899999999981617 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24760949000005894,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007173999999999778 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14471016799990366,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006026000000000281 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020348935999948026,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016490000000002614 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022196236999945995,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016120000000001133 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060071595999943384,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006704999999999545 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06830237800016903,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007519000000000081 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02848748000002388,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020210000000000505 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.035786629000028825,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021180000000003696 s\nthreads: undefined"
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
          "id": "78ee2c875ccdb24b1cdeec5a5e9743f305ff2a5d",
          "message": "ci cmake: stop installing outdated system xsimd\n\nCurrently, we install libxsimd-dev in the \"Install common build dependencies\" step.\nHowever, the system xsimd version in the CI environment is outdated.\n\nAs a result, CMake attempts to use the bundled xsimd instead of the system one.\nThis cause a conflict because the \"add_library\" target for xsimd already exist.",
          "timestamp": "2026-07-09T08:44:18+09:00",
          "tree_id": "d907098a85c5313661b42d54a567d7663c85a6da",
          "url": "https://github.com/komainu8/groonga/commit/78ee2c875ccdb24b1cdeec5a5e9743f305ff2a5d"
        },
        "date": 1783555907791,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3803372659999127,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018874000000000196 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.30254607300003045,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.020181999999999645 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.019001747000004343,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038200000000016 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020867923000082556,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003209999999997104 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.5841770429999542,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003469999999997364 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24372276399992643,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005814000000000069 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14302146699998275,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00604799999999997 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020263112999884925,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001542999999999295 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022169543000018166,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016129999999996425 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06125638100013475,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006783000000000122 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0638195410000435,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007369000000000042 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.027112490000035905,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001984000000000208 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028762529999994513,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018020000000001923 s\nthreads: undefined"
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
          "id": "9be456960e4c2a2d4d4e434e9faa07bd3948c00c",
          "message": "ci arch-linux: use bundled Blosc2 instead of system",
          "timestamp": "2026-07-10T11:52:12+09:00",
          "tree_id": "bed499717b00a625408b442dff6ec2f1077a2762",
          "url": "https://github.com/komainu8/groonga/commit/9be456960e4c2a2d4d4e434e9faa07bd3948c00c"
        },
        "date": 1783652432009,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.4033451980001246,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.021503000000000327 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2865916090001974,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01629200000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018713324000032117,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044200000000005346 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021260741999867605,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003970000000002305 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4346788240000024,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00044000000000013473 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2426292330000024,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0054619999999998 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14169701299988446,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005360999999999949 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.020131265999907555,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013960000000002304 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022612716000253386,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017740000000002198 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06278373199984344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006069999999999409 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06395760900011283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007289999999999908 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.025741001999904256,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0021890000000000243 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03005909600005907,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001687999999999773 s\nthreads: undefined"
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
          "id": "6fa53a54afa088f555c091c43653ce76f4c0d897",
          "message": "ci arch-linux: use bundled Blosc2 instead of system",
          "timestamp": "2026-07-10T12:23:32+09:00",
          "tree_id": "ce60a7e5f2b687c761c9b399ba216282cdd70ba2",
          "url": "https://github.com/komainu8/groonga/commit/6fa53a54afa088f555c091c43653ce76f4c0d897"
        },
        "date": 1783654789623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38237278700000843,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.017965000000000064 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28485922899994875,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016760000000000025 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018629971999985173,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00035699999999971865 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.029896479000001364,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00044399999999988893 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.538139344000001,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00039500000000006197 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2453356179998991,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007743999999999876 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14177195500002426,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0060949999999998505 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019640850000087084,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001555000000000084 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026618008000014015,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015970000000002926 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06233513000000812,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0068290000000000295 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06565916700009211,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0075849999999989814 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028153895999992073,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019310000000004601 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03247223900007157,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0026959999999993656 s\nthreads: undefined"
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
          "id": "918369bfb2a9bdebcfd21aa20c9a86f44cd9504d",
          "message": "Add comment",
          "timestamp": "2026-07-10T15:04:59+09:00",
          "tree_id": "d89735d438647cccc5e5cf64c10c5f69191bcb6f",
          "url": "https://github.com/komainu8/groonga/commit/918369bfb2a9bdebcfd21aa20c9a86f44cd9504d"
        },
        "date": 1783663709816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.39468783299992083,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.019749999999999934 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.28693730700007336,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016775000000000567 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01823895799998354,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00036400000000047505 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020880001000023185,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037799999999954537 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4571091669999987,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00037400000000004097 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24277409400002625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00613199999999986 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.140581257000008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006162000000000181 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01979149799996094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016019999999999368 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02934937100002344,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015640000000002596 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.060374872999886975,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006011000000000044 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.062095338999938576,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006992999999999416 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02850692499998786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001834999999999698 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.029542321000008087,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018580000000003316 s\nthreads: undefined"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9e0875d46bba8832428ce27425805c0aeefe4bb",
          "message": "Fix typos and grammar issues\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-07-10T18:13:33+09:00",
          "tree_id": "095e66a75294310e8f8c580319b45b6b572e5c7a",
          "url": "https://github.com/komainu8/groonga/commit/e9e0875d46bba8832428ce27425805c0aeefe4bb"
        },
        "date": 1783676361320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38790941400003476,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018433999999999715 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.26811127699994586,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011948999999999849 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.0186026059999449,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004189999999999472 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.024101920999953563,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00046000000000001595 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4368443740000316,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00020700000000001273 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.25269012699988025,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005611000000000074 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1526334620000398,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006134000000000139 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.019334857000046668,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015010000000000578 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022701755999946727,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00163399999999983 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.059032291999926656,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0061349999999994465 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0641961659999879,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006579999999999586 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02645669300005693,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0016579999999998263 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03884322099992232,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0026420000000003385 s\nthreads: undefined"
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
          "id": "8367911a13438a7d33fffe81efab8058fe05a2dd",
          "message": "doc news: update release date and version\n\nBecause the 16.0.7 release failed due to build error.\nWe resolved the build error, so we will re-release Groonga as version 16.0.8.",
          "timestamp": "2026-07-13T10:51:26+09:00",
          "tree_id": "b9e57d1ea388567636b39d0f20037eef08421431",
          "url": "https://github.com/komainu8/groonga/commit/8367911a13438a7d33fffe81efab8058fe05a2dd"
        },
        "date": 1783908362872,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.38274260599996524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.01750099999999985 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2890890799999397,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.016612999999999933 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.01982718600015687,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003270000000000217 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.025024191000056817,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0004589999999999872 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4692512100000386,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00022799999999997822 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24688040699993508,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006520000000000359 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14082865400018818,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005570999999999743 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.02045926400001008,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015509999999999413 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.02209764599990649,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015700000000002934 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.061781808999967325,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006576000000000068 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06338993300016682,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007597999999999883 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.028246654000099625,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001955000000000068 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.034207932000072105,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0025299999999999767 s\nthreads: undefined"
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
          "id": "a940673f6a87652ad14ce6d9ac52435a8eecfad0",
          "message": "store: remove unused but set variable\n\nhttps://jira.mariadb.org/browse/MDEV-39881\nSee also: https://github.com/MariaDB/server/pull/5303\n\nPatched by Daniel Black. Thanks!!!\nCo-authored-by: Daniel Black <daniel@mariadb.org>",
          "timestamp": "2026-07-14T16:35:05+09:00",
          "tree_id": "9ba0f5d91c9461c34ad992284dd45a3b92fc117c",
          "url": "https://github.com/komainu8/groonga/commit/a940673f6a87652ad14ce6d9ac52435a8eecfad0"
        },
        "date": 1784015441941,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3885172530000318,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.018896999999999803 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.27080403800005115,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.012938999999999742 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.019091352000032202,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00043899999999963413 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.021240402000046288,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00037299999999973465 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.6687315030000036,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0005460000000000187 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.24979082799990238,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007873000000000102 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1454496730000301,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008155999999999969 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.02011900700000524,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001882999999999968 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.026036785999963286,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001638000000000167 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05799131099996657,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007440999999999934 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0600345999999945,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.007773999999999892 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0216073119999578,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00179200000000021 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.03084217800000033,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0020339999999999525 s\nthreads: undefined"
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
          "id": "06875e04a60c0f652686670699eb90b3e8950e5c",
          "message": "string: merge character types when using multiple normalizers\n\nFix: GH-2853\n\nThis is a limited fix.\n\nCurrently, ctypes are merged only in a limited case.\nSpecifically, ctypes are merged only when the number of characters\nin the first normalized result is equal to the number of characters\nin the latter normalized result.\n\nIn other words, this works only when NormalizerTable performs\nnormalization without changing the number of characters.\n\nThe latter normalizer is NormalizerTable, and users can define any\nnormalization pattern in NormalizerTable.\n\nIt is difficult to handle all such cases with single implementation here.\nTherefore, we currently support only the simple case.\n\nReported by askdkc. Tanks!!!",
          "timestamp": "2026-07-28T17:57:24+09:00",
          "tree_id": "1bf36d05160ee44f8bd28958957c137a6b9abe1a",
          "url": "https://github.com/komainu8/groonga/commit/06875e04a60c0f652686670699eb90b3e8950e5c"
        },
        "date": 1785229545629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.40711327700012134,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.02080200000000018 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2784179220002443,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014071999999999751 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.018638548000012634,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003800000000003245 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.020945630000142046,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003340000000002785 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.4293672269999433,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003800000000000747 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2503500020000047,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006363000000000035 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.1434880989999101,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0066560000000000785 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.01952206299995396,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001562999999999995 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.022644649000085337,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001627000000000045 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.06051181699990593,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006659999999999888 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.0630398900000273,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.006969999999999782 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.02891923799995766,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019140000000000823 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.027742490000036923,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0018160000000000398 s\nthreads: undefined"
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
          "id": "0a0e9677f8c49a2627786c4f3de0aaa09b586923",
          "message": "Mearge types only when previous type contains GRN_CHAR_BLANK",
          "timestamp": "2026-08-03T17:16:22+09:00",
          "tree_id": "01712ce51c13ddb86e8d38da4376c88c333304e8",
          "url": "https://github.com/komainu8/groonga/commit/0a0e9677f8c49a2627786c4f3de0aaa09b586923"
        },
        "date": 1785745547628,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.32526485999989063,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0076219999999998095 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.23751007399999935,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00593299999999998 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.011325841000086712,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00038499999999999646 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.012369500000090738,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0003899999999996684 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.692936949,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.00031499999999987094 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.2014200869999172,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005654999999999993 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.12387313299996094,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00427899999999988 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.012858724000011534,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0013519999999997978 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.018009505000009085,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.001274999999999804 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.05441293899991706,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005664000000000238 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.055868290000034904,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.005922999999999692 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.01817439599994941,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0015589999999997411 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.020717818000093757,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0014380000000005777 s\nthreads: undefined"
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
          "id": "ce3e240779a5a92eb73a4e9084f090d59be64883",
          "message": "Mearge types only when previous type contains GRN_CHAR_BLANK",
          "timestamp": "2026-08-03T17:27:00+09:00",
          "tree_id": "cb445dd7621f6cd0dd1c06ffe7e51860df99d0dc",
          "url": "https://github.com/komainu8/groonga/commit/ce3e240779a5a92eb73a4e9084f090d59be64883"
        },
        "date": 1785746083645,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "stdio: json|json: load/data/multiple",
            "value": 0.3663940000000707,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.014842999999999856 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: load/data/short_text",
            "value": 0.2672765750000963,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.011615999999999738 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/multiple",
            "value": 0.015387169000007361,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005699999999999039 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: select/olap/n_workers/multiple",
            "value": 0.015910536999911074,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0005620000000000069 s\nthreads: undefined"
          },
          {
            "name": "stdio: json|json: wal_recover/db/auto_recovery/column/index",
            "value": 1.877069081000002,
            "unit": "s/iter",
            "extra": "iterations: 1\ncpu: 0.0003160000000000107 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/multiple",
            "value": 0.22414237399988224,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.00891799999999987 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: load/data/short_text",
            "value": 0.14461421299995436,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.008188 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/multiple",
            "value": 0.017266496999980063,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0019759999999998668 s\nthreads: undefined"
          },
          {
            "name": "http: json|json: select/olap/n_workers/multiple",
            "value": 0.017261570999949072,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0017929999999996282 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/multiple",
            "value": 0.0609997849999786,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009031999999999873 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: load/data/short_text",
            "value": 0.06697625399988283,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.009387999999999341 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/multiple",
            "value": 0.0221656300000177,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.0023930000000003393 s\nthreads: undefined"
          },
          {
            "name": "http: apache-arrow|apache-arrow: select/olap/n_workers/multiple",
            "value": 0.028656447999935608,
            "unit": "s/iter",
            "extra": "iterations: 5\ncpu: 0.002896000000000565 s\nthreads: undefined"
          }
        ]
      }
    ]
  }
}