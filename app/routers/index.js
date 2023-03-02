module.exports = function (app) {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/allergy', allergyRouter);
  app.use('/product', productRouter);
  app.use('/brand', brandRouter);
  app.use('/category', categoryRouter);
};
