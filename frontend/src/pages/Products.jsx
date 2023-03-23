import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "../components/global/Breadcrumb";
import { ProductsSection } from "../components/global/ProductsSection";

const breadcrumbItems = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
];

export const Products = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const categoryRes = await axios.get("http://localhost:8000/categories");

      setCategories(categoryRes.data);
    };

    fetchData();

    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has("category")) {
      setCurrentCategory("all");

      axios.get("http://localhost:8000/products").then((res) => {
        setProducts(res.data);
        setIsReady(true);
      });
    } else {
      setCurrentCategory(searchParams.get("category"));
      axios
        .get(
          `http://localhost:8000/products?category=${searchParams.get(
            `category`
          )}`
        )
        .then((res) => {
          setProducts(res.data);
          setIsReady(true);
        });
    }
  }, [location]);

  return (
    <>
      <Breadcrumb {...{ breadcrumbItems }} />
      <ProductsSection
        {...{
          title: "All products",
          categories,
          currentCategory,
          products,
          isReady,
          setIsReady,
        }}
      />
    </>
  );
};
