/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
var xPos = 5
var yPos = 5
draw = function() {
    
    
    ellipse(mouseX, mouseY, 30, 30);
    
    if (mouseX < 200){
        fill(0, 0, 0)
        stroke(23,20,200)
        strokeWeight(10)
        background();
    }
    else{
        fill(255, 255, 255)
        rect(50, 50, 35, 35);
        xPos = xPos + 2
        yPos = yPos + 2
        triangle(xPos, yPos, 25, 25)
    }
    if (mouseY > 150){
        fill(100, 75, 30)
        strokeWeight(4)
        stroke(30, 40, 100)
    }
    else{
        triangle(mouseX, mouseY, 30, 25, 4, 40);
        triangle(100, 350, 25, 200, 30, 30)
    }
    if (mouseY < 200){
        rect(200, 35, 50, 100)
    }
    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
