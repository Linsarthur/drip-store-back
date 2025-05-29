const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient();

async function buscarCategorias() {
    return await prisma.categorias.findMany();
}

async function buscarUmaCategoria(id) {
    return await prisma.categorias.findFirst({
        where: {
            categoria_id: Number(id)
        }
    })
}

async function criarCategoria(dados) {
    return await prisma.categorias.create({
        data: {
            categoria_nome: dados.categoria_nome,


        }
    })
}

async function editarCategoria(body, id) {
    return await prisma.categorias.update({
        where: { categoria_id: Number(id) },
        data: {
            categoria_nome: body.categoria_nome,


        }
    }
    )
}

async function deletarCategoria(id) {
    return await prisma.categorias.delete({
        where: { categoria_id: Number(id) }
    })
}

module.exports = { buscarCategorias, buscarUmaCategoria, criarCategoria, deletarCategoria, editarCategoria }