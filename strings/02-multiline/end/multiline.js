const html = `
<h2>  
  Application Settings
</h2>

<h3>
  Please pick a font size:
<h3>
<ul>
${
  [1, 2, 3, 4]
    .map(createButtonHtml)
    .join("")
  }
</ul>`;


function createButtonHtml(number) {
  const size = `${number * 100}%`;

  return `
<li>
<button onclick="setSize('${size}');">
  #${number} - ${size}
</button>
</li>
`;
}

document.body.insertAdjacentHTML("beforeend", html);

function setSize(size) {
  console.log(`You picked ${size}`);
  document.body.style.fontSize = size;
}