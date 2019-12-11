export default (sequelize, DataTypes) => {

  const Order = sequelize.define('Order', {

    fk_user_id: { type: DataTypes.INTEGER(11), allowNull: false },
    fk_product_id: { type: DataTypes.INTEGER(11), allowNull: false },
    current_price: { type: DataTypes.FLOAT(4, 2), allowNull: false },
    qty: { type: DataTypes.INTEGER(4), allowNull: false },

  }, {});

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'fk_user_id'
    });

    Order.belongsTo(models.Product, {
      foreignKey: 'fk_product_id'
    });
  }

  return Order;
};