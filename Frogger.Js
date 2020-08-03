var bobX = 300;
var bobY = 550;
var bobDia = 50;
var carV = 11;
var carX = -40;
var car2X = 500;
var car2V = -7.5;
var car3X = 300;
var car3V = 11;
var carY  = 110;
var car2Y = 260;
var car3Y = 410;
var carWidth = 100;
var carLength = 40;
var textX = 5;
var textY = 490;
var scoreboardX = 335;
var scoreboardY = 550;
var lives = 3;
var timerValue = 0;
var sbW = 260;
var sbL = 40;
var text2X = 25;
var text2Y = 70;
var wheelDia = 20;

function setup() {
  
  fill(225,225,225);//canvas
  createCanvas(600, 600);
  let button = createButton('restart');
  button.mousePressed(resetCode);
  background(4,80,2);
}

function draw() {
  background(4,80,2);
  fill(0,0,0);
  strokeWeight(1);
  stroke(225,225,225);
  rect(0,100,600,80);//road 1
  rect(0,250,600,80);//road 2
  rect(0,400,600,80);//road 3
  fill(0,250,0);
  ellipse(bobX,bobY,bobDia,bobDia);
  fill(0,0,0);
  ellipse(bobX-10,bobY-5,10,10);    
  ellipse(bobX+10,bobY-5,10,10);
  strokeWeight(3);
  line(bobX-10,bobY+10,bobX+10,bobY+10);
  drawCars()
  moveCars()
  carCrash()
  createScoreboard()
  
  
  if(bobY == 550) {
   stroke(255,0,0);
   fill(255,255,255);
   rect(textX,textY,200,86,10);
   fill(0,0,0);
   stroke(255,0,0);
   strokeWeight(1);
   textSize(12);
   text("GAME OBJECTIVE:",textX + 45,textY + 20);
   noStroke();
   text("Go back and forth, until you get hit", textX + 7,textY +40);
   text("Try to get the longest time", textX + 30, textY + 57);
  text("You have 3 lives", textX + 55, textY + 75);
  
 }

}

function keyPressed() {
  if (keyIsPressed && keyCode === UP_ARROW) {
    bobY -= 23;
  }
  if (keyCode === DOWN_ARROW) {
    bobY += 23;
  }
  if (keyCode === LEFT_ARROW) {
    bobX -= 23;
  }
  if (keyCode === RIGHT_ARROW) {
    bobX += 23;
  }
  
}

function drawCars() {
  fill(250,0,0);//car1
  noStroke();
  rect(carX,carY,carWidth,carLength);
  rect(carX + 20,carY -20,60,20);
  stroke(255,255,255);
  fill(0,0,0);
  ellipse(carX + 20,carY + 40,wheelDia,wheelDia);
  ellipse(carX + 80,carY + 40,wheelDia,wheelDia);
 
  fill(250,0,0);//car2
  noStroke();
  rect(car2X,car2Y,carWidth,carLength);
  rect(car2X + 20,car2Y -20,60,20);
  stroke(255,255,255);
  fill(0,0,0);
  ellipse(car2X + 20,car2Y + 40,wheelDia,wheelDia);
  ellipse(car2X + 80,car2Y + 40,wheelDia,wheelDia);
  
  fill(250,0,0);//car3
  noStroke();
  rect(car3X,car3Y,carWidth,carLength);
  rect(car3X + 20,car3Y -20,60,20);
  stroke(255,255,255);
  fill(0,0,0);
  ellipse(car3X + 20,car3Y + 40,wheelDia,wheelDia);
  ellipse(car3X + 80,car3Y + 40,wheelDia,wheelDia);
  noStroke();
}

function moveCars() {
   
  carX += carV;
  
  if (carX >= width) {
    carX = -80
  }
  
  car2X += car2V;
  
  if (car2X <= -100) {
    car2X = 580
  }
  
  car3X += car3V;
  
  if (car3X >= width) {
    car3X = -80
  }
}

function carCrash() {
  if ((bobX > car3X && bobX < car3X + carWidth) && (bobY > car3Y && bobY < car3Y + carLength))
  {
   bobX = 300;
   bobY = 545;
   lives -= 1;
  
  }
  if ((bobX > car2X && bobX < car2X + carWidth) && (bobY > car2Y && bobY < car2Y + carLength))
  {
   bobX = 300;
   bobY = 545;
   lives -= 1;
  }
  if ((bobX > carX && bobX < carX + carWidth) && (bobY > carY && bobY < carY + carLength))
  {   
   bobX = 300;
   bobY = 545;
   lives -= 1;
  }
  if ((bobX > car3X + 80 && bobX < car3X + 80 + wheelDia/2) && (bobY > car3Y + 40 && bobY < car3Y + 40 + wheelDia/2))
  {
   bobX = 300;
   bobY = 545;
   lives -= 1;
  }
  if ((bobX > car2X + 20 && bobX < car2X + 20 + wheelDia/2) && (bobY > car2Y + 40 && bobY < car2Y + 40 + wheelDia/2)) 
  {
   bobX = 300;
   bobY = 545;
   lives -= 1;
  }
   if ((bobX > carX + 80 && bobX < carX + 80 + wheelDia/2) && (bobY > carY + 40 && bobY < carY + 40 + wheelDia/2))
  {
   bobX = 300;
   bobY = 545;
   lives -= 1;
  }
  
  if ( lives == 0) {
  stroke(255,0,0);
  strokeWeight(10);
  rect(25,70,550,450,10);
  fill(0,0,0);
  textSize(50);
  strokeWeight(5)
  text("GAME OVER",text2X + 120,text2Y + 150)
  textSize(35);
  text("RESTART TO PLAY AGAIN",text2X + 60,text2Y + 275)
    
  bobX = 200;
  bobY = 200;
  timerValue = 0;
  }
}
 function makeRules() {
   stroke(255,0,0);
   fill(255,255,255);
   rect(textX,textY,200,86,10);
   fill(0,0,0);
   stroke(255,0,0);
   strokeWeight(1);
   text("GAME OBJECTIVE:",textX + 45,textY + 20);
   noStroke();
   text("Go back and forth, until you get hit", textX + 7,textY +40);
   text("Try to get the longest time", textX + 30, textY + 60);
 }

function createScoreboard() {
  stroke(5)
  strokeWeight(4);
  fill(235,220,220);
  rect(scoreboardX,scoreboardY,sbW,sbL,10);
  strokeWeight(3);
  fill(215,220,5);
  stroke(0,0,0);
  textSize(20);
  text("Lives: " + lives, scoreboardX + 10, scoreboardY + 25);
  
  timerValue = timerValue + 1/60 
  timer= Math.round(timerValue)
  text("Time Alive: " + timer,scoreboardX + 100,scoreboardY + 25);
  
  line(scoreboardX + 90,scoreboardY,scoreboardX + 90,scoreboardY + 40);
}

function resetCode() {
 bobX = 300;
 bobY = 550;
 lives = 3;
 timerValue = 0;
}
