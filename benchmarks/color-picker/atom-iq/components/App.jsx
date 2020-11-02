var AtomiQ = require("@atom-iq/core");
var createState = AtomiQ.createState;
var createRvdElement = AtomiQ.createRvdElement;
var rxOperators = require("rxjs/operators");
var map = rxOperators.map;
var switchMap = rxOperators.switchMap;
var distinctUntilChanged = rxOperators.distinctUntilChanged;
var animationFrameScheduler = require("rxjs").animationFrameScheduler
var of = require("rxjs").of

module.exports = ({colors, onMount}) => {
  const [selectedColorIndex, nextSelectedColorIndex] = createState(0);
  onMount(nextSelectedColorIndex);

  const selectedColorName = switchMap(index => {
    return of(colors[index].name, animationFrameScheduler)
  })(selectedColorIndex)

  const getClassName = (i) => selectedColorIndex.pipe(
    map(index => index === i ? "color selected" : "color"),
    distinctUntilChanged()
  )


  window.onMount();

  return (
    <div class="colors">
      <h1>Choose your favorite color:</h1>
      <div class="colors">
        {colors.length ? (
          <ul>
            {colors.map((color, i) => (
              <li class={getClassName(i)} style={{backgroundColor: color.hex}}
                  onClick={() => nextSelectedColorIndex(i)}>{color.name}</li>
            ))}
          </ul>
        ) : (<div>No colors!</div>)}
      </div>
      <div>You chose: <div class="chosen-color">{selectedColorName}</div></div>
    </div>
  );
}
