var arrowimg,bowimg,fish1,fish2,fish3,fish4;
var count=0;
var score = 0;
function preload()
{
  arrowimg = loadImage("arrow.png");
  bowimg = loadImage("bow.png");
  fish1i = loadImage("fish1.png");
  fish1a = loadImage("fish1a.png");
  fish2i = loadImage("fish2.png");
  fish2a = loadImage("fish2a.png");
  fish3i = loadImage("fish3.png");
  fish3a = loadImage("fish3a.png");
  fish4i = loadImage("fish4.png");
  fish4a = loadImage("fish4a.png");
  boatimg = loadImage("boat.png");
  boatimg2 = loadImage("boat1.png");
  oceanimg = loadImage("ocean.jpg");
  arrowsound = loadSound("arrow.mp3");
}
function setup()
{
  createCanvas(1600,800);
  wall1 = createSprite(800,0,1600,10);
  wall2 = createSprite(800,800,   0,10);
  wall3 = createSprite(0,400,10,800);
  wall4 = createSprite(1600,400,10,800);

  boat = createSprite(800,230,50,50);
  boat.addImage(boatimg);
  boat.velocityX =10;
  boat.scale = 0.5;
  
  bow=createSprite(900,230,50,50);
  bow.addImage(bowimg);
  bow.scale = 0.5;
  
  fish1 =  createSprite(200,700,30,30);
  fish1.velocityX=15

  fish2 =  createSprite(500,700,30,30);
  fish2.scale = 0.25;
  fish2.velocityX= -16
  
  fish3 =  createSprite(800,700,30,30);
  fish3.scale = 0.25;
  fish3.velocityX= -20
  
  fish4 =  createSprite(1200,700,30,30);
  fish4.scale = 0.25;
  fish4.velocityX= 13
  
  fish5 =  createSprite(200,600,30,30);
  fish5.scale = 0.5;
  fish5.velocityX= -30

  fish6 =  createSprite(500,600,30,30);
  fish6.scale = 0.25;
  fish6.velocityX= 16
  
  fish7 =  createSprite(800,600,30,30);
  fish7.scale = 0.25;
  fish7.velocityX= 20
  
  fish8 =  createSprite(1200,600,30,30);
  fish8.scale = 0.25;
  fish8.velocityX= -15

  arrowgroup = new Group();
  
}

function draw()
{
  background(oceanimg)
  drawSprites();
  boat.bounceOff(wall3);
  boat.bounceOff(wall4);
  if(boat.velocityX>0){
      boat.addImage(boatimg2);
      boat.scale = 0.5;
  }
  if(boat.velocityX<0){
     boat.addImage(boatimg);
     boat.scale = 0.5;
  }
  
  fish1.bounceOff(wall3);
  fish1.bounceOff(wall4);
  if(fish1.velocityX>0){
      fish1.addImage(fish1a);
      fish1.scale = 0.25;
  }
  if(fish1.velocityX<0){
      fish1.addImage(fish1i);
      fish1.scale = 0.25;
  }
  
  fish2.bounceOff(wall3);
  fish2.bounceOff(wall4);
  
  if(fish2.velocityX>0){
      fish2.addImage(fish2a);
      fish2.scale = 0.4;
  }
  if(fish2.velocityX<0){
      fish2.addImage(fish2i);
      fish2.scale = 0.4;
  }
  
  fish3.bounceOff(wall3);
  fish3.bounceOff(wall4);
  
  if(fish3.velocityX>0){
      fish3.addImage(fish3a);
      fish3.scale = 0.3;
  }
  if(fish3.velocityX<0){
      fish3.addImage(fish3i);
      fish3.scale = 0.3;
  }
  
  fish4.bounceOff(wall3);
  fish4.bounceOff(wall4);
  
  if(fish4.velocityX>0){
      fish4.addImage(fish4a);
      fish4.scale = 0.4;
  }
  if(fish4.velocityX<0){
      fish4.addImage(fish4i);
      fish4.scale = 0.4;
  }
  
  
  fish5.bounceOff(wall3);
  fish5.bounceOff(wall4);
  
  if(fish5.velocityX>0){
      fish5.addImage(fish1a);
      fish5.scale = 0.3;
  }
  if(fish5.velocityX<0){
      fish5.addImage(fish1i);
      fish5.scale = 0.3;
  }
  
  fish6.bounceOff(wall3);
  fish6.bounceOff(wall4);
  
  if(fish6.velocityX>0){
      fish6.addImage(fish2a);
      fish6.scale = 0.4;
  }
  if(fish6.velocityX<0){
      fish6.addImage(fish2i);
      fish6.scale = 0.4;
  }
  
  
  fish7.bounceOff(wall3);
  fish7.bounceOff(wall4);
  
  if(fish7.velocityX>0){
      fish7.addImage(fish3a);
      fish7.scale = 0.4;
  }
  if(fish7.velocityX<0){
      fish7.addImage(fish3i);
      fish7.scale = 0.4;
  }
  
  fish8.bounceOff(wall3);
  fish8.bounceOff(wall4);
  
  if(fish8.velocityX>0){
      fish8.addImage(fish4a);
      fish8.scale = 0.4;
  }
  if(fish8.velocityX<0){
      fish8.addImage(fish4i);
      fish8.scale = 0.4;
  }
  
  
  bow.x=boat.x
  bow.bounceOff(wall3);
  bow.bounceOff(wall4);
  if(count<10){
  if(touches.length > 0 || keyWentDown ("SPACE"))  
    {
      arrow();
      count++
       touches = [];
    }
  }
     
   if(arrowgroup.isTouching(fish1)) {
      arrowsound.play();
      arrowgroup.destroyEach();  
      fish1.destroy();
      score =  score + 2;
   } 
  else if(arrowgroup.isTouching(fish2)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish2.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish3)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish3.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish4)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish4.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish5)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish5.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish6)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish6.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish7)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish7.destroy();
      score =  score + 2;
   }
   else if(arrowgroup.isTouching(fish8)) {
      arrowsound.play();
      arrowgroup.destroyEach();
      fish8.destroy();
      score =  score + 2;
   }
  
  textSize(40);
  fill(255);
  strokeWeight(8);
  stroke(0);
  text("Score : " + score , 40 ,50);
  
  
  

}
function arrow(){
  ar=createSprite(800,230,50,50)
  ar.x=bow.x
  ar.addImage(arrowimg)
  ar.scale=0.15
  ar.velocityY=3
  arrowgroup.add(ar)
}
