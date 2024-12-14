"use strict";
import context from "../script/context.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getHSL(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

class Star {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = Math.abs(size);
    this.color = color;
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  }
}

let stars = [];
for (let i = 0; i < 10; i++) {
  stars.push(
    new Star(
      getRandom(0, canvasWidth),
      getRandom(0, canvasHeight),
      getRandom(5, 20),
      getHSL(getRandom(0, 360), 80, 60)
    )
  );
}

stars.forEach((star) => star.draw());
