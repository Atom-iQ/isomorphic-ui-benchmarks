var AtomiQ = require("@atom-iq/core");
var createRvdElement = AtomiQ.createRvdElement;
var createState = AtomiQ.createState;

var rxOperators = require("rxjs/operators");
var map = rxOperators.map;
var distinctUntilChanged = rxOperators.distinctUntilChanged;
var tap = rxOperators.tap;

module.exports = ({ item }) => {
  const [purchased, nextPurchased] = createState(false);

  item = tap(() => nextPurchased(false))(item)

  const handleBuyButtonClick = () => nextPurchased(true);

  const style = distinctUntilChanged()(map(
    isPurchased => ({
      backgroundColor: isPurchased ? "#f1c40f" : ""
    })
  )(purchased));

  const purchaseSection = distinctUntilChanged()(map(
    isPurchased => isPurchased ? (
      <div class="purchased">Purchased!</div>
    ) : (
      <button
        class="buy-now"
        type="button"
        onClick={handleBuyButtonClick}
      >
        Buy now!
      </button>
    )
  )(purchased))

  const mapItemField = (field) => distinctUntilChanged()(
    map(
      item => field === "id" ? "/buy/" + item.id : item[field]
    )(item)
  );

  return (
    <div class="search-results-item" style={style}>
      <h2>{mapItemField("title")}</h2>

      <div class="lvpic pic img left">
        <div class="lvpicinner full-width picW">
          <a href={mapItemField("id")} class="img imgWr2">
            <img src={mapItemField("image")} alt={mapItemField("title")} />
          </a>
        </div>
      </div>

      <span class="price">{mapItemField("price")}</span>

      {purchaseSection}
    </div>
  );
}

