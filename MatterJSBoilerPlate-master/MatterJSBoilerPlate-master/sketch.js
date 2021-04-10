
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bob1,bob2,bob3 ,bob4,bob5;
var ground;
var roofObject ; 

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);
ground = new Ground(400,200,300,20);
sling1= new Suspender(bob1.body,ground.body,-50*2,0);
sling2= new Suspender(bob2.body,ground.body,-25*2,0);
sling3= new Suspender(bob3.body,ground.body,-0*2,0);
sling4= new Suspender(bob4.body,ground.body,25*2,0);
sling5= new Suspender(bob5.body,ground.body,50*2,0);
	



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
	

}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 



