//Objects

const student = {
    name:"Harsh",
    age: 21,
};
// console.log(student)
// console.log(student.name)
// console.log(student["name"])
// student.city = "Delhi";
// console.log(student)
// student.city = "Hyderabad"; //if already city exists, it will update the value
// console.log(student)
// delete student.age; //deletes the key-value pair
// console.log(student)
// const keys = Object.keys(student); //returns an array of keys
// console.log(keys)
// const values = Object.values(student); //returns an array of values
// console.log(values)

const cart = {
    1: 5,
    3: 1,
    5: 2,
};
const items = Object.keys(cart).length; //returns the number of keys in the object
console.log(items);
cart[3] = cart[3] + 1; //updates the value of key 3
console.log(cart);

const newCart = ({...cart, 7: 4, 8: 5}); //spread operator to create a new object with additional key-value pair
console.log(newCart);
