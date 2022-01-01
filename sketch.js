var path,boy,coins,drink,power,bomb, gameOver, life, obstacle1, obstacle2;

var pathImg,boyImg,coinImg,drinkImg,powerImg,bombImg,themeSound, gameoverImg, lifeImg, obstacle1Img, obstacle2Img;

var i;

var coinCollected = 0;
var drinkTaken = 0;
var score = 0;
var e = 0;
var b = 0;

var coinG,drinkG,powerG,bombG;

function preload(){
  pathImg = loadImage("assets/path.png");
  boyImg = loadAnimation("assets/Jake1.png","assets/Jake2.png","assets/jake3.png","assets/jake4.PNG","assets/jake5.png");
  coinImg = loadImage("assets/coin.png");
  drinkImg = loadImage("assets/energyDrink.png");
  powerImg = loadImage("assets/jetpack.png");
  bombImg = loadImage("assets/bomb.png");
  themeSound = loadSound("assets/Subway-Surfers-theme-song.mp3");
  gameOverImg = loadImage("assets/game-over-1.jpeg");
  lifeImg = loadImage("assets/life.png");
  obstacle1Img = loadImage("assets/obstacle1.png");
  obstacle2Img = loadImage("assets/obstacle2.png");
}

function setup(){
  themeSound.loop();
  
  createCanvas(400,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;



boy = createSprite(160,340,20,20);
boy.addAnimation("JakeRunning",boyImg);
  

  
  
coinG=new Group();
drinkG=new Group();
powerG=new Group();
bombG=new Group();
obstacle1G=new Group();
obstacle2G=new Group();

}

function draw() {
  background(0);
  
  if(score<= 1000){
  path.velocityY = 4;
  text("You Won!", 200, 200);
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

  if(path.y > 400 ){
    path.y = height/2;
  }
    
 if(score<= 100){
   path.velocityY= 5;
   text("Difficulty Level Increased", 200, 50);
 }
  
 if(score<= 200){
  path.velocityY= 6;
  text("Difficulty Level Increased", 200, 50);
}    

if(score<= 300){
  path.velocityY= 7;
  text("Difficulty Level Increased", 200, 50);
}
  
if(score<= 400){
  path.velocityY= 8;
  text("Difficulty Level Increased", 200, 50);
}

if(score<= 500){
  path.velocityY= 9;
  text("Difficulty Level Increased", 200, 50);
}

if(score<= 600){
  path.velocityY= 10;
  text("Difficulty Level Increased", 200, 50);
}

if(score<= 700){
  path.velocityY= 11;
  text("Difficulty Level Increased", 200, 50);
}

if(score<= 800){
  path.velocityY= 12;
  text("Difficulty Level Increased", 200, 50);
}

if(score<= 900){
  path.velocityY= 13;
  text("Difficulty Level Increased", 200, 50);
}
       
  var select_sprites = Math.round(random(1,4));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createCoins();
    } else if (select_sprites == 2) {
      createEnergyDrink();
    }else if (select_sprites == 3) {
      createPower();
    }else if (select_sprites == 4) {
      createObstacle1();
    }else if (select_sprites == 5){
      createObstacle2()
    }
    }else{
      createBomb();
    }

  

    if (coinG.isTouching(boy)) {
      coinG.destroyEach();
      coinCollected=coinCollected+1;
      text("Wow!", 200, 200);
    }
    else if (drinkG.isTouching(boy)) {
      drinkG.destroyEach();
      drinkTaken=drinkTaken+1;
      text("Bravo!", 200, 200);
      
    }else if(powerG.isTouching(boy)) {
      powerG.destroyEach();
      e = e + 1;
      path.velocityY = path.velocityY + 15;
      coinG.setVelocityYEach(15);
      drinkG.setVelocityYEach(15);
      text("Good Job!", 200, 200);
      
    }else if(bombG.isTouching(boy)) {
      bombG.destroyEach();
      b = b + 1;
      e = e - 1;
      path.velocityY = path.velocityY - 10;
      coinG.setVelocityYEach(10);
      drinkG.setVelocityYEach(10);
      text("Oh No!", 200, 200);
        
    }else if(obstacle1G.isTouching(boy)) {
      obstacle1G.destroyEach();
      b = b + 1;
      e = e - 1;
      path.velocityY = path.velocityY - 10;
      coinG.setVelocityYEach(10);
      drinkG.setVelocityYEach(10);
      text("Oh No!", 200, 200);
    
    }else{
      if(obstacle2G.isTouching(boy)){
      obstacle2G.destroyEach();
      b = b + 1;
      e = e - 1;
      path.velocityY = path.velocityY - 10;
      coinG.setVelocityYEach(10);
      drinkG.setVelocityYEach(10);
      text("Oh No!", 200, 200);
    }
  }
  
  drawSprites();
  textSize(20);
  stroke("black");
  fill("yellow");
  text("Coins: "+coinCollected,290,30);
  fill("aqua");
  text("Drinks: "+drinkTaken,45,30);
  fill("orange");
  text("SCORE: " + score, 140, 40);
  fill("violet");
  text("Energy: " + e, 45, 60 );
  fill("lightGreen");
  text("Bomb: " + b, 290, 60);
  fill("red");
  text("Life:"+ e, 180, 70);
  fill("lightGreen");
  text("Obstacle1: " + b, 290, 90);
  fill("lightGreen");
  text("Obstacle2: " + b, 45, 90);
    
score = score + Math.round(frameRate()/60);
  
}
  if(score>= 1000){
    reset();
  }
}



