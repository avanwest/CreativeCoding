let shadesOfBlack = ["#0C020F", "#696969", "#555D50", "#483C32", "#555555", "#36454f", "#414A4C", "#4B3621", "#3D0C02", "#3B3C36", "#353839", "#343434", "#253529", "	#242124", "	#232B2B", "#1B1B1B", "#1A1110" ];

let shadesOfBlue = ["#95C8D8","#7285A5", "#00688B", "#009ACD", "#0099CC", "#00B2EE", "#00BFFF", "#38B0DE", "#3299CC", "#8DB6CD", "#67C8FF", "#6CA6CD", "#87CEFF"];


function setup() {
  createCanvas(850, 550);
  
  let randomBlackShade =  random(shadesOfBlack);
  background(randomBlackShade);
  let randomBlueShade = random(shadesOfBlue);
  beginShape();
    fill(randomBlueShade);
    noStroke();
    rect(0, 0, width, height/2);
  endShape();  
  birdOnPowerLine();
  tigerUnderRainbow(random(0, width), random(350, height));
  
  // saveCanvas('mymidterm', 'png');

}






function wire(x1, x2, lineHeight) {
 stroke(0);
 strokeWeight(4);
 line(x1, lineHeight, x2, lineHeight);
}



function bigBird(x, y) {
  let x1 = random(x - 40, x + 30);
  let x2 = random(x - 40, x + 30);
  let y1 = random(y - 50, y);
  let y2 = random(y - 50, y);
  beginShape();
    vertex(x, y);
    vertex(x1, y1);
    vertex(x2, y2);
  endShape();
}

function birdOnPowerLine() {
  let lineHeight = random(50, height/2);
  wire(0, width, lineHeight);
  for (let i = 0; i <= 11; i++) {
    fill(0);
    noStroke();
    let randomBird = random(width);
    bigBird(randomBird, random(lineHeight - 10, lineHeight + 10));
  }
  fill('red');
  bigBird(random(width), random(lineHeight - 10, lineHeight + 10));
  
}

function tigerUnderRainbow(x,y) {
  console.log(x);
  colorMode(HSB, 360, 100, 100, 100);
  let sizeWidth = random(0, width);
  let sizeHeight = random(50, 200);
  let head = x;
  console.log("width: " + sizeWidth, "height: " + sizeHeight);
  console.log(head);
  beginShape();
  fill(255);
  rect(x, y, sizeWidth, sizeHeight);  
  for (let lines = 0; lines < sizeWidth; lines+=10) {
    stroke('orange');
    strokeWeight(3);
    line(x + lines,y,x + lines, y+sizeHeight);
  }
  for (let lines = 5; lines < sizeWidth; lines+=15) {
    stroke('black');
    strokeWeight(7);
    line(x + lines,y,x + lines, y+sizeHeight);
  }
  for (let i = 0; i < 10; i++) {
    noFill();
    stroke(36 * i, 100, 100); 
    arc(x - 5  * i, y + sizeHeight, sizeWidth * 2, sizeHeight * 3, PI, TWO_PI );
    console.log(head);
     }
   
    endShape(); 
}


function goldenVoice(xoff1, xoff2, numpoints) {
  let gold = color("#D4Af37");
  stroke(gold);
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < numpoints; i++) {
  let x = map(noise(xoff1), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, height);
  point(x, y);
  xoff1 += 0.05;
  xoff2 += 0.05;
  }
  endShape();
}


function goldDustOfVoice(x, numDustParticles) {
  let points = width/20;
  let gold = color("#D4Af37");
  let yOff = 0;
  stroke(gold);
  strokeWeight(1);
  for (let i = 0; i < numDustParticles; i++) {
    let n = noise(yOff) * height;
    point(x, n);
    yOff += 0.05;
  }  
}

function DustSmoke() {
  let yoff = 0;
  pixelDensity(1);
  loadPixels();
  for(var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += 0.01;
    }
    yoff += 0.01;
  }
  updatePixels();
  
}

