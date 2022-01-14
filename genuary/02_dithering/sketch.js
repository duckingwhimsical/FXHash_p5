// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //color

let font;
let fontsize = 40;

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
  background(250);

  seed = Math.floor(fxrand() * 100000000); // FXHASH seed rand
  Math.random.seed = seed;
  randomSeed(seed);

  createCanvas(innerWidth-1, innerHeight-1);
  colorMode(HSB);

  background(250);
  
  // Set text characteristics
  textFont(font);
  textAlign(CENTER, CENTER);

  this.wordCounter = parseInt(randminmax(1,5000));
  this.totalCount = 0;
}

let one = 1
function draw() {
  if (one <= 200) {
    one = one+1;
    background(250);
    fill(250)
    rect(0, 0, innerWidth, innerHeight);
  }

  if (this.totalCount >= 10000) {
    return;
  }

  for (let i = 0; i < 15; i++) {
    border1 = 5 * (fontsize / 3);
    word1x = randminmax(border1, innerWidth-border1);
    word1y = randminmax(border1, innerHeight-border1);

    color1 = [window.col1[0] + randminmax(-20, 20), window.col1[1] + randminmax(-60, 60), window.col1[2] + randminmax(-60, 60)];

    push();
      translate(word1x, word1y);
      rotate(radians(randminmax(-30, 30)));
    
      strokeWeight(15);
      stroke(0);
    
      textSize(randminmax(10,20));
      fill(color1);
      text(window.wordsList[this.wordCounter], 0, 0);
    pop();

    this.wordCounter = this.wordCounter + 1;
    if (this.wordCounter > 8200) {
      this.wordCounter = 0;
    }
    this.totalCount = this.totalCount + 1;
  }

}


function windowResized() {
  resizeCanvas(innerWidth-1, innerHeight-1);
}

