
x = 101;    //globally scoped

function fDummy(){
    console.log("-----------Inside function-----------");
    y=201;      //globally scoped
    var z=301;  //function scoped
    console.log(x);
    console.log(y);
    console.log(z);
    if(true){
        console.log("-----------Inside If block-----------");
        var a = 111; //function scoped
        let b = 222; //block scoped
        console.log(a);
        console.log(b);
    }
    console.log("-----------Outside If block-----------");
    console.log(a);
    //console.log(b);
}

fDummy();

console.log("-----------outside function-----------");
console.log(x);
console.log(y);
//console.log(z); 