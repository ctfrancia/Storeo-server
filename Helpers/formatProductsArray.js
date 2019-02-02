import formatPricesAndDiscount from './formatPricesAndDiscount';
import formatProductProperties from './formatProductProperties';

const formatProductsArray = (productsArray) => {
  const formatted = formatPricesAndDiscount(productsArray);
  return formatProductProperties(formatted);
};

export default formatProductsArray;
