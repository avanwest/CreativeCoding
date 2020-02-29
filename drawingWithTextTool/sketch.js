let offset = 5;
let rate = 30;
let marker;
var c;
var count = 1;

function setup() {
  c = createCanvas(600, 400);
  background(255);
  marker = new ShadeChar();
  let gui = new dat.GUI();
  gui.add(marker, 'type');
  gui.add(marker, 'size', 1, 40);
  gui.add(marker, 'shade', 0, 255);
  gui.add(marker, 'density', 0, 100);
  
}

function draw() {
  frameRate(marker.density);
  textSize(marker.size);
  fill(marker.shade);
  if (mouseIsPressed) {
    text(marker.type, mouseX, mouseY);
    text(marker.type, mouseX - offset, mouseY - offset);
  }
}

function ShadeChar() {
  this.type = 'x';
  this.size = 12;
  this.shade = 0;
  this.density = 30;
}

function keyPressed() {
 if (keyCode == 80) {
  saveCanvas(c, 'myBrushes' + count, 'jpg');
   count++;
 }
  
}









