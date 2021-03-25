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

 
}

function draw() {
  background(234,0,9);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
}