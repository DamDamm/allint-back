const express = require('express');

const allergyRouter = express.Router();

allergyRouter.get('/', ctrl);

module.exports = allergyRouter;
