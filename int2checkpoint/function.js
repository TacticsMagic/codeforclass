/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(500, 500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
   
   
    
};



noStroke(); //no borders on the shapes

drawRandom = function(x,y) {
    background(random(255), random(255), random(255)); //background
    fill(random(255), random(255), random(255));
    ellipse(x + 15, y - 50, 100, 100); //face
    fill(random(255), random(255), random(255));
    ellipse(x - 10, y - 90, 50, 50); //left eye
    fill(random(255), random(255), random(255));
    ellipse(x + 30, y - 90, 50, 50); //right eye
    fill(random(255), random(255), random(255));
    ellipse(x + 5, y - 30, 60, 30); //mouth
    fill(random(255), random(255), random(255));
    rect(x + 15, y - 100, 15, 15); //pupil
    fill(random(255), random(255), random(255));
    rect(x - 25, y - 100, 15, 15); //pupil
}


//Whenever mouse is clicked the function will occur
mouseClicked = function(){
    drawRandom(mouseX, mouseY);
}
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
