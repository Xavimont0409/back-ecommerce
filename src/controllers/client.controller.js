const { Client, Order, Product } = require('../db')
const { encrypt, verified } = require('../utils/passHash')

const getClient = async () => {
  return await Client.findAll({
    include: {
      model: Order,
      include: {
        model: Product
      }
    }
  })
}

const getClientId = async (id) => {
  const checkClient = await Client.findOne({
    where: { id },
    include: {
      model: Order,
      include: {
        model: Product
      }
    }
  })
  return checkClient
}

const addClient = async (name, lastName, email, password) => {
  const checkClient = await Client.findOne({ where: { email } })
  if (checkClient) throw new Error("ALREADY_CLIENT");

  const passHash = await encrypt(password);

  const newClient = await Client.create({ name, lastName, email, password: passHash})

  return newClient
}

const updateClient = async (id, name, lastName, email, password) => {
  const passHash = await encrypt(password)

  const findClient = await Client.findOne({ where: { id } })
  if (name) findClient.name = name
  if (lastName) findClient.lastName = lastName
  if (email) findClient.email = email
  if (password) findClient.password = passHash

  const updateClient = await findClient.save()

  return updateClient
}

const deleteClient = async (id) => {
  return await Client.destroy({ where: { id } })
}

module.exports = {
  getClient,
  addClient,
  updateClient,
  deleteClient,
  getClientId
}