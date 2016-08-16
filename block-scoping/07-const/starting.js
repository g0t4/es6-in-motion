function asUsed(){
  let numbers = [1.00, 2.07, 3.05];

  let sum = 0;
  for (var index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  let average = sum / index;
  console.log("The average price is: " + average.toFixed(2));
}
asUsed();