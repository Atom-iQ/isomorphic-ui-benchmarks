var AtomiQ = require("@atom-iq/core");
var createRvdComponent = AtomiQ.createRvdComponent;
var createRvdElement = AtomiQ.createRvdElement;

var rxOperators = require("rxjs/operators");
var map = rxOperators.map;
var distinctUntilChanged = rxOperators.distinctUntilChanged;
var switchMap = rxOperators.switchMap
var rxjs = require("rxjs");
var animationFrameScheduler = rxjs.animationFrameScheduler
var pipe = rxjs.pipe;
var of = rxjs.of

var SearchResultsItem = require("./SearchResultsItem");
var Footer = require("./Footer");


module.exports = ({ searchResultsData }) => {
  window.onMount()

  const getItem = index => pipe(
    switchMap(results => of(results.items[index], animationFrameScheduler))
  )(searchResultsData);

  const items = pipe(
    distinctUntilChanged((x, y) => x.items.length === y.items.length),
    map(results => results.items.map((item, index) => (
      <SearchResultsItem key={index} item={getItem(index)} />
    )))
  )(searchResultsData)

  return (
    <div class="search-results">
      <div>
        {items}
      </div>
      <Footer />
    </div>
  );
}

