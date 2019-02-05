const errorMiddleware = (err, req, res) => {
  if (err) {
    res
      .status(500)
      .end();
  }
};

export default errorMiddleware;
