var targetSizes = [50, 100, 150, 200, 250, 300]
var time = 0
var RATE_MULTIPLIER = 1/75
var TIME_OFFSET

function setup() {
  // put setup code here
  createCanvas(400, 400);
  TIME_OFFSET = HALF_PI
}

function draw() {
  // put drawing code here
  scale = (sin(frameCount*RATE_MULTIPLIER - TIME_OFFSET)+1)/2;
  background(50);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(window.width/2, window.height - scale*targetSizes[targetSizes.length-1]/2, scale*targetSizes[targetSizes.length-1], scale*targetSizes[targetSizes.length-1]);
  for (var target = 0; target < targetSizes.length-1; target++){
    if (targetSizes[target] < scale*targetSizes[targetSizes.length-1]){
      ellipse(window.width/2, window.height - targetSizes[target]/2, targetSizes[target], targetSizes[target]);
    }
  }
}
