/** 
 * responds with all products.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

import db from '../models';

const citiesController = (req, res, next) => {

  let filter = {};

  if (req.query.id)
    filter.id = req.query.id;

  else if (req.query.name)
    filter.name = req.query.name;

  db.City.findAll({ where: filter })
    .then(items => (items[0]) ? res.status(200).json(items) : next())
    .catch(err => res.status(500).json({ message: `cities error: ${err}` }));

};

module.exports = citiesController;