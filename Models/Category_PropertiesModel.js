module.exports = (sequelize, DataTypes) => {
  const CategoryProperties = sequelize.define('Category_Properties', {
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
      defaultValue: DataTypes.fn('NOW'),
    },
    updated_on: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW'),
    },
  });
  return CategoryProperties;
};
