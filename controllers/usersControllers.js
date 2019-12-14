/**
 * responds --
 *
 * --
 * -----------------------------------------------*/

import db from '../models';

const tools = require('../tools');

const registerController = (req, res, next) => {
    req.body.token = req.token;
    db.User.create(req.body)
        .then(item => {
            res.status(200).json({
                message: 'Usuario creado correctamente.',
                user: item
            })
        })
        .catch(err => res.status(500).json({message: `User error: ${err}`}))
};

const loginController = async (req, res, next) => {
    let newToken = req.token;
    db.User.update({token: newToken}, {
        where: {
            email: req.body.email,
        }
    })
        .then((rowsUpdate) => {
            console.log(rowsUpdate);
            let user = JSON.parse(req.user);
            user.token = newToken;
            delete user.password;
            delete user.updatedAt;
            delete user.createdAt;

            res.status(200).json(user)

        })
};

const logoutController = (req, res, next) => {

    db.User.update({token: null}, {
        where: {
            token: req.headers.authorization.split(' ')[1]
        }
    })
        .then(rowsUpdate => {
            console.log(rowsUpdate);
            if (rowsUpdate > 0) {
                res.status(200).json({message: 'Logout con éxito'});
            } else {
                res.status(400).json({message: 'Token no válido'})
            }

        })
        .catch(err => res.status(500).json({message: `Error: error en logout -> ${err}`}))
};

module.exports = {
    registerController,
    loginController,
    logoutController
};
