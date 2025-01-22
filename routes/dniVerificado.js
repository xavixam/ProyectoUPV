const express = require("express")
const DniVerificadoController = require("../controllers/DniVerificadoController")

const router = express.Router()

router.get("/",DniVerificadoController.getAll)
router.post("/create",DniVerificadoController.create)

module.exports = router