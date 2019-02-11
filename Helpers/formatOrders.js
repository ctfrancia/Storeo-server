const formatOrders = (orders) => {
  const formattedOrders = orders.map(order => Object.assign(order, {
    quantities: order.quantities ? order.quantities.split(',') : [],
    products: order.products ? order.products.split(',') : [],
    prices: order.prices ? order.prices.split(',') : [],
    products_id: order.products_id ? order.products_id.split(',') : [],
  }));
  return formattedOrders;
};

export default formatOrders;
