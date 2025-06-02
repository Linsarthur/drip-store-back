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
            Usuario_id: Number(id)
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
        const comparePassword = await bcrypt.compare(usuario_senha, user.usuario_senha);
        

        if (!comparePassword) {
            return "Credenciais inválidas/senha"
        }

        const token = jwt.sign({ usuario_id: user.usuario_id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return ({ token: token })

    } catch (error) {
        return error.message;
    }
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

module.exports = { buscarUsuarios, buscarUmUsuario, criarUsuario, deletarUsuario, editarUsuario, login }