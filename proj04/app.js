import funDemo from './functionsDemo.mjs';
import oopsDemo from './oopsDemo.mjs';

funDemo(true);

//IIFE - Immidiatly invoked function expression
(function(){
    console.log("Demonstrating IIFE");
})();

oopsDemo();
