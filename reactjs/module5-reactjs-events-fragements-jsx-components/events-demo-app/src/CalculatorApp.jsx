import React from "react";
function add()
{
    let a=parseInt(prompt('Enter a values :'));
    let b=parseInt(prompt('Enter b values :'));
    let c=a+b;
    alert('The additions of numbers is :'+c)
    
}
function subs()
{
    let a=parseInt(prompt('Enter a values :'));
    let b=parseInt(prompt('Enter b values :'));
    let c=a-b;
    alert('The substraction of numbers is :'+c)
    
}
function mult()
{
    let a=parseInt(prompt('Enter a values :'));
    let b=parseInt(prompt('Enter b values :'));
    let c=a*b;
    alert('The Multiplications of numbers is :'+c)
    
}
function dv()
{
    let a=parseInt(prompt('Enter a values :'));
    let b=parseInt(prompt('Enter b values :'));
    let c=a/b;
    alert('The divisions of numbers is :'+c)
    
}

export {add,subs,mult,dv}