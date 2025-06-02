const jwt = require("jsonwebtoken")

function verificarToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];


    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "token inválido" })
        }
        req.user = decoded;
        next();
    })
}

module.exports = { verificarToken }