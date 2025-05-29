const mysql = require("mysql2/promise")

async function executarSQL(comandoSql) {
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin",
        port: "3306",
        database: "drip_store"
    })

    const [result] = await conexao.query(comandoSql);
    conexao.end();

    return result;
}

module.exports = { executarSQL }