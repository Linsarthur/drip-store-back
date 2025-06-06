const { buscarProdutos, buscarUmProduto, criarProduto, deletarProduto, editarProduto } = require("../controller/produtosController.js");
const { verificarToken } = require("../utils/index.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarProdutos());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmProduto(req.params.id))
})

router.post("/", async (req, res) => {
    res.send(await criarProduto(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(await editarProduto(req.body, req.params.id))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarProduto(req.params.id))
})

module.exports = router;


