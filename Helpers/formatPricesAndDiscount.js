const fn = {};
const currency = 'EUR';

/* Methods for formatting the product price and discount */
fn.centsToDecimals = valueInCents => Number(valueInCents || 0) / 100;

fn.decimalDiscountToPercents = decimalDiscountNum => Number(decimalDiscountNum || 0) * 100;

fn.stringifyPercentage = num => `${num} %`;

fn.formatTo = {
  EUR: num => `${num} €`,
  USD: num => `${num} $`,
};


/* Iterates over array of Products and formats each Product object */
const formatPricesAndDiscount = productsArr => productsArr.map((product) => {
  const formatted = Object.assign(product, {
    price: fn.formatTo[`${currency}`](fn.centsToDecimals(product.price)),
    selling_price: fn.formatTo[`${currency}`](fn.centsToDecimals(product.selling_price)),
    discount: fn.stringifyPercentage(fn.decimalDiscountToPercents(product.discount)),
  });
  return formatted;
});

export default formatPricesAndDiscount;
