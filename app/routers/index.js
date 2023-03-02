const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const allergyRouter = require('./allergyRouter');
const productRouter = require('./productRouter');
const brandRouter = require('./brandRouter');
const categoryRouter = require('./categoryRouter');

// use prefix road
module.exports = function (app) {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/allergy', allergyRouter);
  app.use('/product', productRouter);
  app.use('/brand', brandRouter);
  app.use('/category', categoryRouter);
};
