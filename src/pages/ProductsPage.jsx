// src/pages/ProductsPage.jsx

import React from "react";
import ProductCard from "@/components/ProductCard";
import BenefitsSection from "@/components/BenefitsSection";
import HomeProductsSection from "@/components/home/HomeProductsSection";
import ProtectsSection from "@/components/home/ProtectsSection";
import { Quote } from "lucide-react";

// Import hình ảnh cần thiết cho trang này
import IntroImage from "@/assets/images/products-intro__img.png";
import InstructImage from "@/assets/images/instruct-img.jpg";
import RuleImage1 from "@/assets/images/rule-img1.png";
import RuleImage2 from "@/assets/images/rule-img2.png";
import Number1 from "@/assets/images/01.png";
import Number2 from "@/assets/images/02.png";
import Number3 from "@/assets/images/03.png";
import Number4 from "@/assets/images/04.png";
import PeachBackground from "@/assets/images/products-img__peach.jpg";
import GreenBackground from "@/assets/images/products-img__green.jpg";

// --- Các Section Con của Trang Sản Phẩm ---

const IntroSection = () => (
  <section className="py-16 lg:py-24">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
        <div className="relative col-span-3">
          <img
            src={GreenBackground}
            alt="Green background"
            className="absolute -top-1/7 -left-1/10 w-1/4 -z-10"
          />
          <div className="md:ml-2">
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              Đũa thay đầu GreenChop - <br />
              thẻ xanh an toàn trong từng bữa ăn
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed w-[60%]">
              GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường hiện
              tại. Sản phẩm cho phép người dùng tháo lắp và thay mới đầu đũa
              100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn ngừa khả năng
              lây lan dịch bệnh và đảm bảo an toàn cho người dùng.
            </p>
          </div>
        </div>
        <div className="relative col-span-2 flex justify-end mt-12 md:mt-0">
          <img
            src={PeachBackground}
            alt="Peach background"
            className="absolute w-77 xl:w-88 -z-10 -top-18 md:left-99 lg:left-1 xl:left-36 "
          />
          <div className="bg-white p-4 shadow-2xl rounded-lg w-80 h-60 flex justify-center items-center">
            <img
              src={IntroImage}
              alt="Giới thiệu sản phẩm"
              className="w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

<ProtectsSection />;

const InstructSection = () => (
  <section className="py-16 lg:py-24">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold mb-4">
          Hướng dẫn thao tác <br />
          sử dụng đũa GreenChop
        </h2>
        <p className="text-sm text-gray-600">
          Bằng cách này, người dùng sẽ có một đôi đũa với đầu đũa <br /> mới
          100%, không qua tay bất kỳ ai trước đó
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-24 xl:gap-y-12 mb-24">
        {[
          {
            num: Number1,
            text: "Tháo bọc đầu đũa, lấy đầu đũa tre đã khử trùng 100% ghép vào thân đũa, tạo thành một đôi đũa hoàn chỉnh.",
          },
          {
            num: Number2,
            text: "Dùng bữa với đũa GreenChop đã ghép. Sau khi dùng bữa xong, tháo đầu đũa đã dùng để bỏ đi.",
          },
          {
            num: Number3,
            text: "Giữ lại thân đũa, vệ sinh sạch sẽ để sử dụng cho những bữa ăn sau đó.",
          },
          {
            num: Number4,
            text: "Tiếp tục sử dụng một đầu đũa mới để gắn vào thân đũa trong lần dùng bữa tiếp theo.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 relative justify-center"
          >
            <div className="absolute bg-[#FFF0E7] w-30 h-30 rounded-full -z-10 top-10 -translate-y-1/2 left-24 -translate-x-1/2"></div>
            <img src={item.num} alt={index + 1} className="w-24 mt-1" />
            <p className="text-sm text-gray-700 w-full">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="relative bg-white shadow-lg p-8 pr-12 rounded-r-lg">
            <div className="absolute top-0 left-0 w-2 h-full bg-green-500 rounded-r-md"></div>
            <p className="text-sm text-gray-700 leading-loose">
              Thao tác thay đầu đũa mỗi bữa ăn giúp người dùng sử dụng một đôi
              đũa mới trong mọi bữa ăn và không có sự xâm nhập của virus/vi
              khuẩn gây bệnh trước đó. Nhờ vậy, GreenChop đảm bảo an toàn cho
              thực khách và đẩy lùi nguy cơ lây lan dịch bệnh trong ăn uống hàng
              ngày.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <img
            src={InstructImage}
            alt="Hướng dẫn sử dụng"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

const RuleSection = () => (
  <section className="py-16 lg:py-24 relative overflow-hidden">
    <div className="absolute top-66 right-0 w-4/5 h-90 bg-[#F2FFEC] -z-10"></div>
    <div className="absolute bottom-99 md:bottom-1 xl:bottom-53 left-0 w-4/5 h-90 bg-[#FFF0E7] -z-10"></div>
    <div className="container mx-auto px-4 max-w-4xl text-center ">
      <h2 className="text-3xl font-extrabold mb-36">
        Bảo vệ bản thân <br />
        nguyên tắc 5k cùng Greenchop
      </h2>

      <div className="relative flex flex-col md:flex-row items-center gap-16 mb-1 xl:mb-45">
        <Quote className="absolute top-full md:top-1/2 right-10 text-8xl text-gray-200 -z-10 hidden lg:block" />
        <div className="md:w-1/2">
          <img src={RuleImage1} alt="Quy tắc 1" className="rounded-lg w-full" />
        </div>
        <div className="md:w-1/2 text-left">
          <p className="text-sm text-gray-700 leading-relaxed mb-44 xl:mb-50">
            Kể cả khi đã thực hiện 5K, việc dùng chung dụng cụ ăn uống với người
            khác vẫn mang những tiềm tàng khả năng bị lây bệnh. Lúc này, đầu đũa
            được thay thế mỗi bữa ăn giúp ngăn ngừa sự bám víu của Covid 19 cũng
            như các loại vị khuẩn/virus gây bệnh khác. Không chỉ có thể,
            GreenChop là sự lựa chọn hoàn hảo cho những thực khách có thói quen
            sử dụng dụng cụ cá nhân ngay cả tại những nơi công cộng một cách dễ
            dàng.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row-reverse items-center gap-16">
        <Quote className="absolute top-full md:top-1/2 left-5 text-8xl text-gray-200 -z-10 hidden lg:block transform -scale-x-100" />
        <div className="md:w-1/2">
          <img src={RuleImage2} alt="Quy tắc 2" className="rounded-lg w-full" />
        </div>
        <div className="md:w-1/2 text-left ">
          <p className="text-sm text-gray-700 leading-relaxed mb-1 xl:mb-50">
            Đũa GreenChop hoàn thiện cả về công năng lẫn thẩm mỹ. Đầu đũa được
            làm từ 100% chất liệu tự nhiên, màu sắc hài hòa, kiểu dáng cứng cáp
            không khác gì đũa ăn truyền thống. Hiện đại, tối giản là những đặc
            tính nổi bật nhất khi bàn tới thiết kế của sản phẩm. Chính vì thế,
            GreenChop dần trở thành vật bất ly thân và giúp khẳng định sự đẳng
            cấp và sự tinh tế của những thực khách văn minh.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Component ProductsPage Chính ---

const ProductsPage = () => {
  // Dữ liệu sản phẩm đầy đủ
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
    <>
      {/* Banner */}
      <div className="w-full h-[155px] pl-1 xl:pl-55 bg-[#F2FFEC] flex items-center justify-center">
        <div className="container text-left px-4">
          <h1 className="text-4xl font-bold text-gray-800">Sản phẩm</h1>
        </div>
      </div>
      {/* Main Products List Section */}
      <HomeProductsSection />
      <IntroSection />
      <ProtectsSection />
      <InstructSection />
      <RuleSection />
      <BenefitsSection /> {/* Tái sử dụng component BenefitsSection */}
    </>
  );
};

export default ProductsPage;
