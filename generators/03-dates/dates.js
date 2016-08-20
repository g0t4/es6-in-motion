// today:
// let day = new Date();
// add a day:
// day.setDate(day.getDate() + 1);

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

const [...rest] = generatorObject;
console.log(rest);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two] = numbers;
const [...restNumbers] = numbers;
console.log(restNumbers);