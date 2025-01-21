const express = require("express")
const FaseController = require("../controllers/FaseController")

const router = express.Router()

router.get("/",FaseController.getAll)

module.exports = router