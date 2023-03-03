/* V2 */
const express = require('express');

const productRouter = express.Router();

productRouter.get('/', ctrl);
productRouter.get('/:id', ctrl);
productRouter.post('/', ctrl);
productRouter.patch('/:id', ctrl);
productRouter.delete('/:id', ctrl);

module.exports = productRouter;
