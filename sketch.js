const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, side1, side2;
var bridge, jointPoint;
var jointLink;
var stones = [];
var stone;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20);
  side1 = new Base(150, height/2 +50, 600, 100);
  side2 = new Base(width -150, height/2 +50, 600, 100);

  bridge = new Bridge(15,{x:width/2 -400,y:height/2});
  jointPoint = new Base(width -400, height/2 +10, 40, 20);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for (var i = 0; i <= 8; i++)
  {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    stone = new Stone(x, y, 80,80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  for (var stone of stones)
  {
    stone.display();
  }

  ground.display();
  side1.display();
  side2.display();
  bridge.show();
}
