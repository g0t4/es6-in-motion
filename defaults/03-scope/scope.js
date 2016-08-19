const {log} = console;

// Parameter Defaults
function areaOfRectangle(width, height = width) {
  return width * height;
}

log(areaOfRectangle(5));
log(areaOfRectangle(5, 4));

function areaOfRectangle2(a, b) {
  let height = (b === undefined) ? a : b;
  let width = a;
  {
    return width * height
  }
}

log(areaOfRectangle2(5));
log(areaOfRectangle2(5, 4));
