const { Router } = require('express')
const {
	categoryGet,
  categoryPost,
  categoryPut,
  categoryDelete
} = require('../handlers/category.handler')

const categoryRouter = Router()

categoryRouter.get('/', categoryGet)
categoryRouter.post('/', categoryPost)
categoryRouter.put('/', categoryPut)
categoryRouter.delete('/', categoryDelete)

module.exports = categoryRouter