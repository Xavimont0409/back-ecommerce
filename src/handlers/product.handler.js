const {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller')

const productGet = async (req, res) => {
  try {
    res.status(200).json(await getProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const productPost = async (req, res) => {
  try {
    res.status(200).json(await addProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const productPut = async (req, res) => {
  try {
    res.status(200).json(await updateProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const productDelete = async (req, res) => {
  try {
    res.status(200).json(await deleteProduct())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  productGet,
  productPost,
  productPut,
  productDelete
}
