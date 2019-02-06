exports.data = {
  addProduct: {
    name: 'Valfriu - Cabrales',
    description: 'Stinky and expensive cheese: smells like feet!',
    discount: 10,
    tags: ['cheese', 'Spain'],
    images: ['www.fakelink.com', 'www.anotherfakeroute.com'],
    category_id: 1,
    product_properties: [
      {
        category_id: 1,
        property_name: 'type',
        units: 0,
        property_value: 'Spanish',
      },
      {
        category_id: 1,
        property_name: 'weight',
        units: 'kg',
        property_value: 1,
      }],
  },
  addCategory: {
    name: 'Food',
    description: 'Best of food to be bought here',
    image: 'www.linktoimagehere.com',
    category_properties: [
      {
        property_name: 'type',
        units: 'Blue (type of cheese)',
      },
      {
        property_name: 'type',
        units: 'Blue (type of cheese)',
      }],
  },
};
