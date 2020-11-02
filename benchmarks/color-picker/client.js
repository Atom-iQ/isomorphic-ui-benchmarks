/*
 * Get colors from json.
 * Possible values (number of colors), when using "./__colors/_{numberOfColors}.json":
 * - 133, 266, 532, 1064, 2128, 4256, 8512, 17024, 34048
 * - 100, 1k, 5k, 10k, 20k, 50k
 */
var colors = require("./colors.json"); // 266 colors by default
// var colors = require("./__colors/_1064.json"); // 1064 colors
// var colors = require("./__colors/_5k.json"); // 5000 colors

window.registerBenchmark(function(helpers) {
  return {
    createBench: function(libName, factoryFunc) {
      var mountEl = helpers.createMountEl(libName);
      var fn = factoryFunc(mountEl, colors);

      return {
        onWarmup: function() {
          helpers.showMountEl(libName);
        },
        onStart: function() {
          helpers.showSingleMountEl(libName);
        },
        fn
      };
    }
  };
});
