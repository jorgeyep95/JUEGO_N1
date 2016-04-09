var fondo;
var imgNube;
var nube;
var imgfig1;
var piso;
var fig1; //declaro una variable para mi grupo
var obstaculos;
var animation;
var subir=false;


function preload(){
  fondo= loadImage("imagenes/imgFondo.png");  
  imgNube= loadImage("imagenes/nube.png");
  imgfig1= loadImage("imagenes/small_circle0001.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  nube= createSprite(random(width),0.2*height);
  nube.addImage(imgNube);
  nube.setCollider("rectangle",0,27,90,20);
  nube.debug=true;
  
  
  piso= createSprite(width/2,0.98*height,width,20);
  piso.shapeColor=color(255);
  piso.setCollider("rectangle",0,0,width,20);
  piso.debug=true;
  
  
  obstaculos= new Group();
  fig1= new Group(); // creando mi variable como grupo
  
 //baras//
for(var i=0; i<5;i++){
  var barras = createSprite(random(width),random(0.3*height,0.8*height),100,20);
  barras.shapeColor=color(255);
  obstaculos.add(barras);
}
  //puntos//
for(var i=0;i<50;i++){
  var dot = createSprite(random(width),0.955*height);

  dot.velocity.x=random(4);
  dot.velocity.y=random(-10);
  dot.addImage(imgfig1);
  fig1.add(dot);
}
  
  
 
  
}

function draw() {
  background(0);
  image(fondo,0,0);
  drawSprites();
  nube.position.x+=2;

  
  fig1.collide(obstaculos); // el que va a dentro de los parentesis es el que va a detener al otro objeto
  obstaculos.bounce(fig1);
  nube.collide(obstaculos);
  nube.overlap(fig1,collect)
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  
}

function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  // collector.changeAnimation("stretch");
  // collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered 
  //the event
  collected.remove();
}


