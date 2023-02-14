function setup() {
  createCanvas(400, 400);
}

let rad = 50;
let ax= 4;
let ay = 1;
var xcord= 30;
var ycord= 50;

function draw() {
  background(220);
 
  circle (xcord ,ycord, rad);
  if (xcord >= width-29 || xcord <= 29){
   ax= -ax
  }
  xcord = xcord + ax;
 
   if (ycord >= width-29 || ycord <= 29){
   ay= -ay;
  }
  
   ycord = ycord + ay
}
