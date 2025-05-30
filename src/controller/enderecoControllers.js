const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient();

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

async function criarEndereco(dados) {
    return await prisma.enderecos.create({
        data: {
            endereco_logradouro: dados.endereco_logradouro,
            endereco_bairro: dados.endereco_bairro,
            endereco_cidade: dados.endereco_cidade,
            endereco_estado: dados.endereco_estado,
            endereco_cep: dados.endereco_cep,

        }
    })
}

async function editarEndereco(body, id) {
    return await prisma.enderecos.update({
        where: { endereco_id: Number(id) },
        data: {
            endereco_logradouro: body.endereco_logradouro,
            endereco_bairro: body.endereco_bairro,
            endereco_cidade: body.endereco_cidade,
            endereco_estado: body.endereco_estado,
            endereco_cep: body.endereco_cep,

        }
    }
    )
}

async function deletarEndereco(id) {
    return await prisma.enderecos.delete({
        where: { endereco_id: Number(id) }
    })
}

module.exports = { buscarEnderecos, buscarUmEndereco, criarEndereco, deletarEndereco, editarEndereco }