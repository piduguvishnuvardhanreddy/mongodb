import { Category } from "../models/Category.js";

// @desc Get all categories
export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

// @desc Create a new category
export const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  const created = await category.save();
  res.status(201).json(created);
};
