class Hidden {

}

export class TextSpan {

  static from(text) {
    return new TextSpan(text);
  }

  constructor(text) {
    this.text = text;
  }

  render() {
    return `<span>${this.text}</span>`;
  }
}

//TextSpan.from = text => new TextSpan(text);
