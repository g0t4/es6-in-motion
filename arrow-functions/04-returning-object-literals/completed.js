function mapper(number){
  return {
    number: number,
    squared: number * number,
    isEven: number % 2 == 0
  }
}

console.log([1,2,3].map(mapper));

var mapperA = number => ({
  number: number,
  squared: number * number,
  isEven: number % 2 == 0
})

console.log([1,2,3].map(mapperA));