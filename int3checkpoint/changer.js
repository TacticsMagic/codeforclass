//Creates a button and does other "fun" stuff//
var newBackgroundColor = document.getElementById("newBackgroundColor");
var changeColorButton = document.getElementById("changeColorButton");

/*Event Listener for the Button
    Sets the Background Color to the user provided value*/
changeColorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBackgroundColor.value;
})
    

