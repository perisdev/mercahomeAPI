export default (sequelize, DataTypes) => {

  const Order = sequelize.define('Order', {

    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fk_user_id: { type: DataTypes.INTEGER(11), allowNull: false },
    fk_product_id: { type: DataTypes.INTEGER(11), allowNull: false },
    current_price: { type: DataTypes.FLOAT(4, 2), allowNull: false, validate: { isFloat: true, min: 0.01 } },
    qty: { type: DataTypes.INTEGER(4), allowNull: false, validation: { min: 1 } },

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