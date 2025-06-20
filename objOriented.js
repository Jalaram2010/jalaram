                                /* creating an obeject for a car */


let a = {
    name : "BNW",
    cost : 10,
    millage : 48.2,
     
    start : function()
    {
        console.log("start the car");
    },
    stop : function()
    {
        console.log("stop the car");
    },
    Accelarate : function()
    {
        console.log("aacelareting the car");
    }
}
console.log(a.name);
console.log(a.millage);
a.start();


             /* creating a object for a student */


let b = {
    name : "RAM",
    age : 19,
    rollno : "23a31a05b9",

    coding : function()
    {
        console.log("ram wants to do coding");
    },
    singing : function()
    {
        crossOriginIsolated.log("ram wants to do singing");
    },
    studying : function()
    {
        console.log("ram wants to do studying");
    }
}
console.log(b.name);
console.log(b.rollno);
b.coding();
b.studying();