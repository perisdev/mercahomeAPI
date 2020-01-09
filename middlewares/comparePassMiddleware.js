/**
 * compare password with hash
 * */
import db from '../models';

const bcrypt = require('bcryptjs');

const comparePassMiddleware = async (req, res, next) => {
    try{
        db.User.findOne({where:{email: req.body.email}})
            .then(async user => {
                //comparamos la contraseña enviada por el cliente con la de la BBDD.
                const isMatch = await bcrypt.compare( req.body.password, user.password);

                if(isMatch){
                    //convertimos en string los datos de user para ser manipulados antes de ser enviados al cliente.
                    req.user = JSON.stringify(user);
                    next()
                }else{
                    return res.status(500).json({message: 'Error en el login'})
                }
            })
            .catch(err => {
              `Error: Error en login -> ${err}`;

              res.status(400).json({message: 'error en login'});
            }); 

    }catch(error){
        console.log(error)
    }

};

module.exports = comparePassMiddleware;
