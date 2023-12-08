const { Router } = require('express')
const categoryRouter = require('./category.router')
const clientRouter = require('./client.router')
const imageRouter = require('./image.router')
const orderRouter = require('./order.router')
const orderProductRouter = require('./orderProduct.router')
const productRouter = require('./product.router')

const router = Router()

router.use('/category', categoryRouter)
router.use('/client', clientRouter)
router.use('/image', imageRouter)
router.use('/order', orderRouter)
router.use('/order_product', orderProductRouter)
router.use('/product', productRouter)

module.exports = router