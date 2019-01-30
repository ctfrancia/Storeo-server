
module.exports = (sequelize, DataTypes) => {
  const OrderedItems = sequelize.define('Ordered_Items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    created_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW'),
    },
    updated_on: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW'),
    },
  });
  return OrderedItems;
};
