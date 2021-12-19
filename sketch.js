var sea,ship1;
var sea,sea1;

function preload(){
  ship1 = loadAnimation("ship-1.png","ship-2.png");
 sea = loadImage("sea.png");
}

function setup(){
 sea = createCanvas(600,300);
sea.addAnimation("running",sea1)
sea.scale=0.5;
sea.velocityX=-1;
  

   
  ship=createSprite(50,200,20,50);
  ship.addAnimation("running",sea1);
  edges = createEdgeSprites();

  
  ship = scale=0.25;
  ship.x = 90;
  ship.y = 300;
  
}

function draw() {
  background(blue);
 if(keyDown("enter")){
   ship.velocityX = -5;
 }
 if(keyDown("Left")){
  ship.velocityX = 5;
}
if(keyDown("space")){
  ship.velocityX = 0;
}

  if(sea.x < 0){
    sea.x = sea.width/2;
    
  }
 ship.collid(edges[3])
  drawSprites();
}