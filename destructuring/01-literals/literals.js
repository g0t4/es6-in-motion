const first = "Wes";
const last = "Higbee";

const person = new Object();
person.first = first;
person.last = last;
person.favoriteColor = "blue";
person.address = new Object();
person.address.street = "100 Fox Lane";
person.address.city = "New York";
person.address.state = "NY";

const pet = "cat";

const person2 = {
  first,
  last,
  favoriteColor: "blue",
  address: {
    street: "100 Fox Lane",
    city: "New York",
    state: "NY"
  },
  fullName() {
    return `${this.first} ${this.last}`;
  },
  [pet]: {
    name: "fluffly"
  }
};
console.log(person2);


const numbers = new Array();
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;

const numbers2 = [1, 2, 3];




