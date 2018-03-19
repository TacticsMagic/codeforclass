/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 10;
var yPos = 10;
var weight = 5;

draw = function() {
//Purple Circles//
strokeWeight(10);
stroke(100, 50, 100);
fill(90, 20, 100);
ellipse(xPos, yPos, 30, 30);
xPos = xPos + 5;
yPos = yPos + 10;
//Purple Circles//
ellipse(xPos, 100, 200, 10);
ellipse(10, yPos, 0, 0)
strokeWeight(10);
stroke(100, 50, 100);
ellipse(xPos, yPos, 1, 30);
xPos = xPos - 3
//Purple Circles//
strokeWeight(weight);
ellipse(200, yPos, 50, 50);
weight++;
strokeWeight(weight);
ellipse(height - xPos, yPos, 15, 20);
weight++;
//Line//
line(xPos, yPos, 20, 20);
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
