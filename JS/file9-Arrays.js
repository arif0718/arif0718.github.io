//Arrays

const scores = [10, 20, 30, 40, 50];
// console.log(scores); // console.log(scores[0]); //accessing the first element
// scores.push(60); //adding an element at the end
// console.log(scores);
// console.log(scores.length); //length of the array

// const newScores = [...scores, 70]; //spread operator to create a new array with additional elements
// console.log(newScores);

let cart = []; 
const products = [
    {id:1, name:"Laptop", price: 50000},
    {id:2, name:"Mobile", price: 20000},
    {id:3, name:"Tablet", price: 30000},
];

function addToCart(id){
    cart = {...cart, [id]: 1}; //adding an item to the cart
}
function increaseQuantity(id){
    const quantity = cart[id] || 0; //checking if the item is already in the cart, if not, default to 0
    cart = {...cart, [id]: quantity+1};
}
addToCart(1);
increaseQuantity(1);
console.log(cart);


