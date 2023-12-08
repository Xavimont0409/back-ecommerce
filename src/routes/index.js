const { Router } = require('express')
const categoryRouter = require('./category.router')
const clientRouter = require('./client.router')
const imageRouter = require('./image.router')
const orderRouter = require('./order.router')
const orderProductRouter = require('./orderProduct.router')
const productRouter = require('./product.router')

const router = Router()

router.app('/category', categoryRouter)
router.app('/client', clientRouter)
router.app('/image', imageRouter)
router.app('/order', orderRouter)
router.app('/order_product', orderProductRouter)
router.app('/product', productRouter)

module.exports = router