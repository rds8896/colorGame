var numcircles = 6;
var color = [];
var pickedColor ;
var circles = document.getElementsByClassName("circle");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

init();

// Initialising the game
function init()
{
    //Selecting the mode.... Easy or Hard
    setUpMode();
    
    // Setting up the colors for circles
    
    setUpColors();
    
    //restarting the game
    valReset();
}

function setUpMode()
{
    for(i=0;i<modeButtons.length;i++)
        {
            modeButtons[i].addEventListener('click',function(){
               modeButtons[0].classList.remove("selected"); 
               modeButtons[1].classList.remove("selected"); 
                this.classList.add("selected");
                if(this.textContent === "Easy")
                    numcircles = 3;
                else
                    numcircles = 6;
                valReset();
            });
        }
}

function setUpColors()
{
    for(i =0;i<circles.length;i++)
    {
        circles[i].style.backgroundColor = color[i];   
        circles[i].addEventListener('click',function(){
            
            var chosenColor = this.style.backgroundColor;
        if(pickedColor=== chosenColor)
            {
                messageDisplay.textContent = "Right";
                h1[0].style.backgroundColor = chosenColor;
                resetButton.textContent = "Play Again?";
                changeColor(chosenColor);
            }
        else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
        }
    });
    }
}

function changeColor(chosenColor){
    for(i=0;i<circles.length;i++)
        {
            circles[i].style.backgroundColor = chosenColor;
        }
}

function colorPicker()
{
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}

function generateRandomColors(num)
{
    var arrColor=[];
    for(i=0;i<num;i++)
        {
            var x = getRandomColor();
            arrColor.push(x);
        }
    return arrColor;
}

function getRandomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    
    return "rgb(" +r +", " +g +", " +b +")";
}



resetButton.addEventListener('click',function(){
   valReset(); 
});
function valReset(){
    color = generateRandomColors(numcircles);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
    for(var i = 0; i < circles.length; i++){
		if(color[i]){
			circles[i].style.display = "block"
			circles[i].style.background = color[i];
		} else {
			circles[i].style.display = "none";
		}
	}
	h1[0].style.background = "#004D40";
    
}