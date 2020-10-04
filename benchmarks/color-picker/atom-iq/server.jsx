var Inferno = require("inferno");
var createVNode = Inferno.createVNode;
var InfernoServer = require("inferno-server");
var App = require("./components/App");

module.exports = function(colors) {
  return 'Not supported yet, until @atom-iq/ssr'
  // return function benchFn() {
  //   var html = InfernoServer.renderToString(<App colors={colors} />);
  //
  //   return html;
  // };
};
