const fullnameElement = document.getElementById("fullname");
fullnameElement.addEventListener("input", validate);

function validate() {

  const nameParser = /([^,]*),\s*(.*)/;
  const name = fullnameElement.value; // i.e.: Higbee, Pax

  const matches = name.match(nameParser);
  // ["Higbee, Pax", "Higbee", "Pax"]
  const [ , last, first ] = matches;
  // const last = matches[1];
  // const first = matches[2];

  const outputElement = document.getElementById("output");
  outputElement.innerText = `
      First Name: ${first}
      Last Name: ${last}
  `;

}

