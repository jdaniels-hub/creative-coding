function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

  translate(100,100);

  for (let x = 0; x < 8; x+=1) {
	  for (let y = 0; y < 8; y+=1) {
		push();

		translate(x * 120, y * 120);

		strokeWeight(random(0,10));

		stroke(150, random(30, 150), 0);

		fill(150, random(30, 150), 0);

		ellipse(0,0,random(75,150));

		pop();
	  }
  }
}
