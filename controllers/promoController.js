/** 
 * responds with all products in promotion.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

import db from '../models';

const promoController = (req, res, next) => {

  db.sequelize.query(req.select.concat(' && products.promo = 1'), { type: db.sequelize.QueryTypes.SELECT })
    .then(items => (items[0]) ? res.status(200).json(items) : next())
    .catch(err => res.status(500).json({ message: `products error: ${err}` }));  
    
};

module.exports = promoController;