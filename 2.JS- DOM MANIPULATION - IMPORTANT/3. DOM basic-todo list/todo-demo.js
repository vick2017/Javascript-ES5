var selection=document.querySelectorAll("li")
var span= document.querySelectorAll("span");
var i=0;
for (i=0; i < selection.length; i++){
selection[i].addEventListener("mouseover",function colorGreen(){
   this.style.color="green";
   return i;
});

selection[i].addEventListener("mouseout",function(){
    this.style.color="black";
});

}


function my_fun(j){
    var checkbox ="ckb" + j;
    var chckSpan ="chck" + j;
    
    if(document.getElementById(checkbox).checked){ 
    
    document.getElementById(chckSpan).style.textDecoration='line-through';
    
    }else{
    
    document.getElementById(chckSpan).style.textDecoration='none';
    
    }
    
    }