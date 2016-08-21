function* daysForward(days) {
  for (let count = 0; count < days; count++) {
    let day = new Date();
    day.setDate(day.getDate() + count);
    yield day;
  }
}

const generatorObject = daysForward(15);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
