var messageDisplay=document.getElementById("messageDisplay");
var squares= document.querySelectorAll(".square");
var headerColorChange=document.getElementById("containerHeader");
var h1 = document.querySelector("h1");

var mode=6;

colorGenerator()
colorClicking()
var modeEasy= document.getElementById("modeEasy");
var modeHard= document.getElementById("modeHard");
modeHard.classList.add("selected");

modeEasy.addEventListener("click",easyMode);
modeHard.addEventListener("click", hardMode);

function easyMode()
{
    modeHard.classList.remove("selected");
    modeEasy.classList.add("selected");
    
    resetColor()
    mode = 3; 
    colorGenerator()
    messageDisplay.textContent="        ";
    h1.style.background= "#4682b4";
    for( var i=0; i<mode; i++)
    {
        //color intiallize
        squares[i].style.backgroundColor=colors[i];
    }
    colorClicking()
    return 
    mode;
}

function  hardMode()
{
    
    modeEasy.classList.remove("selected");
    modeHard.classList.add("selected");
    resetColor()
    mode = 6; 
    colorGenerator()
    messageDisplay.textContent="        ";
    headerColorChange.style.background= "#4682b4";
    for( var i=0; i<mode; i++)
    {
        //color intiallize
        squares[i].style.backgroundColor=colors[i];
    }
    colorClicking()
    return 
    mode;
}


function colorGenerator()
{
    colors=generateColor(mode);
    resetColor()
    pickedColor = pickColor();
    colorsDisplay=document.getElementById("colorDisplay");
    colorsDisplay.textContent= pickedColor;
    h1.style.background= "steelblue";
    
}

reset.addEventListener("click",function(){
    colorGenerator()
    messageDisplay.textContent="";
    headerColorChange.style.background= "#4682b4";
    for( var i=0; i<mode; i++)
    {
        //color intiallize
        squares[i].style.backgroundColor=colors[i];
    }
    colorClicking();

});



            function generateColor(num)
            {
                var arr=[];
                for(var z=0; z<num; z++)
                {
                randomColorRGB();
                arr.push(randomColorRGB());
                }
                return arr;
            }
                        function randomColorRGB()
                        {
                            var R= Math.floor(Math.random()*255);
                            var G=Math.floor(Math.random()*255);
                            var B=Math.floor(Math.random()*255);
                        return rgb="rgb("+ R +", "+ G +", "+ B +")";
                        }

function successChangeColor(color)
{ 
    for( var i=0; i<mode; i++){
        squares[i].style.backgroundColor=pickedColor;
        }
        h1.style.transition = "background 2s";
        h1.style.background= color;


}


function colorClicking()
{
    for( var i=0; i<mode; i++)
    {
        //color intiallize
        squares[i].style.backgroundColor=colors[i];
        //color click listener to square
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor

            if(clickedColor === pickedColor){
                successChangeColor(clickedColor);
                reset.textContent="Play Again?";
                messageDisplay.textContent="Correct!"
            }
            
            else if(clickedColor !== pickedColor)
            {
                this.style.backgroundColor="#232323";
                reset.textContent="New Colors";
                messageDisplay.textContent="Try again!"
            }
        });
    
    }
}


function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random]
}

function resetColor()
{
for( var n=0; n<6; n++)
{
    //color intiallize
    squares[n].style.backgroundColor="#232323";
}
};