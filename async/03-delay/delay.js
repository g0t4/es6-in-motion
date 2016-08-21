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
/*
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
}, 500);*/

delay(500)
  .then(() => code.innerText = messages[1])
  .then(() => delay(500))
  .then(() => code.innerText = messages[2])
  .then(() => delay(500))
  .then(() => code.innerText = messages[3])
  .then(() => delay(1500))
  .then(() => code.innerText = messages[4]);

function delay(duration) {
  function executor(resolve, reject) {
    setTimeout(function () {
      // trigger success
      resolve();
    }, duration);
  }

  return new Promise(executor);
}
