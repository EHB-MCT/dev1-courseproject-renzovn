"use strict";
import context from "../script/context.js";
import * as Utils from "../script/utils.js";

let canvas = context?.canvas || document.querySelector("canvas");
let canvasWidth = canvas?.width || 800;
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

  // Vervang de handtekening door zwarte en groene blokken
  signature();

  requestAnimationFrame(startAnimation);
}

createStars();
startAnimation();

// Vervangen handtekeningcode
function signature() {
  context.fillStyle = "black";
  context.beginPath();
  context.rect(canvasWidth - 350, canvasHeight - 350, 300, 300);
  context.stroke();
  context.fill();
  context.closePath();

  drawBox1();
  drawBox2();
  drawBox3();
  drawBox4();
  drawBox5();
  drawBox6();
  drawBox7();
  drawBox8();
  drawBox9();
  drawBox10();
  drawBox11();
}

function drawBox1() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 275, canvasHeight - 350, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox2() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 225, canvasHeight - 350, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox3() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 175, canvasHeight - 350, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox4() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 275, canvasHeight - 300, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox5() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 225, canvasHeight - 300, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox6() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 175, canvasHeight - 300, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox7() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 225, canvasHeight - 250, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox8() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 275, canvasHeight - 200, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox9() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 325, canvasHeight - 200, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox10() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 175, canvasHeight - 200, 50, 50);
  context.fill();
  context.closePath();
}

function drawBox11() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(canvasWidth - 125, canvasHeight - 200, 50, 50);
  context.fill();
  context.closePath();
}
