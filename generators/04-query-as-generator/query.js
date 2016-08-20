function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};

  function createIterator() {

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

    return {
      next,
      return(){
        console.log("cleanup");
        return {done: true};
      }
    };
  }

  this[Symbol.iterator] = createIterator;

}

// Manual iteration
const query = (new PersonQuery())[Symbol.iterator]();
console.log(query.next().value);
console.log(query.next().value);
console.log(query.next());
console.log(query.next());

// The for-of loop works with iterables.
for (const record of new PersonQuery()) {
  console.log(record);
}
