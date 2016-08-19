const orders = [
  {desc: "Pencils", price: 1.50, quantity: 2},
  {desc: "Notepads", price: 6.00, quantity: 3},
  {desc: "Paperclips", price: 4.30}
];

let sum = 0;
for (let index = 0; index < orders.length; index++) {
  const price = orders[index].price;
  const quantity = orders[index].quantity || 1;
  sum += price * quantity;
}
console.log(sum);

sum = 0;
for (const order of orders) {
  const quantity = order.quantity || 1;
  sum += order.price * quantity;
}
console.log(sum);

sum = 0;
orders.random = "random";
for (const property in orders) {
  const price = orders[property].price;
  const quantity = orders[property].quantity || 1;
  sum += price * quantity;
}
console.log(sum);


function computeTax(taxRate){
  const prices = Array.prototype.slice.call(arguments, computeTax.length);
  return prices.map(p => p * taxRate);
}

const set = new Set([1,2,3,3,4,4,4,5]);
console.log(set);
