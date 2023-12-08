require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { URL_DATABASE } = process.env;

const sequelize = new Sequelize(URL_DATABASE,
  {
    logging: false, 
    native: false
  }
)

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Category, Client, Image, Order, OrderProduct, Product } = sequelize.models;

Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(Image)
Image.belongsTo(Product)

Client.hasMany(Order)
Order.belongsTo(Client)

Order.belongsToMany(Product, { through: OrderProduct })
Product.belongsToMany(Order, { through: OrderProduct })

module.exports = {
  ...sequelize.models, 
  conn: sequelize
}