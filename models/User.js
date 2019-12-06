export default (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    user_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    token: { type: DataTypes.STRING, allowNull: false }
  }, {});


  User.associate = (models) => {
    User.belongsToMany(models.Product, {
      through: 'Order',
      as: 'products',
      foreignKey: 'fk_user_id',
    });
  }

  return User;
};
