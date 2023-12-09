const {
  getImage,
  addImage,
  updateImage,
  deleteImage
} = require('../controllers/image.controller')

const imageGet = async (req, res) => {
  try {
    res.status(200).json(await getImage())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const imagePost = async (req, res) => {
  try {
    const { route, ProductId } = req.body
    res.status(200).json(await addImage(route, ProductId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const imagePut = async (req, res) => {
  try {
    const { id, route } = req.body
    res.status(200).json(await updateImage(id, route, ProductId))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const imageDelete = async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json(await deleteImage(id))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  imageGet,
  imagePost,
  imagePut,
  imageDelete
}