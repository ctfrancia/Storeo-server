// eslint-disable-next-line
const errorMiddleware = (err, req, res, next) => {
  if (err.statusCode && err.errorMessage) {
    res
      .status(err.statusCode)
      .send(err.errorMessage);
  } else if (!err.statusCode && err.errorMessage) {
    res
      .status(500)
      .send(err.errorMessage);
  } else {
    res
      .status(500)
      .end('Internal server error.');
  }
};

export default errorMiddleware;
