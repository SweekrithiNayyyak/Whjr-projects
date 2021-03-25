function setup() {
  createCanvas(800,400);
  movRect=createSprite(400, 200, 100, 50);
  stabRect=createSprite(200,200,100,100);
  movRect.shapeColor="red";
  stabRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movRect.x=World.mouseX;
  movRect.y=World.mouseY;
  console.log(movRect.x-stabRect.x)
  if(movRect.x-stabRect.x < movRect.width/2+stabRect.width/2 && stabRect.x-movRect.x < movRect.width/2+stabRect.width/2 &&  ){
    movRect.shapeColor="green";
    stabRect.shapeColor="green";
  }
  else{
    movRect.shapeColor="red";
  stabRect.shapeColor="red";

  }
  drawSprites();
}