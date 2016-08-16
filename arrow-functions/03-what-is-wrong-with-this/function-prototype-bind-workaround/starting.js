function setupApp() {

  this.version = "5.1.2";
  this.createdBy = "Wes";

  document.addEventListener("click", function () {
    console.log('hi, welcome to version: '
      + this.version
      + ' hand crafted by '
      + this.createdBy);
  })

}

setupApp();
