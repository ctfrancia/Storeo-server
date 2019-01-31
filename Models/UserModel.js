module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
      type: DataTypes.BOOLEAN,
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
  },
  {
    underscored: true,
    timestamps: true,
  });
  User.associate = (models) => {
    User.hasMany(models.order, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return User;
};
