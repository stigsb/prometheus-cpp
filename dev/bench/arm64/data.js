window.BENCHMARK_DATA = {
  "lastUpdate": 1775154636520,
  "repoUrl": "https://github.com/stigsb/prometheus-cpp",
  "entries": {
    "Benchmarks (arm64)": [
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
        "date": 1775154636222,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.108203105081584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107433052346226 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.108280394531959,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107535904013607 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.00031289476551980307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033061993845256554 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00007616341196295097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008049308028616815 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.107787455830558,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107130440187318 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.107858920580156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107080773203448 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.00016033059061091814,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015603249804122343 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.00003903088763352307,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000037990636117733595 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 11.741570484587164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.738838520868752 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 11.321284980848487,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.314473011340167 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.7445205263807795,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7459538177308342 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.06340893897950797,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06354579427979291 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 23.93792478123312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.881186529011725 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 23.95085075376869,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.886211162687932 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.041734249378774686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009147524222676862 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0017434363989435521,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003830431210595052 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 46.90364818171225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.259356336748926 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 46.5209966139631,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.222544996309143 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 0.7405188515038432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12819501487752913 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.015788086432743022,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005075149705656704 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 81.63319554552336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.171477064762836 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 82.94379900406203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.151764225854052 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 2.6332113439071363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16375950223660238 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.03225662460363574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006505756567851426 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.126068886734305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125500235435949 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.126282230941474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125603862740799 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0003770629368311054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020249379052270666 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00009138551662174081,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00004908345145235673 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.126068424892829,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125422215959134 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.1261059676456275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125444853620164 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.0002642831319101245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011231859663577856 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00006405204778371775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000027225963975584307 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.126056424836958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125530298409403 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125943746462062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125338584677185 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0006095493142186326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004899635212970834 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.00014773169619044146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011876376752971336 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.2947073852791164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946657434417691 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.29471958729217856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946667974949883 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.000027236130856507574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000007382826542613606 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.00009241753758804628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000025054919707938755 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.0854502325742965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.0846973431639215 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.085525935359893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.084775549260889 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.005043954335743385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004632641304760605 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0012346140690998265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011341455475308868 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 11.195681229229464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.192544489650535 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 11.31525493236905,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.31086081670501 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.21361728866084284,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2115084719309249 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.019080329663471934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01889726434650329 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 23.94047049642542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.495223666000797 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 23.931540177296995,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.76342662722158 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.13458479351910824,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5883779176774009 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.005621643632242034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025042448032909097 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 44.32161974698325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.76505475062342 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 43.39823282820992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.875316315439672 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 1.8480663806391764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2546832654247626 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.041696724785536855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010283977483165119 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 83.63873225311762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.025487142254946 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 83.1727847886034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.061692675210868 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 1.1006031881744853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15815884773670388 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.01315901327681184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006319910850792447 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.310164147657572,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.309107701003215 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.310779076274683,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.309429901950478 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0014379549776099723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009892575175437697 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0001544500134266441,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00010626770570472188 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.623156372592863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.622513512494425 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.623613726348706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.62295347703602 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.002456995590673776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002343878014184328 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.0002553211748352545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00024358271995574772 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_mean",
            "value": 9.005269231078294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.004829058478506 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_median",
            "value": 9.005163874399242,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.004882133249923 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_stddev",
            "value": 0.0012714988265757844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001351925392415051 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_cv",
            "value": 0.00014119498195430794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015013337661775426 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_mean",
            "value": 9.353676050489865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.349048159772664 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_median",
            "value": 9.3465932005849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.346115043646138 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_stddev",
            "value": 0.015292413264645867,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00836124866645576 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_cv",
            "value": 0.0016349094390376055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000894342239291564 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.017284493207448,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.016868621823141 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.01721108040753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.01678741924103 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0005904797155165984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005688843465962988 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0000654830970411764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00006309112070452623 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 108.62402498866545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 108.61198365730054 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 103.47176965281972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 103.46842233167563 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 9.812371669294121,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.812317448712713 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.09033334633215816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09034286197804069 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 195.15412831379328,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 188.35624823781563 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 196.75502583401544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193.90591267266416 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 3.561001038423246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.5147247469247 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.018247121232800274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06644178180446558 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 350.38719300173756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195.07930580509617 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 346.85626108254223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194.46974803402577 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 7.031914684459025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.005198791436275 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.020068983184622715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010278890337244025 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 664.207661584495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195.48074897785907 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 665.432349013922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 196.54371064363616 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 14.540708709378373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9901612268131217 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.021891811176478912,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010180855338540448 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.445578747121278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.44425723170952 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.445552241815529,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.44405090847702 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.003147302091446314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002957271195600133 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00033320373221233424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00031312903948348223 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 134.04408752264024,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 134.02760652084314 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 132.54340075076942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 132.5260022206666 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 3.335634439913237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.3450751466471185 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.024884607009241222,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024958105523781877 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 249.77747273645375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 240.21209499475518 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 247.96407798399886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 234.5082133669956 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 4.559054862545827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.537713491587269 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.018252466135551773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05219434721578453 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 464.0841242484086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250.8448192059269 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 446.9406974737976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 249.73088793738933 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 32.72629220575419,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.322777189117469 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.07051801709173941,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009259817270575652 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 859.065540413052,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.2904553790935 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 857.7431840685318,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 251.33722246068783 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 41.23018479449516,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2347461740035294 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.047994224951301206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009341627148130018 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.199962988553727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.199486556406201 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.205690659188559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.205037334938 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.011365716546395404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011349292493925288 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0012354089424638157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001233687600317437 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 120.08632463748823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 120.07721662772933 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 115.93937486504997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 115.92197742166898 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 9.540030668790466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.542826167168647 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.07944310642855902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07947241312857789 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 212.39024376719502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 211.22137459688244 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 197.7510168872244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 197.26244488335885 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 25.62554607739666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.20567184914891 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.12065312239805755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11459859067457362 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 344.7240076553778,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184.54509194468434 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 358.63375508707605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 197.47900976809785 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 55.195559198966635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.57259754837939 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.1601152167334568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12231480832416458 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 568.114752708387,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175.15513333333288 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 553.9742893751054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167.78602499999872 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 71.03073116570074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.98507149885107 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.1250288446604744,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0969715884177214 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.54732805884773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.546595580876733 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.547549392031488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.546456421801407 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0004250530860398234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003427730708494383 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00004452063272780459,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00003590526779369017 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 99.70477616095674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 99.69705936596354 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 91.85086179521734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 91.84761188612663 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 14.03023981469448,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.032956350869286 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.14071783072904145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14075597053828573 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 194.2627058144756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 189.8486165593665 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 196.36148042176094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 196.06283377413908 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 3.8300523180181805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.931004865074561 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0197158394451478,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.057577479695019994 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 359.868562418842,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195.1358517320849 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 351.8192979365803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 196.37826130188577 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 22.4585084489014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2383111873042094 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.062407530955044935,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011470527673086633 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 660.958429374953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194.20547833333544 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 654.3369012498347,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 194.25125500000263 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 12.53559159627104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.707556475089775 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.018965779146088723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036433394215343454 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1388.767025099299,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1388.5097407644434 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1269.851009142378,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1269.5929810101259 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 292.00782764248714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 291.90075580496745 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.2102640848788933,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21022593305269976 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1154.1611882959148,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1153.9964295062443 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1173.0363994979373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1172.925025814152 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 37.76927312529444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.792525599198974 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.0327244352940508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0327492569585931 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4574.986222852106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2679.6011830361 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 4566.872792810195,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2695.310388535808 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 43.48049219567401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.23678931585308 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.009503961340580321,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013150012598489873 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8620.307950803237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3071.7843922102984 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8728.212389284412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3081.9499233520837 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 273.7228292905327,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.019456344709464 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.031753254158980164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008796013292217962 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 18317.019863427522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3600.2498236539464 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 17676.279302843726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3624.3244768399386 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 2754.26223780993,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 425.76877933800523 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.1503662854736101,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11826089860227705 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 23602.14979084721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2872.115321522347 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 24178.483103677314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2902.755741469902 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1491.4728697679293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 54.910431392921105 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.06319224659553323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.019118463308714275 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 167.03756243785514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167.02794940136263 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 167.04625387195674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 167.03471480071548 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.233405811957636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2344544155383438 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0013973252994785082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014036837330437294 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 11293.446547674597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11292.865018837687 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 11284.89900195013,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11284.334531852075 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 16.16350974233104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.329319877630738 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.001431229135773368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014459855714552255 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2312.6575734635203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2312.5357364425668 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2312.4552144319237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2312.364433366273 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 0.40081053885919143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3834997445143 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.00017331166682792686,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016583516460776844 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2174.53216263487,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2174.4064921487698 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2174.5431077848357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2174.3911312610767 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 0.8771061524037536,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8441131528426343 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0004033539569913596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003882039332988163 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2275.7349316326677,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2275.6090868866154 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2280.7372713441855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2280.5687052805447 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 9.88613350770495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.875766462248576 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.004344149826189289,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004339834341125851 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2299.035291423815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2295.1137599497174 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2299.0134429296368,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2295.9812310020284 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 2.5536427143742304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8371807001247016 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.0011107453304001849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008004747878662675 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4555.989167341816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2297.814345563865 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 4552.7203970708915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2298.158017433599 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 12.758044328328289,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.9127163710477815 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.002800279776734401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008324068368449567 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7402.203757913758,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2299.3824032001435 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7698.071595014561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2300.0768379354367 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 547.1391589440385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4515837560468006 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.07391571170397565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010661922752104357 ns\nthreads: 16"
          }
        ]
      }
    ]
  }
}