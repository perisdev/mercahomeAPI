export default (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    user_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    role: DataTypes.STRING,   // admin, cli
    token: { type: DataTypes.STRING, allowNull: false }
  }, {});

  User.associate = (models) => {
    User.belongsToMany(models.Product, {
      through: 'Order',
      as: 'products',
      foreignKey: 'fk_user_id',
    });

    User.belongsTo(models.City, {
      foreignKey: 'fk_city'
    });    
  }

  return User;
};
