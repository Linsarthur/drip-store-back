const { buscarEnderecos, buscarUmEndereco, criarEndereco, editarEndereco, deletarEndereco } = require("../controller/enderecoControllers");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await buscarEnderecos());
});

router.get("/:id", async (req, res) => {
    res.send(await buscarUmEndereco(req.params.id))
})

router.post("/", async (req, res) => {
    res.send(await criarEndereco(req.body));
})

router.put("/:id", async (req, res) => {
    res.send(await editarEndereco(req.body, req.params.id))
})

router.delete("/:id", async (req, res) => {
    res.send(await deletarEndereco(req.params.id))
})

module.exports = router;


