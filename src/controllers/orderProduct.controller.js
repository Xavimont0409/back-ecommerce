const { OrderProduct } = require('../db')

const getOrderProduct = async () => {
  return await OrderProduct.findAll()
}

const addOrderProduct = async (amount, OrderId, ProductId) => {
  return await OrderProduct.create({ amount, OrderId, ProductId })
}

const updateOrderProduct = async (id, amount, OrderId, ProductId ) => {
  const checkOrderProduct = await OrderProduct.findOne({ where: { id, OrderId, ProductId } })

  if (amount) checkOrderProduct.amount = amount

  const updateOrderProduct = await checkOrderProduct.save()

  return updateOrderProduct
}

const deleteOrderProduct = async (id) => {
  return await OrderProduct.destroy({ where: { id } })
}

module.exports = {
  getOrderProduct,
  addOrderProduct,
  updateOrderProduct,
  deleteOrderProduct
}