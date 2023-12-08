const { Router } = require('express')
const {
	productGet,
  productPost,
  productPut,
  productDelete
} = require('../handlers/product.handler')

const productRouter = Router()

productRouter.get('/', productGet)
productRouter.post('/', productPost)
productRouter.put('/', productPut)
productRouter.delete('/', productDelete)

module.exports = productRouter