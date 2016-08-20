// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function positiveNumbersUpTo(stop) {
  const iterable = {
    [Symbol.iterator](){
      // return iterator
    }
  };
  return iterable;
}

const numbers = [...positiveNumbersUpTo(9)];
console.log(numbers);