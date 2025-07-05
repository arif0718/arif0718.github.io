import express from "express"
// const stName1 = process.argv[2] || "John"
// const stName2 = process.argv[2] || "Cathy"
// console.log(`Hello ${stName1} and ${stName2}`);

const app = express()
const PORT = process.argv[2] || 8081;

app.listen(PORT, () => {
    console.log(`Server is started ${PORT}`)
})