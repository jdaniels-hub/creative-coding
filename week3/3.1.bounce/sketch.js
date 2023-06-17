let x = 0;
let y = 0;
let xspeed = 2;
let yspeed = 2;
let newCircleX = 0;
let newCircleY = 0;
let circles = [
	[0,0,1,1,-1],
	[0,0,1,1,-1],
	[0,0,1,1,-1],
	[0,0,1,1,-1],
	[0,0,1,1,-1]
];


function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);

  for(let i = 0; i < 5; i+=1) {
	  if (circles[i][4] == -1 && newCircleX != 0) {
		  circles[i][0] = newCircleX;
		  circles[i][1] = newCircleY;
		  circles[i][4] = 0;
	  }
	  if (circles[i][0] > 0) {
		  circle(circles[i][0],circles[i][1],50);
	  }
	  // check for collision with left and right edge
 	  if (circles[i][0] < 25 | circles[i][0] > width-25){
         	// if (
      		  circles[i][2] = circles[i][2] * -1; // reverse the x direction
      //fill(random(0,255),100,0);
  	  }
  	  if (circles[i][1] < 25 | circles[i][1] > 575) {
          	  circles[i][3] = circles[i][3] * -1; // reverse the y direction
  	  }



  	  circles[i][0] = circles[i][0] + circles[i][2]; // iterate x

  	  circles[i][1] = circles[i][1] + circles[i][3]; // iterate y

	  newCircleX = 0;

  }

  // check for collision with left and right edge
  if (x < 0 | x > width-50){
	 // if (
      xspeed = xspeed * -1; // reverse the x direction
      //fill(random(0,255),100,0);
  }
  if (y < 0 | y > 550) {
	   yspeed = yspeed * -1; // reverse the y direction
  }

  

  x = x + xspeed; // iterate x

  y = y + yspeed; // iterate y

//  document.write(yspeed);

  // draw a circle
  fill(255, 180, 0);
  circle(x+25, y+25, 50);
  fill(0,0,0);

  //circle(newCircleX, newCircleY, 50);
}

function mouseClicked() {
	newCircleX = mouseX;
	newCircleY = mouseY;
}
/**
function randomY() {
	let rand = random(1,6);

	if (rand == 1) {
		return -.25;
	}

	if (rand == 2) {
		return -.5;
	}

	if (rand == 3) {
		return .25;
	}

	if (rand == 4) {
		return .5;
	}

	if (rand == 5) {
		return .75;
	}

	return -.75;
}**/
