import CONSTANTS from '../_CONSTANTS';

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
      unique: true,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    vat_rate: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: CONSTANTS.vatRate || 0,
    },
    discount: {
      type: DataTypes.DECIMAL(4, 2),
      defaultValue: 0,
    },
    tags: {
      type: DataTypes.JSON,
    },
    images: {
      type: DataTypes.JSON,
    },
    /* eslint-disable */
    'category_id': {
      type: DataTypes.INTEGER,
    },
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
      type: DataTypes.INTEGER,
      foreignKey: {
        // allowNull: false,
      },
    });
  };

  return Product;
};
