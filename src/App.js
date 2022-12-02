import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import "./assets/main.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </div>
  );
}

export default App;