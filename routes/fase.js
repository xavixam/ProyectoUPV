const express = require("express")
const FaseController = require("../controllers/FaseController")

const router = express.Router()

router.get("/",FaseController.getAll)
router.get("/id/:_id", FaseController.getById)
router.get("/nombre/:nombre", FaseController.getByName)
router.post("/create",FaseController.create)
router.get("/getFaseAlmacenada",FaseController.getFaseAlmacenada)
router.get("/getFasePendienteAlmacenar",FaseController.getFasePendienteAlmacenar)

module.exports = router