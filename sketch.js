var car,wall,thickness;
var speed,weight,bullet;


function setup() {
  createCanvas(1600,400);
car=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
bullet=createSprite(50,200,50,5);
thickness=createSprite(50,50,50,50);
bullet.velocityX = speed;

thickness=random(22,83);

speed=random(55,90);
car.velocityX = speed;
weight=random(400,1500);
wall.shapeColor(80,80,80);
car.shapeColor(225);;

}
function draw() {
  background(255,255,255);
  wall.shapeColor(80,80,80);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
       car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
       car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}