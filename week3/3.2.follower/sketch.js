let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;
let randX;
let randY;
let sprite;
let debug = true;

function preload() {
	//sprite = loadImage('assets/sprite.png');
}

function setup() {
  createCanvas(800, 800);
  randX = random(100,700);
  randY = random(100,700);
}

function draw() {
  background(220);

  if (mouseX > x){
   xspeed = speedfactor;
 }else{
   xspeed = -speedfactor;
 }

 if (mouseY > y){
   yspeed = speedfactor;
 }else{
   yspeed = -speedfactor;
 }

 if ((x > randX-25 && x < randX+225) && (y > randY -25 && y < randY+225) && (mouseX > randX-25 && mouseX < randX+225) && (mouseY > randY -25 && mouseY < randY+225)) {
	 xspeed = xspeed * -1;
	 yspeed = yspeed * -1;
 }

 distanceX = mouseX - x;
 distanceY = mouseY - y;

 if ((distanceX < 20 && distanceX > -20) && (distanceY < 20 && distanceY > -20)) {
	 x = 0;
	 y = 0;
 }

 x = x + xspeed;

 y = y + yspeed;

 circle(x,y,50);

 fill(0,255,0);
 rect(randX,randY,200,200);
 fill(255,255,255);

 if (debug){
   text("width: " + width, 30, 30);
   text("height: " + height, 30, 45);
   text("mouseX: " + mouseX, 30, 60);
   text("mouseY: " + mouseY, 30, 75);
   text("ballX: " + x, 30, 90);
   text("ballY: " + y, 30, 105);
}
}
