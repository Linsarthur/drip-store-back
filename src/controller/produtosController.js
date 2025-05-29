const { executarSQL } = require("../services/index.js");

async function buscarProdutos() {
    return await executarSQL("SELECT * FROM produtos;");
}

async function buscarUmProduto(id) {
    return await executarSQL(`SELECT * FROM produtos WHERE produto_id = ${id};`);
}

async function criarProduto(dados) {
    return await executarSQL(`INSERT INTO produtos (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ("${dados.produto_nome}", ${dados.produto_preco}, ${dados.produto_desconto}, "${dados.produto_imagem}", ${dados.marca_id}, ${dados.categoria_id})`);
}

async function editarProduto(body, id) {
    return await executarSQL(`UPDATE produtos SET produto_nome = "${body.produto_nome}", produto_preco = ${body.produto_preco}, produto_desconto = ${body.produto_desconto}, produto_imagem = "${body.produto_imagem}", marca_id = ${body.marca_id}, categoria_id = ${body.categoria_id} WHERE produto_id = ${id}`);
}

async function deletarProduto(id) {
    return await executarSQL(`DELETE FROM produtos WHERE produto_id = ${id}`)
}

module.exports = { buscarProdutos, buscarUmProduto, criarProduto, deletarProduto, editarProduto }