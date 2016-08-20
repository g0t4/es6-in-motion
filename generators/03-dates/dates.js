// today:
// let day = new Date();
// add a day:
// day.setDate(day.getDate() + 1);

function* daysForward(days) {
}

const generatorObject = daysForward(10);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

