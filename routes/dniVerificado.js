const express = require("express")
const DniVerificadoController = require("../controllers/DniVerificadoController")

const router = express.Router()

router.get("/",DniVerificadoController.getAll)

module.exports = router