const formatCategoryProperties = (categories) => {
  const formattedCategories = categories.map(category => Object.assign(category,
    {
      property_names: category.property_names ? category.property_names.split(',') : [],
      property_units: category.property_units ? category.property_units.split(',') : [],
    }));
  return formattedCategories;
};

export default formatCategoryProperties;
