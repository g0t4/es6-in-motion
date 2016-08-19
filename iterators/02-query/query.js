function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};

  this.nextRecord = function () {

  }
}

const query = new PersonQuery();
console.log(query.nextRecord());
console.log(query.nextRecord());
