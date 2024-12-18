"use strict";
import context from "../script/context.js";
import * as Utils from "../script/utils.js";

// Controleer of de context correct is geïmporteerd
if (!context) {
  console.error("Error: Canvas context is not loaded correctly.");
}

// Fallback voor canvasgrootte
let canvas = context?.canvas || document.querySelector("canvas");
let canvasWidth = canvas?.width || 800; // Standaardwaarde als fallback
let canvasHeight = canvas?.height || 600;

// Star properties
let stars = [];
let starCount = 100;

// Mouse position
let mouseX = canvasWidth / 2;
let mouseY = canvasHeight / 2;

// Helper functions
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getHSL(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Controleer utils
console.log("Utils library loaded:", Utils);

// Star class
class Star {
  constructor(x, y, size, color, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();

    let points = 5;
    let outerRadius = this.size;
    let innerRadius = this.size / 2;

    for (let i = 0; i < 2 * points; i++) {
      let angle = (i * Math.PI) / points;
      let radius = i % 2 === 0 ? outerRadius : innerRadius;
      let x = this.x + radius * Math.cos(angle);
      let y = this.y + radius * Math.sin(angle);
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    context.closePath();
    context.fill();
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off canvas edges
    if (this.x < 0 || this.x > canvasWidth) this.xSpeed *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.ySpeed *= -1;

    // Change speed and color near the mouse
    let dx = this.x - mouseX;
    let dy = this.y - mouseY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      this.xSpeed += (dx / distance) * 0.1;
      this.ySpeed += (dy / distance) * 0.1;
      this.color = getHSL(getRandom(0, 360), 80, 60);
    }

    this.draw();
  }
}

// Create stars
function createStars() {
  for (let i = 0; i < starCount; i++) {
    stars.push(
      new Star(
        getRandom(0, canvasWidth),
        getRandom(0, canvasHeight),
        getRandom(10, 30),
        getHSL(getRandom(0, 360), 80, 60),
        getRandom(-2, 2),
        getRandom(-2, 2)
      )
    );
  }
}

// Update mouse position
canvas.addEventListener("mousemove", (event) => {
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
});

// Render stars
function renderStars() {
  stars.forEach((star) => star.update());
}

// Start animation loop
function startAnimation() {
  // Fill the background
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  renderStars();

  // Draw name in the bottom-right corner
  let padding = 20;
  context.fillStyle = "#fff";
  context.font = "16px Arial bold";
  context.textAlign = "right";
  context.textBaseline = "bottom";
  context.fillText(
    "RENZO'S INTERACTIVE DESIGN",
    canvasWidth - padding,
    canvasHeight - padding
  );

  requestAnimationFrame(startAnimation);
}

// Initial setup
if (canvas && context) {
  createStars();
  startAnimation();
} else {
  console.error("Error: Canvas or context not properly initialized.");
}
