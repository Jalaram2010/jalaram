                              /* CONDITIONAL STATEMENTS */

                               // IF


let a = 20;
 
if (a >= 18)
{
    console.log("yes! major");
}


                                /* if else */


 let b = 15;

 if (b >= 18)
 {
    console.log("yes! major");
 }
 else
 {
    console.log("no! not major");
 }
  

                           /* if else if   else */
                            
let userRole = "author";

if (userRole == "owner")
{
    console.log("full access");
}
else if (userRole == "editor")
{
    console.log("editor accesssed file");
}
else if (userRole == "author")
{
    console.log("author accessed file");
}
else if (userRole == "content")
{
    console.log("content accessed file");
}
else
{
    console.log("others can be accessed");
}


                          /* SWITCH CASE */


let day = 2;

switch (day)
{
    case 0:
    case 6:
        console.log("welcome to weekend!");
        break;
    case 1:
        console.log("welcome to monday");
        break;
    case 2:
    case 3:
    case 4:
        console.log("welcome to midweek");
        break;
    case 5:
        console.log("thank god its friday");
        break;
    default:
        console.log("access denied");
}


                           /* TERINARY OPERATOR */


// USING IF ESLE IF ELSE

let d = 20;
let message;

if (d >= 18)
{
    message = ("cant vote!");
} 
else 
{
    message = ("cannot vote!");
}
    console.log(message);  


    // using terinary operator
    let age = 10;
     let ram;
   ram = age >= 18 ? "can vote!" : "cannot vote!";
    console.log(ram);