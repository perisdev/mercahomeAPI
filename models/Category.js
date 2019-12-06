export default (sequelize, DataTypes) => {

  const Category = sequelize.define('Category', {

    category: { type: DataTypes.STRING(50), allowNull: false }
    
  }, {});

  Category.associate = (models) => {
    Category.hasOne(models.Product, {
      foreignKey: 'fk_category'
    });
  }

  return Category;
};