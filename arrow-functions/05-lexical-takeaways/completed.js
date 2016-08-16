function setupApp() {

  this.version = "5.1.2";
  this.createdBy = "Wes";

  // 1. make this more concise and inline
  document.addEventListener("click", () =>
  console.log('hi, welcome to version: ' + this.version + ' hand crafted by ' + this.createdBy));

  // 2. write out function expression version inlined too.
  document.addEventListener("click", (function() {
    console.log('hi, welcome to version: ' + this.version + ' hand crafted by ' + this.createdBy);
  }).bind(this));

}

setupApp();
