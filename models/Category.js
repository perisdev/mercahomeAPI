export default (sequelize, DataTypes) => {

  return sequelize.define('Category', {

    category: { type: DataTypes.STRING(50), allowNull: false },

  }, { timestamps: false });
};