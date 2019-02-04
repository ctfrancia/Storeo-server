module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
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

  Category.associate = (models) => {
    Category.hasMany(models.product, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: {
        // allowNull: false,
      },
    });
    Category.hasMany(models.category_properties, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: {
        // allowNull: false,
      },
    });
  };

  return Category;
};
