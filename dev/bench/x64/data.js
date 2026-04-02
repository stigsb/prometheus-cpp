window.BENCHMARK_DATA = {
  "lastUpdate": 1775154641463,
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
      }
    ]
  }
}