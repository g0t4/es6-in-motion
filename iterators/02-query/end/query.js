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

// The rest operator works with iterables.
console.clear();
const [ firstRecord, ...rest ] = new PersonQuery();
console.log(firstRecord);
console.log(rest);

// The spread operator works with iterables.
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6, 7];
const combined = [...numbers1, ...numbers2, ...new PersonQuery()];
console.log(combined);

const minimum = Math.min(...[1, 2]);
console.log(minimum);

console.clear();
const [ firstRecord2 ] = new PersonQuery();
console.log(firstRecord2);