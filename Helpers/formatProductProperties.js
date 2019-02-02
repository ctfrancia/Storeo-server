const formatProductProperties = (products) => {
  const formattedProducts = products.map(product => Object.assign(product,
    {
      property_names: product.property_names ? product.property_names.split(',') : [],
      property_values: product.property_values ? product.property_values.split(',') : [],
    }));
  return formattedProducts;
};

export default formatProductProperties;
