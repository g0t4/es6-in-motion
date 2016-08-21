function* daysForward(days) {
  for (let count = 0; count < days; count++) {
    let day = new Date();
    day.setDate(day.getDate() + count);
    const skip = yield day;
    count += skip || 0;
  }
}

const days = daysForward(15);

console.log(days.next());
console.log(days.next(5));
console.log(days.next());
console.log(days.next(3));
