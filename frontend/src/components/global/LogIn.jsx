import "../../styles/components/login.css";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiUnlock } from "react-icons/fi";

export const LogIn = ({ show, setShow }) => {
  return (
    <div className="login-wrapper">
      <div className={`login ${show ? "show" : ""}`}>
        <div className="header">
          <div className="logo">
            <img src="/images/logo-dark.svg" alt="Logo Dark" />
          </div>

          <div onClick={() => setShow(false)} className="close-btn">
            <AiOutlineClose />
          </div>
        </div>
        <form>
          <div className="email input">
            <BiUser />
            <input type="email" placeholder="И-мэйл" />
          </div>

          <div className="password input">
            <FiUnlock />
            <input type="password" placeholder="Нууц үг" />
            <AiOutlineEye className="password-show" />
          </div>

          <a href="/" className="password-forget">
            Нууц үгээ мартсан уу?
          </a>

          <div type="submit" className="primary-btn">
            Нэвтрэх
          </div>

          <div className="divider">эсвэл</div>

          <div className="outline-primary-btn">Бүртгүүлэх</div>
        </form>
      </div>

      <div onClick={() => setShow(false)} className="overlay"></div>
    </div>
  );
};
