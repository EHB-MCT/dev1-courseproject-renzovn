let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

signature();

function signature() {
  context.fillStyle = "black";
  context.beginPath();
  context.rect(50, 50, 300, 300);
  context.stroke();
  context.fill();
  context.closePath();
}

drawBox1();

function drawBox1() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(125, 50, 50, 50);
  context.fill();
  context.closePath();
}

drawBox2();

function drawBox2() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(175, 50, 50, 50);
  context.fill();
  context.closePath();
}

drawBox3();

function drawBox3() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(225, 50, 50, 50);
  context.fill();
  context.closePath();
}

drawBox4();

function drawBox4() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(125, 100, 50, 50);
  context.fill();
  context.closePath();
}

drawBox5();

function drawBox5() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(175, 100, 50, 50);
  context.fill();
  context.closePath();
}

drawBox6();

function drawBox6() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(225, 100, 50, 50);
  context.fill();
  context.closePath();
}

drawBox7();

function drawBox7() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(175, 150, 50, 50);
  context.fill();
  context.closePath();
}

drawBox8();

function drawBox8() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(125, 200, 50, 50);
  context.fill();
  context.closePath();
}

drawBox9();

function drawBox9() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(75, 200, 50, 50);
  context.fill();
  context.closePath();
}

drawBox10();

function drawBox10() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(225, 200, 50, 50);
  context.fill();
  context.closePath();
}

drawBox11();

function drawBox11() {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(275, 200, 50, 50);
  context.fill();
  context.closePath();
}
