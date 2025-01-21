const express = require("express")
const LoteController = require("../controllers/LoteController")

const router = express.Router()

router.get("/",LoteController.getAll)

module.exports = router