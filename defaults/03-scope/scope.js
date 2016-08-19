const {log} = console;

// Parameter Defaults
function areaOfRectangle(width, height = width) {
  return width * height;
}

log(areaOfRectangle(5));
log(areaOfRectangle(5, 4));

// Destructuring Defaults
const [width, height = width] = [5, undefined];

log({
  width,
  height,
  area: width * height
});