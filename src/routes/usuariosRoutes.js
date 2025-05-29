const { executarSQL } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await executarSQL("SELECT * FROM produtos;"));
});

router.get("/:id", async (req, res) => {
    res.send(`Busca o usuário com o id: ${req.params.id}`)
})


router.post("/", async (req, res) => {
    res.send(`Usuário criado`);
})

router.put("/:id", async (req, res) => {
    res.send(`Edita o usuário com o id: ${req.params.id}`)
})

router.delete("/:id", async (req, res) => {
    res.send(`Deleta o usuário com o id: ${req.params.id}`)
})


module.exports = router;


