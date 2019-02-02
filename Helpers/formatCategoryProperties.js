const formatCategoryProperties = (categories) => {
  const formattedCategories = categories.map(category => Object.assign(category,
    {
      property_names: category.property_names ? category.property_names.split(',') : category.property_names,
      property_units: category.property_units ? category.property_units.split(',') : category.property_units,
    }));
  return formattedCategories;
};

export default formatCategoryProperties;
