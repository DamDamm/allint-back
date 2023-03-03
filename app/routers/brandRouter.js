const express = require('express');

const brandRouter = express.Router();

brandRouter.get('/', ctrl);

module.exports = brandRouter;
