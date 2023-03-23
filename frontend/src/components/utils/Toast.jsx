import "../../styles/utils/toast.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const Toast = ({ content, show, clickHandler, type }) => {
  return (
    <div
      onClick={() => clickHandler.current()}
      className={`toast ${type} ${show ? "show" : ""}`}
    >
      {type === "success" && <AiOutlineCheckCircle />}
      {type === "error" && <AiOutlineCloseCircle />}
      {content}
    </div>
  );
};
