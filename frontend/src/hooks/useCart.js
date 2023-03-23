import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { setShow, products, setProducts } = useContext(CartContext);

  const showCart = () => setShow(true);
  const closeCart = () => setShow(false);

  const addProduct = (product) => {
    const newProducts = [...products];

    if (products.length === 0) {
      newProducts.push({ ...product, count: 1 });
      setProducts(newProducts);
      return;
    }

    let isExists = false;

    for (let curProduct of products) {
      if (curProduct._id === product._id) isExists = true;
    }

    if (isExists) {
      for (let curProduct of newProducts)
        if (curProduct._id === product._id) curProduct.count += 1;
    } else {
      newProducts.push({ ...product, count: 1 });
    }

    setProducts(newProducts);
  };

  return { showCart, closeCart, addProduct };
};
