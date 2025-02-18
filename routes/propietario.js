const express = require("express")
const PropietarioController = require("../controllers/PropietarioController")

const router = express.Router()

router.get("/", PropietarioController.getAll)

module.exports = router