export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        user_name: {type: DataTypes.STRING, allowNull: false, unique: true},
        email: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
        password: {type: DataTypes.STRING},
        address: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: 'cli'},// admin, cli
        token: {type: DataTypes.STRING}
    }, {});

    User.associate = (models) => {
        User.belongsToMany(models.Product, {
            through: 'Order',
            as: 'products',
            foreignKey: 'fk_user_id',
        });

        User.belongsTo(models.City, {
            foreignKey: 'fk_city',
        });
    }

    return User;
};
