// src/components/home/ProtectsSection.jsx
import React from "react";
import ProtectsItem1 from "@/assets/images/protects-item1.png";
import ProtectsItem2 from "@/assets/images/protects-item2.png";
import ProtectsItem3 from "@/assets/images/protects-item3.png";

const ProtectsSection = () => {
  return (
    <section className="relative py-16 lg:pt-24 lg:pb-32">
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-90 bg-[#FFF0E7] -z-10"></div>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          GreenChop bảo vệ <br />
          người dùng như thế nào?
        </h2>
        <p className="text-sm text-gray-600 mb-60 xl:mb-45">
          Mỗi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa. <br />
          Người dùng có thể dễ dàng tách rời hoặc gắn liền 2 phần này với nhau{" "}
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-33 md:gap-y-33 xl:gap-y-32 ">
          <div className="flex flex-col items-center relative w-[80%] mx-auto xl:w-full">
            <img
              src={ProtectsItem1}
              alt="Thân trên đũa"
              className="absolute -top-40 xl:-top-33 w-[120%] xl:w-full max-w-xs "
            />
            <div className="bg-white p-6  rounded-lg shadow-lg pt-8 pb-6 text-left">
              <span className="font-semibold text-orange-600 text-shadow text-lg ">
                01. Thân trên đũa
              </span>
              <p className="text-sm mt-2 w-68 xl:w-auto h-24 text-justify">
                Làm từ nhựa Melamine, đầy đủ điều kiện chứng nhận An toàn thực
                phẩm.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src={ProtectsItem2}
              alt="Đầu đũa"
              className="absolute -bottom-24 w-full max-w-xs -top-20 xl:-top-33"
            />
            <div className="bg-white p-6 rounded-lg shadow-lg pt-8 pb-6 text-left lg:w-[37%] mx-auto xl:w-full mt-20 xl:mt-0">
              <span className="font-semibold text-orange-600 text-shadow text-lg">
                02. Đầu đũa
              </span>
              <p className="text-sm mt-2 w-68 xl:w-auto h-24">
                Được làm từ gỗ tre và bảo quản trong bọc khử trùng 100%, không
                hề có sự xâm nhập của vi khuẩn/vì rus gây hại.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src={ProtectsItem3}
              alt="Khớp Inox"
              className="absolute -bottom-24 w-full max-w-xs -top-20 xl:-top-33"
            />
            <div className="bg-white p-6 rounded-lg shadow-lg pt-8 pb-6 text-left lg:w-[37%] mx-auto xl:w-full mt-20 xl:mt-0">
              <span className="font-semibold text-orange-600 text-shadow text-lg">
                03. Khớp Inox 304
              </span>
              <p className="text-sm mt-2 w-68 xl:w-auto h-24">
                Khớp Inox 304 để gắn 2 phần đũa với nhau
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProtectsSection;
