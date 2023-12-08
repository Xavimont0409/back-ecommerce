const { Router } = require('express')
const {
	orderGet,
  orderPost,
  orderPut,
  orderDelete
} = require('../handlers/order.handler')

const orderRouter = Router()

orderRouter.get('/', orderGet)
orderRouter.post('/', orderPost)
orderRouter.put('/', orderPut)
orderRouter.delete('/', orderDelete)

module.exports = orderRouter