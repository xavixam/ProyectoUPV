const express = require("express")
const LoteController = require("../controllers/LoteController")

const router = express.Router()

router.get("/",LoteController.getAll)
router.get("/getLast", LoteController.getLast)
router.get("/getByNregistro/:nRegistro", LoteController.getByNregistro)
router.put("/nRegistro/:nRegistro",LoteController.update)
router.get("/id/:_id", LoteController.getById)

module.exports = router