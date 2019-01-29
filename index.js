import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const logger = require('morgan');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app
  .use(logger('tiny'))
  .use(cors())
  .use(express.json())
  .use(routes);

app.listen(PORT, (err) => {
  // eslint-disable-next-line
  if (err) console.error('❌ Unable to connect the server: ', err);
  // eslint-disable-next-line
  console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`);
});
