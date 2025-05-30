const { buscarCategorias, buscarUmaCategoria, criarCategoria, editarCategoria, deletarCategoria } = require("../controller/categoriaControllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarCategorias());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmaCategoria(req.params.id))
})

router.post("/", async (req, res) => {
    res.send(await criarCategoria(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(await editarCategoria(req.body, req.params.id))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarCategoria(req.params.id))
})

module.exports = router;


