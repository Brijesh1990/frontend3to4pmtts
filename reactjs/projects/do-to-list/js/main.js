// create a to do list here
const textInput=document.getElementById("textInput");
const taskList=document.getElementById("taskList");
const addBtn=document.getElementById("addBtn");
// create a addEventListener
addBtn.addEventListener("click",function(){
   
    const textData=textInput.value.trim();
    if(textData!=="")
    {
       addTask(textData); //call function for add task
       textInput.value=""; //for clear the values of input
       Swal.fire({
        title: "Success!",
        text: "Your Data added successfully",
        icon: "success"
      });

    }
    else 
    {
        Swal.fire({
            title: "Warning!",
            text: "Your input is blank please enter data",
            icon: "warning"
          });
    }
})

// create a function to add task
function addTask(textData)
{
    // add li via createElement
    const li=document.createElement("li");
    li.innerHTML=`${textData} <button type="button" onclick="deleteTask(this)" class="btn btn-sm btn-danger text-white">Remove</button>`;
    taskList.appendChild(li);

}

// create a function for remove data
function deleteTask(button)
{
    const li=button.parentElement;
    taskList.removeChild(li);
}