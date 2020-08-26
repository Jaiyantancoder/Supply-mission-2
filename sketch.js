var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
var zombie,zombieimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
engine = Engine.create();
world = engine.world;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	//zombieimage=loadImage("zombie.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	zombie = createSprite(400,450,50,50);
	zombie.velocityX=-6;
	//zombie.addImage(zombieimage)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 640, width,10);
	groundSprite.shapeColor=color(188)
	 
	box1 = new Box(380,632,150,25);
	box2 = new Box(426,630,15,100);
	box3 = new Box(304,630,15,100);
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  box1.display();
  box2.display();
  box3.display();
  
if(zombie.x===7){

zombie.velocityX=zombie.velocityX+12;

}

if(zombie.x===794){

zombie.velocityX=zombie.velocityX-12;

}

  textSize(20);
  text("ZOMBIE",zombie.x-30,zombie.y-25);
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



