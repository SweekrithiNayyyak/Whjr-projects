var track,trackI;
var jack,jackI;
var invi1;;
var invi2;
function preload(){
  trackI=loadImage("path.png");
  jackI=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
  track.addImage(trackI);
  track.velocityY=2;
  jack=createSprite(350,350,100,100);
  jack.addAnimation("runner",jackI);

  invi1=createSprite(0,350,50,100);
  invi2=createSprite(400,350,50,100);

  invi1.visible=false;
  invi2.visible=false;
}

function draw() {
  background(0);
  if(track.y>400){
    track.y=200;
  }
  jack.x=World.mouseX;

  jack.collide(invi1);
  jack.collide(invi2);
  drawSprites();

}
