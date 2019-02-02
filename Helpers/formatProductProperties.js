const formatProductProperties = (products) => {
  const formattedProducts = products.map(product => Object.assign(product,
    {
      property_names: product.property_names ? product.property_names.split(',') : product.property_names,
      property_values: product.property_values ? product.property_values.split(',') : product.property_values,
    }));
  return formattedProducts;
};

export default formatProductProperties;
