//conditional statements

let a=20;
let b=20;
if(a>b){
    console.log("a is greater than b");
}else if(a<b){
    console.log("a is less than b");    
}
else{
    console.log("a is equal to b");
}

let x
let result=x||4;
console.log(result); // 4, because x is undefined and the OR operator returns the first truthy value

// Ternary operator
let age = 18;   
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // "Yes, you can vote."