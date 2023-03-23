import CategoryModel from "../models/Category.js";
import slugify from "slugify";

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = await CategoryModel.create({
      name,
      slug: slugify(name).toLowerCase(),
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await CategoryModel.findById(id);

    category.name = name;
    category.slug = slugify(name).toLowerCase();

    const updatedCategory = await category.save();

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await CategoryModel.findById(id);

    await category.deleteOne();

    res.status(200).json(id);
  } catch (error) {
    console.log(error);
  }
};
