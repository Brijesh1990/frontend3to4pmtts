function validations()
{
if(document.frm.name.value=="")
{
alert('Please enter your Name here')
document.frm.name.focus();
return false;
}  

if(document.frm.email.value=="")
{
alert('Please enter your Email here')
document.frm.email.focus();
return false;
}  

}