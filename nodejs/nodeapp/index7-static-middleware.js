import express from "express"
const app = express()

// app.use("/images", express.static("images"))  //we have to write images in url
app.use(express.static("images"))           //we have to write only image name(image.jpg)
app.use(express.static("public")) 

app.listen(8081, () => {
    console.log('Hello Word');
});

app.get("/product", (req, res) =>  {
    res.send("Product List");
})