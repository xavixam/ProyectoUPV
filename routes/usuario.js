const express = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = express.Router()

router.get("/", UsuarioController.getAll)
router.get("/id/:_id", UsuarioController.getById)
router.post("/create", UsuarioController.create)
router.post("/login", UsuarioController.login)
router.put("/id/:_id", UsuarioController.update)

module.exports = router