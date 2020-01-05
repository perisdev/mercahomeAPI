import db from '../models';

/** 
 * responds with all orders by user
 * ----------------------------------*/

const allByUserController = async (req, res, next) => {

  try {

    if (!req.query.user)
      return next();

    let ordersList = { ordersList: [] };

    // ORDER's HEADER
    let orders = await db.Order.findAll({
      where: {
        fk_user_id: req.query.user
      },
      attributes: [
        'createdAt',
        [db.sequelize.fn('COUNT', db.sequelize.col('*')), 'rows'],
        [db.sequelize.fn('SUM', db.sequelize.col('current_price')), 'total']
      ],
      group: ['createdAt'],
      order: [[db.sequelize.col("createdAt"), "DESC"]],

      // include: [
      //   { model: db.User, attributes: ['id', 'user_name', 'email', 'address'] },
      // ]
    })
      .then(results => JSON.parse(JSON.stringify(results)))
      .catch(next);

    // ORDER's PRODUCTs
    (async () => {

      await Promise.all(
        orders.map(async order => {

          await db.Order.findAll({
            attributes: ['qty', 'current_price'],
            where: { createdAt: order.createdAt },
            include: { model: db.Product }
          })
            .then(products => {
              order.products = products;
              ordersList.ordersList.push(order);
            })
            .catch(err => res.status(500).json({ message: `order error: ${err}` }));
        })
      );

      (ordersList.ordersList.length) ? res.status(200).json(ordersList) : next();
    })();

  } catch (err) {

    res.status(500).json({
      message: `order error: ${err}`
    });
  }
};


/** 
 * add a new order in DB
 * -----------------------------------------------*/

const addController = (req, res, next) => {

  try {

    db.Order.bulkCreate(req.body.products)

      // ok
      .then(() => {
        res.status(200).json({ message: 'pedido añadido' })
      })

      // validation err
      .catch(err => {
        res.status(500).json({ message: err });
      });

  } catch (err) {

    res.status(500).json({
      message: `pedido error: ${err}`
    });
  }
};

module.exports = {
  allByUserController,
  addController
};