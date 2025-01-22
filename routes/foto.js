const express = require("express")
const FotoController = require("../controllers/FotoController")

const router = express.Router()

router.get("/", FotoController.getAll)
router.post("/create", FotoController.create)
router.post("/id/:_id", FotoController.getById)

module.exports = router