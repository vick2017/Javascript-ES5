var todo=[];
setTimeout(function() {
var i=1;
while(i>0)
{
    var rawSelection=prompt("What would you like to do?");
    var selection=rawSelection.toUpperCase();
        if((selection.indexOf("NEW") !== -1)) 
        {
            var inp=prompt("Add new array element:")
            todo.push(inp);
            console.log(todo);
            i++;
        }
        else if((selection.indexOf("LIST") !== -1))
        {
            console.log(todo);
            i++;
        }
        else if((selection.indexOf("QUIT") !== -1))
        {
            i=-1;
        }
        else
        {
            alert("Thats a wrong input!!")
            i++;
        }
}

}, 250);