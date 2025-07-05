import express from "express"
const router = express.Router()

router.post("/login", (req, res) => {
    res.json({message: "Welcome back"})
})
router.post("/register", (req, res) => {
    res.json({message: "User Registered"})
})
router.get("/show", (req, res) => {
    res.json({message: "Users"})
})

export default router