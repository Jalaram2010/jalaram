                /* FUNCTIONS */
                /* functions are of four type */


//no input no output
let a = 100;
let b = 200;

function add()
{
    let c;
    c = a + b;
    console.log(c);
}


    //no input output yes!
    let a = 100;
    let b = 200;

    function add()
    {
        let c;
        c = a + b;
        console.log(c);
    }
    add();


    //input yes! no input
     
    function add(x,y)
    {
        let c;
        c = a + b;
        console.log(c);
    }
    let a = 100;
    let b = 200;
      let res = add(a,b);
      console.log(res);


      // input yes! output yes!
          function add(x,y)
    {
        let c;
        c = a + b;
        return c;
    }
    let a = 100;
    let b = 200;
      let res = add(a,b);
      console.log(res);