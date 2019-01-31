
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_num: {
      type: DataTypes.UUID,
      notNull: true,
    },
    order_status: {
      type: DataTypes.BOOLEAN,
      notNull: true,
    },
    special_instructions: {
      type: DataTypes.STRING,
      notNull: true,
    },
  },
  {
    underscored: true,
    timestamps: true,
  });
  Order.associate = (models) => {
    Order.hasMany(models.ordered_items, {
      onDelete: 'CASCADE',
      foreginKey: {
        allowNull: false,
      },
    });
  };
  return Order;
};
