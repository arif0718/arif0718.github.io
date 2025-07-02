import express from "express";

const app = express();

app.listen(8000, () => {
  console.log("SErver Started");
});

// app.get("/", (req, res) => {
//     res.send("Good Morning");
// })
// app.get("/user", (req, res) => {
//     res.send("hello user");
// })
// app.get("/ab*cd", (req, res) => {        //* is a wild card character in the place * we can replace any char or place empty space
//     res.send("hello World");
// })

const products = [
  { id: 1, name: "Product 1", price: 45 },
  { id: 2, name: "Product 2", price: 70 },
  { id: 3, name: "Product 3", price: 55 },
];

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const s = products.find((p) => p.id === productId);
  res.json(s);
});

// app.get("/:name", (req, res) => {
//     res.send("Hello");
// })

// app.get("/student/:name/:age", (req, res) => {
//     res.send(req.params.name+req.params.age)
// })

// app.get("/", (req, res) => {
//     res.send(req.headers.authorization);   //barer token number
// })

// app.get("/", (req, res) => {
//     res.send(req.query.name+req.query.age);
// })
