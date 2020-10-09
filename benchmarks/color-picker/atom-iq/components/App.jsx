var AtomiQ = require("@atom-iq/core");
var createState = AtomiQ.createState;
var createRvdElement = AtomiQ.createRvdElement;
var rxOperators = require("rxjs/operators");
var map = rxOperators.map;
var switchMap = rxOperators.switchMap;
var distinctUntilChanged = rxOperators.distinctUntilChanged;
var observeOn = rxOperators.observeOn
var animationFrameScheduler = require("rxjs").animationFrameScheduler
var of = require("rxjs").of

module.exports = ({ colors, onMount }) => {
  const [selectedColorIndex, nextSelectedColorIndex] = createState(0);
  onMount(nextSelectedColorIndex);

  const selectedColorName = switchMap(index => {
    return of(colors[index].name, animationFrameScheduler)
  })(selectedColorIndex)

  const getClassName = (i) => (source) =>
    distinctUntilChanged()(map(index => index === i ? "color selected" : "color")(source))


  window.onMount();

  return (
    createRvdElement(1, 'div', 'colors', null, [
      createRvdElement(1, 'h1', null, null, 'Choose your favorite color:', 3),
      createRvdElement(1, 'div', 'colors', null, colors.length ? (
        createRvdElement(1, 'ul', null, null, colors.map(
          (color, i) => createRvdElement(
            1,
            'li',
            getClassName(i)(selectedColorIndex),
            {
              style: { backgroundColor: color.hex },
              onClick: () => nextSelectedColorIndex(i)
            },
            color.name,
            9
            )
        ), 9)
      ) : (
        createRvdElement(1, 'div', null, null, 'No colors!', 3)
      ), 9),
      createRvdElement(1, 'div', null, null, [
        'You chose:',
        createRvdElement(1, 'div', 'chosen-color', null, selectedColorName, 9)
      ], 6)
    ], 6)
  );
}
