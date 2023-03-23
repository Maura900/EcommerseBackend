import "../../styles/components/specialAndNews.css";
import { RiShoppingCart2Line } from "react-icons/ri";

export const SpecialAndNews = () => {
  return (
    <div className="special container">
      <div className="special-product">
        <div className="title primary-bg">Special product</div>

        <div className="picture">
          <img src="./images/special-product.png" alt="Special Product" />
        </div>

        <div className="content">
          <h4 className="primary-color">JBL bar 2.1 deep bass</h4>
          <h5>$11.70</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </p>

          <div className="cart-btn primary-btn">
            Add to cart <RiShoppingCart2Line />
          </div>
        </div>
      </div>

      <div className="news">
        <div className="news-item">
          <div className="picture">
            <img src="./images/news-1.png" alt="News" />
          </div>

          <div className="content">
            <div className="outline-secondary-btn date">22 Oct 2021</div>

            <h2 className="primary-color">Who avoids a pain that produces?</h2>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>

            <p className="author secondary-color">By spacing tech</p>
          </div>
        </div>

        <div className="news-item">
          <div className="picture">
            <img src="./images/news-2.png" alt="News" />
          </div>

          <div className="content">
            <div className="outline-secondary-btn date">22 Oct 2021</div>

            <h2 className="primary-color">Who avoids a pain that produces?</h2>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>

            <p className="author secondary-color">By spacing tech</p>
          </div>
        </div>
      </div>
    </div>
  );
};
