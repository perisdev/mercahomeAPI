export default (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {

    name: { type: DataTypes.STRING, allowNull: false },
    volume: { type: DataTypes.STRING(50), allowNull: false },
    price: { type: DataTypes.FLOAT(4, 2), allowNull: false, validate: { isFloat: true, min: 0.01 } },
    ud: { type: DataTypes.STRING(10), allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
    stock: { type: DataTypes.INTEGER(4), allowNull: false, defaultValue: 100 },
    fk_category: { type: DataTypes.INTEGER(11), allowNull: false },
    promo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }

  }, {});

  Product.associate = (models) => {
    // Product.belongsToMany(models.User, {
    //   through: 'Order',
    //   foreignKey: 'fk_product_id'
    // });

    Product.belongsTo(models.Category, {
      foreignKey: 'fk_category'
    });
  }

  return Product;
};
