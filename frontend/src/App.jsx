import { Navbar } from "./components/global/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/global/Footer";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
