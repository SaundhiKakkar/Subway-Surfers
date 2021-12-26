var path,boy,coins,drink,power,bomb, gameOver;

var pathImg,boyImg,coinImg,drinkImg,powerImg,bombImg,themeSound, gameoverImg;

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
 
}

function setup(){
  themeSound.loop();
  
  createCanvas(400, 400);

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

}

function draw() {
  background(0);
  
  if(score<= 10000){
  path.velocityY = 4;
   
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

  if(path.y > 400 ){
    path.y = height/2;
  }
    

  
    
  
       
  var select_sprites = Math.round(random(1,4));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createCoins();
    } else if (select_sprites == 2) {
      createEnergyDrink();
    }else if (select_sprites == 3) {
      createPower();
    }else{
      createBomb();
    }
  }

  

    if (coinG.isTouching(boy)) {
      coinG.destroyEach();
      coinCollected=coinCollected+1;
    }
    else if (drinkG.isTouching(boy)) {
      drinkG.destroyEach();
      drinkTaken=drinkTaken+1;
      
    }else if(powerG.isTouching(boy)) {
      powerG.destroyEach();
      e = e + 1;
      path.velocityY = path.velocityY + 15;
      coinG.setVelocityYEach(15);
      drinkG.setVelocityYEach(15);
  
      
    }else{
      if(bombG.isTouching(boy)) {
      bombG.destroyEach();
      b = b + 1;
      e = e - 1;
      path.velocityY = path.velocityY - 10;
      coinG.setVelocityYEach(10);
      drinkG.setVelocityYEach(10);
    
        
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
function reset(){
  score = 0;
  drinksCollected = 0;
  coinsCollected = 0;
  b= 0;
  e = 0;
  background(0);
  
  if(score<= 10000){
  path.velocityY = 4;
   
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

  if(path.y > 400 ){
    path.y = height/2;
  }
 }
}
