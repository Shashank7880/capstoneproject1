const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var canvas;

var block1, block2, block3, block4;

function setup() {
  canvas = createCanvas(400, 400);
  console.log(canvas);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var player_options = {
    isStatic: false,
    frictionAir:0.01,
    restitution:0.4,
  };

  block1 = new Block(4, 120, 15, 550, "#555555");
  block2 = new Block(180, 250, 15, 550, "#555555");
  block3 = new Block(35, 5, 280, 10, "#555555");
  block4 = new Block(35, 395, 280, 10, "#555555");

  player = Bodies.circle(100, 100, 5, player_options);
  World.add(world, player);
}

function draw() {
  background("#888888");
  Engine.update(engine);

  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);

  block1.display();
  block2.display();
  block3.display();
  block4.display();

  fill("#FF9900");
  noStroke();
  ellipseMode(RADIUS);
  ellipse(player.position.x, player.position.y, 5, 5);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.position.y -= 3;
    camera.y += 3;
  }

  if (keyCode === DOWN_ARROW) {
    player.position.y += 3;
    camera.y -= 3;
  }

  if (keyCode === LEFT_ARROW) {
    player.position.x -= 3;
    camera.x -= 3;
  }

  if (keyCode === RIGHT_ARROW) {
    player.position.x += 3;
    camera.x += 3;
  }
}
