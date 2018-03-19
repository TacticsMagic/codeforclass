/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 600);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


noStroke(); //Takes away any outlines//

//Draws the Rocket Ship//
draw = function(x,y) {
    background((0), (0), (0)) //Color of the Background//
    fill(225, 0, 0); //Red Color for the Nose//
    triangle(mouseX + 50, mouseY - 40, mouseX - 50, mouseY - 40, mouseX , mouseY - 90); //Nose of the Rocket//
    fill(255, 204, 0); //Yellow Color for the Body//
    rect(mouseX - 50, mouseY - 40, 99, 75); //Body of the Rocket//
    fill(179, 179, 179); //Grey Color for the Window//
    ellipse(mouseX, mouseY, 50, 50); //Window of the Rocket//
    fill(225, 0, 0); //Red Color for the Wings//
    triangle(mouseX - 50, mouseY + 5, mouseX - 50, mouseY - 20, mouseX - 100, mouseY + 20); //Left Wing//
    triangle(mouseX + 50, mouseY + 5, mouseX + 50, mouseY - 20, mouseX + 100, mouseY + 20); //Right Wing//
};

//Once the mouse moves and fulfills the conditionals the function will occur as long as the mouse keeps moving//
mouseMoved = function() {
    drawSpace(mouseX, mouseY);
}

//Draws on the black negative space//
drawSpace = function() {
    if (mouseY <= 225){ //If the Y Position of the mouse is less than 225 the Moon will show up//
        fill() //White//
        ellipse(100, 85, 150, 150); //The Moon//
    }
    else {
        //Functions as a sort of "hyperspeed" which consists of ellipses of different sizes and colors flashing//
        for(var i = 0; i < width; i+=30){
            for(var j = 0; j < width; j+=30){
            var size = random(30);
            fill(random(255), random(255), random(255))
            ellipse(i, j, size, size)
            }
            //Eco Planet//
    if (mouseX > 700){
        fill(20, 200, 65); //Green//
        ellipse(750, 130, 200, 200); //Land//
        fill(0, 10, 75); //Blue//
        ellipse(750, 130, 100, 100) //Water//
    }        
    
        }
    }
}


    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
