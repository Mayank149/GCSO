var car;
var speed;
var weight;
var obstacle;


function setup() {
  createCanvas(1400,400);
  
 car = createSprite(50,200,50,50);
 obstacle = createSprite(1300,200,60,height/2);
 obstacle.shapeColor = (80,80,80);

 speed = random(55,90);
 weight = random(400,1500);

car.velocityX = speed;

}

function draw() {
  background("black"); 
  
  if(car.x-obstacle.x < car.width/2+obstacle.width/2 && 
    obstacle.x-car.x < car.width/2+obstacle.width/2 && 
    obstacle.y-car.y < car.height/2+obstacle.height/2 && 
    car.y-obstacle.y < car.height/2+obstacle.height/2){
     
    car.x = 1250;  
    car.velocityX = 0; 

    if(0.5*weight*speed*speed/22500 < 100){

     car.shapeColor = "green";

    }
    if(0.5*weight*speed*speed/22500 > 100 && 0.5*weight*speed*speed/22500 < 180){

      car.shapeColor = "yellow";
 
     }

     if(0.5*weight*speed*speed/22500 > 180){

      car.shapeColor = "red";
 
     }

    }
  
  

  drawSprites();
}