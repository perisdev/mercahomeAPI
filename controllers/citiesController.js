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

/**
 * responds with all cities top.
 * 
 * order DESC
 * --------------------------------------------*/

const topController = (req, res, next) => {

  db.Order.findAll({

    attributes: [
      'User.fk_city',
      [db.sequelize.fn('SUM', db.sequelize.col('qty')), 'qty_total'],
      [db.sequelize.fn('SUM', db.sequelize.col('current_price')), 'price_total']
    ],

    group: [`User.fk_city`],

    order: [[db.sequelize.col("price_total"), "DESC"]],

    include: {
      model: db.User,
      attributes: ['fk_city'],

      include: {
        model: db.City,
        attributes: ['name']
      }
    }
  })
    .then(items => (items[0]) ?
      res.status(200).json(JSON.parse(JSON.stringify(items)).map(item => {
        return {
          city: item.User.City.name,
          qty_total: item.qty_total,
          price_total: item.price_total
        }
      })): next()
    )
    .catch(err => res.status(500).json({ message: `cities top error: ${err}` }));
}


module.exports = { citiesController, topController };