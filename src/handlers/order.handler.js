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
    res.status(200).json(await addOrder())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderPut = async (req, res) => {
  try {
    res.status(200).json(await updateOrder())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const orderDelete = async (req, res) => {
  try {
    res.status(200).json(await deleteOrder())
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