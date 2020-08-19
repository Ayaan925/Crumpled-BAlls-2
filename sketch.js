
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
	bin = new Dustbin();
	paper = new Paper(150,200,25);
	ground = new Ground(width/2,height, width, 70);
	

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(255);
  bin.display();
paper.display();
ground.display();
  drawSprites();
 
}

function keyPressed(){
   if (keyCode === UP_ARROW){


	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})


   }






}

