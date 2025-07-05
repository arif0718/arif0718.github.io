import express from "express"
const router = express.Router()

router.get("/show", (req, res) => {
    res.json({message: "Prosucts here"})
})
router.delete("/:id", (req, res) => {
    res.json({message: "Prosuct deleted"})
})

export default router