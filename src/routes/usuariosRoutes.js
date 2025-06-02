const { criarUsuario, buscarUsuarios, buscarUmUsuario, editarUsuario, deletarUsuario, login } = require("../controller/usuariosController.js");
const { verificarToken } = require("../utils/index.js");

const router = require("express").Router();

router.get("/",verificarToken,  async (req, res) => {
    res.send(await buscarUsuarios());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmUsuario(req.params.id))
});

router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
});

router.post("/login", async (req, res) => {
    res.send(await login(req.body))
});

router.put("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body))
});

router.delete("/:id", async (req, res) => {
    res.send(await deletarUsuario(req.params.id))
});


module.exports = router;


