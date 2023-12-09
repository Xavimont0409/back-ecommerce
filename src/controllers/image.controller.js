const { Image, ProductId } = require('../db') 

const getImage = async () => {
  return await Image.findAll()
}

const addImage = async (route, ProductId) => {
  const findImage = await Image.findOne({ where: { route } })

  if(findImage) throw new Error("ALREADY_IMAGE");

  const newImage = await Image.create({ route, ProductId })

  return newImage
}

const updateImage = async (id, route) => {
  const checkImage = await Image.findOne({ where: { route } })
  if(checkImage) throw new Error("ALREADY_IMAGE");

  const findImage = await Image.findOne({ where: { id } })

  if (route) findImage.route = route

  const updateImage = await findImage.save()

  return updateImage
}

const deleteImage = async (id) => {
  return await Image.destroy({ where: { id } })
}

module.exports = {
  getImage,
  addImage,
  updateImage,
  deleteImage
}