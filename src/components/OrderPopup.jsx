// src/components/OrderPopup.jsx

import React, { useState } from "react";
import { X, User, Mail, Phone } from "lucide-react";
import HeroImage from "@/assets/images/hero-img.png";
import HeroBackground from "@/assets/images/hero-background.png";

// Nhận 3 props: isOpen để biết có hiển thị hay không, onClose để đóng, và onSubmit để báo đã submit
const OrderPopup = ({ isOpen, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi hàm onSubmit (sẽ được truyền từ CartPage)
    onSubmit();
  };

  return (
    // Lớp phủ nền
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      {/* Nội dung Popup */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 lg:top-4 lg:right-4 w-10 h-10 flex justify-center items-center rounded-full bg-white border-2 border-orange-500 z-10 cursor-pointer"
        >
          <X size={20} className="text-orange-500" />
        </button>

        {/* Cột thông tin (trái) */}
        <div className="lg:col-span-7 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-green-600 mb-2">
            Nhập thông tin để đặt hàng.
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Bạn muốn mua hàng? Hãy đăng ký vào form này, Greenchop sẽ liên hệ
            bạn trong thời gian sớm nhất.
          </p>

          {/* Thông tin (giả, bạn có thể truyền props vào đây sau) */}
          <h3 className="text-2xl font-extrabold text-gray-800">
            Combo - Quán ăn
          </h3>
          <div className="w-16 border-b border-gray-400 my-2"></div>
          <p className="text-gray-500 text-sm">1 Thùng 1000 đôi</p>
          <p className="text-3xl font-bold text-gray-900 my-3">
            Giá: <span className="text-orange-600">600.000</span> vnd
          </p>

          {/* Số lượng */}
          <div className="flex items-center gap-8 mb-6">
            <div className="flex items-center border border-gray-400 rounded-md p-2 w-28 justify-between">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-gray-500 text-lg"
              >
                -
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-gray-500 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={20} />
              </span>
              <input
                type="text"
                placeholder="Tên của bạn"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Phone size={20} />
              </span>
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-green-600 text-white font-bold py-3 px-10 rounded-md hover:bg-green-700 cursor-pointer"
            >
              Gửi
            </button>
          </form>
        </div>

        {/* Cột hình ảnh (phải) */}
        <div className="hidden lg:block lg:col-span-5 relative bg-[#DCFFCA] rounded-l-2xl h-full min-h-[500px]">
          <img
            className="absolute top-[18%] -left-[8%] w-[351px] h-[351px]"
            src={HeroBackground}
            alt="Background Circle"
          />
          <img
            className="absolute top-[10%] -left-[13%] w-[430px] h-[430px] z-20"
            src={HeroImage}
            alt="Chopsticks"
          />
          <img
            className="absolute top-[13%] -left-[17%] w-[430px] h-[430px] z-10 transform -rotate-[33deg]"
            src={HeroImage}
            alt="Chopsticks"
          />
          <div className="absolute top-1/4 -right-8 text-8xl font-extrabold text-green-900 opacity-20 transform rotate-90 leading-none">
            GREEN <br /> CHOP
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
