var button=document.querySelector("button");
var body=document.querySelector("body");
bodyColor=true;


function colorChange()
{

    if(bodyColor)
    {
        body.style.backgroundColor="red";
        bodyColor=!bodyColor
    }
    else
    {
        body.style.backgroundColor="white"; 
        bodyColor=!bodyColor
    }
}

button.addEventListener("click",colorChange);