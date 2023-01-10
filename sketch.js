var golem,golem_running_r,golem_running_l;
var background1,backgroundimg;

var enemie,enemieimg;

function preload() {
  enemieimg = loadImage("Images/enemie1.png");

  golem_running_r = loadAnimation("Images/GR1.png","Images/GR2.png","Images/GR3.png","Images/GR4.png","Images/GR5.png","Images/GR6.png","Images/GR7.png","Images/GR8.png","Images/GR9.png","Images/GR10.png","Images/GR11.png");
  golem_running_l = loadAnimation("Images/GL1.png","Images/GL2.png","Images/GL3.png","Images/GL4.png","Images/GL5.png","Images/GL6.png","Images/GL7.png","Images/GL8.png","Images/GL9.png","Images/GL10.png","Images/GL11.png");
  backgroundimg = loadImage("Images/dungeon_background.jpg");
}

function setup() {
  createCanvas(800,400);

  background1 = createSprite(400, 400, 800, 400);
  background1.addImage(backgroundimg);
  background1.x = background1.width/2;
  
  golem = createSprite(70,352);
  golem.addAnimation("running_right",golem_running_r);
  golem.addAnimation("running_left",golem_running_l);

  enemiesGroup = new Group ();


}

function draw() {
  background(0);  

  background1.velocityX = -3;

  if (background1.x <0) {
    background1.x = background1.width/2;
  }

  if(keyDown(LEFT_ARROW)){
    golem.x = golem.x - 1.5;
    golem.changeAnimation("running_left",golem_running_l);
  }

  if(keyDown(RIGHT_ARROW)){
    golem.x = golem.x + 1.5;
    golem.changeAnimation("running_right",golem_running_r);
  }
  drawEnemie();
  drawSprites();
}

function drawEnemie(){

  if(frameCount % 80 == 0){

  
  enemie = createSprite(800,360,50,30)
  enemie.addImage(enemieimg);
  enemie.velocityX=-5;

  enemie.scale = 0.5;
  enemie.lifeTime = 500;
}
}