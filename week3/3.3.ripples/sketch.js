let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 0;

let ripplers = [];

class Rippler {
	constructor (x,y) {
		this.x = x,
		this.y = y,
		this.d = 0
		//this.o = 255
	}

	draw() {
		this.d += 1;
		circle(this.x, this.y, this.d);
		//stroke(255,255,255,this.o-=50);
	}

	draw_reverse() {
		//negative x
		circle(-1 * this.x, this.y,this.d);

		//negative y
		circle(this.x, -1 * this.y,this.d);

		//bottom of cavas
		circle((800-this.x)+800, this.y,this.d);

		//right of canvas
		circle(this.x, 800-this.y+800,this.d);
	}
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(80,80,150);
  stroke(255,255,255,255);
  strokeWeight(5);
  noFill();

  for (let i = 0; i < ripplers.length; i++) {
          ripplers[i].draw();
	  ripplers[i].draw_reverse();

  }
}

function mousePressed() {
	ripple_x = mouseX;
	ripple_y = mouseY
	ripple_d = 0;

	ripplers.push( new Rippler(mouseX, mouseY));
}
