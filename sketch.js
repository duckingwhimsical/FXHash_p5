// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color

let font;
let fontsize = 40;

let words = null;

let angleRotate = 0.0;
let angleRotate2 = 0.0;

let word1 = "foo";
let word2 = "bar";

let word1x = 50;
let word1y = 50;

let word2x = 50;
let word2y = 50;

let border1, border2;
let col1, col2;

let donesetup = false;


function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('./Nunito-BoldItalic.ttf');
}

function randminmax(min, max)
{
  let diff = max - min;
  return (fxrand() * diff) + min;
}


function setup() {
  seed = Math.floor(fxrand() * 100000000); // FXHASH seed rand
  Math.random.seed = seed;
  randomSeed(seed); 

  border1 = window.word1.length * (fontsize / 4);
  word1x = randminmax(border1, innerWidth-border1);
  word1y = randminmax(border1, innerHeight-border1);
  border2 = window.word2.length * (fontsize / 4);
  word2x = randminmax(border2, innerWidth-border2);
  word2y = randminmax(border2, innerHeight-border2);

  createCanvas(innerWidth-1, innerHeight-1);
  colorMode(HSB);
  
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  flocksetup(word1x, word1y, word2x, word2y, window.col1, window.col2);
}

function draw() {
  //background(0);

  flockdraw();

  
  push();
  translate(word1x, word1y);
  rotate(radians(window.angleRotate));

  strokeWeight(5);
  stroke(0);

  textSize(fontsize);
  fill(window.col1);
  text(window.word1, 0, 0);

  strokeWeight(3);
  stroke(255);

  textSize(fontsize);
  fill(window.col1);
  text(window.word1, 0, 0);
  pop();
  
  push();
  translate(word2x, word2y);
  rotate(radians(window.angleRotate2));

  strokeWeight(5);
  stroke(0);

  textSize(fontsize);
  fill(window.col2);
  text(window.word2, 0, 0);

  strokeWeight(3);
  stroke(255);

  textSize(fontsize);
  fill(window.col2);
  text(window.word2, 0, 0);
  pop();
  
  window.angleRotate += 0.25;
  window.angleRotate2 += 0.25;
}


function windowResized() {
  resizeCanvas(innerWidth-1, innerHeight-1);
}

