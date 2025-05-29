const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient();

async function buscarProdutos() {
    return await prisma.produtos.findMany();
}

async function buscarUmProduto(id) {
    return await prisma.produtos.findFirst({
        where: {
            produto_id: Number(id)
        }
    })
}

async function criarProduto(dados) {
    return await prisma.produtos.create({
        data: {
            produto_nome: dados.produto_nome,
            produto_preco: dados.produto_preco,
            produto_desconto: dados.produto_desconto,
            produto_imagem: dados.produto_imagem,
            marca_id: dados.marca_id,
            categoria_id: dados.categoria_id
        }
    })
}

async function editarProduto(body, id) {
    return await prisma.produtos.update({
        where: { produto_id: Number(id) },
        data: {
            produto_nome: body.produto_nome,
            produto_preco: body.produto_preco,
            produto_desconto: body.produto_desconto,
            produto_imagem: body.produto_imagem,
            marca_id: body.marca_id,
            categoria_id: body.categoria_id
        }
    }
    )
}

async function deletarProduto(id) {
    return await prisma.produtos.delete({
        where: { produto_id: Number(id) }
    })
}

module.exports = { buscarProdutos, buscarUmProduto, criarProduto, deletarProduto, editarProduto }