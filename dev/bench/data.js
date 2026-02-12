window.BENCHMARK_DATA = {
  "lastUpdate": 1770901249382,
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
      }
    ]
  }
}