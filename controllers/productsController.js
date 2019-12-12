/** 
 * responds with all products.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

import db from '../models';

const allController = (req, res, next) => {

  db.sequelize.query(req.select, { type: db.sequelize.QueryTypes.SELECT })
    .then(items => (items[0]) ? res.status(200).json(items) : next())
    .catch(err => res.status(500).json({ message: `products error: ${err}` }));
    
};


/** 
 * responds with all products in promotion.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

const promoController = (req, res, next) => {

  db.sequelize.query(req.select.concat(' && products.promo = 1'), { type: db.sequelize.QueryTypes.SELECT })
    .then(items => (items[0]) ? res.status(200).json(items) : next())
    .catch(err => res.status(500).json({ message: `products error: ${err}` }));  
    
};


/** 
 * add a new product in DB
 * -----------------------------------------------*/

const addController = (req, res, next) => {

};

/** 
 * update a product in DB
 * -----------------------------------------------*/

const updateController = (req, res, next) => {

};


module.exports = { 
  allController,
  promoController,
  addController,
  updateController
};


// db.Order.findAll({
//   where: {
//     fk_user_id: 1
//   },
//   include: [{ model: db.User }, { model: db.Product }]
// })
//   .then(items => (items[0]) ? res.status(200).json(items) : next())
//   .catch(err => res.status(500).json({ message: `products error: ${err}` }));

// // db.Product.findAll({
// //   // where: {
// //   //   id: 100
// //   // },
// //   include: {
// //     model: db.Category,
// //     attributes: ['category'],
// //     where: { category: 'agua' }
// //   }
// //   // include: [{ model: db.User }, { model: db.Product }]
// // })
//   .then(items => (items[0]) ? res.status(200).json(items) : next())
//   .catch(err => res.status(500).json({ message: `products error: ${err}` }));