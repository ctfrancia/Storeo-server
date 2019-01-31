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
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.JSON,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.JSON,
    },
    discount: {
      type: DataTypes.DECIMAL(2, 1),
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    selling_price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    timestamp: {
      allowNull: false,
      type: DataTypes.DATE,
      notNull: true,
      defaultValue: DataTypes.NOW,
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
  Product.associate = (models) => {
    Product.hasMany(models.ordered_items, {
      onDelete: 'CASCADE',
      foreignKey: {
        // allowNull: false,
      },
    });
    Product.hasMany(models.product_properties, {
      onDelete: 'CASCADE',
      foreignKey: {
        // allowNull: false,
      },
    });
  };

  return Product;
};
