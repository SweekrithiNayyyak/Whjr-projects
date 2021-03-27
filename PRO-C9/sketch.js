var shipI,ship;
var backI,back;
function preload(){
  backI=loadImage("sea.png");
  shipI=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  back=createSprite(200,200);
  back.x=back.width/2;
  back.addImage(backI);
  back.scale=0.25;
  back.velocityX=2;

  ship=createSprite(200,200,10,10);
  ship.addAnimation("shipa",shipI);
  ship.scale=0.45;

  

  
}

function draw() {
  background("blue");
  if(back.x>400){
    back.x = 200;
  }
  
  drawSprites();
 
}