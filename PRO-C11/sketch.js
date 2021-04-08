var garden,rabbit;
var gardenImg,rabbitImg;
var appleI, leafI;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleI=loadImage("apple.png");
  leafI=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;

  spawnApples()
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}


function spawnApples(){
  if(frameCount%80 === 0){
    num=Math.round(random(1,2));
    if(num===1){
      apple=createSprite(Math.round(random(50,350)),10,10,10);
    apple.velocityY=2;
    apple.addImage(appleI);
    apple.scale=0.05;
    apple.lifetime=150;

    }
    else{
      leaf=createSprite(Math.round(random(50,350)),10,10,10);
    leaf.velocityY=2;
    leaf.addImage(leafI);
    leaf.scale=0.05;
    leaf.lifetime=150;
    }
    
  }
}