const { Router } = require('express')
const {
	imageGet,
  imagePost,
  imagePut,
  imageDelete
} = require('../handlers/image.handler')

const imageRouter = Router()

imageRouter.get('/', imageGet)
imageRouter.post('/', imagePost)
imageRouter.put('/', imagePut)
imageRouter.delete('/', imageDelete)

module.exports = imageRouter