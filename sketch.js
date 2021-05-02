var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg
var fairyVoice
var holder


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    fairyVoice=loadSound("sound/JoyMusic.mp3")
    
}

function setup() {
	createCanvas(800, 750); 

//create fairy sprite and add animation for fairy
    fairy=createSprite(200,500)
    fairy.addAnimation("fairy",fairyImg)
	fairy.scale=0.20

//write code to play fairyVoice sound
if (keyCode === UP_ARROW) {
	fairyVoice.play() 
}


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    holder = createSprite(650,500,5,5)	
    holder.visible= false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);






  //write code to stop star in the hand of fairy
if(fairy.x===550){
   fairy.velocityX=0;
}

if(star.collide(holder)){
	Matter.Body.setStatic(starBody,true); 
}

/*if(star.y===200){
	Matter.Body.setStatic(starBody,true); 
}*/


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === RIGHT_ARROW ){
		fairy.velocityX=2;
	}

	if(keyCode === LEFT_ARROW ){
		fairy.velocityX=-2;
	}
}