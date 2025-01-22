const express = require("express")
const TipoController = require("../controllers/TipoController")

const router = express.Router()

router.get("/", TipoController.getAll)
router.post("/create", TipoController.create)
router.get("/id/:_id", TipoController.getById)

module.exports = router