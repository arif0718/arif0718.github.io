import express from "express"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express()
const SECRET = "sometext"
app.listen(8081, () => {
    console.log("Server Started")
})

const authenticate = (req, res, next) => {
    try {
        
        let token = req.headers.authorization;
        token = token.split(" ")[1];
        const user = jwt.verify(token, SECRET, {expireIn: "1h"})
        req.role = user.role
        next()
        
    } catch (error) {
        return res.json({message:"Access Denied"})
    }
}

const authorize = (role) => {
    return (req, res, next) => {
        if(req.role == role) next()
        else return res.json({message:'access denied'})
        
    }
}

const users = [
  {
    name: "John",
    email: "john@gmail.com",
    password:"1234",
    role: "user",
  },
  {
    name: "Cathy",
    email: "cathy@gmail.com",
    password:"12345",
    role: "admin",
  },
];

app.use(express.json())
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    const found = users.find((user) => user.email === email && user.password === password);

    if(found){
        const token = jwt.sign(found,SECRET, {expireIn: "1h"});      //expire in 1h
        res.status(201).json({user: found, token})
    } else{
        res.status(400).json({message: "Access Denied"})
    }
})

app.get("/users", authenticate, authorize("admin"), (req, res) => {
    res.json(users)
})

app.post("/register", async (req, res) => {
    const {name, email, password, role} = req.body
    const pass = await bcrypt.hash(password,10);
    const user = {
        name, email, password:pass, role
    }
    users.push(user);
    res.json(user);
})