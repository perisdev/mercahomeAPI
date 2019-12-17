import db from '../models';

/** 
 * responds with all products.
 * 
 * accepts filter by 'id' or 'name' or 'category'.
 * -----------------------------------------------*/

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
 * responds with all products top.
 * -----------------------------------------------*/

const topController = (req, res, next) => {

    db.Order.findAll({
      attributes: [
        'fk_product_id',
        [db.sequelize.fn('SUM', db.sequelize.col('qty')), 'qty_total'],
        [db.sequelize.fn('SUM', db.sequelize.col('current_price')), 'price_total']
      ],
      group: ['fk_product_id'],
      order: [[db.sequelize.col("qty_total"), "DESC"]],   
      
      include: {
        model: db.Product
      }
    })
      .then(items => (items[0]) ? res.status(200).json(items) : next())
      .catch(err => res.status(500).json({ message: `productos top error: ${err}` }));

};

/** 
 * add a new product in DB
 * -----------------------------------------------*/

const addController = (req, res, next) => {

  try {

    db.Product.create(req.body)

      // ok
      .then(item => {
        res.status(200).json({
          message: 'Producto añadido',
          product: item
        })
      })

      // validation err
      .catch(err => {
        res.status(500).json({ message: err });
      });

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

      // validation err
      .catch(err => {
        res.status(500).json({ message: err.errors[0].message });
      });

  } catch (err) {
    res.status(500).json({ message: `producto error: ${err}` });
  }
};

/** 
 * remove a product in DB
 * -----------------------------------------------*/

const removeController = (req, res, next) => {

  try {

    db.Product.destroy({
      where: { id: req.query.id },
    })
      .then(done => (done) ? res.status(200).json({ message: 'producto eliminado' }) : next())
      .catch(next);

  } catch (err) {
    res.status(500).json({ message: `error eliminando producto: ${err}` });
  }
};

module.exports = {
  allController,
  promoController,
  topController,
  addController,
  updateController,
  removeController
};