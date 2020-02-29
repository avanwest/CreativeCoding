// Week 4 - In class Assignment
// "Six white geometric figures (outlines) superimposed on a black wall"

function setup() {
  createCanvas(500, 500);
  background(0);
  noFill();
  
  for (let n = 0; n < 6; n++ ) {
    var points = Math.round(random(1,4));
    console.log(points);
    beginShape();
    for (let i = 0; i < points; i++) {
      stroke(255);
      strokeWeight(2);
      var vert = vertex(random(0, height), random(0, height));
      console.log(vert); 
    }
    endShape(CLOSE);

    }
}

