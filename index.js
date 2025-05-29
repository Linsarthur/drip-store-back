const express = require("express");
const app = express();
const port = 8000;


const usuariosRoutes = require("./src/routes/usuariosRoutes")

app.get("/", (req, res) => {
    res.send("olá mundo")
});

app.use("/usuarios", usuariosRoutes)

app.use((req, res) => {
    res.status(404).send("rota não encontrada");
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})