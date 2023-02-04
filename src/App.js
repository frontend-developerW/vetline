import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import "./assets/main.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Products from "./screens/Products";
import Product from "./screens/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Loader from "./components/Loader";
import Terms from "./screens/Terms";
function App() {
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);
  return (
    <div>
      {(loader && <Loader />) || (
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/products"} element={<Products />} />
              <Route path={"/product"} element={<Product />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/terms"} element={<Terms />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      )}
    </div>
  );
}

export default App;
