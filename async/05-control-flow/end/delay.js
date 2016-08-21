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
}, 500);

delay(500)
  .then(() => code.innerText = messages[1])
  .then(() => delay(500))
  .then(() => code.innerText = messages[2])
  .then(() => delay(500))
  .then(() => code.innerText = messages[3])
  .then(() => delay(1500))
  .then(() => code.innerText = messages[4]);
*/

// port to generator control flow
function* program() {

  yield delay(500);
  code.innerText = messages[1];
  yield delay(500);
  code.innerText = messages[2];
  yield delay(500);
  code.innerText = messages[3];
  yield delay(500);
  code.innerText = messages[4];

}

async(program);

function delay(duration) {
  function executor(resolve, reject) {
    setTimeout(function () {
      // trigger success
      resolve();
    }, duration);
  }

  return new Promise(executor);
}

// copied from: http://es6-features.org/#GeneratorControlFlow
// MIT License
// generic asynchronous control-flow driver
function async(proc, ...params) {
  var iterator = proc(...params)
  return new Promise((resolve, reject) => {
    let loop = (value) => {
      let result
      try {
        result = iterator.next(value)
      }
      catch (err) {
        reject(err)
      }
      if (result.done)
        resolve(result.value)
      else if (typeof result.value === "object"
        && typeof result.value.then === "function")
        result.value.then((value) => {
          loop(value)
        }, (err) => {
          reject(err)
        })
      else
        loop(result.value)
    }
    loop()
  })
}