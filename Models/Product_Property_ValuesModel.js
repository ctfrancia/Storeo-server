module.exports = (sequelize, DataTypes) => {
  const pPV = sequelize.define('Product_Property_Values', {
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
      type: DataTypes.Date,
      defaultValue: DataTypes.fn('NOW'),
    },
    updated_on: {
      type: DataTypes.Date,
      defaultValue: DataTypes.fn('NOW'),
    },
  });
  return pPV;
};
