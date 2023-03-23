import { HeroSection } from "../components/Home/HeroSection";
import { Partners } from "../components/Home/Partners";
import { ProductsSection } from "../components/global/ProductsSection";
import { SaleProduct } from "../components/Home/SaleProduct";
import { SpecialAndNews } from "../components/Home/SpecialAndNews";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
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
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has("category")) {
      setCurrentCategory("all");

      axios.get("http://localhost:8000/products").then((res) => {
        setProducts(res.data.slice(0, 8));
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
          setProducts(res.data.slice(0, 8));
          setIsReady(true);
        });
    }
  }, [location]);

  const title = (
    <span style={{ display: "flex", alignItems: "center", gap: 20 }}>
      Popular products
      <Link
        className="secondary-color"
        style={{ fontSize: 16, fontWeight: 500 }}
        to={"/products"}
      >
        View all
      </Link>
    </span>
  );

  return (
    <>
      <HeroSection />
      <ProductsSection
        {...{
          title,
          categories,
          currentCategory,
          products,
          isReady,
          setIsReady,
        }}
      />
      <SaleProduct />
      <SpecialAndNews />
      <Partners />
    </>
  );
};
