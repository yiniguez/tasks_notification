import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  const categorie = await Category.find();
  return res.json(categorie);
};
