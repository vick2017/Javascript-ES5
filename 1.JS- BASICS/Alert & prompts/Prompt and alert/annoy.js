/*

var count=0;
while(count<5)
{
    var stopAnnoy=prompt("Are we there yet?")
        if(stopAnnoy==="yes"||stopAnnoy==="yeah")
        {
        console.log("Yay we made it!")
        break;
        }
        count++;
}

*/

//VERSION 2
/*
var answer=prompt("are we there yet?");
while (answer!=="yes" && answer!=="yeah")
{
    var answer=prompt("are we there yet?");
}

if(answer=="yes" || answer=="yeah")
   {
        alert("Yay we made it!")
   }
*/


var answer = prompt("are we there yet?");

while((answer.indexOf("yes") === -1)&&(answer.indexOf("yeah") === -1)) {
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");

