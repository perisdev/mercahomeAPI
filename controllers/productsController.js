/** 
 * responds with all products.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

import db from '../models';

const productsController = (req, res, next) => {

  db.sequelize.query(req.select, { type: db.sequelize.QueryTypes.SELECT })
    .then(items => (items[0]) ? res.status(200).json(items) : next())
    .catch(err => res.status(500).json({ message: `products error: ${err}` }));
};

module.exports = productsController;