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
    this.size = size;
    this.color = color;
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  }
}

let star = new Star(100, 100, getRandom(-10, 30), "white");
star.draw();
