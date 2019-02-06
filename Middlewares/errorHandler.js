// eslint-disable-next-line
const errorMiddleware = (err, req, res, next) => {
  if (err) {
    res
      .status(500)
      .end();
  }
};

export default errorMiddleware;
