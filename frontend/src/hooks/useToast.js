import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";

export const useToast = () => {
  const { setShow, setContent, clickHandler, setType } =
    useContext(ToastContext);

  const showToast = ({ content, onClick, type = "success" }) => {
    setContent(content);
    clickHandler.current = () => {
      onClick();
      setShow(false);
    };
    setType(type);
    setShow(true);
  };

  const closeToast = () => {
    setShow(false);
    setContent("");
  };

  return { showToast, closeToast };
};
