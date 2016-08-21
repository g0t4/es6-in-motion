const messages = [`
function getCost(supply) {
  return supply.price * supply.quantity;
}
`, `
function (supply) {
  return supply.price * supply.quantity;
}
`, `
(supply) {
  return supply.price * supply.quantity;
}
`, ` 
(supply) => {
  return supply.price * supply.quantity;
}
`, `
(supply) => supply.price * supply.quantity;
`];

const code = document.getElementById("code");

code.innerText = messages[0];

setTimeout(function () {
  code.innerText = messages[1];
  setTimeout(function () {
    code.innerText = messages[2];
    setTimeout(function () {
      code.innerText = messages[3];
      setTimeout(function () {
        code.innerText = messages[4];
      }, 500);
    }, 500);
  }, 500);
}, 500);

