var AtomiQ = require("@atom-iq/core");
var createRvDOM = AtomiQ.createRvDOM;
var createState = AtomiQ.createState;
var createRvdComponent = AtomiQ.createRvdComponent;

var App = require("./components/App");

var mountNode = document.getElementById("searchResultsMount");

if (mountNode) {
  createRvDOM()(
    <App searchResultsData={window.searchResultsData} />,
    mountNode
  );

  console.log("Re-rendering on client completed");
}

window.addBench("atom-iq", function(el, getNextSearchResults) {
  const [searchResultsData, nextSearchResultsData] = createState(getNextSearchResults());

  createRvDOM()(
    <App
      searchResultsData={searchResultsData}
    />,
    el
  );

  return function(done) {
    nextSearchResultsData(getNextSearchResults());
    done();
  };
});
