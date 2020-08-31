//Create variables here
var dog,dog_img,happyDog,database,foodStock,food;

function preload()
{
  dog_img=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  dog=createSprite(40,10,10,10);
  dog.addImage(dog_img);

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(happyDog);
}
readStock();
  drawSprites();
  //add styles here
 text("foodStock:"+ food);
 fill(black);
 text("Note:Press up arrow key to feed dog milk!");
 fill(white);
}
function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

