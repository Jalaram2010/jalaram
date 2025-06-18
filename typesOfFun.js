                           /* TYPE OF FUNCTIONS */


//1.functions decleration

function add(a,b)
{
    return a + b;
}
console.log(add(100,200));  


//2.function expression

let add = function(a,b)
{
    return a + b;
}
console.log(add(100,200)); 


//3.arrow function

let add = (a,b) =>
{
    return a + b;
}
console.log(add(100,200)); 


//4.IIEF (immedetely invoked executed function)


(function(a,b)
{
    console.log(a + b);
})(100,200);
