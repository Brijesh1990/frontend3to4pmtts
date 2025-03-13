/* 
conditional statements : where we can check true and false there we can use conditional statements
if statements : if is executed when condition is true
syntax : 
if(condition)
{
statements;
}  
*/


// var a=10;
// var b=5;
// if(a>b)
// {
//     console.log('a is greater than b')
// }




//if else statements : if is executed when condition is true if condition is false else is executed.

// if(condition)
// {
//     statements;
// }
// else 
// {
//     statements;
// }


// let a=2;
// let b=5;
// if(a>b)
// {
//     console.log("a is greater than b")
// }
// else 
// {
//     console.log("a is less than b")
// }



//if elseif statements : if is executed when condition is true elseif is executed  WHILE check multiple true condition if condition is false else is executed.

// if(condition)
// {
//     statements;
// }
// else if(condition)
// {
//     statements;
// }
// else if(condition)
// {
//     statements;
// }
// else 
// {
//     statements;
// }


// let a=30;
// let b=20;
// if(a>b)
// {
//     console.log("a is greater than b")
// }
// else if(b>a)
// {
//     console.log("b is greater than a")
// }
// else 
// {
//     console.log("a and b both are equal")
// }


// let n1=22;
// let n2=22;
// let n3=22;
// if(n1>n2 && n1>n3)
// {
// console.log("N1 is max Numbers");
// }
// else if(n2>n3 && n2>n1)
// {
// console.log("N2 is max Numbers");
// }

// else if(n3>n1 && n3>n2)
// {
// console.log("N3 is max Numbers");
// }
// else 
// {
//     console.log("something went wrong try again")
// }


//nested if : nested if meanse condition within another condition there we used nested if 

//   if(condition)
//   {
//     if(condition)
//     {
//     statements;
//   }
// }
// else 
// {
//     statements;
// }


// let a=30;
// let b=20;
// if(a>b)
//     {
//       if(a!=0 && b!=0)
//       {
//       console.log('a is greater than b and both are positive number')
//     }
//   }
//   else 
//   {
//     console.log('a is less than b')
//   }
  



//switch : switch is used to check multiple true  case if case is false executed default.

  let grade="D";
  switch(grade)
  {
    case 'A':
        console.log('I am a Topper students');
        break;
        
    case 'B':
        console.log('I am a average students');
        break;
    case 'C':
        console.log('I am a failed students');
        break;
    default:
        console.log('your grade is not found anywhere please contact our admin');
        break;
  }