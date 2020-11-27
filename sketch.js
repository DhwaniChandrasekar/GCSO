var car;
var wall;
var speed;
var weight;
var def;

function setup() {
  createCanvas(1600,800);
  car = createSprite(300,200,100,100);
  wall = createSprite(1500,200,60,400);

  speed = Math.round(random(1,10));
  weight = Math.round(random(400,1500));

 car.velocityX = speed;

 

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x < (car.width + wall.width)/2){
    var def = 0.5 * weight * speed * speed/22500;
    if(def>180){
      car.shapeColor = color(225,0,0);
    }
    if(def < 100){
      car.shapeColor = color(0,255,0);
    }
    if(def < 180 && def>100){
      car.shapeColor = color(230,230,0);
    }
    }
}