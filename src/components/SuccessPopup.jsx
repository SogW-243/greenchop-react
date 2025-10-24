// src/components/SuccessPopup.jsx

import React from "react";
import { X } from "lucide-react";
import SuccessImage from "@/assets/images/pup-up__success.jpg"; // Đảm bảo bạn đã có ảnh này

const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Lớp phủ nền
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      {/* Nội dung Popup */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md text-center p-8 relative">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center rounded-full bg-white border-2 border-orange-500 z-10 cursor-pointer"
        >
          <X size={20} className="text-orange-500" />
        </button>

        <img
          src={SuccessImage}
          alt="Đặt hàng thành công"
          className="w-1/2 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Bạn đã đặt hàng thành công
        </h2>
        <p className="text-sm text-gray-600">
          Cảm ơn bạn đã tin tưởng GreenChop. Chúng tôi sẽ liên hệ với bạn trong
          thời gian sớm nhất.
        </p>
      </div>
    </div>
  );
};

export default SuccessPopup;
