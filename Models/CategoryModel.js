module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
    },
    created_on: {
      type: DataTypes.Date,
      defaultValue: DataTypes.fn('NOW'),
    },
  });

  return Category;
};
