const { Client } = require('../db')
const { encrypt, verified } = require('../utils/passHash')

const getClient = async () => {
  return await Client.findAll()
}

const addClient = async (name, lastName, email, password) => {
  const checkClient = await Client.findOne({ where: { email } })
  if (checkClient) throw new Error("ALREADY_CLIENT");

  const passHash = await encrypt(password);

  const newClient = await Client.create({ name, lastName, email, password: passHash})

  return newClient
}

const updateClient = async (id, name, lastName, email, password) => {
  const checkClient = await Client.findOne({ where: { email } })
}

const deleteClient = async () => {

}

module.exports = {
  getClient,
  addClient,
  updateClient,
  deleteClient
}