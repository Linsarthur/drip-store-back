const { prisma } = require("../services");



async function buscarEnderecos() {
    return await prisma.enderecos.findMany();
}

async function buscarUmEndereco(id) {
    return await prisma.enderecos.findFirst({
        where: {
            endereco_id: Number(id)
        }
    })
}

async function criarEndereco(data) {
    return await prisma.enderecos.create({
        data
    })
}

async function editarEndereco(data, id) {
    return await prisma.enderecos.update({
        where: { endereco_id: Number(id) },
        data
    }
    )
}

async function deletarEndereco(id) {
    return await prisma.enderecos.delete({
        where: { endereco_id: Number(id) }
    })
}

module.exports = { buscarEnderecos, buscarUmEndereco, criarEndereco, deletarEndereco, editarEndereco }