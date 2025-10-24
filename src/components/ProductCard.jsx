// src/components/ProductCard.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";

// Import hình ảnh (giả sử bạn đã đặt chúng trong thư mục assets)
import DonutImage from "../assets/images/Donut.png";
import DiceImage from "../assets/images/Dice.png";
import GamepadImage from "../assets/images/Gamepad.png";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Xác định màu nền và hình ảnh dựa trên ID hoặc một thuộc tính khác của sản phẩm
  let bgColorClass = "bg-[#FFBA94]";
  let productImage = DonutImage;

  if (product.id % 3 === 2) {
    bgColorClass = "bg-[#C5FFA8]";
    productImage = DiceImage;
  } else if (product.id % 3 === 0) {
    bgColorClass = "bg-[#FFBA94]";
    productImage = GamepadImage;
  }

  // 5. Tạo hàm xử lý khi nhấn nút
  const handleAddToCart = () => {
    // Tạo item để thêm vào giỏ hàng (số lượng mặc định là 1)
    const cartItem = {
      productId: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image || productImage,
      quantity: 1, // Mặc định thêm 1 sản phẩm
    };

    // Gửi action đến Redux
    dispatch(addItemToCart(cartItem));

    // Chuyển hướng đến trang giỏ hàng
    navigate("/cart");
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-54 h-54">
        {/* Vòng tròn nền */}
        <div
          className={`absolute bottom-[-3%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full -z-10 ${bgColorClass}`}
        ></div>
        {/* Hình ảnh sản phẩm */}
        <img
          src={product.image || productImage}
          alt={product.name}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="mt-1">
        <h3 className="text-lg font-bold text-gray-800 shadow-text">
          {product.name}
        </h3>
        {product.subname && (
          <h3 className="text-lg font-bold text-gray-800 shadow-text">
            {product.subname}
          </h3>
        )}
        <div className="w-8 h-0.5 bg-gray-400 mx-auto my-2"></div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-base text-gray-800">
          Giá:{" "}
          <span className="font-semibold text-lg">
            {product.price.toLocaleString()}
          </span>{" "}
          vnd
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-8 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors cursor-pointer"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
