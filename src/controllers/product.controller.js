const { Product, Category, Image } = require("../db");

const getProduct = async () => {
  return await Product.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: Image
      }
    ],
  });
};

const addProduct = async (name, description, price, stock, CategoryId) => {
  const checkProduct = await Product.findOne({ where: { name } });

  if (checkProduct) throw new Error("ALREADY_PRODUCT");

  const newProduct = await Product.create({
    name,
    description,
    price,
    stock,
    CategoryId,
  });

  const findProductCreated = await Product.findOne({
    where: { id: newProduct.id },
    include: {
      model: Category,
    },
  });

  return findProductCreated;
};

const updateProduct = async (
  id,
  name,
  description,
  price,
  stock,
  CategoryId
) => {
  const checkProduct = await Product.findOne({ where: { name, CategoryId } });

  if (checkProduct) throw new Error("ALREADY_PRODUCT");

  const findProduct = await Product.findOne({
    where: { id },
    include: {
      model: Category,
    },
  });

  if (name) findProduct.name = name;
  if (description) findProduct.description = description;
  if (price) findProduct.price = price;
  if (stock) findProduct.stock = stock;

  const updateProduct = await findProduct.save();

  return updateProduct;
};

const deleteProduct = async (id) => {
  return await Product.destroy({ where: { id } });
};

module.exports = {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
