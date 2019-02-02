import formatPricesAndPercentage from './formatPricesAndPercentage';
import formatProductProperties from './formatProductProperties';

const formatProductsArray = (productsArray) => {
  const formatted = formatPricesAndPercentage(productsArray);
  return formatProductProperties(formatted);
};

export default formatProductsArray;
