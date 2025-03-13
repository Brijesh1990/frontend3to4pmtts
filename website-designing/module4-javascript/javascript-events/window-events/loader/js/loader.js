function mainFunction()
{
  //setTimeout(callback,3000);
  setTimeout("display()",2500);
}
function display()
{
    document.getElementById("main").style="display:block";
    document.getElementById("loader").style="display:none";
}
