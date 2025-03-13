// create a function for login 
function userLogin()
{
    var mobile=document.getElementById("mobile").value;
    var pwd=document.getElementById("password").value;
    if(mobile=='9998003879' && pwd=='admin')
    {
     window.location='dashboard.html';
    }
    else 
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your mobile and Password are Incorrect try again",
            
          });
       
    
    }
}