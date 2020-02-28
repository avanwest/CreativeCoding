
var vArray = [];
let randomX, randomX1, randomY, randomY1, h, m, s;
let fr = 10;
let hourHand;
let p, l;
let hourColor = 100;
let minColor = 150;
let secondColor = 200;

function setup() {
  createCanvas(600, 400);
  background(200);
  
  hourHand = new TimeShape();
  
  // hour hand
  beginShape()
     fill(hourColor);
     noStroke();
     rect(0,0,200, height);
  endShape();
  
  //minute hand
   beginShape()
     fill(minColor);
     noStroke();
     rect(200,0,200, height);
   endShape();
  
  //second hand
   beginShape()
     fill(secondColor);
     noStroke();
     rect(400,0,200, height);
   endShape();

}

function draw() {
  
  h = hour() % 12;
  m = minute();
  s = second();
  console.log(h, m, s);
  
  //hour hand
  beginShape()
     fill(hourColor);
     noStroke();
     rect(0,0,200, height);
  endShape();
  beginShape();
    fill(0);
    for (let i = 0; i < h; i++) {
      randomX = random(200);
      randomY = random(height);
      if (h === 1) {
      stroke(0);
      strokeWeight(10);
      p = point(randomX, randomY);
    }
    else if (h === 2) {
      randomX1 = random(200);
      randomY1 = random(height);
      stroke(0);
      strokeWeight(10);
      l = line(randomX, randomY, randomX1, randomY1);
    }
    else {
    var v = new Vertice(randomX, randomY);
    v.drawVertice();
    
  }
  }
  endShape(CLOSE);

  
  //minute hand
   frameRate(1);
   beginShape()
     fill(minColor);
     noStroke();
     rect(200,0,200, height);
   endShape();
    beginShape();
      fill(0);
      for (let i = 0; i < m; i++) {
      randomX = random(200,400);
      randomY = random(height);
      let w = new Vertice(randomX, randomY);
      w.drawVertice();
      }
   endShape(CLOSE);
  
  //second hand
   beginShape()
     fill(secondColor);
     noStroke();
     rect(400,0,200, height);
   endShape();
      beginShape();
   
  fill(0);
  for (let i = 0; i < s; i++) {
    randomX = random(400,600);
    randomY = random(height);
    let z = new Vertice(randomX, randomY);
    z.drawVertice();
  }
  endShape(CLOSE);
//   background(200);


}


function Vertice(x,y) {
 this.drawVertice = function() {
   vertex(x,y);
 }
}

class TimeShape {
 constructor() {
  this.h = hour();
  this.m = minute();
  this.s = second();
  this.x = random(width);
  this.y = random(height);
 } 
  
  displayHour() {
   vertex(random(200), height); 
  }
}




