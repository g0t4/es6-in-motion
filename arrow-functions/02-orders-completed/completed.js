var prices = [1.10, 2.32, 3.68, 4.90];
var taxRate = 0.07;

var pricesWithTax = [];
// expected result: [1.18, 2.48, 3.94, 5.24]

for (var i = 0; i < prices.length; i++) {
  var price = prices[i];
  var tax = price*taxRate;
  pricesWithTax.push(price+tax);
}

console.log(pricesWithTax);

// mapping with function expression

var pricesWithTaxMapped =
  prices.map(function (price){ return price + price*taxRate; });

console.log(pricesWithTaxMapped);

// mapping with arrow functions

var pricesWithTaxArrow =
  prices.map(p => p + p*taxRate);

console.log(pricesWithTaxArrow);
