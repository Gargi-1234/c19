var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;

var gameState = "play";

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  spookySound.loop();
  tower = createSprite(300, 300);
  tower.addImage(towerImg);
  tower.velocityY = 1;
  

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();

  ghost = createSprite(200, 200, 50, 50);
  ghost.scale = 0.3;
  ghost.addImage(ghostImg);
  
  
}

function draw() {
  background(0);

  if(tower.y > 400){
     tower.y = 300
     }
  
  spawnDoors();
  
  
  if(keyDown("space")){
    ghost.velocityY = -1
  }
  
  ghost.velocityY = ghost.velocityY + 0.8
  
  
  if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x + 2
  }
  
  
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x - 2
  }
 
   
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  
  
  
  drawSprites();
  
}

function spawnDoors(){

  if(frameCount % 160 === 0){
    door = createSprite(300,-30) 
    door.addImage(doorImg)
    door.x = Math.round(random(150,400))
    door.velocityY = 1
    doorsGroup.add(door)
    door.lifetime = 700
    
    climber = createSprite(300,0)
    climber.addImage(climberImg)
    climber.x = door.x
    climber.velocityY = 1
    climber.lifetime = 700
    climbersGroup.add(climber)
    
   invisibleBlock = createSprite(300,0)
    climber.addImage(climberImg)
    climber.x = door.x
    climber.velocityY = 1
    climber.lifetime = 700
    climbersGroup.add(climber)
    
  ghost.depth = door.depth
  ghost.depth += 1
    
     }
}
