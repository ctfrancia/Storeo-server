
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    auth_token: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    role: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    zip: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    created_on: {
      type: DataTypes.Date,
      defaultValue: DataTypes.fn('NOW'),
    },
  });

  // User.associate = (models) => {
  //   User.belongsTo(models.)
  // }

  return User;
};
