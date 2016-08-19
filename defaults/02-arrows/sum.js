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
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const identity = numbers2.map(n => n);
console.log(identity);

console.log(sum(identity));

const cleaned = numbers2.map((n = 0) => n);
console.log(cleaned);
console.log(sum(cleaned));

const costs = orders.map(({price, quantity = 1}) => price * quantity);

const costs = orders.map(function (order) {
  if (order.quantity === undefined) order.quantity = 1;
  return order.price * order.quantity;
});

console.log(costs);













