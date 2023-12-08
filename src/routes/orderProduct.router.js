const { Router } = require('express')
const {
	orderProductGet,
  orderProductPost,
  orderProductPut,
  orderProductDelete
} = require('../handlers/orderProduct.handler')

const orderProductRouter = Router()

orderProductRouter.get('/', orderProductGet)
orderProductRouter.post('/', orderProductPost)
orderProductRouter.put('/', orderProductPut)
orderProductRouter.delete('/', orderProductDelete)

module.exports = orderProductRouter