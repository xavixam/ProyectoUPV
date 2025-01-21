const express = require("express")
const PadreController = require("../controllers/PadreController")

const router = express.Router()

router.get("/",PadreController.getAll)

module.exports = router