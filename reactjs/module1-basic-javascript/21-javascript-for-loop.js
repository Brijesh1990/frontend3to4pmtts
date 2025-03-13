/* 
for loop : for loop is executed when condition is true 
           
syntax : for(initialisation; condition, increment/decerement)
          {
               statements;
          }


*/
// for loop

// for(var i=0; i<=5; i++)
// {
//     console.log(i);
// }



// foreach : foreach loop is return each array values in a list 

 //var employee=["jay","meet","brijesh","tej","vishal","komal"];
//employee.forEach(callback);
// console.log(employee.forEach(display));
// function display(item)
// {
//     return item;
// }

// employee.forEach(display)
// function display(item)
// {
//     var result="List of name is :"+item;
//     console.log(result);
// }


// employee.forEach(display)
// function display(item)
// {
//     var result=item;
//     console.log(result);
// }


//forIn() : forIn loop is used to return key of any object 
// syntax : for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


// syntax : for(key in object)
//     {
//          statements;
//     }

// const employee={
//     fname:"brijesh",lastname:"pandey",age:35
// }

// let text="";
// for(let x in employee)
// {
//  text+=employee[x];   
//  console.log(text);
// }

// forOf :this loop is used to return an iterables objects
// for(variable of iterable)
// {
//     statements;
// }

// var employee=["jay","meet","brijesh","tej","vishal","komal"];

// let text="";
// for(let x in employee)
// {
//  text+=employee[x];   
//  console.log(text);
// }



//while :while is a loop
//while is executed when condition is true  

// syntax : while(condition)
// {
//     statements;
//     increment/decrements;
// }

// var i=0;
// while(i>=10)
// {
// console.log(i);
// i++;
// }

// var i=0;
// while(i<=10)
// {
// console.log(i);
// i++;
// }

//do while : do will be exceuted once time either condition is true or false after while executed

var i=0;
do 
{
    console.log(i);
    i++;
}
while(i<=10);