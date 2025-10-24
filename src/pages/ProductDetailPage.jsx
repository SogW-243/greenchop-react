// src/pages/ProductDetailPage.jsx

import React, { useState, useEffect } from "react";
// 1. Import thêm Link và useNavigate, useParams
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";
import { fetchProducts } from "@/features/product/productSlice";

// Import hình ảnh
import DonutImage from "../assets/images/Donut.png";
import ItemImg1 from "../assets/images/item-img1.jpg";
import ItemImg2 from "../assets/images/item-img2.jpg";
import ItemImg3 from "../assets/images/item-img3.jpg";

// Dữ liệu giả, sau này bạn sẽ fetch từ API dựa trên ID
const dummyProduct = {
  id: 1,
  name: "Combo - Quán ăn",
  price: 600000,
  description: "1 Thùng 1000 đôi",
  fullDescription:
    "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
  manufacturer: "GreenChop",
  category: "Đũa gỗ thay đầu",
  images: [DonutImage, DonutImage, DonutImage, DonutImage],
};

const ProductDetailPage = () => {
  const { productId } = useParams(); // Lấy productId từ URL, ví dụ: /products/1
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // 'description' hoặc 'details'

  // Sau này, bạn sẽ dùng productId để fetch dữ liệu chi tiết của sản phẩm từ API
  const product = dummyProduct;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="bg-orange-50 flex justify-center items-center p-8 rounded-lg mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-1/2"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="bg-orange-50 flex justify-center items-center p-2 rounded-md"
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-extrabold mb-3">{product.name}</h2>
            <div className="w-16 h-0.5 bg-gray-300 mb-4"></div>
            <p className="text-xl font-semibold mb-2">
              Giá:{" "}
              <span className="text-orange-600">
                {product.price.toLocaleString()}
              </span>{" "}
              vnd
            </p>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            <div className="flex items-center gap-8 mb-6">
              <div className="flex items-center border border-gray-400 rounded-md p-2 w-28 justify-between">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-gray-500 text-sm"
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-gray-500 text-sm"
                >
                  +
                </button>
              </div>
              <Link
                to="/cart"
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 transition-colors cursor-pointer"
              >
                Mua hàng
              </Link>
            </div>

            <div>
              <p className="text-sm mb-1">
                <span className="font-semibold">Nhà sản xuất: </span>
                {product.manufacturer}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Dòng sản phẩm: </span>
                {product.category}
              </p>
            </div>
          </div>
        </div>

        {/* Description & Details Tabs */}
        <div className="mt-20">
          <div className="flex justify-center gap-8 border-b border-gray-300">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-2 text-lg font-semibold ${
                activeTab === "description"
                  ? "border-b-2 border-green-600 text-gray-800"
                  : "text-gray-500"
              }`}
            >
              Mô tả sản phẩm
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-2 text-lg font-semibold ${
                activeTab === "details"
                  ? "border-b-2 border-green-600 text-gray-800"
                  : "text-gray-500"
              }`}
            >
              Thông tin chi tiết
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === "description" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h2 className="text-4xl font-extrabold text-orange-500">
                    01.
                  </h2>
                  <h3 className="font-bold my-2">Thân trên</h3>
                  <p className="text-sm">
                    Làm từ nhựa Melamine <br /> (được chứng nhận ATTP)
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 -left-4 w-px h-8 bg-black hidden md:block"></div>
                  <h2 className="text-4xl font-extrabold text-orange-500">
                    02.
                  </h2>
                  <h3 className="font-bold my-2">Khớp liên kết</h3>
                  <p className="text-sm">Inox 304</p>
                  <div className="absolute top-1/2 -right-4 w-px h-8 bg-black hidden md:block"></div>
                </div>
                <div>
                  <h2 className="text-4xl font-extrabold text-orange-500">
                    03.
                  </h2>
                  <h3 className="font-bold my-2">Thân dưới</h3>
                  <p className="text-sm">Gỗ tre</p>
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={ItemImg1}
                    alt="Chất liệu xanh"
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="font-bold mb-2">Chất liệu xanh</h3>
                  <p className="text-sm">
                    100% bằng gỗ tự nhiên, đảm bảo cho nhu cầu sống xanh và sức
                    khỏe người dùng
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={ItemImg2}
                    alt="Vệ sinh và an toàn"
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="font-bold mb-2">Vệ sinh và an toàn</h3>
                  <p className="text-sm">
                    Đầu đũa mới 100% mỗi bữa ăn, không chung đụng đầu đũa với
                    bất kì người dùng nào khác.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={ItemImg3}
                    alt="Tiện lợi"
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="font-bold mb-2">Tiện lợi</h3>
                  <p className="text-sm">
                    Thao tác tháo lắp cực kỳ nhanh gọn và đơn giản, không quá
                    thời gian gỡ một bao đũa.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
