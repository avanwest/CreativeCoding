let count = 30;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  background(255);


  background(random(360), random(100), random(100),random(100));


    for (let i = 0; i < 10; i++) {
      beginShape();
      fill(random(360), random(100), random(100),random(100));
      rect(random(width), random(height), random(100), random(100));
      endShape();

      beginShape();
      stroke(random(360), random(100), random(100),random(100));

      strokeWeight(random(10));
      point(random(width), random(height));
      endShape();
    }

/*
-----------------------------
NOISE
 -----------------------------
*/
let points = width/20;
let yOff = 0;
  
beginShape();
  for (let x = 0; x < points; x++) {
    let n = noise(yOff) * height;
    vertex(x * points, n);
    yOff += 0.05;
  }
endShape();  
  
  
}

