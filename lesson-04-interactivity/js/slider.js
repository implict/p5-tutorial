/**
 * http://p5js.org/examples/demos/Hello_P5_Interactivity_2.php
 */

 // A HTML range slider
 var slider;

 function setup() {
   createCanvas(720, 400);
   // hue, saturation, and brightness
   colorMode(HSB, 255);
   // slider has a range between 0 and 255 with a starting value of 127
   slider = createSlider(0, 255, 127);
 }

 function draw() {
   background(127);
   strokeWeight(2);

   // Set the hue according to the slider
   stroke(slider.value(), 255, 255);
   fill(slider.value(), 255, 255, 127);
   ellipse(360, 200, 200, 200);
 }
