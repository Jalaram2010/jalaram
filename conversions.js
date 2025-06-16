                         /* TYPE CONVERSIONS */
                /*  Number to string */


//---> built in function is used called "string()"
 let a = 123;
 console.log(a);
 console.log(typeof a);
 let b = String(a);
 console.log(b);
 console.log(typeof b);


                        /* BOOLEAN TO STRING */

 let c = true;
 console.log(c);
 console.log(typeof c);
let d = String(c);
console.log(d);
console.log(typeof d);   



                      /* string to number */

//---> a built in function used called "number()"
let f = "ram";
console.log(f);
console.log(typeof f);
let g = Number(f);                                           // RETURNS NOT A NUMBER 
console.log(g);
console.log(typeof g); 
  

let m = "123";
console.log(m);
console.log(typeof m);
let n = Number(m);                                           
console.log(n);
console.log(typeof n);  

let o = "123ram";
console.log(o);
console.log(typeof o);
let p = parseInt(o);                                           // RETURNS NOT A NUMBER 
console.log(p);
console.log(typeof p); 

let u = " 1 2 3";
console.log(u);
console.log(typeof u);
let v = parseInt(u);                                           // RETURNS NOT A NUMBER 
console.log(v);
console.log(typeof v); 


 

                     /* BOOLEAN TO NUMBER */


 let h = true;
 console.log(h);
 console.log(typeof h);
 let i = Number(h);
 console.log(i);
 console.log(typeof i);


                    /* NUMBER TO BOOLEAN */


let q = 123;
console.log(q);
console.log(typeof q);                            // every num other than 0 is true. every alphabet is true . o, nan, null,[], is false
let r = Boolean(q);                                  
console.log(r);
console.log(typeof r)



                                 /* STRING TO BOOLEAN */


let x  = "ram";
console.log(x);
console.log(typeof x);
let y = Boolean(x);
console.log(y);
console.log(typeof y);