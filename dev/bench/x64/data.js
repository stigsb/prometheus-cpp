window.BENCHMARK_DATA = {
  "lastUpdate": 1775163112350,
  "repoUrl": "https://github.com/stigsb/prometheus-cpp",
  "entries": {
    "Benchmarks (x64)": [
      {
        "commit": {
          "author": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "committer": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "distinct": true,
          "id": "8ccd2360088dda6cf28e74004036829f07e9da4b",
          "message": "Trigger CI: gh-pages branch created for benchmark storage",
          "timestamp": "2026-04-02T18:28:36Z",
          "tree_id": "8a996749187b74e5abecb46c89258c409ddd2670",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/8ccd2360088dda6cf28e74004036829f07e9da4b"
        },
        "date": 1775154641167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.2031006623241196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2028780048730066 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.200498363254744,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.200367608941843 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.006930832311611732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006900525619287445 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.0031459444546215972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003132504661639333 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 1.9628947507284604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9624570748671457 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 1.9623976810297794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9618988523932792 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.0009240246734361774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009950156131560337 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.00047074590886406805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005070254151792819 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 25.568946598325983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.566613074727485 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 26.068442305132653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.067484381581934 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 1.2960721676242546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.298026150608989 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.05068930636779183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.050770360032243916 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 60.10326890824117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.47084871720575 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 60.53940400117211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.261803930322394 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.8250884366231404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5643764695090783 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.013727846282084783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026304929276324284 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 96.34218064129351,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.32679017993801 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 95.32041363453406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.37819030322583 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 3.0256724088660913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.146995686092128 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.03140547980880193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.054895724603004986 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 157.8511971067598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.549980378057576 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 153.78772138486832,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 55.9464459791752 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 17.834634393416493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.337905424035644 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.11298383997274572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.023658813231963133 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2697868748567607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.269626864081256 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.2698213179087596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.269729925962313 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0006672541038744995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006799940858410065 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.0002939721395281255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00029960611438050973 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.2696828057893716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2694481726338442 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.267982301396257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2677616305210067 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.003706580930646891,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003658133986049918 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.0016330832313627107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016119046163563242 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.234614608278473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2345201745123386 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.2328612642345687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.232751896295206 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.006677488305241831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006742186377835369 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.002988205787478543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003017285972504939 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.16003359435691597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16002048101777336 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.1599263969667632,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15991189410666556 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0016629208365247451,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016689074165216408 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.010391073469336725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010429336331867897 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 1.9706632545413607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9705336668552347 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 1.9721626738448677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9720960345836145 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.00713414370465154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007171563859964123 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.003620173912621055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003639401843567173 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 27.268376483333387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.26684678333338 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 27.67438329999976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.673307349999998 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 1.3720150113741767,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3719553012580536 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.05031524382145602,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05031587671870622 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 60.1871728763764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.989174393371535 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 60.43579652519517,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.374950425507244 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.670980175536085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8839909760718899 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.011148225501707295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014735841674953372 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 99.35224226172035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.159679424501455 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 101.38509526022223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.3201210598665 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 4.9085203013202765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6604926346540472 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.04940522920851573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.028550580936567482 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 160.42131056137399,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.605581202130445 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 156.9777801467998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.99959599766698 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 11.994312210176687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.374728672263847 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.0747675740099873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04052052080284668 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.904034554630558,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.903691626610844 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.904222862117945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.903841864967337 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0009549706882559074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009562379881839579 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.00019473163935074465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001950036953781402 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.919060448924925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.918724759880127 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.918769254272806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.918451891278296 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.002491947365151992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002455434138462519 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.000506590108218047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004992013699344218 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_mean",
            "value": 4.898831252406077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.898140439930839 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_median",
            "value": 4.897788583853313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.897223849253489 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_stddev",
            "value": 0.002997631559844977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002753595886599907 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_cv",
            "value": 0.0006119074949504906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005621716895154576 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_mean",
            "value": 4.848652195282243,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.848177929097888 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_median",
            "value": 4.847390787487234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.846934262209619 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_stddev",
            "value": 0.0073487629401584745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0072149568135728955 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_cv",
            "value": 0.0015156300440169435,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014881790476933671 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.874483193228446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.874256319250415 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.874445410399024,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.874156711666676 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0007865500134380827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008402025555159326 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00016136069861328998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00017237553802774627 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 68.78542608450319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68.77983608452566 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 68.81427986536748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68.80343210860487 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 0.4148110354580424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.41390305988939974 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.006030507609976062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006017796544044413 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 130.05159312445645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.56328975506673 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 129.27780772099803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.1591367027236 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 1.7028938763262118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.213691464285485 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.013093987050943546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024996960410767897 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 210.99836323752643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.9230385821139 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 209.93425820549692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.27335916544692 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 2.9572140121326793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.989571215077419 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.014015341004345446,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015432239551274752 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 333.5047649148795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 125.03079903045521 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 310.541179061729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 127.36274990114981 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 39.89151741541615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.599128544261806 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.11961303589049975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.044781994418015045 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.951996556918595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9516192183033105 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.949437917183071,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.949173271276831 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.006986330106478241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006785387939120993 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0014108107762549657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013703371846605825 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 74.39589418352716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74.39204281189798 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 74.44022971537142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74.43612272824528 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.08188622810960329,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0808016514342022 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.0011006820874764705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001086159868448714 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 87.3498665784739,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.99651176704192 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 87.35376856648146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.17664361703974 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.048517789541130486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.338725481373932 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.000555442056657783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0038935524481828253 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 148.98593539786575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.22232816870724 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 148.44701096564322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.39443823378791 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 8.6794167157572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.318211164647735 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.05825661793228259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026886436656080523 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 248.89827511623503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.88650854216041 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 256.4754259074169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.99954471577739 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 30.949756914595554,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.481035303824984 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.12434701244973302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005536363606917968 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.8899400056642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.889601910151066 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.8900266777788355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.889741280699465 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.000760473447468447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006881908747853344 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00015551795044265617,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001407457881911848 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 71.77408521132801,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 71.76952949844404 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 71.44211963549465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 71.4394061859101 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 3.2726394917150063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.2738412125135654 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.04559639432643705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04561603281214965 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 86.31812685188629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.0639972561076 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 87.39759683184315,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.08348073009954 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 3.780823346737799,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.651901062385227 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.043801035595053314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04243238960326197 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 139.77873580476574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.00307225971386 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 140.8285759501553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.11929348726513 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 5.234974323287454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.709473369375475 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.03745186485732237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04313187043101822 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 210.65238935826292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.08189933286225 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 220.0290134766474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.06236152029423 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 20.633055640729392,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.7240822156978335 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.09794835797299278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.043262082325780465 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.8942356864760965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.893771455625784 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.896114143289207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.8955151616396675 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.006824053940663082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00664104215233835 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.001394304315895436,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013570397008842612 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 62.377553566115125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.37479655914399 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 62.45447609740537,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.449361263942016 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.38983650274372067,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.38964580731985327 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.006249627958405352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006246846944829548 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 86.29259221760202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.13058142269982 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 85.73416535053735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.59603064757665 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 2.0709513050679424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0941941283206966 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.023999178282252467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024314176146601158 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 133.02389840805583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.43874871072667 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 133.31282427844965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.03813321081813 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 3.6411410862624614,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3867230850736172 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.027372082233623342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01702780441776318 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 241.71033551157356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.79696468354912 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 235.01648448218478,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.79529235362286 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 11.855733261538704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0486044693842973 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.049049343448414634,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024158936313692526 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1242.5441361623837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1242.4010710022285 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1166.1123133873991,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1166.0118598558718 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 236.6273985856042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 236.583976119487 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.19043782164264322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19042480052648206 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 999.491784300004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 999.3752570291089 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 999.9452007442814,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 999.8550899456558 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 18.845423788618305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.87661499263496 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.018855006198792053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018888415397385748 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 2667.8136249999793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1664.10992 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 2498.292665000008,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1604.2154499999988 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 414.08852975723715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169.82596836121635 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.15521643861356332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10205213388861736 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8692.904158322346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3302.9710024585142 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8396.391112685093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3215.686868070187 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 528.7031190525705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 174.22250041498185 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.06082007916150838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05274720858442357 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 16399.46177569008,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3530.527406820527 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 16629.720207107206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3545.036215482058 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 712.4006083928729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 48.40582823144837 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.04344048714140774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013710650748082143 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 34174.994073275644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3940.1299613865485 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 33100.273235450055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3811.6236530173646 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 2467.0431345844004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 241.66367346890843 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.07218854608415551,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.061333934625817765 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 195.9351006135469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195.90438222595628 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 197.67648156863342,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 197.65657570037993 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 3.136639013781156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.139052832685423 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.016008561018210382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016023392621533277 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 15693.287600199388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15691.2233669972 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 15726.569652642938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15724.143245323903 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 159.1533102194538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 158.19747521445956 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.010141489423633052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010081908307238223 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2896.620502438214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2896.473364179707 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2893.503523220066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2893.4288642137 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 10.057304978517637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.064878304089676 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.003472082369800241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003474873419711246 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2919.949058500541,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2919.7417684391735 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2908.7934114371033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2908.6106558735287 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 34.92805675237334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.97122178829113 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.011961871954817483,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011977505054149339 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2949.1464177343055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2948.9554000899225 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2949.05592127441,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2948.881549224574 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 7.253666402725323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.343109783827028 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0024595816467796756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0024900714956906825 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 5881.3392387112835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5861.634706149352 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 5888.058687882912,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5867.913810415277 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 23.342533185830444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.886135224145495 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.003968914602338981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004245596403003044 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 9795.929739054473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5823.300424628414 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 9934.877904975661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5814.1631842830175 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 277.09445159802306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 90.50732174880038 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.028286692430357196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015542272448458759 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 15874.064131060984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5806.780115460587 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 15336.285116695211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5812.456439861619 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 1474.154586211118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.463237262122405 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.09286560606282426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004040662259562988 ns\nthreads: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "committer": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "distinct": true,
          "id": "c06f12ae4202aa4ec18bb607f75f07a9fe770229",
          "message": "Add Unit system for semantic scale factors\n\nNew: include/prometheus/unit.hpp with Unit struct and predefined constants:\n- Duration: nanoseconds, microseconds, milliseconds, seconds\n- Data size: bytes, kilobytes, megabytes, gigabytes, kibibytes, mebibytes, gibibytes\n- Energy: joules, kilojoules, megajoules\n- Temperature: celsius, fahrenheit, kelvin\n- Ratios: ratio, percent (0-100 → 0.0-1.0)\n- Dimensionless: none\n- Custom: units::custom(\"millivolts\", 0.001, \"volts\", \"_volts\")\n\nBuilder: .unit(prometheus::units::microseconds) replaces raw .scale(1e-6)\nscale() kept as low-level escape hatch.\n\n130/130 tests pass, 8 new unit tests.",
          "timestamp": "2026-04-02T19:12:58Z",
          "tree_id": "da2b846afe68c3e2cb7886bdbb40833820b9a24f",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/c06f12ae4202aa4ec18bb607f75f07a9fe770229"
        },
        "date": 1775157319590,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 6.052818493051951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.052431545703999 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 6.049937840523314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.049389237540985 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.005881960983289918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00596627203868589 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.000971772239666833,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009857644805451352 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 6.051665523582298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.05121059675004 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 6.04777093349728,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.047144385402383 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.00796470608277428,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00785877121686628 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.001316118025977674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012987105788529385 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 27.848166011425416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.847136053441073 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 29.28559420488449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.283589904522003 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 2.661474253097016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6611090986243897 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.09557089870855691,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09556132068725094 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 59.01609901446866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.886693583285115 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 59.23945342079301,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.163376603523375 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 2.4782007380879776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5393197448281475 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.041991944223226454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04312213150899219 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 104.21642449999997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.9482619166667 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 98.49001850000506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.70906537500003 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 12.636735246322212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.927635298197402 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.12125473798347608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03270046029384953 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 180.52199397571016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.487840602061624 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 181.47145736836444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.35782915784902 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 17.210957094785144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7701511785258475 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.0953399456528324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02926457881297741 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 6.0482567665912965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.047911354928573 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 6.047888686783751,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.047534684813843 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0009428114317527964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008394632676920724 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00015588151563944766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00013880217788046374 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 6.0526725773102354,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.052170668665501 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 6.050326786315742,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.049923546450446 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.004220727212095427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004093551025871318 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.0006973328159064384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006763773280659883 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 6.054013884470888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.053543237814242 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 6.053426196733008,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.053055298347194 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0057292223179349925,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005729165388072409 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0009463510370584024,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009464152089117718 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.21229617932308995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21228262954302723 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.2122224323053453,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21221245919064471 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0003515807010701073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003572407703714455 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0016560858617009901,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016828544621878116 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 6.048690682901026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.048294421568301 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 6.048157593026225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.047657346609679 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.0016217740121429382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016077726506827249 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.00026811984562667625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00026582248459158754 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 30.24881756174206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30.24777615118457 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 30.78406664937906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30.78360212706214 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 1.0959089495788419,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0960859556335512 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.0362298112097089,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03623691044773306 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 60.7090345777384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.73135536268948 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 61.30691606675479,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.10920427539048 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 1.3971134795730407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.610272957723102 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.023013271241927355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04370021309366738 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 103.97918632464707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.12590140541556 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 107.40348018259606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.154150843687255 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 6.785556839356932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8901972116436079 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.06525879918093273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03251901761419392 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 157.29790568091542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.28021594994467 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 152.3310399073736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.214893215368896 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 10.906854326033011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14170697927819595 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.06933884007431075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002390459903146291 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 12.461145602086923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.460224415729366 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 12.45741973396212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.456040322437763 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0171294821050104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017058878713420548 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0013746314064528424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013690667314054147 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 12.953359948362374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.952668198378044 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 12.952245439320505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.951207823595125 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0022704378574334174,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027895096943115687 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00017527790986156122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021536178118581586 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_mean",
            "value": 12.174377161909382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.173505294977877 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_median",
            "value": 12.173053128188512,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.172036535870014 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_stddev",
            "value": 0.005764307289663979,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0050782131116585754 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_cv",
            "value": 0.00047347861931689377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004171529061357183 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_mean",
            "value": 12.853728193431495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.852645223110096 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_median",
            "value": 12.781386718677004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.781049826244583 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_stddev",
            "value": 0.1316475969479454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.13056891729084866 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_cv",
            "value": 0.010241977655573881,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010158913984187097 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 12.180381687445994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.17955419309179 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 12.176425558452841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.175726586111738 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.014651456118281893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014282963047379768 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0012028733166369304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001172699987285333 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 107.59615199712259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 107.5911017976318 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 107.24006287209426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 107.23855783462807 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 0.6825022715482204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6851334315757881 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.006343184759678697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006367937683772923 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 202.18364141468945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 202.0092155948834 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 201.55081486101008,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201.3183287181098 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 1.2839084967739451,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3322200511610285 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.00635020958070777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006594847899576577 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 333.531581441119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 200.40788545593372 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 328.6462740388559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 200.6910583374889 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 12.712350267992491,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.6443256283717056 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.03811438249135248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018184542090650575 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 517.7852441666589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201.7331185416663 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 524.2674881250053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201.54386000000082 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 19.44923214650813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6776699123939794 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.03756235305200785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033592397584138486 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 12.783488286922818,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.782254091043546 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 12.781992899832792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.7804170062265 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.01375633199607229,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013773517393994386 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0010761015841149295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010775499607416986 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 135.4262337838472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 135.41986090569128 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 135.27486474506586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 135.27544529311362 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.5809218451852806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5867116224537313 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.004289581338520316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004332537476628538 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 150.68431450406732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.43658385159435 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 150.57427987739234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.27379668134046 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.4688034043440768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5530430521834064 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.003111162604329482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036762537278098744 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 261.19374465135996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.47658646258603 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 243.50337344640414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 150.11451535769302 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 33.44139251571546,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5377202725036907 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.1280328997172304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010287365458995022 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 365.47106750002564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.25914874999964 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 375.66761000000776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.24856624999921 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 19.678362596150702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09834919006167327 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.05384383155350407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006589156569987039 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 12.51193648185353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.511313298606252 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 12.513075149432707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.512534253733683 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.002805995371489409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0026296696092333494 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0002242654744578536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021018333938822333 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 125.59707408343503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 125.59099874287521 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 126.59788556111995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 126.59120212239583 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 1.785227968755481,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7814555719973801 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.014213929598149246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014184580024278548 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 144.0055943961524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 143.76572816886053 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 142.10376805909323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 141.68109533330292 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 5.480980448274763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.59994635287914 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.038060885559743275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03895188668541159 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 247.6481105701523,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 140.0346715865787 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 234.32417758882036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 139.90341905742687 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 29.85635242715142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.3395355664890145 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.12055958092478111,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016706830815413874 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 381.185384583335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.07284354166643 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 346.69659875001815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 140.7165350000004 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 83.30291782842049,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19.996364287520624 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.21853649483302465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.13236240093677426 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 13.066263832630016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.065386906915885 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 13.066348996415371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.065156529233688 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0050790654320706265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005320080796565111 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0003887159709255845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004071889209610042 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 131.69476879400807,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 131.68788770712084 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 131.95731189230506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 131.9432210805757 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.6781573790063944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6746034872865071 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.005149463302275447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005122745144085327 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 149.90244189274424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.72829566927325 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 149.87694939882581,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.72220629541286 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.46364784797164055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4897672252574667 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0030929972995595513,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003271039873046355 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 260.4478948775208,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.17797839333576 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 260.4979938065522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 148.14916397810467 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 7.800584863101524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.7964075373024286 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.029950654301774474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01887195093105816 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 369.38820583332677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.01275500000062 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 361.87093562499945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 144.0350256250003 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 41.783633483280525,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.51790085565345 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.11311577582456407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03137153272051097 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1197.4567297546025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1196.777645892577 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1086.3758069421467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1086.2963594556747 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 282.61105377455664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 283.21278060721403 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.23600940789941757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23664611515699654 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1102.2351814601018,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1102.150059305467 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1114.962812604064,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1114.79788159318 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 37.80205825092385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.773469609698346 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.03429581897472049,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.034272528763916 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 3923.07834509729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2227.435773384532 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3955.1234352879187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2249.0570680681562 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 80.2731973816145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 38.346335087084405 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.020461787994097216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01721546162869519 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 9562.42803430874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3316.4781508244037 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 9473.702825754699,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3314.588591234842 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 419.23939424250153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 126.52092989049173 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.043842358105946055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03814918239670639 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 18933.241602789072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3557.9271665069136 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 18912.967781860094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3589.43053337581 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 2765.0546267906575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 255.9746470152343 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.14604232517601926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07194488111642375 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 34876.596533851836,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3536.170776644012 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 34506.568634594616,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3484.061042274003 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1422.3577091169266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 280.1337418667097 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.04078258346499955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07921951725775231 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 166.68948833129573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.67923719202406 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 166.32472816906042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.31165601549358 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 1.3394648345522848,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3413004008284355 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.008035688680560921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008047195460123089 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10917.996224766921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10917.421136106017 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10927.927474961958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10927.21311347544 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 19.100950985325408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.710499966474373 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0017494923603285253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001713820483172087 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2804.680588860882,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2804.487073963912 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2804.056018383211,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2803.745629381135 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 2.123812769221852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.162864859328049 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0007572387307334832,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007712158417157607 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2752.9519164100907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2752.7525345265753 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2752.424176532762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2752.3295913432175 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 4.87018363002438,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.765623345165108 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.001769076895602015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017312211269963323 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2812.7069606126147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2812.5783396564893 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2812.871789779132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2812.8259103732175 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 1.4484039527380206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.406387417033895 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.000514950178963028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005000349313668049 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 6906.803196048967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6899.220050640943 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 6903.996795378992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6900.033658411211 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 14.282288967536447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.294040796015635 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.0020678581048474967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019268903873823546 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 12164.544389742305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6796.198266067967 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 11617.0906730141,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6820.980009738284 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 1294.9128753705384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 92.47381930935497 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.10644976366418357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013606698287637947 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 18648.850765178497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6854.65871529857 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 18446.76460455373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6847.3175366986325 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 355.06012276534585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.61135842724196 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.019039249508517764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005049318990892223 ns\nthreads: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "committer": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "distinct": true,
          "id": "a3e67a6b589ef0676367f132317a284c21e70b62",
          "message": "fix: resolve segfault in BM_LocalHistogramBatchObserve_MT benchmark\n\nLocalHistogram was constructed before the benchmark loop, racing with\nthread 0's setup of the shared Histogram pointer. Google Benchmark only\nsynchronizes threads at the loop entry, so non-zero threads could\ndereference a null/stale pointer. Lazily construct LocalHistogram inside\nthe loop to ensure it runs after the barrier.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T20:06:02Z",
          "tree_id": "8ea4e59ab46c7d4f73fc9738e1b05a89c268e77f",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/a3e67a6b589ef0676367f132317a284c21e70b62"
        },
        "date": 1775160480852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.119235541650503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.118963945648204 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.1310263143635404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1308119341309673 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.025084609814087458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025195062516339756 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.011836631332896136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011890274286206618 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 1.940748248467475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9404378698020013 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 1.9320411037267935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9316563984370996 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.03125763188554589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.031073560070916575 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.01610596939104734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016013684619589113 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 22.69671008047317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.693675654059533 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 23.176621120134495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.169942966086293 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.8980816590568428,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8963984965699038 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.03956880340245859,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03949992545211831 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 56.53068352560473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.41881860921837 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 56.47437437113962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.3479708548606 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.14403799163317713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12609568199841395 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.002547961260152414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022349933073184014 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 96.67197549999963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.992584375 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 96.0884581249992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.965479625000036 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 10.190068459112132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1217872628643866 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.10540871236372089,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0365872168955979 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 166.27857795908173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.223938567171594 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 165.9706614291793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.076269182004076 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 10.431795866071432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.096043292641597 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.06273685999791577,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.019153580128970338 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.20062739155582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2004788603167964 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.2102968977271997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.210261115153863 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.025867951900930844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02587087553540446 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.011754807742642192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011756929821938808 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.2092349053761455,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2090683832193365 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.2033313754988337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.203099458482298 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.019942397394645102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.019981548999747665 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.009026834288248627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00904523787110112 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.1979744324189796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.197798307694771 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.20068995313741,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2006191487509885 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.00830708520378978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008355372622708404 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0037794275862651516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003801701272339314 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.155925281656768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15590869305130045 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.1557684748096974,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15575925529219217 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0003092505577116501,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00030356206874557353 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0019833253108523527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001947050307487915 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 1.912725392037835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9125861075295392 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 1.9121322029075616,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9121071137125523 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.001490249586562727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014849438350965137 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0007791236487821188,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007764062644032248 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 27.6813100256593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.67962279544693 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 27.911225667596884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.91005480005398 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 3.524738012524539,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.5248378242347385 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.12733277468650397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1273441423058173 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 59.20332533830557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.072855792340505 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 60.61221361582087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.34335218069981 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 2.5019602089106017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.438524079430273 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.042260467543227515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04127994231398673 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 94.83247708453406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.715820359296565 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 95.3107500103514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.17322380825163 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 0.9986017323819132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1472649700394408 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.01053016606844252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02022830601358633 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 163.04221910141976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.950496425637745 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 156.3486074191384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.629024962291105 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 17.023256909386106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.908193021301847 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.10441011538733325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.031829478237411404 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.9056985790675185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.905222513548012 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.905598081434063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.905530257620335 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0015133296342923653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017056380659079028 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0003084840232030768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003477187958746018 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.851349306424638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.850954272795131 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.853081061283462,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.852620606173396 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.006353416030310854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006671665837479322 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.0013096183410040234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013753305973002075 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.868912932707099,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.868737469629855 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.869929621621851,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.869909511307028 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.003185097911701339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0032210453797288075 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0006541702338329627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006615771336657606 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 79.19675221883269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 79.19341772048337 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 80.47402256828235,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 80.47227788493677 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 2.4266053488394275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.425911716362938 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.030640212898306072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.030632744313742077 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 88.88216045736293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.62095048574965 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 89.34103532146027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 89.13216662126639 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 0.9316112593970535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.933347706299153 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.010481420057784829,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010531908100548262 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 144.61527354378214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.90009567634932 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 147.25230993049638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.50541706078069 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 5.853845523296569,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6024222523280927 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.04047875013370785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01843982149681576 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 225.21499561449943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.98876646637994 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 223.393139673945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.578215210934 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 5.819160343267192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0173688682614805 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.025838245483563848,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011562485861762957 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.903087219544805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9027795309002835 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.903661174599194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.903330947729854 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0023492569517302524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025124999883022674 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0004791383156239986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005124644036035012 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 72.90653922804948,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 72.90143447513945 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 76.2947738839841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.29197679537397 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 6.684909480298319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.686331817199583 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.09169149367230449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09171742456562673 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 86.6661464343597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.40651505797325 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 86.49741067026751,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.32465360141406 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.3744611531008739,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17549525646976175 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.004320731548673252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002031041945760869 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 142.72844591238902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.23747692699386 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 141.51452484215346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.51971842063205 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 4.408738030682007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6699431425947512 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.03088899344835732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007768584685773047 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 219.02467269520233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.19017584432281 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 217.0972907144591,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.98769353992242 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 6.304871110233065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5585567084050934 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.0287861227351633,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006406188575676128 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1141.4800657551875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1141.3623999745657 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1037.7540048186495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1037.6285512571167 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 250.69050190076007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.6697172944167 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.21961881720195145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21962324788340903 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 916.2627777438246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 916.168577007369 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 919.7192338386394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 919.6281530956668 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 16.75105623693043,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.721373122390236 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.018281934663086155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018251415233002194 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 2423.2981500000265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1563.109140000013 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 2419.7637550000904,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1564.2329050000214 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 234.01402130423992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 103.60301358675923 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.09656839844665309,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06628008942917343 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8787.269877641358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3259.6216883077955 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8435.581951745238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3156.952071258446 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 618.1443785270793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.43829892590622 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.07034544143225963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05535559527448697 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 15717.438322661199,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3367.4317947349805 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 15991.8020010677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3404.9025080041197 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 710.6765521627976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 98.77892530191697 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.04521580028331674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029333608317281736 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 31479.16187848808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3598.3393740486094 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 31460.21789383597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3565.0555079905826 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 183.72248597584522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.56468451801535 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.005836320759905482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016831287497452482 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 153.2041460285011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.1946311794124 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 153.19053947381005,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.17782203220847 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.10114205326096752,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10086130060664576 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0006601783038048572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006583866538281163 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 11242.91174221153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11242.167375317536 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 11237.723738467597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11236.922390693879 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 9.603386253457414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.992788477702762 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.000854172519864359,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008888667233012545 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2455.740803230522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2455.5849102301154 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2455.9474340568263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2455.7477023359047 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 4.327634404765303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.252122116825661 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.001762252107010768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017316127408631085 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2311.3492986104025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2311.1767303693387 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2309.787790870316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2309.62477473016 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 3.5590132563206542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.661209422637263 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0015397989643799641,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015841321758428147 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2364.6383874525577,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2364.485538681591 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2365.073884883324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2364.8722592881645 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 3.8566976518599776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.800654414520766 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0016309883457549827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016073916936028144 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 4498.263020352538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4493.22557475055 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 4499.306013451173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4494.333858631162 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 14.73781056861978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.952993342207856 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.0032763336652254604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028827827863787962 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 7480.372150000391,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4485.494775000019 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 7553.10560000062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4388.855787500031 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 353.22878503520366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 240.56580056084522 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.047220750245051,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.053631943102830655 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 12278.47093454482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4497.564663298093 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 11565.595273966423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4536.08874930465 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 1453.6386469241145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69.42997664962805 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.11838922408769813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015437238116041804 ns\nthreads: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "committer": {
            "email": "reidar@openclaw.ai",
            "name": "Reidar"
          },
          "distinct": true,
          "id": "96bec87e17dcf2462789e527ca231cfde9afc107",
          "message": "test: add coverage tests for newline escape, histogram no-label path, and help/name accessors\n\nCover three previously untested code paths:\n- escape_label_value '\\n' branch (label_key.hpp:16)\n- extra_label_name short-circuit when dynamic_labels empty (text_serializer.hpp:58)\n- help() and name() virtual accessors on MetricFamily (metric_family.hpp:72-73)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T20:50:00Z",
          "tree_id": "93c36a9d6e545e3e4c31ddebb302b26d5ac424b9",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/96bec87e17dcf2462789e527ca231cfde9afc107"
        },
        "date": 1775163112033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.2521743794833142,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2517174963124345 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.246259855087042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2457340463723914 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.01327305096947582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013047290211029157 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00589343839908208,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005794372621075373 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 2.0424422683300905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0421741806489346 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 2.0412443351500333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0408489977261963 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.008104567629272188,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008076999864804002 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.003968076726055282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003955098414885161 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 26.14916463333259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.140092183333312 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 25.307050549997708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.30651124999996 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 1.6645735046328298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6709265908921715 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.0636568520629138,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06392198539978904 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 58.66380276795736,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.83655072776966 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 58.7745445358694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.82925638135675 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.44735858173811555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7382759554391122 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.007625802635189316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012764868342756065 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 94.93674651852103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.679503611687885 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 94.84207513955225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 55.96487973245852 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 5.206574438431307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.357643827952059 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.05484256233086275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.023952994317898352 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 170.49259994798538,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.457884605985726 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 174.93767293654375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.24131965899685 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 18.438293570145373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6258409647472747 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.10814717809318768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.044918508126761826 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2692331522260667,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.269061763946098 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.271457571996262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2713241049161685 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.004055227993953493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003994147698486786 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.001787047747815338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017602639830925587 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.2686236503199098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2684273013483973 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.260329826119131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.260097578273419 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.015641489324352192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01569965799611352 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.006894704338529887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0069209438569097365 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.256224958274915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.255980088711708 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.253972413385358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2536432801360706 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.019282525331367022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01922916312213543 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.008546366469640613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008523640442729425 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.15585576181348015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1558417100561913 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.155759227526818,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1557473070192077 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.00020155752397331327,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020097589153374117 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0012932311364563253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012896155429844554 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 1.983754640693112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.983608091205907 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 1.9917164786955492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9916175634953648 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.014433731032085707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014390700389681368 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.007275965855859397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007254810289129614 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 25.560441440260025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.55897096961625 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 26.345203419246246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.343373777041972 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 1.6467427373254118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6460662161922774 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.06442544199301822,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06440267951902572 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 58.44307921286482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.2946963835123 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 58.93114321309866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.73357042852614 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.896485088753488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9026182131253065 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.015339456798438997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015483710682479807 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 106.77686289374132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.92616689797879 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 103.70181777995703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.39238749679174 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 6.482549619359202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1211267426414813 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.06071118258840674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018708467447119417 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 148.9749140527276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.083994041684825 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 145.49434770778169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.578025893747224 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 10.393705092748535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6387761381463066 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.06976815632912417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02870815481042921 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.9057669067506895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.905553190367585 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.904835626731968,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9046566131036125 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0019360504297287568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019120031749253136 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.00039464786373453895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003897630095377771 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.874163939148226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.873836699688323 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.876591518470394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.8762971926030065 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.010490650039232371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010255053837055357 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.002152297331440527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021041028801213548 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.865899077556619,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.865726330403928 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.868041067170065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.867799541873624 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.007093131588372061,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006991783392901178 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0014577227096814007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014369454667461242 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 77.2387070015423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 77.23487988060756 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 76.66862727148008,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.66413872501893 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 3.0418205252426964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.043604630876358 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.03938207465308758,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03940712584238197 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 86.83393290771407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.21419449353272 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 86.86344228522255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.38908661633236 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 0.3572880476543025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.32634957506740125 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.004114613212717468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037853346190212566 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 146.72881505371845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 87.14299794624209 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 146.98129584628074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.35549118597629 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 2.6389773700850463,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9448617323506883 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.017985406405135202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022318049392223798 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 249.28720654049107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.55827410161537 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 257.8185127404155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.29545285643322 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 21.665575800881978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9515341241251177 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.08691009900406942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010992988642634687 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.897119071747276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.8967066309344665 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.8921897651644555,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.891408330384983 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.01016323837750655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010307006858841845 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.002075350472105295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021048855150374614 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 66.15480420743253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.15066272746064 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 65.13879461046146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 65.13604683697206 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 2.22960635922669,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2268915301327015 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.0337028638500028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03366393378865225 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 82.64145337279066,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.50385742364122 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 82.52933129970965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.38357680711248 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 1.6129473078205256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6924164176638712 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.019517412170192802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020513179268378243 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 129.90331828096714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 79.46115461958316 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 130.12899363172582,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 79.81312083045545 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 1.6682008279538645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8387846649146775 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.012841864626935259,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01055590834201092 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 220.86807167369759,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.0628665384037 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 210.19953538826857,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.51393860780279 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 20.318195497559593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0173394818448485 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.09199245207146531,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01255000625178832 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1061.2110628065984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1061.1087531875853 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 984.8912501042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 984.7211317740303 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 219.16216652130336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 219.14285193726516 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.20652080835049197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20652251833655788 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 884.9186410009902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 884.7609177389885 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 891.0323746850589,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 890.8585578720753 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 29.355995495724574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.334696061901866 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.03317366607004466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.033155506164158834 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 2939.7841550001162,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1830.9551333333486 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 2946.3999950002058,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1810.5481950000187 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 166.31894120391084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 128.20176834606679 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.05657522200091735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07001906601210311 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8506.51496202856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3207.4289907411444 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8398.09408578179,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3211.195650720025 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 241.1105456038788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.641410919868978 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.02834422165600716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007994381479336815 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 17916.293819600123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3844.0266703786724 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 16747.884855233187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3843.1163418707783 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 2470.6624566168643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 351.01657295958404 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.13790030915400603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09131481206008533 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 30755.631530083654,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3686.091877517671 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 30337.635810040858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3568.3662197885765 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 979.2782732204017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 283.1332389212334 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.03184061664487428,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07681122672175608 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 153.30092488362666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.28880826130322 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 153.30438551384526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 153.29428898558186 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.09662501012207896,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09681429803210856 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0006302963285800698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006315809949221759 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 14265.427947034486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14263.816536835351 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 14266.606733553757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14263.466332232076 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 2.7883786328627758,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1624884110283706 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.00019546407182564942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015160657776576761 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2443.756104745013,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2443.524517354072 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2441.471530205651,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2441.208751715734 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 15.759188805615613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15.666826041336664 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0064487568031098425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0064115689980067045 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2325.993424888056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2325.7773339163027 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2317.0514647427867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2316.9424371306573 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 17.64463656531472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17.546819604237594 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.007585849717594928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007544496778928987 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2371.6384466891136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2371.2988563411823 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2367.4146464644987,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2366.8841515151494 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 8.876744923491502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.999694374137777 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0037428744401929114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037952594419178106 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 4545.439425482317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4520.515380298822 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 4555.10200344348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4507.482535725281 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 20.71930894286756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.28492612953716 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.004558263130009489,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006035799866636785 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 7232.484237501069,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4493.719154166635 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 7147.320425001169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4462.651687499975 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 194.78960117812096,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 65.52969806733479 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.026932599475035107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014582508567891877 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 11668.51665804938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4522.76099439118 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 11717.577481667482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4523.286097010731 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 290.0375287832508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.554520271266346 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.024856418110623515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0029969570110106943 ns\nthreads: 16"
          }
        ]
      }
    ]
  }
}