const express = require("express")
const TipoController = require("../controllers/TipoController")

const router = express.Router()

router.get("/",TipoController.getAll)
router.post("/create",TipoController.create)

module.exports = router