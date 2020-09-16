const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground;
var maxDrops = 100;
var drops = [];
var lightning, lightning_img, lightning_img2, lightning_img3;




function preload() {

    lightning_img = loadImage("Lightning.png");
    lightning_img2 = loadImage("Lightning 2.png");
    lightning_img3 = loadImage("Lightning 3.png");

}

function setup() {
    canvas = createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < maxDrops; i++) {

        drops.push(new Drops(random(0, 400), random(0, 400), 5));
        // drops.push(new Drops(random(0, 100), random(0, 100), 5));
        
    }

    ground = new Ground(200, 750, 400, 50);


    boy = new Umbrella(150, 100, 80);

    Engine.run(engine);
}

function draw() {
    background(0);
    ground.display();
    

  for(var i = 0; i < maxDrops; i++){

      drops[i].display();
      drops[i].update();
    }
    boy.display();

    if (frameCount % 50 === 0) {

        lightning = createSprite(random(100, 300), random(100, 200), 5, 5);
        
        lightning.lifetime = 7;
        
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: lightning.addImage("lightning",lightning_img);
                  break;
          case 2: lightning.addImage("lightning",lightning_img2);
                  break;
          case 3: lightning.addImage("lightning",lightning_img3);
                  break;
          default: break;
            }
        }
    drawSprites();

}

