let html = `
<h2>  
  Application Settings
</h2>

<h3>
  Please pick a font size:
<h3>
<ul>`;

for (let number = 1; number < 5; number++) {

  let size = `${number * 100}%`;

  html += `
<li>
<button onclick="setSize('${size}');">
  #${number} - ${size}
</button>
</li>
`;

}

html += "</ul>";

document.body.insertAdjacentHTML("beforeend", html);

function setSize(size) {
  console.log(`You picked ${size}`);
  document.body.style.fontSize = size;
}