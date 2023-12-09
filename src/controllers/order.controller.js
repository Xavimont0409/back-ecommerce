const { Order } = require('../db')

const getOrder = async () => {
  return await Order.findAll()
}

const addOrder = async (date_order, total, state, ClientId) => {
  return await Order.create({ date_order, total, state, ClientId })
}

const updateOrder = async (id, date_order, total, state) => {
  const checkOrder = await Order.findOne({ where: { id } })

  if (date_order) checkOrder.date_order = date_order
  if (total) checkOrder.total = total
  if (state) checkOrder.state = state

  const updateOrder = await checkOrder.save()
  
  return updateOrder
}

const deleteOrder = async (id) => {
  return await Order.destroy({ where: { id } })
}

module.exports = {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder
}