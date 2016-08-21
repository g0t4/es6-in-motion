const museumsDatasetUrl = "../../datasets/museums.json";

fetch(museumsDatasetUrl)
  .then(response => response.json())
  .then(museums => console.log(museums))
  .catch(error => console.log("oh no", error));



















  
  
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


