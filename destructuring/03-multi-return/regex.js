const fullnameElement = document.getElementById("fullname");
fullnameElement.addEventListener("input", validate);

function validate() {

  const name = fullnameElement.value; // i.e.: Higbee, Pax

  // call parseName and use destructuring to pull apart values, print out error if invalid name is detected

  const outputElement = document.getElementById("output");
  outputElement.innerText = `
      First Name: ${first}
      Last Name: ${last}
  `;

}

function parseName(name) {
  const nameParser = /([^,]*),\s*(.*)/;
  if (!nameParser.test(name)) {
    //throw "Invalid name";
    return [false];
  }

  const [ , last, first ] = name.match(nameParser);

  // object literal enhancement (no last: last)
  return [true, last, first];
}

