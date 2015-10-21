/**
 * http://p5js.org/examples/demos/Hello_P5_Interactivity_1.php
 */

 // for red, green, and blue color values
 var r, g, b;

 function setup() {
   createCanvas(720, 400);
   // Pick colors randomly
   r = random(255);
   g = random(255);
   b = random(255);
 }

 function draw() {
   background(127);
   // Draw a circle
   strokeWeight(2);
   stroke(r, g, b);
   fill(r, g, b, 127);
   ellipse(360, 200, 200, 200);
 }

 // When the user clicks the mouse
 function mousePressed() {
   // Check if mouse is inside the circle
   var d = dist(mouseX, mouseY, 360, 200);
   if (d < 100) {
     // Pick new random color values
     r = random(255);
     g = random(255);
     b = random(255);
   }
 }
