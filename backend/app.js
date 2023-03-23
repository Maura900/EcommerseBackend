import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";

import categoryRoutes from "./routes/categories.js";
import productRoutes from "./routes/products.js";
import { createProduct } from "./controllers/products.js";

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.post("/products", upload.array("images", 4), createProduct);

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log(`Mongoose connected`);
    app.listen(PORT, () =>
      console.log(`Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
