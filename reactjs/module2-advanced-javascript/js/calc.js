// create a function for clear all values 
function clrValue()
{
    document.getElementById("result").value="";
}
// create a function for slice values 
function slcValue()
{
    var slc=document.getElementById("result").value;
    var bck=slc.slice(0,-1);
    document.getElementById("result").value=bck;

}
// create a function for get values in result 
function getValues(val)
{

     document.getElementById("result").value+=val;

}
// create a function for get a final result
function getFinalResult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}

// create a square 
function sq()
{
 var number=document.getElementById("result").value;
 var sqResult=Math.pow(number,2);
 document.getElementById("result").value=sqResult;
}

// create a square root
function sqroot()
{
    var number=document.getElementById("result").value;
    var sqResult=Math.sqrt(number);
    document.getElementById("result").value=sqResult;
}