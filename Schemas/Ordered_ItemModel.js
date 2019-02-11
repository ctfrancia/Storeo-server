module.exports = (sequelize, DataTypes) => {
  const OrderedItem = sequelize.define('ordered_items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    /* eslint-disable */
    'created_at': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    'updated_at': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  /* eslint-enable */
  },
  {
    underscored: true,
    timestamps: true,
  });
  return OrderedItem;
};
