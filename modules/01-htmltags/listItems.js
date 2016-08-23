import {TextSpan} from "./span";

export class ListItem {

  constructor() {
    this.children = [];
  }

  addChild(element) {
    this.children.push(element);
    return this;
  }

  render() {
    const childrenHtml = this.children
      .map(c => c.render())
      .join("");

    return `<li>${childrenHtml}</li>`
  }

}

export class TextListItem extends ListItem {

  constructor(text) {
    super();

    this.addChild(new TextSpan(text));
  }

}
