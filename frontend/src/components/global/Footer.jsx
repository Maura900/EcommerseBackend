import "../../styles/components/footer.css";
import { BsWhatsapp, BsGoogle, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer primary-bg">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo-white.svg" alt="Logo" />
          </Link>
        </div>

        <div className="bottom">
          <div className="socials">
            <BsGoogle />
            <BsFacebook />
            <BsWhatsapp />
          </div>

          <div className="copyright">
            <p>© 2023. Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
