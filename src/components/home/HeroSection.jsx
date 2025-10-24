// src/components/home/HeroSection.jsx
import React from "react";
import HeroBackground from "@/assets/images/hero-background.png";
import HeroImage from "@/assets/images/hero-img.png";

const HeroSection = () => (
  <section className="hidden lg:flex items-center mb-24 overflow-hidden">
    <div className="container mx-auto lg:px-0 xl:px-24">
      <div className="flex items-center">
        <div className="w-[55%]">
          <div className="ml-8">
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              GreenChop: Tiện gấp dễ gắp
            </h1>
            <h2 className="text-5xl font-extrabold mb-5">
              AN TOÀN HƠN <br /> GIỮA MÙA COVID
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường hiện
              tại. <br /> Sản phẩm cho phép người dùng tháo lắp và thay mới đầu
              đũa 100% <br /> trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn ngừa
              khả năng lây lan <br /> dịch bệnh và đảm bảo an toàn cho người
              dùng.
            </p>
          </div>
        </div>
        <div className="w-[45%] relative bg-[#DCFFCA] rounded-l-2xl h-[530px]">
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
          <div className="absolute top-1/4 -right-8 text-9xl font-extrabold text-green-900 opacity-20 transform rotate-90 leading-none">
            GREEN <br /> CHOP
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
