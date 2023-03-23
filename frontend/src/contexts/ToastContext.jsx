import { createContext, useEffect, useRef, useState } from "react";
import { Toast } from "../components/utils/Toast";

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const clickHandler = useRef(() => setShow(false));

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);

  return (
    <ToastContext.Provider
      value={{ setShow, setContent, clickHandler, setType }}
    >
      {children}
      <Toast {...{ show, clickHandler, content, type }} />
    </ToastContext.Provider>
  );
};
