
function setup(){

createCanvas(400,400);
pin1= createSprite(200,300,20,20);
pin2= createSprite(180,320,20,20);
pin3= createSprite(220,320,20,20);
pin4= createSprite(160,340,20,20);
pin5= createSprite(200,340,20,20);
pin6= createSprite(240,340,20,20);

squaraid=createSprite(200,100,30,30);
squaraid.shapeColor="red";
squaraid.velocityX=4;
squaraid.velocityY=0.5;


}
function draw(){
  background(255);
  edges=createEdgeSprites();

  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);

  squaraid.bounceOff(edges);

  pin1.bounceOff(squaraid);
  pin2.bounceOff(squaraid);
  pin3.bounceOff(squaraid);
  pin4.bounceOff(squaraid);
  pin5.bounceOff(squaraid);
  pin6.bounceOff(squaraid);

  pin1.bounce(pin2);
  pin1.bounce(pin3);
  pin1.bounce(pin4);
  pin1.bounce(pin5);
  pin1.bounce(pin6);

  pin2.bounce(pin3);
  pin2.bounce(pin4);
  pin2.bounce(pin5);
  pin2.bounceOff(pin6);

  pin3.bounce(pin4);
  pin3.bounce(pin5);
  pin3.bounce(pin6);

  pin4.bounce(pin5);
  pin4.bounce(pin6);

  pin5.bounce(pin6);
  



  drawSprites();
  
    }
 