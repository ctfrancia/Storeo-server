module.exports = (sequelize, DataTypes) => {
  const pP = sequelize.define('product_properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    property_value: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    timestamps: true,
  });
  return pP;
};
