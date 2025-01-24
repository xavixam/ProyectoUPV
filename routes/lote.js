const express = require("express")
const LoteController = require("../controllers/LoteController")

const router = express.Router()

router.get("/",LoteController.getAll)
router.get("/getLast", LoteController.getLast)
router.post("/create",LoteController.create)
router.get("/id/:_id", LoteController.getById)

module.exports = router