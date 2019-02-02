const fn = {};

/* Methods for formatting the product price and discount */
fn.centsToDecimals = valueInCents => (valueInCents / 100);

fn.decimalDiscountToPercents = decimalDiscountNum => decimalDiscountNum * 100;

fn.stringifyPercentage = num => `${num} %`;

fn.formatToEuro = num => `${num} €`;


/* Iterates over array of Products and formats each Product object */
fn.formatPricesAndDiscount = productsArr => productsArr.map((product) => {
  const formatted = Object.assign(product, {
    price: fn.formatToEuro(fn.centsToDecimals(product.price)),
    selling_price: fn.formatToEuro(fn.centsToDecimals(product.selling_price)),
    discount: fn.stringifyPercentage(fn.decimalDiscountToPercents(product.discount)),
  });
  return formatted;
});

export default fn.formatPricesAndDiscount;
