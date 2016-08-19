const {log} = console;

// Parameter Defaults
function areaOfRectangle(width, height) {
  return width * height;
}

log(areaOfRectangle(5));
log(areaOfRectangle(5, 4));

// Destructuring Defaults
const [width, height] = [5, 4];

log({
  width,
  height,
  area: width * height
});