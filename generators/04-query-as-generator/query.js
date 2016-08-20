function* PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};

  yield wes;
  yield pax;
  yield jonathan;

}

// Manual iteration
const query = (PersonQuery())[Symbol.iterator]();
console.log(query.next().value);
console.log(query.next().value);
console.log(query.next());
console.log(query.next());

// The for-of loop works with iterables.
for (const record of PersonQuery()) {
  console.log(record);
}
