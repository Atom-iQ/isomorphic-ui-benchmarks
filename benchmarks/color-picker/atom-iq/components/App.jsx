var AtomiQ = require("@atom-iq/core");
var createState = AtomiQ.createState;
var createRvdElement = AtomiQ.createRvdElement;
var rxOperators = require("rxjs/operators");
var map = rxOperators.map;
var distinctUntilChanged = rxOperators.distinctUntilChanged;
var observeOn = rxOperators.observeOn
var animationFrameScheduler = require("rxjs").animationFrameScheduler

module.exports = ({ colors, onMount }) => {
  const [selectedColorIndex, nextSelectedColorIndex] = createState(0);
  onMount(nextSelectedColorIndex);

  const selectedColorName = observeOn(animationFrameScheduler)(map(index => {
    return colors[index].name
  })(selectedColorIndex))

  const getClassName = (i) => (source) => observeOn(animationFrameScheduler)(
    distinctUntilChanged()(map(index => index === i ? "color selected" : "color")(source))
  );

  setTimeout(() => window.onMount());

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
