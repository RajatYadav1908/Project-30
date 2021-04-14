const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var polygon, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,10);
    ground1 = new Ground(500,550,400,20);
    ground2 = new Ground(950,350,400,20);
    
    box1 = new Box(375,545,50,75);
 box2 = new Box(425,545,50,75);
 box3 = new Box(475,545,50,75);
 box4 = new Box(525,545,50,75);
 box5 = new Box(575,545,50,75);
 box6 = new Box(625,545,50,75);

 box7 = new Box(425,400,50,75);
 box8 = new Box(475,400,50,75);
 box9 = new Box(525,400,50,75);
 box10 = new Box(575,400,50,75);

 box11 = new Box(475,300,50,75);
 box12 = new Box(525,300,50,75);
 
 box13 = new Box(500,250,50,75);

 box1a = new Box(825,345,50,75);
 box2a = new Box(875,345,50,75);
 box3a = new Box(925,345,50,75);
 box4a = new Box(975,345,50,75);
 box5a = new Box(1025,345,50,75);
 box6a = new Box(1075,345,50,75);

 box7a = new Box(875,200,50,75);
 box8a = new Box(925,200,50,75);
 box9a = new Box(975,200,50,75);
 box10a = new Box(1025,200,50,75);

 box11a = new Box(925,100,50,75);
 box12a = new Box(975,100,50,75);
 
 box13a = new Box(950,50,50,75);

   

    polygon = new Bird(80,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:80, y:300});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
    ground1.display();
    ground2.display();
    

    fill("lightblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 
  fill("pink");
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  fill("violet");
  box11.display();
  box12.display();

  fill("gold");
  box13.display();

  fill("lightblue");
  box1a.display();
  box2a.display();
  box3a.display();
  box4a.display();
  box5a.display();
  box6a.display();
 
  fill("pink");
  box7a.display();
  box8a.display();
  box9a.display();
  box10a.display();

  fill("violet");
  box11a.display();
  box12a.display();

    

    polygon.display();
   
    slingshot.display();    
}
    
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(polygon.body);
    }
}