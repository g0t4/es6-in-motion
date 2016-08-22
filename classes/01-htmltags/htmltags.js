const flavorList = new UnorderedList();
const flavors = ["Chocolate", "Vanilla", "Strawberry", "Banana", "Coconut"];
for (const flavor of flavors) {
  const item = new ListItem()
    .addChild(new Input().setType("checkbox"))
    .addChild(new TextSpan(flavor));

  flavorList.addListItem(item);
}

const availability = new UnorderedList();
const slots = ["Monday at 5PM", "Tuesday at 10PM", "Friday at 8AM"];
for (const slot of slots) {
  const item = new TextListItem(slot);
  availability.addListItem(item);
}

const container = new Div()
  .addChild(new TextSpan("Welcome to the annual employee survey!"))
  .addChild(new Div()
    .addClass("question")
    .addChild(new TextSpan("What is your favorite flavor?"))
    .addChild(flavorList))
  .addChild(new TextSpan("Please print and return this survey to the office at one of the following times:"))
  .addChild(new Div()
    .addChild(availability));

const input = new Input().setType("text");
const input2 = new Input().setType("checkbox");
const input3 = new Input().setType("radio");

const content = document.getElementById("content");
content.innerHTML = new Div()
  .addChild(input)
  .addChild(input2)
  .addChild(input3)
  .render();

function Input() {

  this.setType = function (type) {
    this.type = type;
    return this;
  };

  this.render = function () {
    return `<input type="${this.type}"/>`;
  };

}

function TextSpan(text) {
  this.text = text;

  this.render = function () {
    return `<span>${this.text}</span>`;
  };
}

function Div() {
  this.children = [];
  this.classes = [];

  this.addChild = function (element) {
    this.children.push(element);
    return this;
  };

  this.addClass = function (cssClass) {
    this.classes.push(cssClass);
    return this;
  };

  this.render = function () {
    const childrenHtml = this.children
      .map(c => c.render())
      .join("");

    const cssClasses = this.classes.join(" ");

    return `<div class="${cssClasses}">${childrenHtml}</div>`
  };
}

function UnorderedList() {
  const listItems = [];

  this.addListItem = function (listItem) {
    listItems.push(listItem);
    return this;
  };

  this.render = function () {
    const items = listItems
      .map(i => i.render())
      .join("");
    return `
<ul>
   ${items}
</ul>
`;
  };
}

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
