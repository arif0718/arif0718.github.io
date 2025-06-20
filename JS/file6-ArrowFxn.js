//arrow function

// const greet = () => {
//     console.log("Hello");
// };
// greet()

//Hoisting not possible

//return method
// const add = (a,b) => {
//     return a+b;
// }
// const result = add(4,5);
// console.log(result)

//spread operator is used in arrow function used as an array
const add = (...args) => {
    console.log(args);
}
add(4,5,6,7,8)