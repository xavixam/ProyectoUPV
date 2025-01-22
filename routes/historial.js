const express = require("express")
const HistorialController = require("../controllers/HistorialController")

const router = express.Router()

router.get("/",HistorialController.getAll)
router.post("/create",HistorialController.create)

module.exports = router