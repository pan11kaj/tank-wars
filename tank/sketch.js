var tank,tank2;
var life =500;
var line;
var bullet;
var over,score=0;
function preload(){
  
 tankimg = loadImage("preview.png");
 tank2img = loadImage("2.png");
 bgimg =loadImage("dsf.jpg");   
 bulletimg = loadImage("t.jpg");
 fireimg = loadImage("fire.jpg");
 Overimg = loadImage("over.jpg")
}

function setup(){
    createCanvas(1350,620); 
    line = createSprite(700,300,1400,5);
    line.shapeColor = "red"  ;
    bullet = createSprite(800,500,30,30);
    bullet.addImage(bulletimg);
    bullet.scale =0.2;
    tank = createSprite(800,500,30,30);
     tank.addImage(tankimg);  
     tank.scale = 0.2;

     over =createSprite(200,200,600,400);
      over.addImage(Overimg)
     
        tank2 = createSprite(100,0,30,30);
        tank2.addImage(tank2img);  
        tank2.scale = 0.2;
        tank2.velocityY = 3;
        
    
   
    }
function draw(){
 background(bgimg);
over.visible = false;
 if(tank2.y>=600){
    tank2 = createSprite(random(40,800),0,30,30);
    tank2.addImage(tank2img);  
    tank2.scale = 0.2;
    tank2.velocityY = 3*2;
}

  if(bullet.y<= 0){
    bullet.y = 500;
    bullet.velocityY =0;
   
}
  if(keyCode === 32){
      bullet.velocityY = -8;
  
  }
  
 if(bullet.y === 500){
    bullet.x = tank.x;
    bullet.y = tank.y;
  
 }



if(keyIsDown(LEFT_ARROW)){
        tank.x+= -10;
         } 
if(keyIsDown(RIGHT_ARROW)){
            tank.x+= 10;
             } 
           
             drawSprites();
             textSize(40);
             fill("blue");
             text("your life:"+life,1090,350);
             text("Score:"+score,1090,320);
         if(tank.isTouching(tank2)){
             life-=10;
            
         }
         if(bullet.isTouching(tank2)){
            score+=1;
            tank2.velocityY =300;
             tank2.visible =false;
             
         }
    if(life <=0){
    image(Overimg,100,100,1200,400);
    life =0;
      tank.addImage(fireimg);
      tank.x= 200;
      tank2.velocityY = 0;
      bullet.velocityY =0;
    }

}










