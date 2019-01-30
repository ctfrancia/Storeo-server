module.exports = (sequelize, DataTypes) => {
  const CategoryProperties = sequelize.define('category_properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    property: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_on: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_on: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  CategoryProperties.associate = (models) => {
    CategoryProperties.hasMany(models.product_properties, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return CategoryProperties;
};
