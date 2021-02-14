function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 250, 100);

  fill(250, 200, 200);
  ellipse(mouseX, mouseY, 100, 100);

  fill(200, 250, 200);
  rect(400, 100, 50, 50);
}