var message = "Hello";

function sayHello(language) {

  if (language === "german") {
    var message = "Hallo";
    return message;
  } else if (language === "spanish") {
    var message = "Hola";
    return message;
  }

  return message;
}

console.log(sayHello("spanish"));
console.log(sayHello("german"));
console.log(sayHello());

