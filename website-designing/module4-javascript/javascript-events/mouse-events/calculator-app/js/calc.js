//create a function for clear input values 
function clr()
{
document.getElementById("result").value="";    
} 
// create a function for get Values in user input via button click
function getValue(val)
{
    document.getElementById("result").value+=val;
}
// create a function for final result 
function finalResult()
{
  var x=document.getElementById("result").value;
  var y=eval(x);
  document.getElementById("result").value=y;

}
// create a function for get power or sqaure 
function sq()
{
    var number=document.getElementById("result").value;
    var  res=Math.pow(number,2);
    document.getElementById("result").value=res;
}

// create a function for get squareroot  
function sqroot()
{
    var number=document.getElementById("result").value;
    var  res=Math.sqrt(number);
    document.getElementById("result").value=res;
}

//create a function for slice values  
function slc()
{
    var number=document.getElementById("result").value;
    var  res=number.slice(0,-1);
    document.getElementById("result").value=res;
}