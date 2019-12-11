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