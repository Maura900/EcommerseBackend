import { createContext, useState } from "react";
import { LogIn } from "../components/global/LogIn";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <LoginContext.Provider value={{ setShow }}>
      {children}
      <LogIn {...{ show, setShow }} />
    </LoginContext.Provider>
  );
};
