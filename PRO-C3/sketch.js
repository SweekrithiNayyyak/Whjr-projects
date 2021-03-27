function setup() {
  createCanvas(400,400);

  sophia=createSprite(50,50,30,30);

  card1=createSprite(50,80,100,20);
  card2=createSprite(150,50,20,100);
  card3=createSprite(120,150,100,20);
  card4=createSprite(220,80,20,80);
  card5=createSprite(120,190,20,70);
  card6=createSprite(350,350,20,100);
  card7=createSprite(390,250,150,20);
  card8=createSprite(210,304,150,20);
  card9=createSprite(239,195,100,20);
  card10=createSprite(270,135,20,100);
  card11=createSprite(225,250,20,100);
  card12=createSprite(147,330,20,40);

  tar=createSprite(400,350,10,100);



 
}

function draw() {
  background(234,0,9);  
  text(mouseX+","+mouseY,mouseX,mouseY);

  if(keyDown("right_arrow")){
    sophia.x=sophia.x+2;
  }

  if(keyDown("left_arrow")){
    sophia.x=sophia.x-2;
  }

  if(keyDown("up_arrow")){
    sophia.y=sophia.y-2;
  }

  if(keyDown("down_arrow")){
    sophia.y=sophia.y+2;
  }
  edges=createEdgeSprites();
  sophia.bounceOff(edges);

  sophia.bounceOff(card1);
  sophia.bounceOff(card2);
  sophia.bounceOff(card3);
  sophia.bounceOff(card4);
  sophia.bounceOff(card5);
  sophia.bounceOff(card6);
  sophia.bounceOff(card7);
  sophia.bounceOff(card8);
  sophia.bounceOff(card9);
  sophia.bounceOff(card10);
  sophia.bounceOff(card11);
  sophia.bounceOff(card12);

  if(sophia.isTouching(tar)){
    textSize(24);
    fill("yellow");
    text("you win",150,190)
  }
  

  
  drawSprites();
}