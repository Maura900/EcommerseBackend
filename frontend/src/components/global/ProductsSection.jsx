import "../../styles/components/popularProducts.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";
import { useToast } from "../../hooks/useToast";
import axios from "axios";
import { Spinner } from "../utils/Spinner";

const CategoryItem = ({ category, currentCategory, setIsReady }) => {
  return (
    <Link
      onClick={() => setIsReady(false)}
      to={category.slug === "all" ? "" : `?category=${category.slug}`}
      className={`category-item primary-color ${
        currentCategory === category.slug ? "active" : ""
      }`}
    >
      {category.name}
    </Link>
  );
};

const ProductItem = ({ product }) => {
  const { addProduct, showCart } = useCart();
  const { showToast } = useToast();

  return (
    <div className="product-item">
      {product.sale && (
        <div className="item-sale primary-color secondary-bg">
          Sale {product.sale}% off
        </div>
      )}

      <div className="picture">
        <img
          src={`http://localhost:8000/uploads/${product.images[0]}`}
          alt={product.name}
        />
      </div>

      <div className="info">
        <div className="content">
          <Link to={`/products/${product._id}`} className="primary-color">
            {product.name}
          </Link>
          <p>{product.brand}</p>
          <h4>${product.price.toFixed(2)}</h4>
        </div>
        <div
          className="add-cart-btn"
          onClick={() => {
            addProduct(product);
            showToast({
              content: "Сагсанд амжилттай нэмэгдлээ",
              onClick: showCart,
              type: "success",
            });
          }}
        >
          <RiShoppingCart2Line />
        </div>
      </div>
    </div>
  );
};

export const ProductsSection = ({
  title,
  currentCategory,
  categories = [],
  products = [],
  isReady,
  setIsReady,
}) => {
  return (
    <div className="popular-products container">
      <div className="header">
        <h3 className="primary-color">{title}</h3>
        <div className="categories">
          <CategoryItem
            category={{ name: "All", slug: "all" }}
            currentCategory={currentCategory}
            setIsReady={setIsReady}
          />
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={`category-item-${index}`}
                {...{ category, currentCategory, setIsReady }}
              />
            );
          })}
        </div>
      </div>
      {isReady ? (
        products.length === 0 ? (
          <p
            className="primary-color"
            style={{ width: "100%", textAlign: "center", fontWeight: 500 }}
          >
            Илэрц олдсонгүй
          </p>
        ) : (
          <div className="products">
            {products.map((product, index) => {
              return <ProductItem key={`product-${index}`} product={product} />;
            })}
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};
