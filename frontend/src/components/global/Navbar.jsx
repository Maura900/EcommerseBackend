import "../../styles/components/navbar.css";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { LoginContext } from "../../contexts/LoginContext";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { showCart } = useCart();
  const { products } = useContext(CartContext);
  const { setShow: setLoginShow } = useContext(LoginContext);
  const [productsCount, setProductsCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let count = 0;
    products.map((product) => (count += product.count));
    setProductsCount(count);
  }, [products]);

  return (
    <div
      className={`navbar primary-bg ${
        location.pathname === "/" ? "" : "white"
      }`}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={`/images/logo-${
                location.pathname === "/" ? "white" : "dark"
              }.svg`}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search any things" />
          <div className="outline-white-btn search-btn">Search</div>
        </div>

        <div className="user-links">
          <div className="sign-in-btn" onClick={() => setLoginShow(true)}>
            <BiUser />
            <span>Sign In</span>
          </div>
          <div className="cart-btn" onClick={showCart}>
            <RiShoppingCart2Line />
            <span className="secondary-bg primary-color">{productsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
