const express = require("express")
const FaseController = require("../controllers/FaseController")

const router = express.Router()

router.get("/",FaseController.getAll)
router.post("/create",FaseController.create)
router.get("/id/:_id", FaseController.getById)

module.exports = router