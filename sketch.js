var movingRect,fixedRect;
var car1;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,50);
  car1 = createSprite(50,50,50,50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  isTouching(movingRect,car1);
  
  drawSprites();
}


function isTouching(object1,object2){
  if(object1.y-object2.y<=object1.height/2+object2.height/2 &&
    object2.y-object1.y<=object2.height/2+object1.height/2 &&
    object1.x-object2.x<=object1.width/2+object2.width/2 && 
    object2.x-object1.x<=object2.width/2+object1.width/2){
     object1.shapeColor = "green";
     object2.shapeColor = "green";
  }
  else{
    object1.shapeColor = "red";
    object2.shapeColor = "red";

 }
}
