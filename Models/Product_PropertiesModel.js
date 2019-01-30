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
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    created_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return pP;
};
