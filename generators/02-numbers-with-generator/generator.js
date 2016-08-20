// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*

function* positiveNumbersUpTo(stop) {
  let current = 1;
  while (current <= stop)
    yield current++;
}

const [...numbers] = positiveNumbersUpTo(9);
console.log(numbers);*/

function* oneToThree() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorObject = oneToThree();
console.log(generatorObject);
const iterator = generatorObject[Symbol.iterator]();
console.log(generatorObject === iterator);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

