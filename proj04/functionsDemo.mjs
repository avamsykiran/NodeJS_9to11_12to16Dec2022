
function greet() {
    return "Hello";
}

function greetUser(userName) {
    return "Hello " + userName;
}

const simpleInterest = function(p,t,r) { return (p*t*r)/100; };
const simpleInterestArrow = (p, t, r) => (p * t * r) / 100;

const printGreetings = function (userName) { console.log(greetUser(userName)); };
const printGreetingsArrow = userName => console.log(greetUser(userName)) ;

const greetArrow = () => "Hello ";

//callBack is a function passed as param to another function.

const greetUser2 = (greetingProvider,userName) => `${greetingProvider()} ${userName}!` ;

//closure is a function that can return another function

const nextEmpIdGenerator = () => { let empId=0; return (() => ++empId) };
const nextEmpId = nextEmpIdGenerator();

export default function () {
    console.log("Functions demo");
    console.log("-------------------------------------------");

    console.log(greet());
    console.log(greetUser("Vamsy Kiran"));
    console.log(simpleInterest(1000, 1, 1));
    console.log(simpleInterestArrow(1000, 1, 1));

    printGreetings("Suseela");
    printGreetingsArrow("Indhikaa");

    console.log(greetArrow());

    console.log(greetUser2(() => "Hello","Vamsy"));
    console.log(greetUser2(() => "Hai","Vamsy"));
    console.log(greetUser2(() => "How are you ","Vamsy"));
    console.log(greetUser2(() => "Namasthey","Vamsy"));
 
    console.log(nextEmpId());
    console.log(nextEmpId());
    console.log(nextEmpId());
}