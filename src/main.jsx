import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Đường dẫn store của bạn
import App from "./App";
import "./index.css";
// 1. Import BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/greenchop-react">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
