"use strict";
import context from "../script/context.js";
import * as Utils from "../script/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

// totebag image
let toteImage = new Image();
toteImage.src = "../../afbeeldingen/totebag.jpg";

// Scale totebag
let scaleFactor = 0.5;

// Tote position and dimensions
let toteX, toteY, toteWidth, toteHeight;

toteImage.onload = function () {
  // Calculate totebag dimensions based on scale factor
  toteWidth = toteImage.width * scaleFactor;
  toteHeight = toteImage.height * scaleFactor;

  // Position the totebag to be centered
  toteX = (canvasWidth - toteWidth) / 2;
  toteY = (canvasHeight - toteHeight) / 2;
};

// Array to store animated circles
let circles = [];
let numCircles = 50; // Number of circles

// Mouse position
let mouseX = canvasWidth / 2;
let mouseY = canvasHeight / 2;

// Initialize circles with random properties
for (let i = 0; i < numCircles; i++) {
  circles.push({
    x: Utils.randomNumber(0, canvasWidth),
    y: Utils.randomNumber(0, canvasHeight),
    radius: Utils.randomNumber(10, 30),
    color: Utils.hsl(Utils.randomNumber(0, 360), 80, 60),
    speedX: Utils.randomNumber(-2, 2),
    speedY: Utils.randomNumber(-2, 2),
  });
}

// Track mouse movement
context.canvas.addEventListener("mousemove", (e) => {
  let rect = context.canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// Draw and animate circles
function drawCircles() {
  for (let circle of circles) {
    // Draw circle
    context.fillStyle = circle.color;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    context.fill();

    // Update circle position
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // Bounce off edges
    if (circle.x < 0 || circle.x > canvasWidth) circle.speedX *= -1;
    if (circle.y < 0 || circle.y > canvasHeight) circle.speedY *= -1;

    // Adjust speed based on mouse position
    let dx = circle.x - mouseX;
    let dy = circle.y - mouseY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      circle.speedX += (dx / distance) * 0.1;
      circle.speedY += (dy / distance) * 0.1;
    }
  }
}

// Animation loop
function animate() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw totebag image
  if (toteImage.complete) {
    context.drawImage(toteImage, toteX, toteY, toteWidth, toteHeight);
  }

  // Draw animated circles
  drawCircles();

  requestAnimationFrame(animate);
}

animate();
