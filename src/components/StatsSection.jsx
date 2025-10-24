// src/components/StatsSection.jsx
import React from "react";
import StatsIconPeach from "@/assets/images/gc-stats__icon bg-peach.png";
import StatsIconGreen from "@/assets/images/gc-stats__icon bg-green.png";

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="relative w-60 h-72 bg-white rounded-md shadow-lg p-9 mt-6 text-center">
            <div className="absolute -top-1/4 -left-[17%] w-44 h-44 bg-green-100 rounded-full -z-10"></div>
            <img
              src={StatsIconPeach}
              alt="Icon"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="text-4xl font-extrabold my-4">1000+</h3>
            <p className="text-sm font-normal">Hộ gia đình tin dùng</p>
          </div>
          <div className="relative w-60 lg:w-72 h-72 lg:h-80 bg-white rounded-md shadow-lg p-9 text-center">
            <img
              src={StatsIconGreen}
              alt="Icon"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="text-4xl font-extrabold my-4">600+</h3>
            <p className="text-sm font-normal">Nhà hàng đã phục vụ</p>
          </div>
          <div className="relative w-60 h-72 bg-white rounded-md shadow-lg p-9 mt-6 text-center">
            <div className="absolute top-[54%] left-[41%] w-44 h-44 bg-orange-100 rounded-full -z-10"></div>
            <img
              src={StatsIconPeach}
              alt="Icon"
              className="w-16 h-16 mx-auto"
            />
            <h3 className="text-4xl font-extrabold my-4">20+</h3>
            <p className="text-sm font-normal">Tỉnh thành được phủ sóng</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
