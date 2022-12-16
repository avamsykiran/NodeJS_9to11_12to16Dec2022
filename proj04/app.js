import funDemo from './functionsDemo.mjs';
import oopsDemo from './oopsDemo.mjs';
import arraysDemo from './arraysDemo.mjs';

funDemo(true);

//IIFE - Immidiatly invoked function expression
(function(){
    console.log("Demonstrating IIFE");
})();

oopsDemo(true);

arraysDemo();