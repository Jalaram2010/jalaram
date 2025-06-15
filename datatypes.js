                  /* NUMBER DATA TYPE */
// printing num types of data
 let a = 35; 
 console.log(a);
 console.log(typeof a);


// printing infinite special num
 let b = 20/0;
 console.log(b);
 console.log(typeof b);


 // printing float values\decimal values
  let c = 56.24;
  console.log(c);
  console.log(typeof c);
                        


                          /* BIGINT */      
  /* BIGINT: EVERY intger num & whole num have a fixed least and highest number. to print big or least number other than that use bigint
     By adding suffix "n"
     ---> BIGINT data type can't support on decimal values 
     ---> arthemaatic operations can be performed between two bigint's only */
            
// printing BIGINT values
 let d = 74467646764646464346464644646496n;
 console.log(d);
 console.log(typeof d);


/*  let e = 74467646764646464346464644646496.3n;
 console.log(e);
 console.log(typeof e); */ //does't work on decimals


// arthematic operation 
  let f = 20n;
  let g = 30n;
  console.log(f+g); 
  console.log(typeof f+g);
    


                   /* STRING */
/* collection of charecters */


// printing string
let m = "ram";
console.log(m);
console.log(typeof m);




                        /* BOOLEAN */
                        /* true or false */


// print boolean
let hasIdCard = false;
console.log(hasIdCard);
console.log(typeof hasIdCard);

 


                           /* UNDEFINED */


    // Printing undefined values
    let p;
    console.log(p);
    console.log(typeof p);