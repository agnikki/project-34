//Create variables here
var dog,dog_img,happyDog,database,foodStock,foodS=0;

function preload()
{
  dog_img=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(200,300,10,10);
  dog.addImage(dog_img);
  dog.scale=0.1;

  foodStock=database.ref('food');
  foodStock.on("value",(data)=>{
    foodS=data.val();
  });
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
  stroke("black");
  textSize(20);
 text("foodStock:"+ foodS, 200,100);
 
 text("Note:Press up arrow key to feed dog milk!",100,50);

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({
    food:x
  })
}

