import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PromotionBar from "./components/PromotionBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      {/* <PromotionBar /> */}
      <Navbar />
      <div className="flex-grow bg-white">
        <App />
      </div>
      <Footer className="bg-gray-800 text-white shadow-lg py-6" />
    </div>
  </BrowserRouter>
);
