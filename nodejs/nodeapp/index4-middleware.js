import express from "express"

const app = express();

app.listen(8081, ()=>{
    console.log("Server started");
})

const logger = (req, res, next) => {
    req.msg = "Hello";
    next();
};
app.use(logger);

const auth = (req, res, next) => {
    const name = req.params.name;
    if(name=== "john") next();
    else res.send("Access Denied");
}

app.get("/:name", auth,(req,res) => {
    res.send("Hello World")
})

app.get("/products", (req, res) => {
    res.send(req.msg + " Products")
})