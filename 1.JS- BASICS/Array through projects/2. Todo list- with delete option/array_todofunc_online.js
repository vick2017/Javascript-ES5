var todo=[];
setTimeout(function() {
var i=1;
var rawInp=prompt("What do you want to do")
var input=rawInp.toUpperCase();
while(input!=="QUIT")
{
    if(input=="LIST"){
    listtodo();
    }
    else if(input==="NEW") {
        addtodo();
    }
    else if(input==="DELETE") {
        deletetodo();}
    else{
        alert("Thats a wrong input!!")
    }
        rawInp=prompt("What do you want to do")
        input=rawInp.toUpperCase();
}
console.log("Thank you for using the APP!!!")


    
function listtodo()
{
    console.log("***********");
    todo.forEach(function(todo, index){
    console.log(index+":"+todo);
    });
    console.log("***********");
}
function addtodo()
{
    var inp=prompt("Add new array element:")
    todo.push(inp);
}
function deletetodo()
{
    console.clear();
    console.log("***DELETE FROM BELOW*");
    todo.forEach(function(todo, index){
    console.log(index+":"+todo);
    });
    console.log("********");
    var index=prompt("Enter which index which you want to delete")
    todo.splice(index,1);
    console.log("Item deleted NEW LIST BELOW");
    console.log("***********");
    todo.forEach(function(todo, index){
    console.log(index+":"+todo);
    });
    console.log("***********");
}
}, 250);