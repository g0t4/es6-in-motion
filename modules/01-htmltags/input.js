export class Input {

  constructor() {
    this.type = "text";
  }

  setType(type) {
    this.type = type;
    return this;
  }

  render() {
    return `ss<input type="${this.type}"/>`;
  }

}
