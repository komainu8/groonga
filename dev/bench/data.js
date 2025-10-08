window.BENCHMARK_DATA = {
  "lastUpdate": 1759913551622,
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
      }
    ]
  }
}