var targetSizes = [100, 150, 200, 250, 300]
var time = 0

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  scale = (sin(frameCount/75)+1)/2;
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  for (var i = 0; i < targetSizes.length; i++){
    ellipse(window.width/2, window.height - scale*targetSizes[i]/2, scale*targetSizes[i], scale*targetSizes[i]);
  }
}
