const numbers = [1, 3, 4, 6, 9];
const numbers1 = undefined;
const numbers2 = [1, 3, undefined, 4, 6, 9];

const prices = [1.10, 2.32, 3.68, 4.90];
const taxRate = 0.07;

const orders = [
  {desc: "Pencils", price: 1.50, quantity: 2},
  {desc: "Notepads", price: 6.00, quantity: 3},
  {desc: "Paperclips", price: 4.30}
];

function sum(numbers = []) {
  // numbers = numbers || [];
  let sum = 0;
  //for (let index = 0; index < numbers.length; index++) {
  //  sum += numbers[index] || 0;
  //}
  for (const [index,number] of numbers.entries()) {
    //console.log(entry);
    sum += number || 0;
  }
  return sum;
}

console.log(sum(numbers));
console.log(sum(numbers1));
console.log(sum(numbers2));
