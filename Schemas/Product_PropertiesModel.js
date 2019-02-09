module.exports = (sequelize, DataTypes) => {
  const pP = sequelize.define('product_properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    category_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    property_name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    units: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    property_value: {
      allowNull: true,
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
  return pP;
};
