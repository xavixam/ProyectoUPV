const express = require("express")
const FotoController = require("../controllers/FotoController")

const router = express.Router()

router.get("/",FotoController.getAll)

module.exports = router