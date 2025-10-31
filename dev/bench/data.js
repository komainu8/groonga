window.BENCHMARK_DATA = {
  "lastUpdate": 1761903349229,
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
      }
    ]
  }
}