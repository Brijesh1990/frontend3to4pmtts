// create loader function
var Myvar;
function mainFunction()
{
Myvar=setTimeout("display()",2500);    
}
function display()
{
document.getElementById("loader").style="display:none";
document.getElementById("mainSection").style="display:block";
}