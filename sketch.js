

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);


}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  

  if (keyDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }

if(keyDown(RIGHT_ARROW))
{
  background("red");
}
  
  drawSprites();
}

