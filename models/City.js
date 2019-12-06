export default (sequelize, DataTypes) => {

  const City = sequelize.define('City', {

    name: { type: DataTypes.STRING(50), allowNull: false }
    
  }, {});

  City.associate = (models) => {
    City.hasOne(models.User, {
      foreignKey: 'fk_city'
    });
  }

  return City;
};