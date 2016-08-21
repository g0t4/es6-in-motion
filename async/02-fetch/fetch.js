const museumsDatasetUrl = "../../datasets/museums.json";

const requestPromise = fetch(museumsDatasetUrl);
requestPromise.then(function (response) {
  const parsePromise = response.json();
  parsePromise.then(function (museums) {
    console.log(museums);
  });
  console.log(response);
});
