const museumsDatasetUrl = "../../datasets/museums.json";

fetch(museumsDatasetUrl)
  .then(response => response.json())
  .then(museums => console.log(museums));
