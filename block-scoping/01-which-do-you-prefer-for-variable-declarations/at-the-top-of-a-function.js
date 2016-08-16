function atTop(){
  var numbers = [1.00, 2.07, 3.05],
    sum = 0,
    index, average;

  for (index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  average = sum / index;
  console.log("The average price is: " + average.toFixed(2));
}