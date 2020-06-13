const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world,engine;

 
var ground;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;
var option = {
  isStatic:true,
  friction:1.0
}
ground = Bodies.rectangle(300,560,600,30,option);
World.add(world,ground);
box1 = new Box(700,300,20,500);
box2 = new Box(630,300,75,220);
box3 = new Box(555,325,75,175);
box4 = new Box(468,325,100,150);
box5 = new Box(380,325,75,175);
box6 = new Box(308,300,75,200);
box7 = new Box(240,300,20,500);
 

}

function draw() {
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  triangle(580,200,630,100,680,200);
   box4.display();
   box5.display();
   triangle(417,250,470,100,517,250);
   box6.display();
   triangle(260,200,305,100,355,200);
   box7.display();
  drawSprites();
}
