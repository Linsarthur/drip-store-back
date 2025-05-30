const { buscarCategorias, buscarUmaCategoria, criarCategoria, editarCategoria, deletarCategoria } = require("../controller/categoriaControllers");
const { buscarMarcas, buscarUmaMarca, criarMarca, editarMarca, deletarMarca } = require("../controller/marcaControllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarMarcas());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmaMarca(req.params.id))
})

router.post("/", async (req, res) => {
    res.send(await criarMarca(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(await editarMarca(req.body, req.params.id))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarMarca(req.params.id))
})

module.exports = router;


