function asUsed(){
  const numbers = [1.00, 2.07, 3.05];

  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }


  const average = sum / numbers.length;
  const result = {
    average: average,
    sum: sum
  }
  console.log("The average price is: " + average.toFixed(2));

  result.average = 1;
}
asUsed();