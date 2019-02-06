
const gateMiddleware = (req, res, next) => {
  const { user } = req.body;
  // Determine if the request comes from admin or user
  const reqFromAdmin = req.originalUrl.includes('/admin');
  // eslint-disable-next-line
  console.log('Request from', req.body.user.role, 'and requested path is ', req.originalUrl);
  if (reqFromAdmin && user.role === 1) {
    next();
  } else if (reqFromAdmin && user.role !== 1) {
    res
      .status(401)
      .send('Unauthorized. You are requesting admin resources.');
  } else if (!reqFromAdmin) {
    next();
  } else {
    res
      .status(401)
      .end();
  }
};

export default gateMiddleware;
