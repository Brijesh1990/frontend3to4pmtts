function valid()
{
 if(document.frm.name.value=="")
    {
        alert('Please enter your Name')
        document.frm.name.focus();
        return false;
    }   
}