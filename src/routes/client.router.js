const { Router } = require('express')
const {
	clientGet,
  clientPost,
  clientPut,
  clientDelete
} = require('../handlers/client.handler')

const clientRouter = Router()

clientRouter.get('/', clientGet)
clientRouter.post('/', clientPost)
clientRouter.put('/', clientPut)
clientRouter.delete('/', clientDelete)

module.exports = clientRouter