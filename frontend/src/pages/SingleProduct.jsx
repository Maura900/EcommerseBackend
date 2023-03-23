import "../styles/pages/singleProduct.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../components/global/Breadcrumb";
import { Spinner } from "../components/utils/Spinner";
import { AiOutlineCheck } from "react-icons/ai";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useToast";

export const SingleProduct = () => {
  const { id } = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
  ]);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const { addProduct } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      const relatedProductsRes = await axios.get(
        `http://localhost:8000/products?category=${response.data.categories[0].toLowerCase()}`
      );

      setBreadcrumbItems([
        ...breadcrumbItems.slice(0, 2),
        { name: response.data.name },
      ]);
      setProduct(response.data);
      setRelatedProducts(relatedProductsRes.data.slice(0, 4));
      setIsReady(true);
    };

    fetchData();
    window.scroll(0, 0);

    return () => {
      setIsReady(false);
    };
  }, [id]);

  return (
    <>
      {!isReady ? (
        <Spinner />
      ) : (
        <>
          <Breadcrumb {...{ breadcrumbItems }} />
          <div className="single-product container">
            <div className="product">
              <div className="pictures">
                <div className="main-picture">
                  <img
                    src={`http://localhost:8000/uploads/${product.images[0]}`}
                    alt={product.name}
                  />
                </div>

                <div className="other-pictures">
                  {product.images.slice(1).map((image) => {
                    return (
                      <div className="picture-wrapper">
                        <img
                          src={`http://localhost:8000/uploads/${image}`}
                          alt={product.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="content">
                <h1 className="title">{product.name}</h1>
                <h4 className="price">${product.price}</h4>
                <div className="description">{product.description}</div>
                <h5 className="available">
                  Availability:{" "}
                  <span>
                    <AiOutlineCheck /> In stock
                  </span>
                </h5>
                <p>Hurry up! only {product.remaining} product left in stock!</p>

                <div className="divider main"></div>

                <div className="quantity">
                  <h5>Quantity: </h5>
                  <div className="number-input">
                    <div className="number-btn">-</div>
                    <input type="number" value={1} />
                    <div className="number-btn">+</div>
                  </div>
                </div>

                <div className="btns">
                  <div
                    onClick={() => {
                      addProduct(product);
                      showToast({
                        content: "Сагсанд амжилттай нэмэгдлээ",
                        type: "success",
                      });
                    }}
                    className="primary-btn"
                  >
                    Add to cart
                  </div>
                  <div className="primary-btn">Buy it now</div>
                </div>

                <div className="divider"></div>

                <div className="extra-info">
                  <div className="sku">
                    <span>Sku:</span> 0133-9-9
                  </div>

                  <div className="category">
                    <span>Category:</span> {product.categories[0]}
                  </div>

                  <div className="share">
                    <span>Share:</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="related-products">
              <h1>Related products</h1>
              <div className="products-wrapper">
                {relatedProducts.map((product) => {
                  return (
                    <div className="related-product-item">
                      <div className="picture">
                        <img
                          src={`http://localhost:8000/uploads/${product.images[0]}`}
                          alt={product.name}
                        />
                      </div>
                      <h3>
                        <Link to={`/products/${product._id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p>${product.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
