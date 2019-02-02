import insertUserAddress from '../../Models/UserModels/insertUserAddress';

const updateAddress = async (req, res) => {
  try {
    const updatedUser = await insertUserAddress(req.body);
    delete updatedUser.password;

    res
      .status(200)
      .send(updatedUser);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in insertAddress controller =>', err);
    res
      .status(400)
      .send('Unable to update address.');
  }
};

export default updateAddress;
