function setup() {
  createCanvas(900, 1100);
  noLoop();
}

function draw() {
  background(0);

  for (let x = 0; x < 9; x+=1) {
	  for (let y = 0; y < 11; y+=1) {
		  push();
		  translate(10,10);
		  translate(x * 98, y * 98);

		  rect(0,0,95,95);

		  //(0,7)
		  if (y == 0 && x == 6) {
			  fill(0,0,0);
			  rect(0,0,95,95);
		  }
		  //(1,1)
		  else if (y == 1 && x == 1) {
			  fill(0,0,0);
			  rect(0,0,95,95);
		  }
		  //(1,2)
		  else if (y == 1 && x == 2) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(1,3)
		  else if (y == 1 && x == 3) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(2,7)
		  else if (y == 2 && x == 6) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(3,7)
		  else if (y == 3 && x == 6) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(4,7)
		  else if (y == 4 && x == 6) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(5,0)
		  else if (y == 5 && x == 0) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(5,1)
		  else if (y == 5 && x == 1) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(5,7)
		  else if (y == 5 && x == 6) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(6,1)
		  else if (y == 6 && x == 1) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(6,5)
		  else if (y == 6 && x == 5) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(6,8)
		  else if (y == 6 && x == 8) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(7,2)
		  else if (y == 7 && x == 2) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(7,4)
		  else if (y == 7 && x == 4) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(8,3)
		  else if (y == 8 && x == 3) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(9,2)
		  else if (y == 9 && x == 2) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(10,1)
		  else if (y == 10 && x == 1) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(10,6)
		  else if (y == 10 && x == 6) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(10,7)
		  else if (y == 10 && x == 7) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  //(10,8)
		  else if (y == 10 && x == 8) {
                          fill(0,0,0);
                          rect(0,0,95,95);
                  }
		  pop();
	  }
  }
}
