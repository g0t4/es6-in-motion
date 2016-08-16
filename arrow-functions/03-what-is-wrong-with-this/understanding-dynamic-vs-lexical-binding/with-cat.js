function fullName() {
  console.log("fullName() called with", this);
  console.log(this.first + " " + this.last);
}

var person = {
  first: "Pax",
  last: "Higbee",
  fullName: fullName
};

var cat = {
  first: "Mister",
  last: "Sparkles",
  fullName: fullName
};

fullName();

person.fullName();
cat.fullName();