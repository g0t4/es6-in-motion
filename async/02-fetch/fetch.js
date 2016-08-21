const museumsDatasetUrl = "../../atasets/museums.json";

fetch(museumsDatasetUrl)
  .then(response => response.json())
  .then(museums => console.log(museums))
  .catch(error => console.log("oh no", error));