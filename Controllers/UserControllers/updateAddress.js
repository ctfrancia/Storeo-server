import insertUserAddress from '../../Models/UserModels/insertUserAddress';

const updateAddress = async (req, res, next) => {
  try {
    const [updatedUser] = await insertUserAddress(req.body);
    delete updatedUser.password;
    delete updatedUser.auth_token;

    res
      .status(200)
      .send([updatedUser]);
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in insertAddress controller =>', err);
    err.errorMessage = 'Unable to update address.';
    next(err);
  }
};

export default updateAddress;
