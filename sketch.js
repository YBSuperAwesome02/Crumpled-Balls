var paperball, ground
var paperbasketpart1, paperbasketpart2, paperbasketpart3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
/*function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}*/

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(222)
	engine = Engine.create();
	world = engine.world;
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	//World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
  Engine.run(engine);
  
  //paperball = createSprite

  paperbasketpart1 = new Paperbasket(400, 650-15, 10, 100, {isStatic:true})
  //Matter.Body.setAngle(paperbasketpart1, angle)
	paperbasketpart2 = new Paperbasket(500, 697.5-50, 220, 10)  
  paperbasketpart3 = new Paperbasket(600, 650-15, 10, 100)

}


function draw() {
  rectMode(CENTER);
  background(100);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  drawSprites();
  //packageSprite.collide(groundSprite)//
  //packageSprite.restitution=0.5
  paperbasketpart1.display()
  paperbasketpart2.display()
  paperbasketpart3.display()
  /*packageSprite.collide(dropzonepart1)
  packageSprite.collide(dropzonepart2)
  packageSprite.collide(dropzonepart3)*/
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	
  }
}



