var person = {
  first: "Pax",
  last: "Higbee"
};

var fullName = function () {
  console.log("fullName() called with", this);
  console.log(this.first + " " + this.last);
}.bind({ first: 'bob'})

person.fullName = fullName;

var cat = {
  first: "Mister",
  last: "Sparkles",
  fullName: fullName
}

fullName();
person.fullName();
cat.fullName();

