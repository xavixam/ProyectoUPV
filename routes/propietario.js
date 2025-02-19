const express = require("express")
const PropietarioController = require("../controllers/PropietarioController")

const router = express.Router()

router.get("/", PropietarioController.getAll)
router.post("/", PropietarioController.create)

module.exports = router