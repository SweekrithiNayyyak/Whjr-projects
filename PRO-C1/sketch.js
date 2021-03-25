var b1, b2,b0,b4,b5,b7,b8,b9;

function setup() {
  createCanvas(400, 400);
  b0=new Building();
  b0.position=0;
  b0.floors=21;

  b1=new Building();
  b1.position=1;
  b1.floors=28;
  
  b2=new Building();
  b2.position=2;
  b2.floors=30;

  b3=new Buliding();
  b3.position=3;
  b3.floors=14;

  b4=new Building();
  b4.position=4;
  b4.floors=12;

  b5=new Building();
  b5.position=5;
  b5.floors=22;

  b7=new Building();
  b7.position=7;
  b7.floors=23;

  b8=new Building();
  b8.position=8;
  b8.floors=17;
  

  b9=new Building();
  b9.position=20;
  b9.floors=25;

 
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b0.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
}