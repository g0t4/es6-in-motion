function Input() {
  this.type = "text";
}

Input.prototype.setType = function (type) {
  this.type = type;
  return this;
};
Input.prototype.render = function () {
  return `<input type="${this.type}"/>`;
};