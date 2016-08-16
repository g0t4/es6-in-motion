function setupApp() {

  var self = this;
  self.version = "5.1.2";
  self.createdBy = "Wes";

  document.addEventListener("click", function () {
    console.log('hi, welcome to version: '
      + self.version
      + ' hand crafted by '
      + self.createdBy);
  })

}

setupApp();
