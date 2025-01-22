const express = require("express")
const FotoController = require("../controllers/FotoController")

const router = express.Router()

router.get("/", FotoController.getAll)
router.post("/create", FotoController.create)

module.exports = router