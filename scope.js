                                      /* GLOBAL SCOPE */


// GLOBAL VARIABLES ARE ACCESSED THROUGHT THE PROGRAM
let a = 200;

function fun()
{
    console.log(a);
}
fun();
console.log(a);


//FUNCTION VARIABLE CAN BE ACCESSABLE INSIDE THE FUNCTION


 function add()
 {
    let c = 200;
    console.log(c);
 }
 add(); 


 // There is no between the fun scope and global scope using let and var keywords
  let g = 100;

  function add()
 {
    var c = 200;
    console.log(c);
 }
 add(); 
 console.log(c);
 console.log(g);



 //BLOCK SCOPE

 function fun(num)
 {
   for(let i =1;i <= num;i++)
   {
      console.log(i);
   }
 }
fun(5);


//calling outside the function

 function fun(num)
 {
   for(var i =1;i <= num;i++)
   {
      console.log(i);
   }
   console.log(i);
 }
fun(5);

  

