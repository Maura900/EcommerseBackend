import "../../styles/components/cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

const CartItem = ({ product, removeProduct }) => {
  return (
    <div className="cart-item">
      <div className="picture">
        <img
          src={`http://localhost:8000/uploads/${product.images[0]}`}
          alt={product.name}
        />
      </div>
      <div className="content">
        <h4 className="primary-color">{product.name}</h4>
        <p>Quantity: {product.count}</p>
      </div>
      <div className="close-btn" onClick={() => removeProduct(product)}>
        <AiOutlineClose size={13} />
      </div>
    </div>
  );
};

export const Cart = ({ show, setShow, products, setProducts }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const removeProduct = (product) => {
    setProducts(
      products.filter((curProduct) => curProduct._id !== product._id)
    );
  };

  useEffect(() => {
    let total = 0;
    products.map((product) => (total += product.price * product.count));
    setTotalPrice(total.toFixed(2));
  }, [products]);

  return (
    <div className="cart-wrapper">
      <div className={`cart ${show ? "show" : ""}`}>
        <div className="header">
          <h3 className="primary-color">Таны сагс</h3>
          <p
            onClick={() => {
              setProducts([]);
            }}
            className="primary-color"
          >
            Сагс хоослох
          </p>
        </div>

        {products.length !== 0 ? (
          <div className="cart-products">
            {products.map((product, index) => {
              return (
                <CartItem
                  key={`cart-item-${index}`}
                  {...{ product, removeProduct }}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty-cart">
            <img src="/images/empty-cart.svg" alt="Empty Cart" />
            <p>Сагс хоосон байна</p>
          </div>
        )}

        <div className="bottom">
          <div className="amount">
            <h3>Нийт дүн</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="order-btn primary-bg">Захиалах</div>
        </div>
      </div>

      <div onClick={() => setShow(false)} className="overlay"></div>
    </div>
  );
};
