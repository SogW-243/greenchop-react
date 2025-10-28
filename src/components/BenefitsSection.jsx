// src/components/BenefitsSection.jsx

import React from "react";

// Import images

const benefitsData = [
  {
    img: "images/benefits-img1.png",
    title: "Chất liệu an toàn",
    description:
      "Phần đầu đũa được làm bằng bằng gỗ tre, đảm bảo cho sức khỏe người dùng",
  },
  {
    img: "images/benefits-img2.png",
    title: "Vệ sinh và khử khuẩn",
    description:
      "Đầu đũa mới 100% mỗi bữa ăn, không chung đụng đầu đũa với bất kì ai khác.",
  },
  {
    img: "images/benefits-img3.png",
    title: "Tiện lợi",
    description: "Thao tác tháo lắp nhanh gọn và đơn giản",
  },
  {
    img: "images/benefits-img4.png",
    title: "Tiết kiệm",
    description: "Giá thành đầu đũa cạnh tranh và hợp lý.",
  },
  {
    img: "images/benefits-img5.png",
    title: "Độc quyền",
    description:
      "GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường Việt Nam hiện tại",
  },
  {
    img: "images/benefits-img6.png",
    title: "Giao hàng nhanh",
    description: "Giao hàng trong 24h",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-bold text-base text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-snug">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
