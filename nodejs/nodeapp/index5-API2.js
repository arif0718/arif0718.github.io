import express from "express"

const app = express()
app.listen(8081, () => {
    console.log("Server started");
})

app.use(express.json());

let products = [];
app.post('/', (req, res) => {
    const { id, name, price} = req.body;
    const obj = {id, name, price};
    products.push(obj);
    res.json({ message: "Product created"});
});
app.get("/", (req, res) => {
    res.json(products)
})
app.delete("/", (req, res) => {
    products = products.filter((p)=> p.id !==1);
    res.json({message: "Product Deleted"})
})