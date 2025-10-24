// src/components/home/HomeProductsSection.jsx

import React from "react";
import ProductCard from "@/components/ProductCard";

const HomeProductsSection = () => {
  // Đã cập nhật để bao gồm tất cả 6 sản phẩm
  const allProducts = [
    {
      id: 1,
      name: "Combo",
      subname: "Quán ăn",
      description: "1 Thùng 1000 đôi",
      price: 600000,
    },
    {
      id: 2,
      name: "Combo",
      subname: "Quán ăn - nhà hàng",
      description: "1 Thùng 2000 đôi",
      price: 1200000,
    },
    {
      id: 3,
      name: "Combo Quán ăn",
      subname: "Nhà hàng - khách sạn",
      description: "1 Thùng 3000 đôi",
      price: 1800000,
    },
    {
      id: 4,
      name: "Combo",
      subname: "gia đình bé xinh",
      description: "1 Thùng 100 đôi",
      price: 60000,
    },
    {
      id: 5,
      name: "Combo",
      subname: "gia đình",
      description: "1 Thùng 200 đôi",
      price: 120000,
    },
    {
      id: 6,
      name: "Combo",
      subname: "Đại gia đình",
      description: "1 Thùng 300 đôi",
      price: 180000,
    },
  ];

  return (
    <section className="py-24 mt-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-extrabold text-center mb-33">Sản phẩm</h2>
        {/* Cập nhật grid để hiển thị 2 hàng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-39">
          {allProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;
