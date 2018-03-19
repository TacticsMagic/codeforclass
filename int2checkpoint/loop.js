/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background(30, 20, 100);
    for(var i = 0; i < width; i+=30){
        for(var j = 0; j < height; j+=30){
         var size = random(30);
         fill(random(255), random (255), random(255))
         rect(i, j, size, size);
         ellipse(i, j, size, size);
         triangle(i, j, i, j, 75, 200)
        }
    }
    
    
    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
