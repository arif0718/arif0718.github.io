// //looping statements
// //while loop
// let i = 1;
// while (i < 5) { 
//     console.log("Current value of i is:", i);
//     i++;
// }

// //for loop
// for (let j = 1; j <= 5; j++) {
//     if(j==3){
//         break;
//     }
//     console.log("Current value of j is:", j);
// }

for (let j = 1; j <= 5; j++) {
    if(j==3){
        continue;
    }
    console.log("Current value of j is:", j);
}

// //do-while loop
// let k = 1;  
// do {
//     console.log("Current value of k is:", k);
//     k++;
// }while (k <= 5);