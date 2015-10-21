/**
 * http://p5js.org/examples/demos/Hello_P5_Animation.php
 */

 // Where is the circle
 var x, y;

 function setup() {
   createCanvas(720, 400);
   // Starts in the middle
   x = width / 2;
   y = height;
 }

 function draw() {
   background(200);

   // Draw a circle
   stroke(50);
   fill(100);
   ellipse(x, y, 24, 24);

   // Jiggling randomly on the horizontal axis
   x = x + random(-1, 1);
   // Moving up at a constant speed
   y = y - 1;

   // Reset to the bottom
   if (y < 0) {
     y = height;
   }
 }
