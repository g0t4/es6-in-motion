const museumsDatasetUrl = "asdf://../../datasets/museums.json";

fetch(museumsDatasetUrl)
  .catch(e => console.log("tripped"))
  .then(response => response.json())
  .then(museums => console.log(museums));
//  .catch(error => console.log("oh no", error));