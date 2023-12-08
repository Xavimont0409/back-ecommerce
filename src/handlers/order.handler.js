const {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/order.controller')

const orderGet = async (req, res) => {
  try {
    res.status(200).json(await getOrder())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderPost = async (req, res) => {
  try {
    const { date_order, total, state, ClientId } = req.body
    res.status(200).json(await addOrder(date_order, total, state, ClientId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderPut = async (req, res) => {
  try {
    const { id, date_order, total, state, ClientId } = req.body
    res.status(200).json(await updateOrder(id, date_order, total, state, ClientId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const orderDelete = async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json(await deleteOrder(id))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  orderGet,
  orderPost,
  orderPut,
  orderDelete
}