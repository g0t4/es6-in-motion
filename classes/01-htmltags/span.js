
class TextSpan {

  constructor(text) {
    this.text = text;
  }

  render() {
    return `<span>${this.text}</span>`;
  }
}