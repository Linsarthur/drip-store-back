const { prisma } = require("../services");


async function buscarProdutos() {
    try {
        return await prisma.produtos.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

async function buscarUmProduto(id) {
    try {
        return await prisma.produtos.findFirst({
            where: {
                produto_id: Number(id)
            }
        })
    } catch (error) {

    }
}

async function criarProduto(data) {
    return await prisma.produtos.create({ data })
}

async function editarProduto(data, id) {
    return await prisma.produtos.update({
        where: { produto_id: Number(id) },
        data
    }
    )
}

async function deletarProduto(id) {
    return await prisma.produtos.delete({
        where: { produto_id: Number(id) }
    })
}

module.exports = { buscarProdutos, buscarUmProduto, criarProduto, deletarProduto, editarProduto }