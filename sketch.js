var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,300);
  
  monkey = createSprite(50,240,10,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,280,1200,10);
  ground.velocityX=-4;
  //ground.x = ground.width/2;
  //console.log(ground.x)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
  
}


function draw() {
  background("lightgreen");
  
  stroke("black")
  textSize(15);
  fill("black");
  text("Survival Time: " + score, 450,50);
  score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<0){
   ground.x = ground.width/2; 
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  food();
  spawnObstacle();
  
  drawSprites();
}

function food(){
  if(frameCount%80 === 0){
    fruit = createSprite(580,Math.round(random(120,200)),10,10);
    fruit.velocityX = -5;
    fruit.addAnimation("banana", bananaImage);
    fruit.scale = 0.07;
    fruit.lifetime = 150;
    
    monkey.depth = fruit.depth + 1;
    FoodGroup.add(fruit);
  }
}

function spawnObstacle(){
  if(frameCount%300 === 0){
    obstacle = createSprite(580,250,10,10);
    obstacle.velocityX = -5;
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale = 0.14;
    obstacle.lifetime = 150;
    
    monkey.depth = obstacle.depth + 1;
    obstacleGroup.add(obstacle);
  }
}


