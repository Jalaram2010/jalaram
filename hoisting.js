/* HOISTING */


//HOISTING CANNOT BE DONE USING "LET"                             
console.log(a);
let a = 200;
console.log(a);


//hositing using "var" can be possible
console.log(a);
var a = 200;                       // var can be deafulty inistillize a value called "undefined" 
console.log(a);


//hoisting using functions
fun();

function fun()
{
    console.log("hello");
}