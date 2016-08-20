// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function positiveNumbersUpTo(stop) {
  const iterable = {
    [Symbol.iterator](){
      // return iterator
      let current = 1;
      return {
        next(){
          if (stop < current) {
            return {done: true};
          }
          return {done: false, value: current++};
        }
      }
    }
  };
  return iterable;
}

//const numbers = [...positiveNumbersUpTo(9)];
const [...numbers] = positiveNumbersUpTo(3);
console.log(numbers);