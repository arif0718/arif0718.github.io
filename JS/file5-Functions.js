//Functions


//functions in javascript
//regular function
// function add(a, b) {
//     return a + b;
// }
// const result=add(10, 20); // 30
// console.log( result); 

// //IIFE (Immediately Invoked Function Expression)
// (function() {
//     let x = 5;
//     let y = 10;
//     console.log(x + y); // 15
// })();


 greet();  //hoising-> this function can be called before its declaration due to hoisting
function greet() {
    console.log("Hello, World!");
}
