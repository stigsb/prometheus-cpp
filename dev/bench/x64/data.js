window.BENCHMARK_DATA = {
  "lastUpdate": 1775172509300,
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
          "id": "c610ec59430b5203dd692e8fd456e7bdd41b077f",
          "message": "perf: zero-allocation hash-based fast path for MetricFamily::get()\n\nReplace string-keyed map lookup with FNV-1a hash-based lookup on the\nhot path, eliminating all heap allocations when the label combination\nalready exists. Canonical key and display strings are now computed\nlazily, only on first insertion.\n\nBM_MetricFamilyGet_ExistingLabels: 164ns → 15.9ns (~10.3x faster)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T21:40:46Z",
          "tree_id": "1c64de68e28704132b4c447b1bcfea02eaf94bb3",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/c610ec59430b5203dd692e8fd456e7bdd41b077f"
        },
        "date": 1775166163864,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.1059498319873593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1056653400038035 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.1044909779673797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.10408848819852 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.014836321206119302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015024823071388678 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.007044954718659393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007135427831737753 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 1.962910383451475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.962613159586639 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 1.9502236700596052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9498519133292451 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.026261597992667602,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026143543857356497 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.013378908285405592,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01332078292130824 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 26.99567607495535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.993129761397388 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 27.029020826170182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.028350404762886 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.2503756895589648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.248172569218755 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.009274658981081988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009193916059843649 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 57.786602141858104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.71302734150715 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 58.43798512948306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.370129593749766 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 1.1764447588081317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.163535715615089 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.020358434571392914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02016071187411573 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 93.95610829058602,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.489380985900546 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 93.16684618915457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 55.98059603023546 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 7.6652614527522935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6716845241281124 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.0815834286052514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04729534077909175 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 158.43840129869432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.55310510339663 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 155.0875918584734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.40134433613216 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 7.9514387240685735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6999458412600774 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.05018631000371057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03005928389169876 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2098725528189105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2097219535377732 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.2059053278950578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2058331327826823 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0303207990646976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03022405596846095 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.013720609827032977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013677764263540995 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.250787638588983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2506806358628846 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.2573644258858647,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.257263726960151 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.025576981633916192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025597565309233235 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.011363569443606144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011373255228376473 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.2207406505246325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.220614062399816 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.228673230423078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2285601239931205 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.03252991890522969,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03255332486572121 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.014648229588423461,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014659604934024807 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.15571606502594684,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15570703867401145 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.15565557960989485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15564904020086343 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.00010798330489392013,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00010909457311954314 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0006934628413319264,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007006399585309932 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 2.1364250114015335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1363130221677333 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 2.1361394205805557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1359119355710834 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.013063020124644801,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013029998884206874 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.006114429504864869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006099292916814799 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 26.40753766335388,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.38875670528985 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 26.410572612368252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.401207095826123 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.006331075137287004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.030929293176377316 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.0002397450007644116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011720632965696819 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 61.84631599283108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.77362163549012 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 63.40370611219084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.275470129746175 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 3.7741796785270147,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.745889675018823 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.06102513331536998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06063898434063542 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 107.32304994102897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.338965632003315 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 109.51528824908547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.21568383408504 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 9.584799169517657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.375975750491185 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.08930792755875126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07252321455391675 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 178.95411623887227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.02834879378113 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 178.9387691294604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.614944699166294 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 14.344334817272108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8589005254205906 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.08015649552382995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029968563754625713 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.903584244065716,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9033648758412705 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.899824402735246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.899646682687695 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.00774026975525776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007691681054644975 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0015784922558687519,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015686536183635146 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.933683864228217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.933404336962919 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.929820107219244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.929586080794112 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.011583290835493608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011612752945793033 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.002347797539173215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002353902529088468 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.874281539614724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.873919642708024 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.874041727656604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.873571091119559 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.007195922284602571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006975971346300223 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0014763041950119598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014312856710178067 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 76.79089917587909,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.78828188000935 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 77.1115349200168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 77.10588087377661 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 1.713637306835521,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.713610427329704 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.022315630175272053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02231604074704289 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 82.53752497264664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.37624851791126 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 80.7447318536636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 80.5541439588759 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 3.802657684539644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.7485600435945976 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.0460718647160775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04550535028042142 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 136.67666492837964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.79393420086271 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 135.94069987648797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.75781843639317 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 10.508525457954033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.703296992575193 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.07688602486357593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04419528725907544 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 211.06430112832774,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.2501981805779 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 219.44989080305035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.09942990618242 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 22.298778461118847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.997134774664942 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.10564921846997291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08507134243376457 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.911106632781177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.910945207719117 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.911065980395636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.911012741742366 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0012129022966414118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013026702544498125 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00024697128108467503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002652585600837596 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 66.92709103543363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.92032747003883 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 67.00078128362506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.99033325568088 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.6535046284799759,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6552775765647099 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.009764426009999255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009791906306168134 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 85.889188452207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.74426507834401 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 86.01018956902637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.81885277612749 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.4694902363999254,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5022878015520219 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.005466232070188592,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005857975470348771 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 142.43289309993366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.20533028296704 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 140.68617274195347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.59429865921136 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 5.839229401826888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1476312149345704 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.040996354667386915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013792760764624979 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 212.3941369478517,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.81722000391932 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 211.06387913593292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.8569035274693 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 8.977900960357115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8197080354530558 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.04227000372689866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009897797045279511 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 996.6631670156139,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 996.5775553689996 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 937.300127443934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 937.2436707900491 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 232.7783044219325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 232.7384996949114 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.2335576472831425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.233537769781235 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 792.6976191317003,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 792.6451168150799 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 779.2387301857311,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 779.2064415218365 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 26.224964346815824,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.18943985102653 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.0330831879822497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03304056165293502 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 3197.825905268009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1708.3943728055917 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3180.207057980133,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1685.8399934629006 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 131.82639454090292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 91.67044940406709 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.041223755903576804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05365883361786209 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 7777.661251187653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2836.771760578855 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 7827.720028502202,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2829.057421618119 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 312.1929905536495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 71.91943583267576 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.040139700158061974,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025352563372246874 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 13354.778490559916,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2752.3207246857733 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 13006.613498588025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2678.548330842052 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 1343.6960192113881,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 185.34084637073704 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.10061537300384324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0673398433214563 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 28410.291307221123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2958.983091787444 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 28430.60287267035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2926.4371549344614 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1147.7005859079406,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.11991312516487 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.04039735367360442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029780472003959287 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 16.063123886590173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.062105250073696 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 16.057474034948303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.055959307725736 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.019529089913258055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01950234462645917 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0012157716052704631,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012141835906827774 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 14269.736904664782,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14268.813982394642 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 14262.260982964943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14260.979786453676 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 74.52350375631393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74.36465914122373 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.005222486178561019,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005211691681801824 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2453.971170225798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2453.779962805559 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2449.105524948832,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2449.0126204592825 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 8.481313669153009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.309628453257602 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0034561586427979984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033864603098953854 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2316.208093866573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2316.1187135822424 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2318.9123053848507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2318.859200169886 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 5.911891678977152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.992188299939504 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0025524009240068353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002587168034522566 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2371.0860974464426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2371.0040086727927 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2372.0411163954755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2371.904846468393 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 6.810799020092659,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.860973704842944 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.002872438511375693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028936997490288867 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 4525.747116253114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4522.445725627141 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 4517.8034188031625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4515.659826454025 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 17.932884447264943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.6332012379457 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.0039624141576234725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0041201602779570735 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 7729.384391666726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4509.044608333344 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 7854.908425000318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4505.678700000046 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 520.6915960206397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.686803468406723 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.06736520913386226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002813634499192964 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 12575.3130106776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4500.194158155387 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 12681.536652738709,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4505.8664229341275 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 1080.502538649952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.480608487370034 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.08592251642026769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007217601584702228 ns\nthreads: 16"
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
          "id": "cf1f9828f392c43377fe65a34bd11e29935370df",
          "message": "perf: remove collision-defence dead code from MetricStore\n\n64-bit FNV-1a hash collisions between distinct label combinations are\nastronomically unlikely (~1e-19 per pair). Remove the defensive code:\n\n- Drop canonical_key field from Entry\n- Replace unordered_map<size_t, vector<Entry>> with unordered_map<size_t, Entry>\n- Drop make_key lambda from get_or_create() signature\n- Remove make_label_key() (now unused)\n- Remove <vector> include from metric_store.hpp\n\nMetricStore is now simpler: hash -> single Entry, smaller Entry struct\nimproves cache behaviour during for_each() at scrape time.",
          "timestamp": "2026-04-02T22:21:09Z",
          "tree_id": "8268b32c39a56020807a8aaf95d412e06b92945b",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/cf1f9828f392c43377fe65a34bd11e29935370df"
        },
        "date": 1775168580710,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.2255315232469655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2252826720460894 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.2177420820160454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2176970829299214 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.022532959515012985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0223566252626544 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.010124754145085424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010046645104236605 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 2.029027782877584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0286465156482882 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 2.032125276402241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.03198487574819 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.014543336594819649,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014724501776135643 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.0071676379779256495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007258288549806906 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 22.86231237368706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.860589179946516 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 21.566975228815494,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21.56665636553478 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 2.421077480133277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4195455019293584 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.10589818914904557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10583915763867548 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 60.36163789114258,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.2638162086867 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 62.40966837966443,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.3242540753809 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 5.017217698039182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.994956636321018 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0831193101003544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08288483787724388 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 101.77776442199014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.480045362175105 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 99.19006720311621,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.64678228780107 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 11.060139942339475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.648771847213584 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.10866951151021564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04453210872798033 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 156.54892547129893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.64241250784781 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 158.22975065077028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.425329545708344 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 5.260043383524153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7560403729255836 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.03359999672746721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029442812573930038 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2365315735082754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2364050323828297 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.248028841812295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2479513672619302 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.02909839287489659,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029137352441183362 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.013010499480341418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013028656267213943 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.2722463587317114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2709617485126343 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.284885150514238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.28482999561332 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.04240261557372598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.040973948442925186 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.01866109958138238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018042553323393076 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.214400822339678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2142522453406968 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.2198405951320095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.21973802270408 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.026411692175558027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026433265399489897 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.01192724095344768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011937784168498262 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.14886739341628352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14885775066433207 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.14766668784726708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1476566282126875 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0022315045795727622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022259341379983447 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.014989881453306044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014953431232598242 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 2.034504457341534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.0343767355470956 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 2.03813770097226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.037976604868529 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.025890926592928062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02590176959494142 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.012725912936440289,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012732041780833567 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 25.379238095456856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.377583450266652 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 25.484887768459657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.483980919762818 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.7349963630231334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.734885038996857 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.02896053696563512,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02895803851604063 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 61.79573509128701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.629173689521444 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 61.6508362141602,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.294185416286325 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 1.5474601255102323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6007195557558225 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.025041536009309792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025973406098546904 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 97.47881898905676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.80157049729976 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 102.18554710357081,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 59.35347147959112 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 10.125724705702039,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.567467845530443 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.10387615289880338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07637705510989347 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 172.02128350952145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.76306073599262 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 173.7670483877964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 58.30933333094339 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 21.74312471606288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.1882320546746126 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.12639787514932355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05425571804366221 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.749756162773072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.749608680865158 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.741191047526185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.741097464791471 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.06881016547942542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06872072627853532 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.014487094309963835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014468713297453716 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.68491823575224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.6847131282973455 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.709132351814193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.708753254254547 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.052677371704174976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.052708897873685025 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.011244032244186386,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011251254117419571 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.688706783299157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.688445783127741 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.676190467195297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.675845883728824 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.05543069651887808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05527471030107084 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.01182217167350245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011789559452726816 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 67.65107352965786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67.64898047022236 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 71.48332501202209,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 71.48271275909958 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 8.032743616521616,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.03352640421948 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.11873785880131087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11875310386615018 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 82.22945717096574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.02520105525312 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 81.73440054519257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.32299316088888 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 1.7871116425161757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8119323927919153 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.02173322923439149,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02208994759514673 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 131.1795899986758,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.31948561166953 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 130.46532010179567,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.30801378239069 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 2.1213234274346564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9869460752879657 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.016171139332392104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012136649265109675 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 215.5164768971584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.87531199137308 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 209.34352294802397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.15836465026696 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 21.91747224554075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.0135942530301367 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.10169743196015346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.035929455062296486 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.8461734916910695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.846029671554858 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.898674324939651,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.898406876451498 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.09916193155514957,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09916234601114397 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.020461902927158118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020462595718966685 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 75.90737135678076,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 75.90614690829703 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 76.08535253501796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.08505149818089 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.7311459751648545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7300684930605655 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.009632081339351263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009618041789719197 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 84.69802621846092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.55480505425078 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 84.69897853479115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.55905733601924 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.06767745767860922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011694015639783463 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0007990440946528,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001383010182837099 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 139.2961981075469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.13374859940772 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 138.5777097460844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.20565792122837 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 3.780451127614659,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9724491444046587 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.027139657643031095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011558371766303355 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 224.35723487562197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.63002891344767 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 210.3315408081279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.74658548103433 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 26.777347382391692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.400548167542484 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.1193513879649853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00473293194726579 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 727.9426207450729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 727.8916191326051 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 675.0218333007009,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 674.98220482071 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 145.8589012455988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 145.8496482447652 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.2003714263856504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20037275387037365 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 604.6955733333306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 604.6760433333346 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 609.5120579999929,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 609.4986849999984 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 8.857565895455508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.857040495238177 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.014647975421134577,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014647579630264317 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 2635.5951233333976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1395.9193000000114 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 2531.0295699999583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1332.9000250000233 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 262.3089433978228,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.65150238891508 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.09952550794906039,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1208175160189516 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 6497.366477605221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2364.884805545826 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 6480.087748022036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2358.9513507192555 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 386.5608866962559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 135.65848269911882 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.0594950104828831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.057363674704573285 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 14250.335647747119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2846.5935384481363 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 14179.821168201255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2913.186317479615 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 1937.899106185122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 241.54286391407553 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.13598971659951678,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0848533029572449 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 22668.10121501748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2512.4071401798715 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 24415.271130061865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2617.482477511189 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 3222.5048144419993,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184.6673389652236 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.1421603328781287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07350215496999528 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 13.756205029319885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.75557985180523 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 13.747326851327445,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.746825794551198 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.22198267724711376,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.22208017267633184 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.016136912525946026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016144733633107214 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 14176.291438347253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14172.330947235756 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 14215.561704097987,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14205.224299606436 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 104.75917866030153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 102.93567687899946 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.007389744991904238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007263143745530201 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2359.666928402656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2359.5653941744335 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2359.753680235964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2359.6359604801414 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 13.69263841416015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.711975073655147 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.005802784388485366,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005811229096472108 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2358.7157018965804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2358.5979684927347 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2375.8652167751266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2375.6774832445676 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 37.81683468566377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.845091097484854 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.016032807453334148,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016045587931066446 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2420.18113634083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2419.993422875358 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2416.727102875419,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2416.6580395745086 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 9.240859476655748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.337823540356661 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.00381825117876399,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0038586152557645225 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 7030.584112439799,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7020.474315369886 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 5435.011212921233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5428.903354558152 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 2792.100379745841,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2790.1004429661753 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.39713633107746266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3974233531284096 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 9661.919345601595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5455.553149180409 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 9706.798239920183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5433.3518917989795 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 948.4299334707308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.84273541824909 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.0981616487931547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015918227362755236 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 13941.301632828623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5364.597744473797 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 13516.102519821032,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5360.305006607384 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 832.1533488804416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15.32637710935679 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.059689788715345506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028569480582481444 ns\nthreads: 16"
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
          "id": "221e18a6a88c83aac512b1fb635260fb2c7ac4ce",
          "message": "docs: fix repo/target name references throughout\n\n- Rename 'prometheus-client-cpp' -> 'prometheus-cpp' (repo name)\n- Update CMake consumer target from 'prometheus-client-cpp' to 'prometheus::client' (the ALIAS)\n- Applies to README, ARCHITECTURE.md, MIGRATION_FROM_JUPP0R.md",
          "timestamp": "2026-04-02T22:29:12Z",
          "tree_id": "9c431e62258629287de14872f198b92f49c6f949",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/221e18a6a88c83aac512b1fb635260fb2c7ac4ce"
        },
        "date": 1775169060022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.203268580371715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2029629737111813 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.2028198910312216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.202710870005521 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.036775392739782094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03688248251063358 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.016691289054545352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01674221625636321 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 2.1466059258156407,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1463541525097303 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 2.135905946914083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.135762739047307 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.02336316346413062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02330336419737893 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.010883769201956979,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010857185041028911 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 26.470186683333452,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.46882831666665 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 26.870717850000858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.870059349999973 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.7102637597628614,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7118918315914461 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.026832593523417356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02689547958355181 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 63.574534235504274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.4168165979818 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 63.16050910520246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.073298855767625 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.8158606564891917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8770387972480327 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.01283313619675031,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01382975122841382 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 105.94130915137895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.88582865336358 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 102.23833854738332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.60548115429602 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 7.0433996439096695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.342853245674471 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.0664839777828816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05490363389330003 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 167.06491747929343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.37517495019398 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 165.91362063542175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.34406511481592 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 3.495718055151911,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.69449863696979 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.02092430959112156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010958528122653558 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2341120038447166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2339318559478802 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.2355764777324745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2354244584876963 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.016002677847287473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01608505034956764 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.0071628807417659585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007200331696215767 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.239397450397025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.239205987204026 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.2373080517797015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.237219689271029 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.005171624380333605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005086493247719749 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00230938209714257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022715611144247493 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.240199853772934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.239978045134644 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.2379904018267456,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.237870642804623 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.006498851544362285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00656855999658064 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0029010141811307375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0029324215970990947 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.15622053581147619,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15620847282241207 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.15632543404718593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1563098927100879 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0004226587820520737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00042111958252553445 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0027055263884264865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0026958818232881033 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 2.153876414982935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1537239337779077 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 2.1492415630536548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.149191882950127 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.015699198401746606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015692413037172195 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0072888111372309125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0072861766501548285 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 25.7846729949491,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.782313991861656 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 25.85801899926958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.85541200227414 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 1.1731031002269712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1741106183891115 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.045496140302293826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04553938093996244 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 63.79463410219952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.60065288218405 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 63.94119441837566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.70678260328805 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.30690714450933515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2764969555880357 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.00481086142790109,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0043473917807137575 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 107.5843727193984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.017536614822454 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 105.26182617423217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.42278854513223 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 4.4831204090131465,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9100988991412966 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.04167073986392079,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014441994213515968 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 176.38877465360702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.42248275795037 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 172.18460301351396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.50351968708065 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 10.55970797999215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5801550011001586 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.05986609976019927,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025726003413556704 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.900536744478839,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.900253837840251 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.901935792025011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9017479891579185 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.002951289017675231,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027948793637446664 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0006022379122042667,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005703539972077219 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.871229909717106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.870915751635345 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.873761380132055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.8734831661606535 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.009506211592872004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009476464921934389 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.0019515013187755845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019455201865794518 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.866868250512296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.866614652085568 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.866944143731041,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.866711688161894 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0008556264168479291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009342178706754737 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00017580636516262055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019196462787024208 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 77.76963859971734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 77.76410032614038 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 77.9396491331663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 77.93346935214876 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 0.36025699710239484,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.359257908205352 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.00463236043768505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004619842661313315 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 85.83064793379054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.70353551032105 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 85.91922922606847,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.67112576406977 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 0.7418758690896793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6928577707903649 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.008643484430665834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008084354591263344 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 143.85454525723918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.65654547691449 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 144.1109005665196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.4361174504326 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 6.368488419455825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1460251623790527 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.044270331591315104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025349784240419605 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 219.07139659028846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.44133417778205 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 215.86467245247533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.0036592782526 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 8.842459031378343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3940971637935302 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.040363366322604316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01631642550071564 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.906520457978197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9060343157817545 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.903912112398568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.903503191336692 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.005152860941527598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004774163278026786 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.001050206757652226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009731206450532226 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 76.33364965456941,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.32778362504928 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 76.63561411914804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 76.63143535489492 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.650344234630522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.652404800658252 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.008519758161354881,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008547409208986195 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 85.00163612888635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.77709988417305 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 84.8923441840038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.75910028164456 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.19635482992204079,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04291074200404129 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0023100123581658097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005061595886467951 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 139.94746976741942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.8986602712123 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 138.7047706420161,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.68534610332838 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 4.042212925303549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4355862435197367 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.028883787123992713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0051306609801407745 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 213.0202687759341,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.76913767762348 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 212.57084364759302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.65199759598183 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 4.364470173242896,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5778887475563069 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.02048852063853921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006817206867834546 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 810.6814822552915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 810.5884828627217 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 756.204014054516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 756.0946448321183 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 154.2535166939011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.2347941448792 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.19027635399389223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19027508705795398 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 690.7608596666723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 690.69963 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 689.5557290000056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 689.4571859999986 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 2.8767315411970373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9059988321717936 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.0041645838801364745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004207326464286356 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 2865.3342233333965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1524.965115000011 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 2701.7494600001155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1469.666504999995 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 301.35191546383425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 143.54189388763743 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.10517164560065022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09412798527370667 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 6861.032685249225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2496.207430147201 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 6920.088975844655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2500.4775668741936 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 388.03312157866156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 107.86612743565296 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.05655608118773542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.043212004792923836 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 12422.63763838855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2541.3396636432167 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 12424.142290248783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2544.954731892763 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 111.38979993853815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19.228471124576284 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.008966678670101457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007566273568095461 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 22482.827066195696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2472.2601228946537 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 23354.96129553551,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2524.6436178026142 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1827.0977544226982,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 100.12338988393093 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.08126637050773082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04049872784693106 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 14.10106353096265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.099927960494716 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 14.095151252983849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.094333680197662 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.03725661404588899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.037361745398755926 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.002642113764261975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0026497827154462307 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 14243.28888113233,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14242.010936815603 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 14231.365719448198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14230.093934789738 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 28.469410252138033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.707029964984752 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.001998794694801889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020156584693231112 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2444.832970308674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2444.6513847794376 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2442.595003851011,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2442.494390832949 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 8.061343538623507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.085734952441056 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0032972982762113673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033075206562307334 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2446.4333038602676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2446.264405827773 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2446.644575796808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2446.5064086497614 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 3.509630365991722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.4815929421391334 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0014345906591664763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014232283860423597 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2512.15322993196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2512.0027235824236 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2502.9030309920713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2502.6601786196356 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 24.744753640945788,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.73521571485446 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.009850017644670495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009846810866342934 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 5415.071064626467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5398.445923816677 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 5414.158864759752,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5412.374906126782 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 18.22019363384654,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.96351501669225 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.0033647192098490725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0066618274081490115 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 8869.920254429331,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5320.912625505965 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 8661.722263838992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5402.217099038007 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 401.15090463171197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 141.01762299608333 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.045225987734375764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026502525585575466 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 14480.417664608956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5389.152700617286 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 13665.13226851887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5388.667608024743 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 1530.1996382949399,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20.58948689417313 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.10567372252216475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003820542493036941 ns\nthreads: 16"
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
          "id": "71ad5e117a2be50d4f402a0e977d55f11dc3a73d",
          "message": "docs: update ARCHITECTURE.md for hash-based MetricStore\n\nThe storage model was rewritten to use hash-based lookup instead of\nstring keys. Update §2.2, §5.2–5.4, §11 to reflect the current\nimplementation: FNV-1a hash keys, lazy display strings, hash_value()\non generated structs, and corrected dependency tree.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T23:14:09Z",
          "tree_id": "93c0d9134602ebccdca37bf5f9f913291d96255f",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/71ad5e117a2be50d4f402a0e977d55f11dc3a73d"
        },
        "date": 1775171760244,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.551228606524989,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5509867102674306 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.5547960870359203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5546750218702425 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.007588578465673007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0074636425632459 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.002974480000053526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002925786533189526 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 2.4298287540010337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.429615278593262 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 2.432099192464006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4317849504273186 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.010985263821754118,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01093575258892703 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.004521003302667083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004501022316281608 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 13.388158338529285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.387067773529843 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 13.348514871717393,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.347568430318693 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.10963988728314923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11013052332083596 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.008189318090720564,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008226635226169265 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 68.5420885446711,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68.30031903150781 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 68.56255832785943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 68.14682047968603 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 2.3722979454929054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4231721539292512 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.034610820823570344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03547819670961436 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 112.79182168598867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.72590789389208 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 111.44291880400284,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 65.51568453323175 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 14.03458716662827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.010891046414174 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.12442912045254864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07988550847108757 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 228.84840679816077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69.50432812990195 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 215.6952061866474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 69.11156152675609 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 28.521124544409556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7988106239533469 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.12462889710901312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011492962315388312 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.5711458182377394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5709012699371283 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.57194276961154,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.57165729175975 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.003157042372156999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0031438938421587286 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.0012278737167543585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012228761481126863 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.5747525575149983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5744727989890523 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.5741139493150915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.573610415495853 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.0014859329356449369,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015443281834643127 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.0005771167917895276,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005998619150572272 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.5684378390635536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5682011104415574 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.5678330509881007,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.567751861781278 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.00647157799236615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006370828415699101 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0025196552916093443,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0024806579164681334 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.17652733014959746,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1765070841208507 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.17637412282365125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17636161070402076 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0005908314601646404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005814986294615598 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.003346968764915565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003294477569316254 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 2.421579236579048,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4213536241115947 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 2.4211290646751777,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.420938858934918 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.006298461530580258,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0064175200039791385 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0026009727187279903,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002650385280396107 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 13.308690053517124,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.307672662468029 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 13.382053056992184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.380945799220578 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.13002062310106285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1302786690871652 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.009769603362781897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009789741030720833 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 66.841722724592,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.52823723412924 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 66.94454172366221,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.6659533008209 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.37621401270254307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4351657084271398 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.005628430826845352,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006541067770902823 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 109.71549745523949,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.883943128966514 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 114.86705617187965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 66.33396489727822 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 9.248483364951648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.127687563082193 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.08429514133793853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09744439133715149 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 176.87610210989894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 65.68185740356581 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 178.65296356019692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 67.34537636872048 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 5.970973008409715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.5639947862665444 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.033757940938226656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05426147991474216 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 5.552396213374216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.55184649095597 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 5.552429919055739,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.551645830734242 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.001014463994008452,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008843010248646812 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.00018270742126883587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015928052519197336 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 5.528650829057881,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.528070189394068 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 5.5293850078435325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.528419908177792 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0018187080817069197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001816027668228831 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00032896056161623073,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032851024064654394 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 5.536973493299535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.536480268885099 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 5.5365960434461305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.536266936261343 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0013779569269402549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013117898120012848 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00024886464213848297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00023693569710227558 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 61.5064795267567,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.49858264137651 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 61.853575092354625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.84965158557879 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 0.6034424605851362,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6101683770858034 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.009811038856851256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009921665685271901 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 82.64193234777693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.47978338064202 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 83.31650484853891,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.25102374079626 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 1.8099234882520798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8123138605822582 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.021900788580735152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021972825173636523 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 140.08814684853255,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 82.46963495669391 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 138.37195420309135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.398108584665 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 5.41043872433037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6825100776317157 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.038621673896366816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020401570572189724 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 235.03139007118014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78.90756101825778 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 217.0685143978727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78.52828904720675 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 38.39702858456587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.052541795535642 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.1633697889160132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.026011978688084414 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 5.565745943734874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.564845498256973 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 5.524725557479947,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.523959888204448 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.07520754693977769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07482345366870684 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.013512572744078565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01344573783623339 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 51.609315613944034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 51.60507835972364 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 50.378852183749,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 50.37632617017544 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 2.3554441040053726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.3578610342438227 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.04563990194376785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.045690484525725855 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 82.27740180376337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.95333356391335 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 82.08448556825867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.84125145347947 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.4320174902417732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23400613573329776 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0052507429837437185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028553583552620495 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 142.51819260366645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.97470570012429 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 132.40571392975272,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.73664723748708 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 17.84276618766279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5748362902541054 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.12519641079986416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007012361744328091 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 235.12291256812384,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 80.94824247808812 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 244.3140608804116,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.61779689251716 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 15.986610447244566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.3879024292976192 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.06799256726037983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017145553588434125 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 848.6644046928872,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 848.5614495187211 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 807.2899324483368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 807.2162975902476 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 186.09284893614492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 186.06459914908314 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.21927731139317405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21927062471976946 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 698.9353183333454,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 698.85416533333 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 697.4876929999995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 697.425330999998 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 5.781609070468192,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.760280325922544 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.008272023059665661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008242464038509497 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 3049.5918516667566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1689.584299999998 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3031.9588450001334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1683.4691750000072 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 46.67246344446301,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20.15880574651662 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.015304495065119664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011931222222245226 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 7600.1060723191185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2879.7944611591447 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 7621.704358363785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2881.7360536542383 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 41.24117282427178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.103521696702359 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.0054263943728995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004550158656610538 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 12812.395167815272,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2893.3436553920087 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 13782.935934075022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3046.77389993729 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 1970.7344779499372,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 272.0867626767983 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.15381468118470315,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09403886820348488 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 27183.873124591482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3102.2919248748954 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 27205.203481736815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3112.5327788649574 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 2326.4712314907415,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 139.07195205120982 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.08558277258092904,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.044828776729906906 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 13.635201086604281,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.63414581945097 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 13.632070320410298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.63102517729462 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.02703024817695443,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027529477153289416 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0019823872053863533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020191567200355783 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 11375.707262007258,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11374.57707321563 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 11373.03568470102,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11371.904591745619 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 24.248649885117104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.62914056076816 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.002131616903161975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002077364319453165 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2775.8943753841613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2775.6363501787673 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2776.5332381689636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2776.3138246198437 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 1.2211922389751872,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.1837025114923172 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0004399274878051453,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000426461669381178 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2772.4573272682373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2772.198514342576 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2770.449386958504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2770.3700696377036 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 4.6922980665531915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.746915155429761 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0016924689950689397,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001712328727856449 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2823.73173942278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2823.5355436928007 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2825.2896094744506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2824.9792788924933 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 3.082015677659367,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.060396299127772 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0010914690069990093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010838880020349203 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 5609.330318759273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5513.461558874435 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 5541.364304365626,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5507.535848485807 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 123.75190935403732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.960898458265428 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.022061797455602505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0023507733426387355 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 9294.149540859524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5516.955087332065 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 9427.325461865208,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5543.04385678081 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 347.8405522876371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 46.550302219015606 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.037425753777517626,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008437680111970386 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 15600.450299530608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5524.881072957859 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 15291.485949851785,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5525.35889636859 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 803.4588111882167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.755329828501655 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.051502283316295784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003394702905063729 ns\nthreads: 16"
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
          "id": "5fe86644e0e12f7a7fb4636cb38a3cb5ee9a1343",
          "message": "docs: add Claude Code skill for prometheus metrics workflows\n\nAdd /prometheus-metrics skill with instructions for adding, auditing,\nand maintaining Prometheus metrics using this library. Includes example\nfiles for labels, metric registration, and HTTP handler wiring, plus\na naming conventions reference. Also adds CLAUDE.md for repo context.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T23:26:31Z",
          "tree_id": "4b626bb7f2a9c31d84c84cf956e28e6e4f68eaf4",
          "url": "https://github.com/stigsb/prometheus-cpp/commit/5fe86644e0e12f7a7fb4636cb38a3cb5ee9a1343"
        },
        "date": 1775172509049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 2.243286783321724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.243004185539181 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 2.2426927631196585,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2426087875229714 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.010994566412557576,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01109153347825014 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.004901097128686099,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004944945510917055 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 2.181421108523944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1801305495096694 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 2.1732457394817573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1731723337470505 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.016428111326422433,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017520791125875065 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.007530921591539241,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008036578878184908 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 26.61568339912442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.61412686438727 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 25.899049128628022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.895874119263325 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 3.190386716794721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.1909704921707367 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.11986867550805312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1198976208549084 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 64.1166346927797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.90017160077267 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 64.09372115943725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.93343879246739 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.04744449953754145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08798875710431647 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0007399717680891361,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013769721567266106 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 104.54668059914958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.25354891907568 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 102.32069546165486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.10329671855187 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 4.20104480105748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7231328673272097 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.04018343554268381,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027679271258368512 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 175.1525091143894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.47370312674605 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 169.99487922120863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.25931788277274 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 20.22797161305161,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.379608269103429 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.11548776386549528,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.054976487460587434 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 2.2744496408843475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2740907670039405 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 2.2741571239291773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2740117628429557 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.004101391062291939,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00406277157754074 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.0018032454922577417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017865476772034668 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 2.2808671317439893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2806582997029947 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 2.2788338442763627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.278551333768062 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.008503619285205485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008413469835692371 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.003728239653619575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036890532162525353 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 2.2704689509099913,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.27033814053492 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 2.270955837644557,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2707853507266313 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0014464093688732053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014257752534521974 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0006370531375438947,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006280012778696776 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.16460989399771198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16459911597399857 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.16459283050546036,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16458674641062848 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0009038686519858867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009038628818229753 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.005490974023702672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005491298519280971 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 2.1837005790520014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1835488949278865 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 2.1798552172513674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1796877256562004 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.008377601071284572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008443648171687218 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.003836423890550735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0038669379885656633 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 26.48854109248222,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.486399046024605 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 26.038695535235888,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.036825630980857 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 2.9005618020381427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.900721517518953 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.10950251249818205,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10951739843828744 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 64.31015227177213,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 64.23078646105658 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 64.22459964173207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 64.18610838243434 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.2154232382043735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.23392386036553903 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.0033497547524689963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036419273880036974 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 102.707483813389,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 62.104864612669225 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 101.61744232751704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 61.73855294173405 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 3.0589078228827575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.834201374800103 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.029782716013572488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029533940476957916 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 172.59885688828967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.0648379984618 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 167.0770586401635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 63.318324244335486 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 9.849264015742394,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6272568677482488 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.05706447999315017,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009946221819574773 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 4.907660091203437,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.907352593542153 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 4.907075183367303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.9065079954821424 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0037367245062094093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037680635279140322 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0007614065433967545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007678403897190164 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 4.8804872422630385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.880008084962498 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 4.876455767254583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.875948499892989 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.014043329710361216,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014180792043035378 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.002877444200396977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002905895194463465 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 4.870381858509434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.869975310122718 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 4.870112409711106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.869803215074222 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0005706751281482466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005694073477910284 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00011717256361555601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011692201942121959 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 78.33458077207699,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78.33108942716954 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 78.26152066368117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 78.25790030598745 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 0.7892308520197416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7885376149324018 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.01007512702871411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010066726004948087 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 94.64945895848113,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 94.33568813506828 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 88.51772807693989,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.25027205896136 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 10.780184501112794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.567786423787474 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.11389589142650695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11202320810610605 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 136.69430547418497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.08037123730779 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 139.40066715003408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.62666387411839 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 5.886469611565755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.4144818789167175 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.04306302000764346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04013242807078239 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 222.62381944600688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.91284193417783 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 215.65313420916573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.44524638382073 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 13.412776388026609,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.686840454614067 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.0602486132050197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06777080031534254 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 4.908599656190726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.90835295245502 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 4.909446350705532,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.909392132087508 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.002441269035497928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002514465502039226 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0004973453136311492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005122829442779907 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 75.03670025371228,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 75.0312798909059 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 75.00070807358524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 74.99192682891227 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 0.09442349004105817,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0963185125540927 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.0012583641034559854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012837114426694845 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 86.19866944924827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 86.01853066915321 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 86.07809059740049,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.85386603106178 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.2382641249151047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.34239513947974287 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.002764127641847058,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003980481145355438 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 141.14992114618923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.73170546871948 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 138.99710908585428,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 85.80731681227746 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 4.197522430430846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5556168608542341 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.02973804304207485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006480879597769806 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 204.31290892190796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.71433973271401 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 198.25334167416042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.7345356231361 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 11.609340797487162,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7147071923034413 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.05682137687112301,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00843667311293986 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 893.2631495041495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 893.185333609507 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 863.0668875449692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 862.9747107083923 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 158.70651022254324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 158.69089856287061 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.17767049979688657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17766850013263752 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 766.9595923678418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 766.8553573433986 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 768.7942345653682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 768.7228431751668 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 12.499907135599022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.513169054671117 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.016297999607786294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016317508816812903 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 3545.509156666687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1891.905066666682 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3509.343564999981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1893.2449900000258 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 63.89180632908177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.95810423834041 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.018020488315181705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015306319935683262 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 7706.849947676186,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2767.7035395506045 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 7753.6510249305975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2769.5503324099295 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 90.6950338217115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.927351182470706 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.011768106870830982,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017803030967943792 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 13418.155426443593,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2694.2579958153206 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 13776.095277238432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2729.9385742042286 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 760.0204190016639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 114.98893518566051 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.0566411995425144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04267925913712032 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 26418.422668282994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2729.461756037293 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 26651.620828578565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2728.0617156304093 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 573.7356309726823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 50.369468917573236 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.021717255347780042,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0184539932849988 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 14.076120523318359,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.0749458019773 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 14.075746873745809,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.074605448653186 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.002937731550021493,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027593871271203146 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.00020870321088505012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019604957389837092 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 11491.221798572185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11490.100838589358 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 11080.677938923016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11079.491483447971 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 767.2920260597574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 767.0274578866871 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0667720142826845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06675550272897825 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2548.3556015767904,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2548.1707958653556 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2547.110007811489,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2546.8244590985787 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 13.598735086996571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.548251724185514 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.005336278452890318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0053168538569584155 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2530.7222831122867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2530.477530346254 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2533.62137532563,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2533.309132546026 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 35.323613354470986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.35106853875245 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.013957917702068022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013970117542958477 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2558.0778596336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2557.9674844064575 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2559.7296559600145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2559.5696773242776 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 20.629057803663105,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20.671557961363742 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.008064280657437792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008081243443233332 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 5453.7859091850505,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5424.994338303802 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 5449.711074868038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5420.379388008656 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 8.697059927759229,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21.059769596153952 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.001594683046342539,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003881989230377442 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 9401.710605082748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5534.831887387045 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 9194.829163186321,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5400.579780165513 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 853.4970366471956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 343.50988668287414 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.09078103682384975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06206329183469432 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 15170.687126106175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5397.87533401135 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 15182.725756758899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5410.96660385262 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 1249.5421417835178,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.9135445222618 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.08236556006967331,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00535646763460451 ns\nthreads: 16"
          }
        ]
      }
    ]
  }
}