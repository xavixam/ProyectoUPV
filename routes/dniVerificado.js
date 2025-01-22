const express = require("express")
const DniVerificadoController = require("../controllers/DniVerificadoController")

const router = express.Router()

router.get("/",DniVerificadoController.getAll)
router.post("/create",DniVerificadoController.create)
router.get("/id/:_id", DniVerificadoController.getById)

module.exports = router