class Circle {
    constructor(x, y, ctx) {
       this.x = x;
       this.y = y;
       this.r = 1;
       this.ctx = ctx;
       this.isGrowing = true;
    }
    growing() {
       if (this.isGrowing) {
          this.r++;
       }
    }
    show() {
       ctx.beginPath();
       ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.closePath();
    }
 }
 
 let words = ["HTML", "CSS", "JS", "REACT", "VUE", "PHP"];
 
 function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
 }
 
 function gRA(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
 let canvas = document.getElementById("canvas");
 let ctx = canvas.getContext("2d");
 
 let sCanvas = document.getElementById("sCanvas");
 let sCtx = sCanvas.getContext("2d");
 
 let w = window.innerWidth;
 let h = window.innerHeight;
 
 canvas.style.width = w + "px";
 canvas.style.height = h + "px";
 canvas.setAttribute("height", h);
 canvas.setAttribute("width", w);
 
 sCanvas.style.width = w + "px";
 sCanvas.style.height = h + "px";
 sCanvas.setAttribute("height", h);
 sCanvas.setAttribute("width", w);
 
 sCtx.textAlign = "center";
 sCtx.textBaseline = "middle";
 
 let quality = 10;
 // ----------------------------------------
 function replay(word) {
    let drawNext = true;
 
    sCtx.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
 
    sCtx.font = "normal  900 " + (w / word.length + 2) + "px sans-serif";
    sCtx.fillText(word, w / 2, h / 2);
 
    let possibleSpots = [];
    let circles = [];
 
    for (let i = 0; i < sCanvas.width; i += 5) {
       for (let g = 0; g < sCanvas.height; g += 5) {
          let imgData = sCtx.getImageData(i, g, 1, 1).data;
          if (
             imgData[0] > 0 ||
             imgData[1] > 0 ||
             imgData[2] > 0 ||
             imgData[3] > 0
          ) {
             possibleSpots.push({ x: i, y: g });
             for (let l = 0; l < 5; l++) {
                for (let h = 0; h < 5; h++) {
                   possibleSpots.push({ x: i + l, y: g + h });
                }
             }
          }
       }
    }
 
    sCtx.clearRect(0, 0, w, h);
    let counter = 0;
    function loop() {
       ctx.clearRect(0, 0, w, h);
       counter++;
 
       for (let i = 0; i < quality; i++) {
          newCircle();
       }
 
       for (circle of circles) {
          for (circle1 of circles) {
             if (circle != circle1) {
                if (
                   dist(circle.x, circle.y, circle1.x, circle1.y) <
                   circle.r + circle1.r
                ) {
                   // checking intersection
                   circle.isGrowing = false;
                   break;
                }
             }
          }
          circle.show();
          circle.growing();
       }
 
       if (drawNext) {
          window.requestAnimationFrame(function() {
             loop();
          });
       }
    }
 
    function newCircle() {
       let newSpot = possibleSpots[gRA(0, possibleSpots.length - 1)];
       let draw = true;
       for (circle2 of circles) {
          if (dist(circle2.x, circle2.y, newSpot.x, newSpot.y) <= circle2.r) {
             draw = false;
             break;
          }
       }
       if (draw) {
          circles.push(new Circle(newSpot.x, newSpot.y, ctx));
       }
    }
    loop();
 }