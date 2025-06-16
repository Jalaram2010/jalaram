                    /* CONVERTING OPERATORS */
                    
                    /* == ---> EQUITY OPERATOR &  === ---> STRICT EQUITY OPERATOR */

// number to string
console.log(5 == '5');
console.log(5 === '5');


// number to boolean
console.log(1 == true);
console.log(5 === true);

 

// sting to boolean
console.log("ram" == true);
console.log("ram" === true);   

// number to nan

console.log(2 == "hello"/2);
console.log(5 === "hello"/2);

// nan to nan
console.log(NaN == NaN);
console.log(NaN === NaN);
 

// nan to undefined
console.log(NaN == undefined);
console.log(NaN === undefined);


// null to null
console.log(null == null);
console.log(null === null);


//null to undefined
console.log(null == undefined);
console.log(null === undefined);

// empty space to null
console.log(" " == null);
console.log(" " == null);

// null to  boolean
console.log(null == true);
console.log(null === true);


// undefined to boolean
console.log(undefined == true);
console.log(undefined === true);