import insertNewCategory from '../../Models/AdminModels/insertNewCategory';


const postNewCategory = async (req, res) => {
  const { category_properties: categoryProperties, name } = req.body;
  let requestStatus = 201;
  let responseMessage;

  try {
    await insertNewCategory(categoryProperties, name);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in postNewCategory controller', error);
    requestStatus = 500;
    responseMessage = { error: 'Request Error' };
  }
  res.status(requestStatus).send(responseMessage);
};

export default postNewCategory;
