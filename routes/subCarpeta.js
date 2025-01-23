const express = require("express")
const SubCarpetaController = require("../controllers/SubCarpetaController")

const router = express.Router()

router.get("/", SubCarpetaController.getAll)
router.get("/id/:_id", SubCarpetaController.getById)
router.post("/create", SubCarpetaController.create)

module.exports = router