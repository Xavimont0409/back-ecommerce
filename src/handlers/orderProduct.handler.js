const {
  getOrderProduct,
  addOrderProduct,
  updateOrderProduct,
  deleteOrderProduct
} = require('../controllers/orderProduct.controller')

const orderProductGet = async (req, res) => {
  try {
    res.status(200).json(await getOrderProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderProductPost = async (req, res) => {
  try {
    res.status(200).json(await addOrderProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderProductPut = async (req, res) => {
  try {
    res.status(200).json(await updateOrderProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const orderProductDelete = async (req, res) => {
  try {
    res.status(200).json(await deleteOrderProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  orderProductGet,
  orderProductPost,
  orderProductPut,
  orderProductDelete
}