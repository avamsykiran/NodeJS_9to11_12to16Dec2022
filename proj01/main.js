console.log("Hello World! This is a simple javascript app running on NodeJS");

x = 12;
console.log(typeof x); //number
x = 12.66;
console.log(typeof x); //number
x = '@';
console.log(typeof x); //string
x = 'apple';
console.log(typeof x); //string
x = "@";
console.log(typeof x); //string
x = "apple";
console.log(typeof x); //string
x = true;
console.log(typeof x); //boolean
x = [1,2,3,4,5,6,7,,8,9,10];
console.log(typeof x); //object (Array)
x = {empId:101,name:"Vamsy",salary:45000};
console.log(typeof x); //object (JSON)
x = function() { return "All is well"; } ;
console.log(typeof x); //function

name = "Sita";
age = 45;
console.log(name + " is "+ age +" years old");
console.log(`${name} is ${age} years old`); //ES6 feature - template literals

a = "<p>" + name + " is of age " + age +"years. </p>";
b = `<p>
        ${name} is of age ${age} years.
    </p>` //multi-line string
console.log(a);
console.log(b);

//arithmetic operators
console.log(`sum of 45 and 12 is ${45+12}`);
console.log(`dif of 45 and 12 is ${45-12}`);
console.log(`prd of 45 and 12 is ${45*12}`);
console.log(`qut of 45 and 12 is ${45/12}`);
console.log(`rem of 45 and 12 is ${45%12}`);

//relational operators
console.log(45==45);        //true
console.log(45==45.0);      //true
console.log(45=="45");      //true
console.log(45===45);       //true
console.log(45===45.0);     //true
console.log(45==="45");     //false
/* <    >   <=  >=  !=  !== */

//logical operators     &&  ||  !

x = 0;
console.log(x && true); 
x = 10;
console.log(x && true);
x = null;
console.log(x && true);
x = undefined;
console.log(x && true);
x = "apple";
console.log(x && true);

console.log(45>123?45:123);

/* constrol structures

    simple if
    if..else
    if ladder
    switch

    while
    for
*/