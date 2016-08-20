// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function* positiveNumbersUpTo(stop) {
  let current = 1;
  while (current <= stop)
    yield current++;
}

const [...numbers] = positiveNumbersUpTo(9);
console.log(numbers);