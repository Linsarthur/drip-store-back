const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient();

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

async function criarMarca(dados) {
    return await prisma.marcas.create({
        data: {
            marca_nome: dados.marca_nome,


        }
    })
}

async function editarMarca(body, id) {
    return await prisma.marcas.update({
        where: { marca_id: Number(id) },
        data: {
            marca_nome: body.marca_nome,


        }
    }
    )
}

async function deletarMarca(id) {
    return await prisma.marcas.delete({
        where: { categoria_id: Number(id) }
    })
}

module.exports = { buscarMarcas, buscarUmaMarca, criarMarca, deletarMarca, editarMarca }