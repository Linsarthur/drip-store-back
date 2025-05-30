const { prisma } = require("../services");



async function buscarUsuarios() {
    return await prisma.usuarios.findMany();
}

async function buscarUmUsuario(id) {
    return await prisma.usuarios.findFirst({
        where: {
            usuario_id: Number(id)
        }
    })
}

async function criarUsuario(data) {
    return await prisma.usuarios.create({
        data
    })
}

async function editarUsuario(data, id) {
    return await prisma.usuarios.update({
        where: { Usuario_id: Number(id) },
        data
    }
    )
}

async function deletarUsuario(id) {
    return await prisma.usuarios.delete({
        where: { Usuario_id: Number(id) }
    })
}

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, deletarUsuario, editarUsuario }