//promises

// function f1(n){
//     return new Promise((resolve, reject) => {
//         if(n<0) reject("Something went wrong");
//         resolve(n);

//     });
// }
// function f2(x){
//     console.log(x+7);
// }
// f1(-3)
// .then((res) => f2(res))
// .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json()) // Convert the response to JSON
//     .then((data) => {
//         data.map(value => {
//             console.log(value.name);
//         }
//     )})
//     .catch((err) => console.log(err));

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data.map((value) => {
    console.log(value.name);
  });
};
fetchData();
