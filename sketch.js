const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var drops = [];

var rand, thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
}

function setup(){

engine = Engine.create();

world  = engine.world;

var canvas = createCanvas(400 , 600);

if (frameCount % 150 === 0) {
    for (var i = 0; i < 100; i++) {
    drops.push(new  Drops( random ( 0, 400 ), random ( 0, 400 ) ) );
        }
    }
}

function draw(){

    Engine.update(engine);
    background(0, 0, 0);

    for (var i = 0; i < 100; i++) {
    drops[i].display();
    drops[i].updateY()

    }

    rand = Math.round(random(1, 4) );
    if (frameCount%80 === 0){
  
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    switch(rand){
        
        case 1 : thunder.addImage(thunder1);
        break;
        case 2 : thunder.addImage(thunder2);
        break;
        case 3 : thunder.addImage(thunder3);
        break;
        case 4 : thunder.addImage(thunder4);
        default : break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    //textSize(15);
    //fill("white");
    //stroke("white");
    //text("Y position: " + mouseY, mouseX, mouseY);

    drawSprites();

}