function setupApp() {

  this.version = "5.1.2";
  this.createdBy = "Wes";

  var handler = () => {
    console.log('hi, welcome to version: '
      + this.version
      + ' hand crafted by '
      + this.createdBy)
  };

  document.addEventListener("click", handler);

}

setupApp();
