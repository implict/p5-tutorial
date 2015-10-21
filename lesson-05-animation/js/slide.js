/**
 * slide
 * @author Jiwon Park
 * @contact implict@gmail.com
 *
 * lib list
 * https://github.com/ashblue/simple-tween-js
 * (reference: http://blueashes.com/2012/web-development/javascript-easing-library/)
 */

 var bg1, bg2, heading;
 var bgArray = [];
 var bgIndex = 0;
 var screenWidth = 375;
 var screenHeight = 667;
 var buttonPositions = [];
 var bgOffset = 0;

function setup() {
  var myCanvas = createCanvas(screenWidth, screenHeight);
  myCanvas.parent('slide-container');
  bg1 = loadImage("assets/main-bg-1.png");
  bg2 = loadImage("assets/main-bg-2.png");
  heading = loadImage("assets/main-heading.png");

  bgArray = [bg1, bg2];
}

function draw() {
  setBg();
  setHeading();
  setButton();
}

function setBg() {
  image(bgArray[bgIndex], 0, 0, screenWidth, screenHeight);

  // for (var i=0; i<2; i++)
  // {
  //   image(bgArray[i], i * screenWidth + bgOffset, 0, screenWidth, screenHeight);
  // }
}

function setHeading() {
  var headingWidth = heading.width * .5;
  var headingHeight = heading.height * .5;
  image(heading, (screenWidth - headingWidth)/2, 110, headingWidth, headingHeight);
}

function setButton() {
  for (var i=0; i<4; i++) {
    var btnX = screenWidth/2 - 16 + (i * 16);
    var btnY = 560;
    noFill();
    stroke(255);
    ellipse(btnX, btnY, 8, 8);
    buttonPositions[i] = [btnX, btnY];
  }
}

function mousePressed() {
  // Check if mouse is inside the circle
  for (var i=0; i<4; i++) {
    var d = dist(mouseX, mouseY, buttonPositions[i][0], buttonPositions[i][1]);
    if (d < 4) {
      console.log(i);
      bgIndex = i;
    }
  }
}
