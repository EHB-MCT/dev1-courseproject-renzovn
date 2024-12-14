"use strict";
import context from "../script/context.js";
import * as Utils from "../script/utils.js";

let canvasWidth = context.canvas.width;
let canvasHeight = context.canvas.height;

// Helper functions
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getHSL(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
