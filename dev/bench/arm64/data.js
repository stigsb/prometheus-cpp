window.BENCHMARK_DATA = {
  "lastUpdate": 1775171760675,
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
        "date": 1775157317755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.107911920878468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107648561170927 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.107359869009843,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.10719749874201 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.0009771496361333125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000916922848853957 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00023787015275740167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00022322329556659514 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.1072301204556725,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107014921046501 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.1071873418648535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.106946781966285 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.000156120627456946,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001727294358487461 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.00003801117124638377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000042057172707990366 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 12.277094366785304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.275103315366003 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 11.678967337622497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.676202948500679 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 1.0401487185833769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0395712921213371 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.0847227110510298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08468941282310832 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 24.703558478408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.296224135562117 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 24.778847827394515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.576984036712716 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.18394809625181685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5881860382040084 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.007446218584767681,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024208948473729584 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 44.58133039306886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.371074659355425 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 45.41916640939012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.39412472719908 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 1.8931102969085953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.24269981990321443 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.042464194769811545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009203258609603688 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 84.17595823414057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.725667782961978 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 83.69696032587309,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.72384694443564 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 2.766191472586177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03981741197103036 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.03286201346103892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014898565788659006 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.126530586247269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125957547773331 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.126652805404354,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.126104425302067 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0004035167857138398,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00032941794905693534 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00009778596748044566,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00007984036317453467 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.12621464687093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125539650544911 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.12625790659705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125493536175885 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.00015992400687751338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015261964975551244 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00003875804352514477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00003699386327200954 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.1265618199026335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125852124751847 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.126909887501637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125862560925188 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0006361916761599121,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003639794761045845 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.0001541699128537285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008821922480473685 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.29472698522248164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946845326564231 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.2947217125811581,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946879605469596 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.000009668257543337962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000007102317409603201 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.000032804113732713175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00002410142583860652 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.087118539021422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086286807726651 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.087798093451753,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087376141861118 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.002445117565068166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002556037376258529 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0005982497306411865,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006255159014842976 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 11.616316639031195,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.612620675427758 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 11.595915518389893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.595410212300648 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.03681872157092371,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03548798830858281 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.003169569383741799,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0030559844586739325 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 24.882459838036294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.825484314815423 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 24.882940478679203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.81512295484953 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.032464366417947206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.038689896782742594 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.0013047088844616928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001558475004640821 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 45.931242400238006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.229903774095927 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 45.55349099820839,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.08345428863672 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 0.9856802193589128,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2847289856628596 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.021459907632583552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010855128867992708 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 88.19650126430854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.525503298603127 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 86.12891008264624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.563377082152822 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 3.9109316509098004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1232789020416566 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.044343387717722095,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004647561279191587 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.312037214952584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.311467122113099 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.311595465160972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.310835901502236 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0017142211638079754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001670354409239726 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.00018408658859904524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001793868127690563 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.62239467352878,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.621807458226058 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.62158391408373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.620778255916827 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0021598075013960936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002242875717656035 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.0002244563411369653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00023310336726167945 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_mean",
            "value": 9.005054560101915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.00459911033982 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_median",
            "value": 9.005050194974356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.004648590369017 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_stddev",
            "value": 0.001083878053485183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00108314205572836 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_cv",
            "value": 0.00012036329666312606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012028764883986978 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_mean",
            "value": 9.346591491819757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.346110203459757 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_median",
            "value": 9.347385382245056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.34701633616122 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_stddev",
            "value": 0.0020560515927080486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021177066277866786 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_cv",
            "value": 0.00021997875851400244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00022658695239895015 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.016901784318573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.016459443860176 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.016711386364767,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.016324774649135 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.001066493631822479,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009896175880548107 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00011827717073254958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00010975678360408952 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 108.39597277112163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 108.38995715115611 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 109.22716189203226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 109.21727577493193 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 2.682170568551715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.6820992847387424 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.024744190212814685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02474490584951887 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 179.11230332512864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 174.7573321031695 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 178.5727136905111,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.04639832675363 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 2.06905667187772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.278399509976492 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.011551728348453666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04737082793807625 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 320.3834080569448,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.0203476298508 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 320.43417750006967,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.08144333609343 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 1.0985655741126565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8080630978932309 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.0034289090710883444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004539161442226806 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 590.4139216666533,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.3189083333331 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 588.6816293749853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.66583000000173 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 9.486703930119331,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.108494617536251 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.016067886582585542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006147411981261083 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.445618791929002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.444712189504948 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.44518609173891,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.444721006625405 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.002118853271560503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002004757840365295 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00022432127722230323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021226245968543122 ns\nthreads: 1"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 111.95643548296174,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 111.95092433986925 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 114.23670180924402,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 114.2323518593168 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 4.494952227671403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.494093332740527 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.040149118791438065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.040143423194050745 ns\nthreads: 2"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 202.97043723131023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 202.68198506125782 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 203.6804706820374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 203.3307855300712 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 1.4384272270217775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5971752765204272 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.007086880467141673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007880203443032707 ns\nthreads: 4"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 358.18838704960126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 200.0637181664483 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 358.21375759788316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 199.95974400774446 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 0.6967904322626123,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1987718933562439 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.001945318322579012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000993542933111292 ns\nthreads: 8"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 703.9089329166792,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 199.04998500000104 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 700.9669250000173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 198.68031500000177 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 41.03493557328421,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8046486451147936 ns\nthreads: 16"
          },
          {
            "name": "BM_StaticHistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.05829580170726638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009066308872692374 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.193151911452606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.192719263244276 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.19537466582363,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.195063656433662 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.004310277412219016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004243302329396427 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0004688574118795293,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000461593812220791 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 91.70044838719674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 91.69355644193506 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 94.71150096365226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 94.70554062939095 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 11.76611610304658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.76189445911592 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.1283103442784187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12827394765262637 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 177.32463870467802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 176.75945330267174 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 178.49641872120694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177.26576526675316 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 2.4612119977806275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.2121245244141483 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.013879695544619755,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012514886661401051 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 333.42914720638106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.73038684755804 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 345.55027875687136,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 174.42365097948394 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 37.63340928625417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19.125302555567888 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.11286778495990453,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11334830028480243 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 569.428398125004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171.44180333333372 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 573.396560625028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171.08361000000272 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 13.083344830072802,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5296980732348553 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.02297627739177257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00892255006359603 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.54775462393877,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.547262428585947 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.547340557433719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.54683515547408 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.003636517995282697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0034854825101363735 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0003808767755892025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003650766422529993 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 97.06089038479661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 97.05172375765426 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 99.03688858167034,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 99.0304344083608 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 4.163472031465964,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.1701201758665105 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.042895465052504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.042968017613779094 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 177.3432351683409,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177.0381466649479 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 176.88261292421282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 176.54757954181662 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.8410703260701783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9663837052783194 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.004742612963340849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005458618515179337 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 318.16544909382185,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 172.168386674105 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 312.8103959368304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 172.46173929400894 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 15.546894380197664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.8158085967034174 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.048864181904343544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016354968824987715 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 544.5589131250254,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169.87451333333308 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 534.6955875000248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.78963499999927 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 25.95244416067642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.3433956538841794 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.0476577346089972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013794863089826165 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1423.9407094484611,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1423.663892302191 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1305.5818923860863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1305.3851190906482 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 301.33681311432537,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 301.2398904170255 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.21162174177255103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21159480973412473 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1217.8617970937983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1217.6303071718387 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1209.0536114637632,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1208.838198281376 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 15.493323762384641,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15.497406525189703 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.012721742154451834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012727513789620731 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4562.106017779727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2695.04103335613 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 4596.076006382481,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2679.485315705497 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 88.31250206464823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40.37984170512379 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.019357836429156006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01498301554794468 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8802.50855556575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3101.0787294074744 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8785.302277692132,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3074.1746609630104 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 39.07002799746922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 56.14877305267058 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.004438510653053053,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0181062068886587 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 14314.883056172117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3042.565927568339 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 14297.080543238248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3031.470066518752 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 1003.7789402530685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33.754455498200066 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.07012135106617386,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011094075297548966 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 19984.2363260041,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2541.6823425623547 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 21167.899658998587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2632.681188924963 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 3519.248858043826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 289.8982086055798 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.17610124303146235,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11405760812475242 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 166.54574001941793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.5302843919382 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 166.5527200312926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.52957435624754 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.0805465313856025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0845576056836952 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0004836300909060263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005077611318112219 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 11285.411804288262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11283.357353186642 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 11296.048012790598,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11294.634001388964 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 40.73958794802378,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40.69975421373399 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0036099336607764232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036070606415952587 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2310.6921781185833,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2310.3992332352977 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2311.508831014316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2311.1229533661904 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 2.2514268520455194,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1716139225393998 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.000974351700051489,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009399301606841541 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2175.2210101751957,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2174.9385869661155 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2175.604256960903,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2175.4291279172826 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 1.7829589061007434,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8110249480692469 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0008196679315621088,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008326786599503472 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2281.7162797324077,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2281.598406152663 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2282.496642872124,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2282.340032364162 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 2.0408345784117325,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.063951562113843 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.000894429599569266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009046077331348482 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2358.132728785063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2296.7847991825734 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2305.490024627338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2299.105032880078 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 93.2913682391662,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.526474289306236 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.039561542529131084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001970787289656919 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4539.395998871772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2297.955020609059 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 4540.19069420337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2297.878273543732 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 2.7774453050886954,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2981373066464595 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.0006118534945572067,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012974027079409067 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7650.255138257134,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2294.2466040718737 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7802.982951795511,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2292.7562675442755 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 401.9766281171601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.719505981652365 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.05254421203640243,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0011853590528697886 ns\nthreads: 16"
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
        "date": 1775160476075,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.1079288290525104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107589081888862 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.10762668458556,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107377731838104 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.0008924309829013358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008341671867165591 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00021724596993740375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00020307951211443232 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.084099185103469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.083829453653816 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.082777496527503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.082532281699387 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.0036857487906000568,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036141660993190433 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.0009024630949325685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008849943760715659 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 11.498729297733375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.497215584143568 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 11.320139830099292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.319480373393148 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.33868557906591756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.33952440774904685 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.02945417448279952,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.029531011684020544 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 22.37078260870644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.324851734902253 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 22.37257139608028,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.34353850526475 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.0031478055869057823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03818344471782787 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.00014071057065659807,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017103560270517984 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 44.11544142774175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.16932873948868 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 44.0860348552313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.170019591396354 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 0.12617461054371784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0293253952658987 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.002860100827742679,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012656989589826966 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 76.45819108785119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.471846293459393 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 77.78220640051966,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.51412533694146 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 2.5904000862770813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19873860939942556 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.033879955167925524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008467105949599098 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.125904761161578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125541057540867 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.126016834799746,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125531502445151 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.00023227085357418719,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012497063798697452 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.000056295738030752643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000030291938983020673 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.125986394931473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125514062637795 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.126111938587002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125535939022974 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.0002634684684999317,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00004703035712897233 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00006385587427616994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000011399878030933625 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.126108055736027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125778891583514 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125926896503603,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.12554029526036 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0004551758972665549,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00042042656358892147 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.00011031603901739296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00010190234974699718 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.2947161444510449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946968097808995 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.29471934827760765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946969579801576 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.000014335475089812955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000013698928310392473 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.00004864163487383778,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000046484820519697235 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.086380015390981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086163065577112 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.086856950450744,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086672034734759 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.0056213010575314705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005599832606483362 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0013756187717146586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013704378696136213 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 10.982412987493715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.980503300452318 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 10.98910233467416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.988640621682718 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.013870752740060423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015905215632161317 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.0012629968255478846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014484960476726179 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 22.47456822517094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.094405634575413 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 22.372409418288047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.231282845724607 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.2517046099666826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3238831939609706 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.01119953039563981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014659058918250673 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 42.031958981820985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.28590598068865 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 41.388136790771085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.30533677102979 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 1.5419732741518997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15835536197467992 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.03668573417714864,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006800481033720844 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 78.53497427430514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.57933150455014 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 79.93692505137926,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.582808505962692 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 4.3526816181843975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02449842423316903 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.055423480537237474,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010389787440938066 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.103182084426466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.10262597558853 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.102977819561762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.10241591326749 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0015011391693050627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013747867236925022 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0001649026851690883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015103188106151044 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.549870085272717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.549262919984962 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.54995111256354,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.549341502938077 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.002018911371620058,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001880995482358149 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00021140720801359503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001969780807293042 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.169407956176729,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.168613967751211 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.16940089933727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.168344208578942 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0015659683811972498,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001410625284320054 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00017078184204274356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00015385371107144981 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 96.32343936473166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 96.3192506546357 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 95.31424200940059,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 95.3082620281843 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 13.802414892203984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.802587771171844 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.14329238016450718,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14330040648533166 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 143.7205649366327,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 140.26375127172233 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 145.17897626109092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 139.93674604538285 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 2.8367052240698207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.506669220078076 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.019737643150237693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.032129963580880196 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 288.9102417213232,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 149.893484443 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 278.9959630942341,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 140.45163989957314 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 47.47959885830068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.65510676752938 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.16434031059410664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12445575494392727 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 591.1220028931466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 172.30065013358708 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 600.5399886009485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169.3031648012337 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 121.93788571910956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.31954069305774 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.2062820959502526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1991840464121831 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.656154562239626,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.655338094096093 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.655106069184981,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.654158844281794 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0022274242311404783,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021507297609596014 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00023067404490922466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002227503314746377 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 103.19231726368291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 103.18515883913695 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 101.34841997309631,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 101.34419945043909 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 3.411759340434429,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.4095412164021575 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.0330621448466605,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.033042941976932416 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 204.0022190176065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 203.69119101385465 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 206.90489000774826,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 206.483195857782 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 5.110825833975688,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.913924705773926 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.025052795300891287,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024124384963902002 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 398.7607270595624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 211.7282527836782 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 431.17702661088447,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 217.96177982895938 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 56.4489973390047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.43351603066639 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.14156107537283377,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05400089917309222 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 579.0046795833466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187.49384166666812 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 574.5947825000286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 187.26483000000266 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 15.89017264526403,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.4585003040989015 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.027443945110596765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013112432292414666 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1425.4733679269038,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1425.35837850114 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1324.7073976037395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1324.594427392607 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 310.08975385053265,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 310.06344565365663 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.21753458242541754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21753367456941541 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1188.3977518914805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1188.2256331285382 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1182.9984625174106,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1182.8413511700896 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 27.330540687174146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.31910427461059 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.022997805779819292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022991512312927273 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4594.966777853519,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2666.7502954308675 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 4575.307325230304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2695.727213985091 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 416.90300246731084,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 147.6940223617597 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.09073036272572614,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.055383521514861866 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8418.711430047704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2975.37852735756 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8401.080945221456,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2979.459362961587 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 290.2403947176596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 94.40024657237758 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.03447563170792932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03172713848150764 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 12802.851466883889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2723.747804175659 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 13157.755048596622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2839.0416846652565 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 2699.3380899266253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 503.73195400839927 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.21083881953241337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.18494074717055295 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 19624.642587768358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2499.90802706162 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 20469.639467909,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2552.43609434997 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 2783.824296878353,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 233.54133694262362 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.14185350303467206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09341997162076676 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 154.04174777308023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.03193180875294 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 154.0106488717917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.00510695490547 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.08016411236876642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0772904681050768 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0005204051078857962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005017821123027994 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10451.20175569894,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10450.14608535951 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10482.317403281168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10481.812432626666 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 55.1162778973055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 55.575295563231926 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.005273678490346923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005318135757077314 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2190.884639983798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2190.7101830781817 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2191.9698417121044,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2191.7489177760203 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 2.2570238091403207,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.276399716711112 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0010301883394266765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010391149565537362 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2169.6271508992295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2169.481937054333 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2168.8235379993644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2168.621533893067 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 2.85662680975282,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.9034388818932055 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0013166441102881914,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013383097744687474 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2256.0990863143184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2255.9441645997936 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2253.9418899741645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2253.8755785113553 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 7.391416695366928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.270109796306726 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0032761932931952625,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003222646158707766 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2276.286502317965,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2273.0403690888193 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2269.860362062225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2267.361094539231 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 25.591370873103994,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.409609243898903 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.011242596591880701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010738748671535405 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4245.963995498635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2291.190871055945 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 4165.473265666184,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2302.2866464271333 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 291.61315017290684,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.02789956868429 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.06868008077366197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010050624703332282 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7571.872911680422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2289.0209191000463 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7579.237392292747,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2295.994064145504 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 640.565918433644,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.238819283244485 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.08459808106994278,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011899768611094094 ns\nthreads: 16"
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
        "date": 1775163116840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.107804942021127,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107342506077963 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.107354639954244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.106975831649648 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.0008253148859570665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007524058698895956 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00020091384513282027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018318556798616154 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.085966172588296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.085464580038547 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.086779155239764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.0865121285971115 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.004096080010272775,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0041976927324301 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.0010024752622163958,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001027470107791387 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 11.221958771749664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.219442564250684 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 10.944848777347884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.944502073213904 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.4853746504866298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4850421370339861 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.04325222185885405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04323228487122085 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 23.31624212785673,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.275452074359546 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 23.33320783926131,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.271979638144856 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.04636122701120054,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03744860548958139 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.001988366167968858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016089313913191451 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 43.78337073504188,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.732134347844617 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 44.45029432659458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.753305620232393 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 2.193146093535579,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.36244157272192346 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.05009084628973762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01408517334094684 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 81.79470197195457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.485446823556995 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 80.89283207094141,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.674546343033214 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 1.5935638668392615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.36282425634514354 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.019482482708790314,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013699004542465795 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.125705471207769,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125252856732758 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.125884643955838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125309641297732 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0003743106825313701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00012012772528202974 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.0000907264673020378,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000029120087774976322 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.125992519811497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.12553470963984 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.126079811683945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125582473821755 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.00020106441048828834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003620642278998433 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.000048731162144102545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008776176989950754 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.125824351427922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125309699536855 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125856648426722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125149550428126 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.00009702586596823804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00029970623489164737 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.000023516722405949737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0000726506024324174 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.29470067266760874,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.29465513625140644 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.29470763190397475,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.29465315623641525 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.0000300721078074721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000011919888942383998 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.00010204288824746004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0000404536947634053 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.085754871430594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.085107952791656 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.0847753194023495,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.084152388206341 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.002109473127345732,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018130184363619793 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0005162994828926479,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004438116341877844 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 12.162877072922328,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.160960268389085 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 12.276863458030638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.276467967498602 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.2460683441546401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2474292873215849 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.020231096859677316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.020346196505940967 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 23.288064669314238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.24680003917767 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 23.273826431369674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.24323061602465 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.04152008455189737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016296837149610954 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.001782891156541949,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007010357176964573 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 42.79047670025918,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.380350858256218 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 41.69330612514829,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.38673711023016 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 2.42893173855679,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.4512285916984853 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.05676337180282169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01777865854646768 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 83.51978921877217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.396811344262428 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 82.51150806660591,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.334375459637737 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 4.564146785009151,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20095470449667777 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.05464748926812784,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007612840122083799 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.107973040495988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.106725430985309 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.111734520067182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.110350956811354 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.006630729838617404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007074038619832108 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0007280137753082676,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007767927861054144 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.553224703379412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.551695977731512 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.553591188541594,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.551767924177577 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0006536094824047604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00037306117868103427 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00006841768122271309,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00003905706165175022 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.167924372551107,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.166399029478935 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.170496776483237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.167962806488498 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.004489125325605312,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0044713960582057856 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0004896555799528425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004878029031712318 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 106.24232657151707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 106.22168676661244 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 102.35427419628543,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 102.32760164781133 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 11.693529476495996,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.68184630363538 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.11006469694189622,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10997609489390273 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 182.61096021353978,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.34766088799657 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 185.61771944834103,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 181.5672348227367 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 12.744645619637168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.7098010748093 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.06979124147167269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04883608246636389 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 339.3207967487627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 182.91345338914292 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 329.89129270905477,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184.98918329601838 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 39.44560328461692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.939683948443813 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.11624870524462115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07074211168554681 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 554.991610208333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 171.6377966666678 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 553.4427756250083,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.12777500000044 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 41.60471714113671,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.937191643432229 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.07496458752866392,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06372251249923112 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.654670534830776,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.654158410709305 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.655659543614485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.655229896290868 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0021843297362347316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021360648965060877 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00022624591158801438,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00022125852980996898 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 105.86958003723201,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 105.85623066908771 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 106.5331032799322,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 106.50401253762449 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 2.5980049532676657,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.5941659671686708 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.024539673741541285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.024506502364307434 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 184.82190301477422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184.40246764808384 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 185.36685653444763,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 185.1187883635454 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 1.1535909487908629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.28982549612454 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.006241635487860157,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006994621669521584 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 338.5999965551992,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 182.11869129362253 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 325.2043128267069,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 182.3230294228464 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 23.643125256499502,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.1642109190688177 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.06982612373607973,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011883518949625815 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 591.346841874986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 183.27549666666638 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 585.1381618749851,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 183.48477499999817 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 17.168215487950167,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.600810853849186 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.029032395663964032,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003278184289643012 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1184.6178375178424,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1184.456322103379 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1114.9852782300081,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1114.8869043148495 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 185.12458448891357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 185.14253761648078 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.1562736763079724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.15631014344851593 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1056.4443951173637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1056.321314132949 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1056.5027383966706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1056.3825144170155 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 16.773235353055206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.815632712010608 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.015877064075096745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015919050848475242 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4276.949150225671,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2498.6080412636966 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 4236.266073500984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2473.7031489361643 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 121.55345297607248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 91.97383034386866 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.028420598119493372,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.036810027353210616 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8586.589402331449,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3056.802526778352 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 7934.568227593357,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2888.7720406482326 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 1325.5247260283472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 339.56344503011303 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.1543715046708112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11108452118036825 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 12825.413540246249,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2732.8878061456235 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 13021.818066654932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2834.316117715853 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 1735.3534016443375,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 266.0679115457413 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.1353058438387803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09735778795873619 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 21753.518719157615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2633.884791386217 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 19833.25832772613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2460.630955585451 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 5465.308862798857,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 454.2731590335408 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.2512379230853231,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17247267629897217 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 152.0150299760807,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.00756717168593 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 152.09012749177813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 152.08199488259982 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.26795454094694765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2683945497888373 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0017626845252677302,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017656657150870478 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10337.32519916892,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10336.534333855272 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10330.398372182604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10329.847499187648 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 14.18633797282711,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.86374633659164 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0013723412681229798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013412373904843216 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2189.5540716286714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2189.439659197006 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2189.508644082637,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2189.3825530212093 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 1.6577688648934068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.6543258243218109 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0007571262506708943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007555932484243697 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2153.5198436616715,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2153.394857901527 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2151.1492391243887,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2151.00005592389 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 7.684333208519269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.6956892570476585 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.003568266729065031,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0035737473918494777 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2292.537984521163,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2292.3490855857276 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2310.8409791068016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2310.704504795413 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 32.363933862352496,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 32.28956997388921 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.014117076393441863,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014085799661546213 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2354.4084832396943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2300.3115615909423 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2291.8457487053583,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2289.252142605565 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 129.1539983074234,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 40.860695820184226 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.05485624063404068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017763113702703878 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4400.050148430989,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2293.600841524071 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 4508.250236990837,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2282.2491642967907 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 272.2264954991072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 29.942004870396747 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.06186895292458889,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013054584009700936 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7944.021304721237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2313.2488525646145 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7823.768072107174,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2318.6637410419335 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 238.02390801406906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 37.061684403159006 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.029962647239202177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.016021486128511453 ns\nthreads: 16"
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
        "date": 1775166159720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.110356608442273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.10984926261271 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.108496227548685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107878024943097 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.004264558655458385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0037725179230558453 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.0010375154911618607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009179212379817512 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.107367455503177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107054100276229 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.107555988463168,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107068838397705 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.0007250439317786745,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021005434017589864 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.00017652278244724323,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000051144770691423566 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 12.482346034005468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.482862911039087 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 12.494139288469183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.49440210760295 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.028564189460539343,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027666059365909153 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.0022883670571799846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022163232555764884 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 24.130863645814298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.067288436800826 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 24.119284793395206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.074663002115116 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.039877621693443575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04295570190918111 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0016525567538218087,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0017848168488934705 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 46.152119187901604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.96617319634687 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 44.84786800690486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.530967839817635 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 2.584156568132562,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2119055394645275 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.05599215406797565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.050567336284178095 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 85.88337478763346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.726863415371962 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 86.54200799700442,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.767192751765403 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 3.1069827077381356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.1315362921184241 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.03617676547318815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005112799411055697 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.125085324720506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.1252792757726295 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.125050470779597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125329600926348 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.00038892292459213835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00009666745603886713 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00009428239514499977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000023432948311302425 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.1254522379097756,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125431919067443 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.125349800845521,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125431557564162 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.00018312647729246695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011785836271751724 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00004438943095975601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000028568732930189577 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.125432917004467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125303937685625 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125407169857294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125271721830533 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0000477684636083398,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00009828617738254644 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.000011579018388941623,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000023825196607861793 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.29472528836843764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2947218389314816 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.2946950647972025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2947052926417404 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.00007318746012713349,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00005643345975773518 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0002483243312180306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00019148041408242954 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.087503145882638,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086697859155863 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.088048137043885,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087208428428219 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.003371668975913991,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003628226446836647 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0008248725091038253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000887813724400483 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 11.456971592317693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.455695992219248 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 11.359329756716164,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.354163360472624 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.1741679797056567,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.17628408938710582 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.015201921232172951,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.015388335157186316 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 24.030626354232812,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.961665869510302 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 23.9851186865299,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.90757895798444 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.10170306802322698,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12600633421634463 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.00423222709737288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005258663354315431 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 44.15096360056319,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.72759840084916 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 44.03051068375692,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.084423051444677 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 2.7823573854691364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.298398102192929 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.06301917690044809,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05250805521608363 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 82.7502295600695,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.28170784621194 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 82.82579675003427,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.261441173087395 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 0.4028262252306065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.050226190379335435 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.004867977132778701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0019110702650389094 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.184538009358597,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.185220646714818 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.181429158990161,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.181507768679156 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0073318311381138125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007820731100635395 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0007982797970505466,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008514472761666923 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.547981178300722,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.548657001435496 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.546375082276738,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.547126197634103 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.003270956052052004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0032246921168218694 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.0003425809069969432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033771158774863164 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.152776821081963,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.153290474118736 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.152359415631912,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.153005953164394 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.001024918727825279,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006869555406226435 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00011197899258993645,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00007505011914185785 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 116.26443779070416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 116.27248237595761 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 115.68901504510927,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 115.70248813589389 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 2.756711602246176,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.751306957992846 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.023710703415680108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.023662580360989616 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 195.82088177207356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 195.0790860588538 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 202.24726734501522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 200.9393678967496 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 12.143497444430595,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.027352390608762 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.06201329160883396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06165372533568365 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 353.5894107325082,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 189.57433992819347 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 358.2595422716938,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 198.8111912144902 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 18.571092010730915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 19.677126638492624 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.05252162945790257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10379636107896187 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 694.1546637395385,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201.61293813817375 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 694.4643406281793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 202.16478697677164 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 1.7030656871676895,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.0264301524909982 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.002453438370626169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005091092674754548 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.620728459827218,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.621868898107069 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.621316704366714,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.622413258304126 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.002089991286402727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0020764602882359004 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00021723836143279545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00021580633764864613 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 110.96477131789851,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 110.97590880546794 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 111.3627529173611,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 111.3747141329889 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 3.5258435554619214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.5272478141809924 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.031774440785002606,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.031783905643557125 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 175.45367459731244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 172.3954033413161 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 170.16679131666544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 169.9350147048464 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 11.838755459260183,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.150958549659653 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.06747510695590486,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.041479983868838236 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 344.1295760335868,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.39544617251525 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 325.73868741633805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 177.6927998210654 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 40.75603101978921,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 15.936794426606037 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.11843222395918522,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08834366257430581 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 606.4209402083401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 193.73166499999866 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 600.5181406249704,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 192.96903999999884 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 45.36567709765712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.5027818984258567 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.07480888948536545,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.007757027734345169 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 1302.9832725872757,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1303.025576259576 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 1233.5760352182485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1233.6734366947576 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 215.67759492894177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 215.67020479317046 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.1655259890640656,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16551494362241645 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 1125.1925512515702,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1125.224869199444 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 1118.2571839780805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1118.2799953887481 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 16.18585232125169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.165544554525834 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.01438496220335613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01436650130744713 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4972.66373333313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2744.4921599999993 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 5167.1543599997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2837.3822400000026 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 354.8334363630613,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 183.73579988104674 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.07135681304660023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06694710320507775 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 8381.118979428002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2721.1541286020665 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 8498.148547424873,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2741.6168962782335 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 249.4794974249444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 49.98696283548468 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.02976684832148404,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01836976535436616 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 13889.419266713665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2532.3866283249918 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 14775.76998562179,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2655.043421998645 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 2556.7127465500175,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 326.47388699567404 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.18407628839293827,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12891944829594018 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 17772.669705253928,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2053.067000911577 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 17569.73943139879,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2059.874430264397 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1200.6064119025953,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 117.19111104170919 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.0675535207604558,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.057080996864532656 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 30.546680550686016,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30.5490070653002 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 30.556234871637717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30.558312079536915 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.026067411972125764,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02586193288708155 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0008533631642519122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008465719632654587 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10549.762299629672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10550.208395121512 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10575.10686075712,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10575.566141088855 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 57.65695967524977,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 57.51652735152516 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.005465237797563808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005451695852578722 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2165.839196994114,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2166.0236906388477 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2165.6724972053166,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2165.808346789218 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 0.5314843192582014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5221091682376111 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0002453941733051227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00024104499433412016 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2194.4954621094125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2194.6923071305314 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2195.1175041861707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2195.3051910045588 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 1.7164931619759571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7223349100112533 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0007821812309996823,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007847728378212315 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2293.388607448012,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2293.5873879438213 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2296.489270203027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2296.693225049771 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 9.217609848251604,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.192833405083265 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0040192097485426065,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004008058926991463 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2446.3778787137985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2440.3257720216193 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2335.247978734277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2330.4056564917046 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 192.93647900862172,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 192.44618261074137 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.07886618035888204,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07886085735648103 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4416.8051016323825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2320.423733247156 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 4551.7543853571915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2316.858145224582 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 267.4787217895832,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.368441254328088 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.06055932187062708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00533025114211357 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7561.282457776072,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2323.01682036404 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7758.8609341002075,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2323.052740648634 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 377.2580932516294,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.063867690122782 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.049893400406389364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005193189986559053 ns\nthreads: 16"
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
        "date": 1775168579182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.108328468276923,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107666713417141 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.108301736951515,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.1074154420862286 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.00019919369327137899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006151479933132195 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00004848533772542364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00014975606256075285 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.090425727760333,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.089509292366622 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.08924963830225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.089287283532982 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.003752914075975182,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003551191630820644 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.0009174874024738858,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008683661967584255 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 12.204146426002355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.201408486978787 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 12.388131183634767,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.384229940066026 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.32777098554634315,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.3297882013353145 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.026857346192437417,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.027028699324939492 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 23.488950109652535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.614652699809067 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 23.762062624762137,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.729932674449046 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.5251201058950217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.046802762017313 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.022356048416111586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04628869502940237 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 45.457786452991144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.587140662007425 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 45.52847085473794,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.723872786992526 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 2.063604264098786,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.34257996392922924 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.045396056982070665,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.013388755252278053 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 89.54658729951224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.83105441706458 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 86.91385995110694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.785030721364546 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 5.2028493137658405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10864862371200386 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.058102150742646796,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0042061242238810095 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.1260184848576085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125718622634232 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.125883454421808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.12565333431533 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0003355146897647063,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011818224961174645 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00008131681692557544,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000028645251996436 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.1262645698548726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125841291627995 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.126188021647973,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125406024136035 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.0009289502445167432,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007725991798230592 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00022513104256652547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018725857957522236 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.125660262896821,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125432197497273 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125506140069855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125318249276513 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.00045732790544317426,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00030791727141393093 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.00011084962801131444,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0000746387909612795 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.29470788909511453,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946807703924312 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.2947106369286803,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946753990463705 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.000036785110994094986,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000020794951302627975 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.00012481888797426425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00007056772409999809 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.0887740843711,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087988704703875 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.089218573426762,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087931535143439 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.0015061342246874942,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008794669096669861 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.00036835838655026955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002151343785894078 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 12.484783104580883,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.480956991912821 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 12.550748840213275,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.551216684064151 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.12575452895825856,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.12599425077506676 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.010072624242235899,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.010094919072047613 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 24.1234313541691,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.621408846399888 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 23.81439318230547,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.681864709978736 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.5824382672356726,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.20548086232018933 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.024144088736157907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008698924931037992 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 46.332458306650295,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.111578622008818 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 47.34021000141152,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.090083634042198 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 1.979878817439273,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05722266233617754 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.04273200451259226,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022787361638039456 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 84.0997811615617,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.58663192674059 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 84.064605220027,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 25.64318647159432 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 1.1985486466418527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.21606415614855778 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.014251507317710558,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008444415692037573 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.134708402494713,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.133706219422816 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.134026476140633,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.132282078281536 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0032531526786439696,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002697589567493906 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.00035613098254515984,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002953444639764616 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.553514765523467,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.552781245915243 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.553800707595414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.553147076937227 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0021791827493733854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0016450207127597456 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00022810272479376664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00017220332701150824 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.07898864307852,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.077843305994977 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.078541270016286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.07751245109646 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0007874899153788724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009755524427262316 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00008673762533883386,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0001074652216217458 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 109.11221118582206,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 109.10900653132218 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 110.15342528207145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 110.15176872371778 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 8.094820149693374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 8.103767812780642 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.07418803140106472,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07427221702778748 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 188.97667175954766,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 184.296891986185 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 189.9240591089078,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 189.55136020718717 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 23.561661179571356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 30.0455340238268 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.12468026323138452,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16302789320006023 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 325.4152600541155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175.57625558660416 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 336.2489801080047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 170.85487682523373 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 60.78176825854491,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.25146998034615 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.18678216949148943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.195080307789406 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 551.1326252081734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.43018833333355 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 560.0573318748303,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 168.34304500000104 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 117.20674828628535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.35331193448737 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.21266523324039124,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.14458994658541074 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.639035589776972,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.639248697651036 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.638298554039006,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.638593122332884 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0019417322153136808,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0018154026237351022 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.0002014446567012425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018833445226675117 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 88.55388327890563,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 88.55372524322496 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 88.99851150673203,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 89.00316586875573 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 6.252710981168959,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.256760219857575 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.07060911108184473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07065496344363292 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 160.4253950954723,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 156.55452705141107 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 162.47857050668932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 162.19332304260018 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 6.59811352886798,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.701420031009008 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.041128859461067944,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08113096612554663 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 301.3638167092055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.15144562067454 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 282.59215459305636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 163.87091102783782 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 33.43818835653861,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.995711849635231 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.1109562147230305,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03608582415420869 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 506.95363333334836,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 161.86241333333462 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 506.4445187498734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 162.63688500000373 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 1.3097125529377969,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.4627953626282322 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.002583495741663997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009037276366414944 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 890.0790950776781,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 889.6128984632743 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 876.3921227394945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 876.3184077996156 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 42.83552782938508,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43.290670336232786 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.04812552959200416,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04866236810528883 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 905.5282134081609,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 905.4697831006579 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 896.5643191000339,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 896.500177468246 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 42.009107743393834,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 41.99614972671662 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.0463918264736148,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.046380509333957584 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4169.028648333324,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2284.107279999999 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 4244.371350000051,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2318.22096 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 160.59821649179642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 83.15148548760654 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.03852173492643177,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.036404369538897745 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 7032.385361935559,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2342.839297372919 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 7020.448717550068,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2337.498461060145 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 85.0833306672667,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 34.54860045046864 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.01209878672573893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.014746466174273581 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 11298.673833671257,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2148.7724678837335 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 11620.70224137658,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2135.7234077079415 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 600.671518854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 60.767506086576056 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.05316301078308277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.028280102707395675 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 14104.081514999458,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1672.6099677659338 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 13451.130098559015,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1609.3787503099545 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1495.2790410576245,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 111.58251359105948 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.10601747015340346,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06671161582284343 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 27.415729072348373,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.41544936631907 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 27.44928286348262,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.448572945478855 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.06313269877365035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0625824072336916 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0023027911680571092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0022827423471152904 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10495.191089054682,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10495.09714644466 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10494.838069328214,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10494.502219764092 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 3.202923081785023,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.916995768020574 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0003051800633840117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002779389011190565 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2191.655444647274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2191.709657785317 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2192.0780905966553,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2192.093033453083 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 0.7420047020608985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7505380101974528 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0003385590120349949,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003424440858447728 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2065.7046966101793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2065.7260336879594 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2062.021795317243,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2061.9487439138456 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 7.175364073830721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.2344648453335205 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.00347356719748253,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0035021414879579963 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2159.115816245652,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2159.147386413421 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2160.545971478902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2160.6392565578794 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 2.6007121342515496,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.694613380465659 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.0012045264615650683,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001247998815375779 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2236.2645974513875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2184.9147009327785 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2225.275181143246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2170.1793292434572 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 66.16237047358844,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 33.50839349625444 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.029586110046634004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01533624790109615 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4089.2268866688196,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2221.5396207715708 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 3968.5838835210093,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2243.7174587906015 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 307.5030120447731,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 39.20109818964366 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.07519832490763853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.017645914492413414 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7030.67784590504,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2172.8486672162644 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7018.423176009122,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2167.3877988458416 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 424.1927186441813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.360096430782201 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.06033454070026104,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006148654819987272 ns\nthreads: 16"
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
        "date": 1775169061578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.108230330007033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107522457209971 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.108128455568672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107347151975186 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.0006477130528534092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003292695807266944 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.00015766230245719943,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00008016257589747917 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.086011927301225,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.085290441808334 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.087946792996143,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087565567354766 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.006447370148706561,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006216391395385594 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.001577912708875765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015216522506619967 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 12.995563435549014,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.993817364946102 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 13.18526920778236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.184341020527178 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.3572876813835169,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.35869842201973595 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.027493050467220687,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02760531504678601 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 24.322302778913524,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.27904684342073 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 24.30450098283117,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.25904318818436 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.04689922346941306,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.049031439168928735 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0019282394391567578,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.002019496048800431 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 44.98588499485129,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.89393421271764 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 44.885508425890805,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 26.942903990609963 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 0.6128752357647685,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.16979177956205785 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.013623722992999092,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006313385695788848 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 86.84022151404962,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.57514912571773 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 86.69546663156365,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.42366936587125 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 1.6052800768541176,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.35010392845779953 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.018485444289135126,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.01225204204245796 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.126808469127224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.126144804729476 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.126814740677181,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.126081381910143 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.0003150684322554705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00027458952012825616 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.00007634675430481127,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000066548687242754 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.126167925885574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125597947176028 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.125881930605291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125398632433034 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.0006291308519457511,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00040630377937386905 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.00015247339983399355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00009848361003087659 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.126192267323212,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.1255449019171255 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.126323269238408,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125545750614328 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.00023297138150359968,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00002419905109666244 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.00005646159131957643,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0000058656617906200045 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.29479764717171125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.29472236985647643 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.29477351655289735,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.294741991481175 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.00004818740692937141,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000040354551949689655 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0001634592656748838,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00013692395310658457 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.087877749368684,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.087159449183699 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.087138166935391,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086096899395626 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.0031417353704686155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0029690067590371415 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0007685492480673653,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007264230319250503 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 13.012648658799527,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.011137668956819 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 13.263956961455781,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 13.261566808069363 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.6253056169493976,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.6252942329993431 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.04805367710643197,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04805838266481709 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 24.309034520344806,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.262354525315335 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 24.33006772496037,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.253554020912656 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.038037174051108694,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.018880713817233434 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.0015647340505964761,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0007781896764196278 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 51.05736591778989,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.08016371096171 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 49.04846362813108,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.75217527735032 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 3.5061967089190915,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.5946636737829117 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.06867171163049422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.021177357792638924 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 91.78457949151074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.579814124431138 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 92.85491672054542,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.566587750744308 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 3.8977576373318574,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2752355742561679 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.042466366996782565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009630418625462153 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.131739680948476,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.130241796902947 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.130598372816609,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.128828623277018 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0026876645576574057,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0025667933344601045 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0002943211974455067,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0002811309263825611 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.554083224962094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.552445694368847 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.552587017663697,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.550809759698867 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.0031515670345175356,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003036941718686017 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00032986598089112195,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003179229503996333 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.078109747885144,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.076743632998747 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.078139088959224,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.076845609225131 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0017527773989691596,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0013426553027129778 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.00019307735284622337,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000147922576311588 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 125.51299904131086,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 125.50315505396156 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 123.80798052956364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 123.79903196322897 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 4.474624259224249,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.477499992913978 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.03565068394032627,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.03567639388020822 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 202.20075805428462,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 197.67728018153727 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 211.72291569337924,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 211.2108107206194 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 38.08969179838535,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 44.90648113480597 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.188375613251457,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.22717067481688352 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 371.6494300435304,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 201.0766473530176 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 372.3363479282145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 208.48587742158597 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 20.805241009424854,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 20.716379604539096 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.05598082312944213,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10302727779307289 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 719.7139131086601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 206.88437718472616 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 773.4368441188552,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 221.06378721291432 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 108.1809237258816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.973877573216768 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.15031100796511737,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.13521503147740835 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.641207075206848,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.640106965635278 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.641602855987575,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.640582512059323 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0010820674643713922,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0010258600345928643 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00011223360891749924,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00010641583524434063 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 105.50980009043269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 105.50150017483979 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 105.53926359520706,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 105.52656118537386 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 2.3492162543574158,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2.350982215509192 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.022265384375137635,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.022283874746928566 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 179.00063184960473,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 175.65327652520992 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 176.10644070153492,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 173.32537778207026 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 6.799742070932244,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10.023968405014633 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.03798725178045934,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05706678863787653 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 355.56430725443033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 197.79471091038639 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 327.51942238174246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 192.42847123162892 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 52.686142597590674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.180116377730593 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.14817612882580528,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06157958583255021 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 688.2848125264045,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 209.32486103025875 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 686.5780741705345,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 209.6882212443911 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 35.57333784562765,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.293722932933627 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.05168403718665949,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.006180455233870256 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 881.5909795116125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 881.4909446081834 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 854.077451346825,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 853.9832330454542 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 72.37180253837971,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 72.34013683392568 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.08209226752577772,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.08206566077213688 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 885.4758545519804,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 885.3546632486997 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 887.8099638864534,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 887.6845049816998 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 12.127837013425,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 12.1483520448138 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.013696406232964146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0137214525987099 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 4015.337241666733,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2197.4284399999924 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3956.575364999822,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2153.7723999999803 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 226.72780848049274,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 120.84889569479286 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.0564654460720664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05499560008188174 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 6760.932855163982,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2278.2487822317657 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 6781.768274903592,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2291.1200563077973 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 199.13637655434096,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 49.46194157897609 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.029453979328051026,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02171050938981445 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 10408.348458821263,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2039.8949081440808 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 10207.373725227664,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2027.8243888326276 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 866.5282984355298,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 91.63597813636873 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.08325319832092395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04492191130558788 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 12117.064650663548,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1554.067043196311 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 12852.94797223382,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1637.726859115186 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 3537.352913027291,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 354.5588269771197 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.2919315044533975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2281489904373009 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 27.074436420520254,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.072828546813568 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 27.06316141451374,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.06134246273483 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.035033589802756344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.035091065194685515 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.0012939730031168327,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012961728448140186 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10346.248234107288,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10345.513939178045 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10322.27828396931,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10321.247225025212 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 42.86468136631897,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 43.044211104588385 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.004143016907811268,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0041606643572903316 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2189.059142078389,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2188.930203961278 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2189.1287509486383,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2188.9691517193182 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 0.26881387531577344,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.24875737600504366 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.00012279881806233418,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00011364335672049789 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2065.3731798499607,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2065.174681146973 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2067.3935874291587,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2067.2859349569403 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 5.8448226654675155,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.943659221030429 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.0028299111862642246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0028780418795999337 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2240.009638287127,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2239.7356782506354 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2189.4748556398335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2189.248642092505 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 91.96078011197488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 92.1021102912776 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.041053743046523115,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04112186593518693 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2222.3638386704506,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2215.5004390495974 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2206.8699509294815,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2201.6330836776974 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 34.72405176971464,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 35.91775505276265 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.015624827566708707,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0162120279552599 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 4025.018066303615,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2194.0076337022692 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 3874.709006341119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2194.1370467020324 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 262.3478137382624,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.3209549397593316 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.06517928849427256,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0015136478509673184 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7838.815490409156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2284.924604384802 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7582.6137097137025,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2194.413439056603 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 572.4958352527739,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 166.24579676234188 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.0730334622562843,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07275767281043492 ns\nthreads: 16"
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
        "date": 1775171759934,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CounterInc_mean",
            "value": 4.10817027287173,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.107475298540865 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_median",
            "value": 4.108301537798469,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.10740569033899 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_stddev",
            "value": 0.0009360506360684451,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006802525167756056 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_cv",
            "value": 0.0002278509832588119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00016561329462340475 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_mean",
            "value": 4.086572704112414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.085913390904177 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_median",
            "value": 4.085480818234882,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.085181085544649 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_stddev",
            "value": 0.004943734786435591,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.005074703483966377 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:1_cv",
            "value": 0.00120975084609668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0012419997680967459 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_mean",
            "value": 11.660130820506708,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.657913811823086 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_median",
            "value": 11.656067024229701,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.655492229067567 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_stddev",
            "value": 0.011703780749142955,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0109590508635498 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:2_cv",
            "value": 0.0010037435196318277,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0009400524862720705 ns\nthreads: 2"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_mean",
            "value": 22.61564009477308,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.527930084154672 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_median",
            "value": 22.629584899555727,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.561642947909206 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_stddev",
            "value": 0.047337815935129236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07537458871243674 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:4_cv",
            "value": 0.0020931450861773285,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0033458284196936717 ns\nthreads: 4"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_mean",
            "value": 42.97526859280628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.890108306657268 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_median",
            "value": 42.54152067037693,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.750529639304933 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_stddev",
            "value": 1.7654191010346956,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.27848965250026747 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:8_cv",
            "value": 0.04107988521868629,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.011657111341879642 ns\nthreads: 8"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_mean",
            "value": 76.85145254942326,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.00803135348914 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_median",
            "value": 76.92324740650709,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.97610453658982 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_stddev",
            "value": 1.1613411718534488,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07427272742797744 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterInc_MT/real_time/threads:16_cv",
            "value": 0.015111505811898468,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0030936617140490037 ns\nthreads: 16"
          },
          {
            "name": "BM_CounterIncDelta/1_mean",
            "value": 4.128762935844866,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.126516508590887 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_median",
            "value": 4.125943341335526,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.12540397127936 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_stddev",
            "value": 0.004980447022998471,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0021040446389804625 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1_cv",
            "value": 0.001206280694820112,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0005098839746793953 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_mean",
            "value": 4.125848976550793,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125406022012686 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_median",
            "value": 4.125873289775541,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125332463456252 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_stddev",
            "value": 0.00009859331462471443,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00018192838180526238 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000_cv",
            "value": 0.000023896491409421004,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000044099509438468304 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_mean",
            "value": 4.125617399665438,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125091999757937 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_median",
            "value": 4.125666198308893,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.125053910327909 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_stddev",
            "value": 0.0003555648518456498,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00009188530170197942 ns\nthreads: 1"
          },
          {
            "name": "BM_CounterIncDelta/1000000_cv",
            "value": 0.00008618464035818831,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000022274727862401932 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_mean",
            "value": 0.2947283858608571,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946635179995662 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_median",
            "value": 0.29473205176153655,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.2946574419397021 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_stddev",
            "value": 0.00005768159441745503,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.000015602406739738252 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeSet_cv",
            "value": 0.0001957110247422412,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00005294990993680196 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_mean",
            "value": 4.087925033131423,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.086836812610341 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_median",
            "value": 4.089917302830584,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 4.088367389254712 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_stddev",
            "value": 0.0035016092953418835,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0027292346855795524 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:1_cv",
            "value": 0.0008565737548908983,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0006678110261604349 ns\nthreads: 1"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_mean",
            "value": 11.464719366611156,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.462479797214662 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_median",
            "value": 11.604857253405813,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 11.601491136482784 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_stddev",
            "value": 0.2901929230597266,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.28904970060101953 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:2_cv",
            "value": 0.025311820881098845,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025217030321070446 ns\nthreads: 2"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_mean",
            "value": 22.754037106940945,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 21.950434858363398 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_median",
            "value": 22.72261194928721,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 22.199638101778365 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_stddev",
            "value": 0.5181312259766395,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.8855451090233118 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:4_cv",
            "value": 0.022770958117959098,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.04034294148327124 ns\nthreads: 4"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_mean",
            "value": 42.291156440703816,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.88322331791326 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_median",
            "value": 42.332338622588246,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 23.954295889447007 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_stddev",
            "value": 1.548703178287705,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.19474546391601708 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:8_cv",
            "value": 0.0366200243414751,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.008154069545962461 ns\nthreads: 8"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_mean",
            "value": 80.0553240874341,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.063690812940795 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_median",
            "value": 80.67513449357884,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 24.1064774080431 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_stddev",
            "value": 1.1134124377615313,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.11302073022631597 ns\nthreads: 16"
          },
          {
            "name": "BM_GaugeInc_MT/real_time/threads:16_cv",
            "value": 0.013908037353586809,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.004696732978531145 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_mean",
            "value": 9.140464742557421,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.139338897365434 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_median",
            "value": 9.141031250314999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.139827053355942 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_stddev",
            "value": 0.0035502709195446586,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0030363103311309386 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_cv",
            "value": 0.0003884125172558047,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00033222428506357344 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_mean",
            "value": 9.553080411517849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.551686422372203 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_median",
            "value": 9.551653912966703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.550615671945701 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_stddev",
            "value": 0.003175103800609223,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003136322507645536 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_cv",
            "value": 0.00033236439596814237,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0003283527503896654 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_mean",
            "value": 9.079463406864724,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.07835566304478 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_median",
            "value": 9.079860757227916,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.078546868454444 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_stddev",
            "value": 0.0008272146222732035,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0004201048740402835 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:1_cv",
            "value": 0.0000911083161200661,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00004627543683383131 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_mean",
            "value": 106.50582457108521,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 106.49110592445811 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_median",
            "value": 105.46414346860364,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 105.45247209344952 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_stddev",
            "value": 5.909647116872773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.921299307712066 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:2_cv",
            "value": 0.05548660968235119,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.05560369813336783 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_mean",
            "value": 173.3562344193601,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 172.65741470476428 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_median",
            "value": 181.60102329128608,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 181.14130307196987 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_stddev",
            "value": 15.805679577727405,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 16.414337265857238 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:4_cv",
            "value": 0.09117456681420773,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09506882339183027 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_mean",
            "value": 343.62959933267217,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 188.43463743463704 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_median",
            "value": 322.3890888811348,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.27642458892407 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_stddev",
            "value": 60.44663380309931,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 18.069114173979386 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:8_cv",
            "value": 0.17590636522722872,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.09589061979248417 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_mean",
            "value": 540.2137199999639,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 163.4106100000004 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_median",
            "value": 506.00829624983135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 154.03604000000038 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_stddev",
            "value": 88.2948559146145,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17.172091336087977 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_SmallBuckets_MT/real_time/threads:16_cv",
            "value": 0.1634443048107338,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10508553475253495 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_mean",
            "value": 9.635452862206227,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.63400844815286 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_median",
            "value": 9.634714108449316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 9.633400897959406 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_stddev",
            "value": 0.003619933609229096,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0036504852937190983 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:1_cv",
            "value": 0.00037568899573239573,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00037891655517688594 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_mean",
            "value": 99.51646820674507,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 99.50786783860131 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_median",
            "value": 100.67252141042354,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 100.66540009097984 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_stddev",
            "value": 5.435215515550187,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 5.440026420795541 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:2_cv",
            "value": 0.05461624205009514,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.054669309462233646 ns\nthreads: 2"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_mean",
            "value": 182.51757421556238,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 181.78979371888124 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_median",
            "value": 182.19385499731422,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 181.17081402932732 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_stddev",
            "value": 0.7991544492566125,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.2133393316858327 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:4_cv",
            "value": 0.0043785068516896414,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.00667440843000314 ns\nthreads: 4"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_mean",
            "value": 321.0163722138839,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.40581665260677 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_median",
            "value": 320.08557972418254,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 178.75172385528865 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_stddev",
            "value": 1.6361114427208021,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.7835670307237856 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:8_cv",
            "value": 0.005096660433352316,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.009997247086381502 ns\nthreads: 8"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_mean",
            "value": 589.8096452082768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.72417000000027 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_median",
            "value": 589.4462618750396,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 180.97206000000264 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_stddev",
            "value": 21.244903435944135,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.9881224213070398 ns\nthreads: 16"
          },
          {
            "name": "BM_HistogramObserve_LargeBuckets_MT/real_time/threads:16_cv",
            "value": 0.036019932207860074,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0054675720536275715 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_mean",
            "value": 796.9303113689754,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 796.8375114580725 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_median",
            "value": 750.1040425088268,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 750.0208011612694 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_stddev",
            "value": 81.71908534817565,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 81.70678432985616 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_cv",
            "value": 0.10254232293887497,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.10253882774713645 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_mean",
            "value": 774.0156584470292,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 773.9275937283952 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_median",
            "value": 765.2818427891699,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 765.1815566805863 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_stddev",
            "value": 17.629827205750193,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 17.63498437021071 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:1_cv",
            "value": 0.02277709373622021,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.02278634915348372 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_mean",
            "value": 3510.1672416667875,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1957.62641333333 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_median",
            "value": 3702.1637800000917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2034.7438800000075 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_stddev",
            "value": 332.75418477361296,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 134.37983474560983 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:2_cv",
            "value": 0.09479724522060269,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06864426932041431 ns\nthreads: 2"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_mean",
            "value": 5926.696394893297,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2060.7056820929506 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_median",
            "value": 6293.041106919311,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2135.552763673294 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_stddev",
            "value": 686.9284886541124,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 151.27744328908383 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:4_cv",
            "value": 0.11590411299725094,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.07341050427707818 ns\nthreads: 4"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_mean",
            "value": 9679.467445160748,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1976.6038656235762 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_median",
            "value": 9667.108628623717,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2001.758306488695 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_stddev",
            "value": 418.44458410585617,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 84.6088442982784 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:8_cv",
            "value": 0.04323012464028252,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.042805159784298066 ns\nthreads: 8"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_mean",
            "value": 15541.57301485062,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1801.9461734542754 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_median",
            "value": 14996.217710742761,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1833.117197225649 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_stddev",
            "value": 1279.355229739932,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 120.38551015644862 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_NewLabels_MT/real_time/threads:16_cv",
            "value": 0.08231825880928878,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.06680860501269763 ns\nthreads: 16"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_mean",
            "value": 28.238544136328642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.237281924658078 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_median",
            "value": 28.65381639510902,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 28.652319146137334 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_stddev",
            "value": 0.7287825965039002,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.7286639893258436 ns\nthreads: 1"
          },
          {
            "name": "BM_MetricFamilyGet_ExistingLabels_cv",
            "value": 0.02580807965826849,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.025805032908976313 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_mean",
            "value": 10471.573098192519,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10470.997038342279 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_median",
            "value": 10476.25137754411,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 10475.895650096327 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_stddev",
            "value": 14.888172043430641,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 14.783206460893263 ns\nthreads: 1"
          },
          {
            "name": "BM_Serialize_cv",
            "value": 0.0014217703399311097,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0014118241469041302 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_mean",
            "value": 2188.9307573522055,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2188.8070754559726 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_median",
            "value": 2188.521809667855,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2188.389041712511 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_stddev",
            "value": 1.8415157028755906,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.801860789806011 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_cv",
            "value": 0.0008412854982690917,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008232159014885527 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_mean",
            "value": 2063.3793879541768,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2063.2896574344727 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_median",
            "value": 2059.934870293286,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2059.8585059261127 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_stddev",
            "value": 7.105555497642219,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 7.096978852155893 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:1_cv",
            "value": 0.003443649548465886,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003439642527448322 ns\nthreads: 1"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_mean",
            "value": 2169.725249887975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2169.607178135632 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_median",
            "value": 2173.34046857501,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2173.2495499229635 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_stddev",
            "value": 6.555697153465041,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 6.59168748642604 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:2_cv",
            "value": 0.003021441149658703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.003038193988688014 ns\nthreads: 2"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_mean",
            "value": 2197.274298375846,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2189.221352547926 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_median",
            "value": 2195.2587214096734,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2181.3009425465343 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_stddev",
            "value": 27.74299647887401,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 27.583500994118577 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:4_cv",
            "value": 0.012626096113435056,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.012599685711093357 ns\nthreads: 4"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_mean",
            "value": 3943.0419889123496,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2170.123537080179 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_median",
            "value": 3955.884634399703,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2169.2673023685115 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_stddev",
            "value": 340.1409033724198,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1.8147362502831825 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:8_cv",
            "value": 0.08626357627661085,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.0008362363797615148 ns\nthreads: 8"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_mean",
            "value": 7384.493645563248,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2174.2322920506263 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_median",
            "value": 7390.215519027043,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2174.934896793227 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_stddev",
            "value": 65.63707058515628,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 3.9120590170010523 ns\nthreads: 16"
          },
          {
            "name": "BM_LocalHistogramBatchObserve_MT/real_time/threads:16_cv",
            "value": 0.008888499839740853,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 0.001799282915309567 ns\nthreads: 16"
          }
        ]
      }
    ]
  }
}