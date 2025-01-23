const express = require("express")
const SubCarpetaInternaController = require("../controllers/SubCarpetaInternaController")

const router = express.Router()

router.get("/", SubCarpetaInternaController.getAll)
router.get("/id/:_id", SubCarpetaInternaController.getById)
router.post("/create", SubCarpetaInternaController.create)

module.exports = router