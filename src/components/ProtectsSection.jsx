// src/components/ProtectsSection.jsx
import React from "react";
import ProtectsItem1 from "@/assets/images/protects-item1.png";
import ProtectsItem2 from "@/assets/images/protects-item2.png";
import ProtectsItem3 from "@/assets/images/protects-item3.png";

const ProtectsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl font-extrabold mb-12">
          An toàn hơn <br /> giữa mùa Covid-19
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src={ProtectsItem1} alt="Bảo vệ 1" />
            <h3 className="font-bold mt-4">Bảo vệ bạn</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={ProtectsItem2} alt="Bảo vệ 2" />
            <h3 className="font-bold mt-4">Bảo vệ gia đình bạn</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={ProtectsItem3} alt="Bảo vệ 3" />
            <h3 className="font-bold mt-4">Bảo vệ cộng đồng</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProtectsSection;
