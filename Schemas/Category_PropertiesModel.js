module.exports = (sequelize, DataTypes) => {
  const CategoryProperties = sequelize.define('category_properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    property_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    units: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 0,
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

  CategoryProperties.associate = (models) => {
    CategoryProperties.hasMany(models.product_properties, {
      onDelete: 'CASCADE',
      foreignKey: {
        // allowNull: false,
      },
    });
  };
  return CategoryProperties;
};
