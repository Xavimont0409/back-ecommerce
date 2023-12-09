const { Router } = require('express')
const {
	clientGet,
  clientPost,
  clientPut,
  clientDelete,
  clientGetId
} = require('../handlers/client.handler')

const clientRouter = Router()

clientRouter.get('/', clientGet)
clientRouter.get('/id', clientGetId)
clientRouter.post('/', clientPost)
clientRouter.put('/', clientPut)
clientRouter.delete('/', clientDelete)

module.exports = clientRouter