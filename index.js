const express = require("express");
const app = express();
const port = 8000;


const usuariosRoutes = require("./src/routes/usuariosRoutes.js")
const produtosRoutes = require("./src/routes/produtosRoutes.js")
const enderecosRoutes = require("./src/routes/enderecosRoutes.js")
const categoriasRoutes = require("./src/routes/categoriasRoutes.js")
const marcasRoutes = require("./src/routes/marcasRoutes.js")

app.use(express.json());

app.get("/", (req, res) => {
    res.send("olá mundo")
});

app.use("/usuarios", usuariosRoutes)
app.use("/produtos", produtosRoutes)
app.use("/enderecos", enderecosRoutes)
app.use("/categorias", categoriasRoutes)
app.use("/marcas", marcasRoutes)

app.use((req, res) => {
    res.status(404).send("rota não encontrada");
})
app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`)
})