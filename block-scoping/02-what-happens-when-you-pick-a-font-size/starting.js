for(var number = 1; number < 5; number++) {

  var button = document.createElement("button");
  var size = (number * 100) + "%";
  var buttonText = "#" + number + " - " + size
  button.innerText = buttonText;
  document.body.appendChild(button);

  button.addEventListener("click", function() {
    console.log("You picked " + buttonText);
    document.body.style.fontSize = size;
  })

}