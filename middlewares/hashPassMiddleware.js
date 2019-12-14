/**
 * Hash user password and user validation create
 * */
const bcrypt = require('bcryptjs');

const hashPassMiddleware = async (req, res, next) => {
    const UserPass = req.body.password;

    //Validation (establecemos unos requerimientos mínimos antes de hacer hash a la contraseña enviada desde el cliente
    const minCharact = UserPass.length >= 8;
    const upperCharact = (/[A-Z]/).test(UserPass);
    const lowerCharact = (/[a-z]/).test(UserPass);
    const numbCharact = (/[1-9]/).test(UserPass);

    //Si cumple lo anterior se hace el hash y se sustituye por el pass enviado desde cliente para su inserción.
    if (minCharact && upperCharact && lowerCharact && numbCharact) {
        req.body.password = await bcrypt.hash(UserPass, 10);
        next();
    } else {
        return res.status(400).json({message: 'Error en la contraseña.'})
    }
};

module.exports = hashPassMiddleware;
