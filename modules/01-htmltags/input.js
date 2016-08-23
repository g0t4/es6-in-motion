import _ from "lodash";

export class Input {

  constructor() {
    this.type = "text";
  }

  setType(type) {
    this.type = type;
    return this;
  }

  render() {
    const elements = _.take([1,2,3], 2);
    return `ss${elements}<input type="${this.type}"/>`;
  }

}
