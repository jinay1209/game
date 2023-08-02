var ob1, ob2, ob1_i, ob2_i, jet, jet_i, missile, missile_i, bg

function preload(){
ob1_i = loadImage("asteroid 2.png");
ob2_i = loadImage("asteroid-2.png");
jet_i = loadImage("jet.png");
missile_i = loadImage("missile.png");
bg_i = loadImage("background.png");
boom= loadImage("boom img.png")
}


function setup(){
  createCanvas(1000, windowHeight)

  sky= createSprite (500,500,1000,1500)
  sky.addImage (bg_i);
  sky.scale=4;
  sky.velocityY = 2;

  jet = createSprite (500,1080,30,30);
  jet.scale=(0.5)
  jet.addImage(jet_i)
}


function draw(){
  background("white");

  if(sky.y >700){
    sky.y = 650
  }

  if(keyDown("space")){
    shoot()
  }

  if(keyDown("left_arrow")){
    jet.x -=5;
  }
  
  if(keyDown("right_arrow")){
    jet.x += 5;
  }

  if(keyDown("up_arrow")){
    jet.y -= 5;
  }

  if(keyDown("down_arrow")){
    jet.y += 5;
  }

 
  spawnObstacle()
  drawSprites()
}

function shoot(){
  var missile = createSprite(jet.x-35, jet.y , 5,10)
  missile.addImage (missile_i)
  missile.scale = 0.15
  missile.velocityY = -5

  var missile2 = createSprite(jet.x+35 , jet.y , 5,10)
  missile2.addImage (missile_i)
  missile2.scale = 0.15
  missile2.velocityY = -5
}

function spawnObstacle(){
   y=Math.round(random(100,800)) 
  if(frameCount % 200 ===0){
    
    obstacle = createSprite (1010 , y , 20,20)
    obstacle.velocityX = -5;
    obstacle.velocityY = 3.5;
    obstacle.scale = 0.25
    a = Math.round(random(1,4))
    switch(a){
      case 1 : obstacle.addImage(ob1_i)
      break;
      case 2 : obstacle.addImage(ob2_i)
      break;
      case 3 : obstacle.addImage(ob1_i)
      break;
      case 4 : obstacle.addImage(ob2_i)
      break;
      default: break;
    }


    
  }
}