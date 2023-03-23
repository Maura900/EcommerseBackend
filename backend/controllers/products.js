import ProductModel from "../models/product.js";

export const getProducts = async (req, res) => {
  const { category } = req.query;

  try {
    let products = await ProductModel.find();

    if (category) {
      products = products.filter((product) => {
        for (let curCategory of product.categories) {
          if (category === curCategory.toLowerCase()) return product;
        }
      });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findById(id);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  let { body } = req.body;
  body = JSON.parse(body);
  const {
    name,
    description,
    categories,
    price,
    discountPercentage,
    remaining,
    createdBy,
    visible,
  } = body;
  const images = req.files;

  try {
    const imagesNames = images.map((image) => image.filename);

    const newProduct = await ProductModel.create({
      name,
      description,
      categories,
      price,
      discountPercentage,
      remaining,
      createdBy,
      visible,
      images: imagesNames,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};
