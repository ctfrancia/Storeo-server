module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    timestamp: {
      type: DataTypes.DATE,
      notNull: true,
      defaultValue: DataTypes.NOW,
    },
    tags: {
      type: DataTypes.JSON,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    created_on: {
      type: DataTypes.Date,
      defaultValue: DataTypes.fn('NOW'),
    },
  });

  return Product;
};
