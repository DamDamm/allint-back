require('dotenv').config();

const express = require('express');
const exceptionMiddleware = require('./app/middlewares/exceptionMiddleware');
const routers = require('./app/routers/index');

const port = process.env.PORT || 3000;

const app = express();

app.use(exceptionMiddleware);
routers(app);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
