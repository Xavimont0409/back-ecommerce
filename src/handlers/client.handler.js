const {
  getClient,
  addClient,
  updateClient,
  deleteClient
} = require('../controllers/client.controller')

const clientGet = async (req, res) => {
  try {
    res.status(200).json(await getClient())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientPost = async (req, res) => {
  try {
    res.status(200).json(await addClient())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientPut = async (req, res) => {
  try {
    res.status(200).json(await updateClient())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const clientDelete = async (req, res) => {
  try {
    res.status(200).json(await deleteClient())
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  clientGet,
  clientPost,
  clientPut,
  clientDelete
}