
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprirte,paper;
var dustbin1Sprite, dustbin2Sprite, dustbin3Sprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color("yellow");

	dustbin1Sprite=createSprite(550, 610, 20,100);
	dustbin1Sprite.shapeColor=color('white');

	dustbin2Sprite=createSprite(730, 610, 20,100);
	dustbin2Sprite.shapeColor=color('white');

	dustbin3Sprite=createSprite(640, height-35, 200,20);
	dustbin3Sprite.shapeColor=color('white');

	paper=createSprite(200,200,50,50);

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 //paper.ellipse(56, 46, 55, 55);
	 //Matter.Bodies.paper.circle(100, 100, 20);

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}



