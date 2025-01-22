const express = require("express")
const FaseController = require("../controllers/FaseController")

const router = express.Router()

router.get("/",FaseController.getAll)
router.post("/create",FaseController.create)

module.exports = router