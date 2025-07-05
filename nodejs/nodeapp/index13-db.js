import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "something";

const app = express();
app.use(express.json());

//db connection
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8081, () => {
    console.log("Server Started");
  });
});

//Schema
const userschema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
  },
  { timestamp: true }
);
const userModel = mongoose.model("User", userschema);

//controller
//register
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    if (!name || !email || !password)
      return res.json({ message: "something is missing" });

    const user = {
      name,
      email,
      password: hashedpwd,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

//login controller
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exitingUser = await userModel.findOne({ email });
    if (exitingUser) {
      const isMatch = await bcrypt.compare(password, exitingUser.password);
      if (isMatch) {
        const { name,email, role } = exitingUser;
        const userObj = { name, email, role };
        const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
        res.status(201).json({ user: userObj, token });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
});

app.post("/update/:email", async (req, res) => {
    userModel.updateOne(
        {email:req.params.email},
        {$set: {role:"admin"}}
    )
})
