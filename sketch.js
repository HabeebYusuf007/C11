var trackImg;
var runningSurfer;

function preload(){
  // Pre-load images
  trackImg = loadImage("path.png");
  runningSurfer = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  // Create sprites here

  // Moving background
  path = createSprite(200,200);
  path.addImage(trackImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy=createSprite(200,200);
  boy.addAnimation("running", runningSurfer);
  boy.scale = 0.06;

  left = createSprite(100,200);
  left.visible = false;

  right = createSprite(300,200);
  right.visible = false;
 
}

// Reset background
function draw() {
  background(0);  
  if(path.y > 400){
    path.y = height/2;
  }
  boy.x = mouseX;
  drawSprites();
}