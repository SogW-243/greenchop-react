// src/components/home/StatsSection.jsx
import React from "react";
import StatsIconPeach from "@/assets/images/gc-stats__icon bg-peach.png";
import StatsIconGreen from "@/assets/images/gc-stats__icon bg-green.png";

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-12 xl:px-24">
        <div className="text-center mb-36 xl:mb-16 lg:mb-24">
          <h2 className="text-3xl font-extrabold leading-tight mb-4">
            GreenChop: Giữ an toàn trong từng <br /> bữa ăn của người Việt
          </h2>
          <p className="text-sm text-gray-600">
            Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
            tưởng đột phá, GreenChop đã trở <br /> thành sản phẩm không thể
            thiếu trong mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán
            ăn...
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="relative w-60 h-72 bg-white rounded-md shadow-lg p-9 mt-6 ">
            <div className="absolute -top-1/4 -left-[33%] w-44 h-44 bg-[#DCFFCA] rounded-full -z-10"></div>
            <img src={StatsIconPeach} alt="Icon" className="w-16 h-16 " />
            <h3 className="text-4xl font-extrabold my-4">1000+</h3>
            <p className="text-sm font-normal">
              Hộ gia đình tin dùng GreenChop
            </p>
          </div>
          <div className="relative w-60 lg:w-72 h-72 lg:h-80 bg-white rounded-md shadow-lg p-12 ">
            <img src={StatsIconGreen} alt="Icon" className="w-16 h-16" />
            <h3 className="text-4xl font-extrabold my-4">600+</h3>
            <p className="text-sm font-normal">
              Nhà hàng đã phục vụ GreenChop cho thực khách
            </p>
          </div>
          <div className="relative w-60 h-72 bg-white rounded-md shadow-lg p-9 mt-6 ">
            <div className="absolute top-[72%] left-[63%] w-44 h-44 bg-[#FFD5BD] rounded-full -z-10"></div>
            <img src={StatsIconPeach} alt="Icon" className="w-16 h-16" />
            <h3 className="text-4xl font-extrabold my-4">20+</h3>
            <p className="text-sm font-normal">
              Tỉnh thành được GreenChop phủ sóng
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
