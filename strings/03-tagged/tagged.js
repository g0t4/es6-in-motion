const people = [
  {
    first: "Bob",
    last: "DOE"
  },
  {
    first: "pax",
    last: "HigBEe"
  },
  {
    first: "Anne",
    last: "Jostol"
  }
];

const names = people.map(p => `${p.last}, ${p.first}`);

function upper(strings, ...cooked) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(strings[i]);
    result.push(cooked[i] || "");
  }
  return result.join("");
}

console.log(names);