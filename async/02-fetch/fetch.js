const museumsDatasetUrl = "../../datasets/museums.json";

fetch(museumsDatasetUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (museums) {
    console.log(museums);
  });
