const { prisma } = require("../services");


async function buscarMarcas() {
    return await prisma.marcas.findMany();
}

async function buscarUmaMarca(id) {
    return await prisma.marcas.findFirst({
        where: {
            marca_id: Number(id)
        }
    })
}

async function criarMarca(data) {
    return await prisma.marcas.create({
        data
    })
}

async function editarMarca(data, id) {
    return await prisma.marcas.update({
        where: {
            marca_id: Number(id)
        },
        data
    }
    )
}

async function deletarMarca(id) {
    return await prisma.marcas.delete({
        where: {
            marca_id: Number(id)
        }
    })
}

module.exports = { buscarMarcas, buscarUmaMarca, criarMarca, deletarMarca, editarMarca }