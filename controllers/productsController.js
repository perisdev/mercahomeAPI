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

  try {

    // if (typeof(req.body.price) !== "number" || req.body.price < 0.01)
    //   return res.status(401).json({ message: 'precio no valido' });

    db.Product.create(req.body)
      .then(item => {

        res.status(200).json({
          message: 'Producto añadido',
          product: item
        })

      })
      .catch(next);

  } catch (err) {

    res.status(500).json({
      message: `producto error: ${err}`
    });
  }
};


/** 
 * update a product in DB
 * -----------------------------------------------*/

const updateController = (req, res, next) => {

  try {

    db.Product.update(req.body,
      {
        where: { id: req.body.id },
        // returning: true,
        // plain: true
      })
      .then((rowsUpdate) => {

        if (rowsUpdate < 1)
          return res.status(401).json({ message: 'producto no encontrado' })

        res.status(200).json({
          message: 'producto actualizado',
          product: req.body
        });
      })
      .catch(next)

  } catch (err) {
    res.status(500).json({ message: `producto error: ${err}` });
  }
};

module.exports = {
  allController,
  promoController,
  addController,
  updateController
};