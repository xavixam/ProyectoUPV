const express = require("express")
const PadreController = require("../controllers/PadreController")

const router = express.Router()

router.get("/", PadreController.getAll)
router.get("/id/:_id", PadreController.getById)

module.exports = router