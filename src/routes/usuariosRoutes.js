const { criarUsuario, buscarUsuarios, buscarUmUsuario, editarUsuario, deletarUsuario } = require("../controller/usuariosController.js");
const { executarSQL } = require("../services/index.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarUsuarios());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmUsuario(req.params.id))
})

router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarUsuario(req.params.id))
})

module.exports = router;


