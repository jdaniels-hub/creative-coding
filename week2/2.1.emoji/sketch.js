function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  fill(255,150,0)
  ellipse(200,200,300,300)

  //mouth
  fill(150,100,50)
  ellipse(200,260,200,130)

  fill(255,255,255)
  ellipse(200,260,150,100)

  fill(255,150,0)
  rect(100,195,200,75)

  fill(150,100,50)
  rect(135,290,130,20)

  //eyes
  fill(150,100,50)
  ellipse(150,200,75,75)

  fill(150,100,50)
  ellipse(250,200,75,75)

  fill(255,150,0)
  noStroke()
  ellipse(250,225,75,75)

  fill(255,150,0)
  noStroke()
  ellipse(150,225,75,75)

  //water drop
  fill(150,150,255)
  ellipse(280,125,50,50)
}
