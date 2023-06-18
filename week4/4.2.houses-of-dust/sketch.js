let grammar = tracery.createGrammar({
   "origin":["A HOUSE OF #material#\n     #place#\n          USING #light_source#\n               INHABITED BY #inhabitants#"],
 //  "material": ["MUD","STICKS","LEAVES","TWIGS","STEAM","GLASS","APPLES"],
   "material": ["dust","brick","paper","leaves","roots","discarded clothing","weeds","wood","tin","sand","glass","stone","straw","plastic","mud","broken dishes","plastic"],
   "place":["on open ground","by a river","among high mountains","in a deserted airport","in dense woods","on an island","in a hot climate","in a desert","on the sea","in a deserted factory","underwater","in southern France","inside a mountain","in an overpopulated area","in japan","in a place with both heavy rain and bright sun","by an abandoned lake","in michigan","by the sea","in a cold","in a windy climate","among small hills"],
   "light_source":["natural light","candles","all available lighting","electricity"],
   "inhabitants": ["people who eat a great deal","lovers","friends and enemies","collectors of all types","women wearing all colors","all races of men wearing predominantly red clothing","little boys","children and old people","horses and birds","various birds and fishes","american indians","french and german speaking people","people who sleep almost all the time"]

});

let poem = '';

function setup() {
  createCanvas(800, 800);
  frameRate(.25);
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont('monospace');
  textSize(15);
  text(poem, 70,200);
}
