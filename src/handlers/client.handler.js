const {
  getClient,
  addClient,
  updateClient,
  deleteClient,
  getClientId
} = require('../controllers/client.controller')

const clientGet = async (req, res) => {
  try {
    res.status(200).json(await getClient())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientGetId = async (req, res) => {
  try {
    const { id } = req.query
    res.status(200).json(await getClientId(id))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientPost = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body
    res.status(200).json(await addClient(name, lastName, email, password))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientPut = async (req, res) => {
  try {
    const { id, name, lastName, email, password } = req.body
    res.status(200).json(await updateClient(id, name, lastName, email, password))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientDelete = async (req, res) => {
  try {
    const { id } = req.body
    res.status(200).json(await deleteClient(id))
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  clientGet,
  clientPost,
  clientPut,
  clientDelete,
  clientGetId
}