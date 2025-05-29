const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient();

async function buscarUsuarios() {
    return await prisma.usuarios.findMany();
}

async function buscarUmUsuario(id) {
    return await prisma.usuarios.findFirst({
        where: {
            Usuario_id: Number(id)
        }
    })
}

async function criarUsuario(dados) {
    return await prisma.usuarios.create({
        data: {
            usuario_nome: dados.usuario_nome,
            usuario_email: dados.usuario_email,
            usuario_senha: dados.usuario_senha,
            usuario_telefone: dados.usuario_telefone,
            usuario_cpf: dados.usuario_cpf,
            endereco_id: dados.endereco_id
        }
    })
}

async function editarUsuario(body, id) {
    return await prisma.usuarios.update({
        where: { Usuario_id: Number(id) },
        data: {
            usuario_nome: body.usuario_nome,
            usuario_email: body.usuario_email,
            usuario_senha: body.usuario_senha,
            usuario_telefone: body.usuario_telefone,
            usuario_cpf: body.usuario_cpf,
            endereco_id: body.endereco_id
        }
    }
    )
}

async function deletarUsuario(id) {
    return await prisma.usuarios.delete({
        where: { Usuario_id: Number(id) }
    })
}

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, deletarUsuario, editarUsuario }