function createCoins() {
  if (World.frameCount % 80 == 0) {
  var coins = createSprite(Math.round(random(50, 450),40, 10, 10));
  coins.addImage(coinImg);
  coins.scale=0.3;
  coins.velocityY = 3;
  coins.lifetime = 150;
  coinG.add(coins);
  }
}

function createEnergyDrink() {
  if (World.frameCount % 80 == 0) {
  var drink = createSprite(Math.round(random(50, 350),40, 10, 10));
  drink.addImage(drinkImg);
  drink.scale=0.09;
  drink.velocityY = 3;
  drink.lifetime = 150;
  drinkG.add(drink);
}
}

function createPower() {
  if (World.frameCount % 80 == 0) {
  var power = createSprite(Math.round(random(10, 650),40, 10, 10));
power.addImage(powerImg);
  power.scale=0.3;
  power.velocityY = 3;
  power.lifetime = 150;
  powerG.add(power);
  }
}

function createBomb(){
  if (World.frameCount % 80 == 0) {
  var bomb = createSprite(Math.round(random(10, 350),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.09;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bombG.add(bomb);
  }
}

  function createObstacle1(){
    if (World.frameCount % 80 == 0) {
    var obstacle1 = createSprite(Math.round(random(50, 650),40, 10, 10));
    obstacle1.addImage(obstacle1Img);
    obstacle1.scale=0.02;
    obstacle1.velocityY = 3;
    obstacle1.lifetime = 150;
    obstacle1G.add(obstacle1);
    }
  }

  function createObstacle2(){
    if (World.frameCount % 80 == 0) {
    var obstacle2 = createSprite(Math.round(random(10, 450),40, 10, 10));
    obstacle2.addImage(obstacle2Img);
    obstacle2.scale=0.02;
    obstacle2.velocityY = 3;
    obstacle2.lifetime = 150;
    obstacle2G.add(obstacle2);
    }
  }

function reset(){

  text("The Game has Restarted",50,200);
  score = 0;
  drinksCollected = 0;
  coinsCollected = 0;
  b= 0;
  e = 0;
  background(0);
  
  if(score<= 1000){
  path.velocityY = 4;
   
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

  if(path.y > 400 ){
    path.y = height/2;
  } 
  
  }       
}