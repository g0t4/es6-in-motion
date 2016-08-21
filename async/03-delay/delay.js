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

