
const f1 = () => console.log("Hello");
const f2 = () => console.log("Hai");

setTiemout(f1,1000);
let handler = setInterval(f2,1000);
setTimeout(()=>{clearInterval(handler)},8000);

let i=1;
let handler2 = setInterval(()=>{
    console.log("VAMSY");
    i++;
    if(i>10){
        clearInterval(handler2);
    }
},500);

console.log("BYE");