const { prisma } = require("../services");

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

async function criarCategoria(data) {
    return await prisma.categorias.create({
        data
    })
}

async function editarCategoria(data, id) {
    return await prisma.categorias.update({
        where: { categoria_id: Number(id) },
        data
    }
    )
}

async function deletarCategoria(id) {
    return await prisma.categorias.delete({
        where: { categoria_id: Number(id) }
    })
}

module.exports = { buscarCategorias, buscarUmaCategoria, criarCategoria, deletarCategoria, editarCategoria }