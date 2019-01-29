//  Luca
const getAllProducts = (req, res) => {
  res
    .status(200)
    .send('hello from products ontroller')
    .end();
};

export default getAllProducts;
