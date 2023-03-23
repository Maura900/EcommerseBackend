import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categories.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);

router.post("/", createCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export default router;
