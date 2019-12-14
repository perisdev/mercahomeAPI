/**
 * Check user token
 * */
const jwt = require('jwt-simple');
const config = require('../config');

const validationTokenMiddleware = async (req, res, next) => {
    //validation token
    const token = req.headers.authorization.split(" ")[1];//Divide la 'KEY authorization' para separar el tipo del string token
    const user_email = req.body.email;
    const payload = await jwt.decode(token, config.TOKEN_SECRET);//Si existe TOKEN lo decodifica  para comprobar la caducidad
    const user_email_payload = payload.sub;
    (user_email_payload === user_email) ? next() : res.status(500).json({message: 'Token no corresponde con usuario'});// comparamos el email de user y el contenido en el token

};

module.exports = validationTokenMiddleware;

