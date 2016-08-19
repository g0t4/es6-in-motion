function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};

  this.createIterator = function () {

    let theNextRecord = wes;

    function next() {
      switch (theNextRecord) {
        case wes:
          theNextRecord = pax;
          return {value: wes, done: false};
        case pax:
          theNextRecord = jonathan;
          return {value: pax, done: false};
        case jonathan:
          theNextRecord = undefined;
          return {value: jonathan, done: false};
      }
      return {done: true};
    }

    return {next};
  };

}

const query = new PersonQuery().createIterator();
console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());


const query2 = new PersonQuery().createIterator();
console.log(query2.next());
console.log(query2.next());
console.log(query2.next());
console.log(query2.next());
