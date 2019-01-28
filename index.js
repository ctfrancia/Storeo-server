const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';









app.listen(PORT, (err) => {
  // eslint-disable-next-line
  if (err) console.error('❌ Unable to connect the server: ', err);
  // eslint-disable-next-line
  console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`);
});
