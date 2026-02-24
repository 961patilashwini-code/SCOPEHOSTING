console.log(a);
var a = 6;

// //  var a = 6;
// //  Declaration is hoisted, initialization is NOT
// //  So console.log(a) prints undefined



console.log(b);
let b = 9;

// // let b = 9;
// // Variables declared with let are hoisted but in "Temporal Dead Zone (TDZ)"
// // Accessing them before declaration throws ReferenceError

sayHello(); // Works
function sayHello() { 
    console.log("Hi"); 
}

// greet1(); // Error if greet is let function expression
let greet1 = function() { 
    console.log("Hello"); 
}
