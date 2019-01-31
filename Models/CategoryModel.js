module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
    timestamps: true,
  });

  Category.associate = (models) => {
    Category.hasMany(models.product, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    Category.hasMany(models.category_properties, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Category;
};
