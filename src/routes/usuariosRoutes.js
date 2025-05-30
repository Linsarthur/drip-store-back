const { criarUsuario } = require("../controller/usuariosController.js");
const { executarSQL } = require("../services/index.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await executarSQL("SELECT * FROM usuarios;"));
});

router.get("/:id", async (req, res) => {
    res.send(`Busca o usuário com o id: ${req.params.id}`)
})

router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(`Edita o usuário com o id: ${req.params.id}`)
})

router.delete("/:id", async (req, res) => {
    res.send(`Deleta o usuário com o id: ${req.params.id}`)
})

module.exports = router;


