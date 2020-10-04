var AtomiQ = require("@atom-iq/core");

var createRvDOM = AtomiQ.createRvDOM;
var createRvdComponent = AtomiQ.createRvdComponent;

var App = require("./components/App.jsx");

var mountNode = document.getElementById("mount");

if (window.colors) {
  createRvDOM()(createRvdComponent(App, { colors: window.colors }), mountNode);

  console.log("Re-rendering on client completed");
}

window.addBench("atom-iq", function(el, colors) {
  var nextSelectedColorIndex;
  var selectedColorIndex = 0;

  function onMount(nextFn) {
    nextSelectedColorIndex = nextFn;
  }

  console.log(el)
  console.log(App);

  createRvDOM()(createRvdComponent(App, { colors, onMount }), el);

  return function(done) {
    nextSelectedColorIndex(++selectedColorIndex % colors.length);
    done();
  };
});
