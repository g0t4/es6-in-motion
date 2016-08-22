function TextListItem(text) {

  ListItem.call(this);

  this.addChild(new TextSpan(text));

}

function ListItem() {
  this.children = [];

  this.addChild = function (element) {
    this.children.push(element);
    return this;
  };

  this.render = function () {
    const childrenHtml = this.children
      .map(c => c.render())
      .join("");

    return `<li>${childrenHtml}</li>`
  };
}