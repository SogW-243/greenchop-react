// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import các component Layout và Pages
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tất cả các route bên trong sẽ sử dụng chung Layout (có Header và Footer) */}
        <Route path="/" element={<Layout />}>
          {/* Trang chủ */}
          <Route index element={<HomePage />} />
          {/* Các trang khác */}
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="products/:productId"
            element={<ProductDetailPage />}
          />{" "}
          {/* Route cho chi tiết sản phẩm */}
          <Route path="news" element={<NewsPage />} />
          <Route path="article/:articleId" element={<ArticlePage />} />{" "}
          {/* Route cho bài viết chi tiết */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
