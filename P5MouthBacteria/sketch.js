let bacteriaImages = new Array(5);
let img1, img2, img3, img4;
let randomImg;
let randomNum;
let colorRange = 150;
let frameVal = 20;


function preload() {
  img1 = loadImage('images/mouthBacteria1.jpg');
  img2 = loadImage('images/mouthBacteria2.jpg');
  img3 = loadImage('images/mouthBacteria3.jpg');
  img4 = loadImage('images/mouthBacteria4.jpg');
}

function setup() {
  createCanvas(600, 600);
  background(255);
  bacteriaImages = [img1, img2, img3, img4];
  randomNum = Math.floor(random(1,3));
  randomImg = bacteriaImages[Math.floor(randomNum)];
  pixelDensity(1);
  
}

function draw() {
  let myImage = image(randomImg, 0, 0);
  let mypixels = img3.loadPixels();
  loadPixels();
  
  // loop over pixels on the canvas
  for (let y = 0; y < height; y++) {
   for (let x = 0; x < width; x++) {
     // set index to each pixel
     let index = (x + y * width) * 4;
     // if the pixel is mostly green, select random grayscale so we see movement
     if (pixels[index + 1] > 150 
         && pixels[index + 0] < 150 
         && pixels[index + 2] < 150) {
       
          pixels[index + 1] = random(colorRange,255); 
          frameRate(frameVal);
     }
    }
   }
  updatePixels(); 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
   colorRange -= 30;
   frameVal += 10;
   if (colorRange < 0) {
    colorRange = abs(colorRange);
   }
   if (frameVal > 100) {
     frameVal += 0;
   }
   console.log("up was pressed" + "colorRange=" + colorRange+ " " + "framerate=" + frameVal);
 } else if (keyCode === DOWN_ARROW) {
   colorRange += 30;
   frameVal -= 10;
   console.log("down was pressed" + "colorRange=" + colorRange + " " + "framerate=" + frameVal);
 }
  return false;
}
