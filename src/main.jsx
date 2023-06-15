import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BrowserRouter from "./components/BrowserRouter.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./styles/variables.scss";
import "./styles/reset.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
