const gateMiddleware = (req, res, next) => {
  if (req.body.user) {
    next();
  } else {
    res
      .status(302)
      .redirect(`${process.env.BASE_URL || 'http://localhost:3000'}/login`);
    //  eslint-disable-next-line
    console.log('Unauthorized!!!!!!!!!!!');
  }
};

export default gateMiddleware;
