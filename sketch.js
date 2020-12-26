
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var tree;
var stone;
var boy, boyImage;
var sling;


function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() 
{
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,600,10,10);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	stone = new Stone(225,520,100,100);

	ground = new Ground(500, 690, 1000);
	
	mango1 = new Mango(800,350,10);
	mango2 = new Mango(775,175,10);
	mango3 = new Mango(600,270,10);
	mango4 = new Mango(900,280,10);
	mango5 = new Mango(660,350,10);
	mango6 = new Mango(800,250,10);
	mango7 = new Mango(900,380,10);
	mango8 = new Mango(710,270,10);
	mango9 = new Mango(850,320,10);
	mango10 = new Mango(700,170,10);
	mango11 = new Mango(870,200,10);

	tree = new Tree(800,500,500,700);

	sling = new Sling(stone.body, {x: 225, y:540});

	Engine.run(engine); 
}


function draw() 
{

Engine.update(engine);
  rectMode(CENTER);
  background("lightgrey");

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  sling.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});	
}
//Body.setPosition(body, { x: x, y: y });
function mouseReleased()
{
	sling.fly();
}

function detectCollision(stone,mango)
{
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<-mango.r + stone.r)
	{
		Matter.Body.setStatic(mango.body, false);
	}
}