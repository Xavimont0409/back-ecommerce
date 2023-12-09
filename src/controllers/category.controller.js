const { Category } = require("../db");

const getCategory = async () => {
  return await Category.findAll();
};

const addCategory = async (name, description) => {
  const findCategory = await Category.findOne({ where: { name } });

  if (findCategory) throw new Error("ALREADY_CATEGORY");

  const newCategory = await Category.create({ name, description });
  return newCategory;
};

const updateCategory = async (id, name, description) => {
  const checkCategory = await Category.findOne({ where: { name } });

  if (checkCategory) throw new Error("ALREADY_THIS_CATEGORY");

  const findCategory = await Category.findOne({
    where: { id },
  });
  if (name) findCategory.name = name;
  if (description) findCategory.description = description;

  const updateCategory = await findCategory.save();
  return updateCategory;
};

const deleteCategory = async (id) => {
  return await Category.destroy({ where: { id } });
};

module.exports = {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
