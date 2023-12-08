const {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/category.controller')

const categoryGet = async(req, res) => {
  try {
    res.status(200).json(await getCategory())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const categoryPost = async (req, res) => {
  try {
    const { name, description } = req.body
    res.status(200).json(await addCategory(name, description))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const categoryPut = async (req, res) => {
  try {
    const { id, name, description } = req.body
    res.status(200).json(await updateCategory(id, name, description))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const categoryDelete = async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json(await deleteCategory(id))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  categoryGet,
  categoryPost,
  categoryPut,
  categoryDelete
}