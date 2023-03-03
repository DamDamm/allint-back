const express = require('express');

const categoryRouter = express.Router();

categoryRouter.get('/', ctrl);

module.exports = categoryRouter;
