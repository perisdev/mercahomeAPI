export default (sequelize, DataTypes) => {

  return sequelize.define('City', {

    name: { type: DataTypes.STRING(50), allowNull: false },

  }, { timestamps: false });
};