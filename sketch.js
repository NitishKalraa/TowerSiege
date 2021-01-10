// ab to linked list sikhani hi padege
const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var engine, world;
var polygon,ground;
var holder1,holder2;
var slingShot;
var polygon_img;
var bg;
function preload(){
  polygon_img=loadImage("images/polygon.png");
  bgChanger();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  holder1 = new Stand(390,300,250,10);
  holder2 = new Stand(700,200,200,10);
  //  at holder 1
  // most boring side of the project
  obstacle1 = new Obstacle(300,275,30,40);
  obstacle2 = new Obstacle(330,275,30,40);
  obstacle3 = new Obstacle(360,275,30,40);
  obstacle4 = new Obstacle(390,275,30,40);
  obstacle5 = new Obstacle(420,275,30,40);
  obstacle6 = new Obstacle(450,275,30,40);
  obstacle7 = new Obstacle(480,275,30,40);
  obstacle8 = new Obstacle(330,235,30,40);
  obstacle9 = new Obstacle(360,235,30,40);
  obstacle10 = new Obstacle(390,235,30,40);
  obstacle11 = new Obstacle(420,235,30,40);
  obstacle12 = new Obstacle(450,235,30,40);
  obstacle13 = new Obstacle(360,195,30,40);
  obstacle14 = new Obstacle(390,195,30,40);
  obstacle15 = new Obstacle(420,195,30,40);
  obstacle16 = new Obstacle(390,155,30,40);

  //at holder 2 

  obstacles1 = new Obstacle(640,175,30,40);
  obstacles2 = new Obstacle(670,175,30,40);
  obstacles3 = new Obstacle(700,175,30,40);
  obstacles4 = new Obstacle(730,175,30,40);
  obstacles5 = new Obstacle(760,175,30,40);
  obstacles6 = new Obstacle(670,135,30,40);
  obstacles7 = new Obstacle(700,135,30,40);
  obstacles8 = new Obstacle(730,135,30,40);
  obstacles9 = new Obstacle(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(polygon,{x:100,y:200});

}
function draw() {
  if(bg!=undefined){ 
  image(bg,width/2,height/2,width,height)
  }
  fill("lime");
  text("Press space to get turn again",600,350)
  textSize(20);
  ground.display();
  holder1.display();
  holder2.display();
  strokeWeight(2);
  stroke(0);
  fill("skyblue");
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();
  obstacle6.display();
  obstacle7.display();
  fill("pink");
  obstacle8.display();
  obstacle9.display();
  obstacle10.display();
  obstacle11.display();
  obstacle12.display();
  fill("turquoise");
  obstacle13.display();
  obstacle14.display();
  obstacle15.display();
  fill("grey");
  obstacle16.display();
  fill("skyblue");
  obstacles1.display();
  obstacles2.display();
  obstacles3.display();
  obstacles4.display();
  obstacles5.display();
  fill("turquoise");
  obstacles6.display();
  obstacles7.display();
  obstacles8.display();
  fill("pink")
  obstacles9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon);
  }
}
async function bgChanger(){
   var res=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var result=await res.json();
   var time=parseInt(result.datetime.slice(11,13));
      if(time<06&&time>19){
       bg=loadImage('images/day.jpg');
    }else{
      bg=loadImage('images/night.jpg');
    }
  }