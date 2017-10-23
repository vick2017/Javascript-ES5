var h1 =document.querySelector("h1");

var maxPointSlider = document.getElementById("maxScore");
var maxPoint=document.getElementById("maxScore").min;

var maxPointDisplay = document.getElementById("playinTo");

var player1ScoreCount=0;
var player2ScoreCount=0;

var resetButton=document.getElementById("reset")




player1Details={

    player1Button: document.getElementById("player1"),
    p1ScoreDisplay: document.getElementById("p1Score"),
    mymethod1 : 
        function player1score(){
            if(player1ScoreCount<maxPoint && player2ScoreCount!=maxPoint)
            {
                player1ScoreCount+=1;
                player1Details.p1ScoreDisplay.innerHTML=player1ScoreCount;
            }
            else if(player1ScoreCount==maxPoint && player2ScoreCount<maxPoint)
            {
                player1Details.p1ScoreDisplay.style.color="green";
                player2Details.p2ScoreDisplay.style.color="red";
            }
    }
}

player2Details={
    player2Button:document.getElementById("player2"),
    p2ScoreDisplay:document.getElementById("p2Score"),
    mymethod2 : 
        function player2score()
        {
                if(player2ScoreCount<maxPoint && player1ScoreCount!=maxPoint)
                {
                    player2ScoreCount+=1;
                    player2Details.p2ScoreDisplay.innerHTML=player2ScoreCount;
                }
                else if(player2ScoreCount==maxPoint && player1ScoreCount<maxPoint)
                {
                    player2Details.p2ScoreDisplay.style.color="green";
                    player1Details.p1ScoreDisplay.style.color="red";
                }
        }
}

function resetScores()
{
    player1Details.p1ScoreDisplay.style.color="black";
    player2Details.p2ScoreDisplay.style.color="black";
    player1Details.p1ScoreDisplay.innerHTML=0;
    player2Details.p2ScoreDisplay.innerHTML=0;
    player1ScoreCount=0;
    player2ScoreCount=0;
}

function playUpto()
{
    maxPoint=maxPointSlider.value;
    maxPointDisplay.innerHTML=maxPoint;
}

maxPointSlider.addEventListener("change", playUpto)
player1Details.player1Button.addEventListener("click", player1Details.mymethod1)
player2Details.player2Button.addEventListener("click", player2Details.mymethod2)
resetButton.addEventListener("click", resetScores)