
function setup(){

createCanvas(400,400);
pin1= createSprite(200,300,20,20);
pin2= createSprite(180,320,20,20);
pin3= createSprite(220,320,20,20);
pin4= createSprite(160,340,20,20);
pin5= createSprite(200,340,20,20);
pin6= createSprite(240,340,20,20);


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

  drawSprites();
  
    }
 