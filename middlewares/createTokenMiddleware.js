/**
 * Create user token
 * */
import {createToken} from "../tools";

const createTokenMiddleware = async (req, res, next) => {
    try {

        //create token
        let token = await createToken(req.body.email);
        req.token = token;

        if (token) next();
    } catch (error) {
        res.status(500).json({message: `Error: ${error}`})
    }

};

module.exports = createTokenMiddleware;
