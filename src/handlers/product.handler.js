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
    const { name, description, price, stock, CategoryId } = req.body
    res.status(200).json(await addProduct(name, description, price, stock, CategoryId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const productPut = async (req, res) => {
  try {
    const { id, name, description, price, stock, CategoryId } = req.body
    res.status(200).json(await updateProduct(id, name, description, price, stock, CategoryId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const productDelete = async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json(await deleteProduct(id))
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
