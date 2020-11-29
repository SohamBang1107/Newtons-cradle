
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(600,200,80,80)
	bob2 = new bob(500,200,80,80)
	bob3 = new bob(400,200,80,80)
	bob4 = new bob(300,200,80,80)
	bob5 = new bob(200,200,80,80)
	ground1 = new Ground(350,100,400,60)





	Engine.run(engine);
  
}

	



function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	ground1.display();
  drawSprites();
 
}



