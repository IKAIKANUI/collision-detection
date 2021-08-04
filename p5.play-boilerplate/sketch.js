function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(350, 200, 40, 40);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 40, 40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
  background("black");
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  //if distance(connection between the their centres)< (fixedrect.width/2+movingrect.width/2)
  if (Math.abs(fixedRect.x - movingRect.x) < (fixedRect.width / 2 + movingRect.width / 2) && Math.abs(fixedRect.y - movingRect.y) < (fixedRect.height / 2 + movingRect.height / 2)) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  // |2|=2
  // |-2|=2


  drawSprites();

}