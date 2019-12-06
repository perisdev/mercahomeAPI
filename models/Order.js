export default (sequelize, DataTypes) => {

  return sequelize.define('Order', {

    fk_user_id: { type: DataTypes.INTEGER(11), allowNull: false },
    fk_product_id: { type: DataTypes.INTEGER(11), allowNull: false },
    current_price: { type: DataTypes.FLOAT(4, 2), allowNull: false },
    qty: { type: DataTypes.INTEGER(4), allowNull: false },
    
  }, {});
};