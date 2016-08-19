// Some of the exercises from the console

function request(parameters){
  console.log(parameters.url);
  console.log(parameters.method);
  console.log(parameters.body);
}

request({ url: "http://www.google.com", method: "GET" });

function requestNew({ url, method, body }){
  console.log(url);
  console.log(method);
  console.log(body);
}

requestNew({ url: "http://www.google.com", method: "GET" });


// REST PARAMETER

function computeTax(taxRate){
  const prices = Array.prototype.slice.call(arguments, computeTax.length);
  return prices.map(p => p * taxRate);
}

computeTax(0.07, 1.00)
//  [0.07]

computeTax(0.07, 1.00, 2.00)
//  [0.07, 0.14]

computeTax(0.07, 1.00, 2.00, 3.00)
//  [0.07, 0.14, 0.21000000000000002]

function computeTax(taxRate){
  // arguments = [0.07, 1.00, 2.00]
  const [, ...prices] = arguments;
  return prices.map(p => p * taxRate);
}

computeTax(0.07, 1.00, 2.00, 3.00)
//  [0.07, 0.14, 0.21000000000000002]

function computeTax(taxRate, ...prices){
  return prices.map(p => p * taxRate);
}

computeTax(0.07, 1.00, 2.00, 3.00)
//  [0.07, 0.14, 0.21000000000000002]

// Don't Get Crazy

const person = { first: "Wes", last: "Higbee", address: { lines: ["100 bob lane", "Apt 24"], city: "NY", state: "NY" } };

const { address: { lines: [ ,line2 ] } } = person;

line2
// "Apt 24"

// Structure

const person = {
  first: "Wes",
  last: "Higbee",
  address: {
    lines: ["100 bob lane", "Apt 24"],
    city: "NY",
    state: "NY"
  }
};

const {
  address: {
    lines: [ ,line2 ]
  }
} = person;

