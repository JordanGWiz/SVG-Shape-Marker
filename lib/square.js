const Shape = require("./shape");

class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
    <text x="150" y="150" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>
`.trim();
  }
}

module.exports = Square;
