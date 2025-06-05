const { executarSQL } = require("../services/index.js");
const { PrismaClient } = require("../generated/prisma/index.js")
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


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

async function criarUsuario(dados) {

    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds)
        return await prisma.usuarios.create({
            data: {
                ...dados,
                usuario_senha: senhaCriptografada
            }
        })
    } catch (error) {
        return error.message;
    }
}


async function editarUsuario(id, dados) {
    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds)
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
            data: {
                ...dados,
                usuario_senha: senhaCriptografada
            }

        }
        )
    } catch (error) {
        return error.message
    }
}

async function login(dados) {
    const { usuario_email, usuario_senha } = dados
    try {
        const user = await prisma.usuarios.findUnique({
            where: {
                usuario_email,
            },
        });
        if (!user) {
            return "Credenciais inválidas"
        }
        const senhaComparada = await bcrypt.compare(usuario_senha, user.usuario_senha);
        if (!senhaComparada) {
            return "Credenciais inválidas/senha"
        }
        const token = jwt.sign({ usuario_id: user.usuario_id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return {
            tipe: "Success",
            mensagem: "Usuário logado",
            token,
            usuario: user
        }
    } catch (error) {
        return error.message;
    }
}



async function deletarUsuario(id) {
    return await prisma.usuarios.delete({
        where: { usuario_id: Number(id) }
    })
}

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, deletarUsuario, editarUsuario, login }