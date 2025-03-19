// loader 
var Myvar;
function mainFunction()
{
  Myvar=setTimeout("display()",2000);  
}
function display()
{
document.getElementById("main-content").style="display:block";
document.getElementById("icecream-loader").style="display:none";    
}