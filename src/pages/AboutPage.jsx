// src/pages/AboutPage.jsx

import React from "react";

import StatsSection from "@/components/home/StatsSection";

// Import hình ảnh (giả sử bạn đã đặt chúng trong thư mục assets)
import BannerBackground from "../assets/images/main-img.png";
import StatsIconPeach from "../assets/images/gc-stats__icon bg-peach.png";
import StatsIconGreen from "../assets/images/gc-stats__icon bg-green.png";
import IntroImage1 from "../assets/images/Greenchop-intro1.png";
import IntroImage2 from "../assets/images/Greenchop-intro2.png";
import IntroImage3 from "../assets/images/Greenchop-intro3.png";
import MissionImage from "../assets/images/mission-img.jpg";
import QuoteIcon1 from "../assets/images/“.png";
import QuoteIcon2 from "../assets/images/“ (1).png";

const AboutPage = () => {
  return (
    <>
      {/* Banner Section */}
      <div className=" h-[155px] bg-[#F2FFEC] flex items-center ">
        <div className="container mx-auto px-6 xl:px-32">
          <h1 className="text-4xl font-bold text-gray-800">Về Greenchop</h1>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Về GreenChop
          </h2>
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-24 mb-16">
            <div className="lg:w-1/2 text-gray-700">
              <p>
                Dù chỉ mới ra mắt từ đầu mùa dịch Covid 2021, thương hiệu
                GreenChop đã trở thành đối tác cung cấp sản phẩm đũa ăn tin cậy
                cho những tên tuổi lớn trong phân khúc nhà hàng, khách sạn, quán
                ăn,... tại Việt Nam.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src={IntroImage1} alt="Đối tác tin cậy" />
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div className="lg:w-1/2 text-gray-700">
              <h3 className="font-bold text-lg mb-2">
                GreenChop - Tiện gấp dễ gắp: An toàn hơn với Covid
              </h3>
              <p>
                Sản phẩm chính của công ty là đũa thay đầu GreenChop. Đây chính
                là cái tên đã giúp các nhà hàng, khách sạn, quán ăn... đã dần
                lấy lại được sự tin tưởng của thực khách giữa mùa Covid. Đũa
                thay đầu là ý tưởng đột phá và tinh tế được xây dựng từ việc
                thấu hiểu hành vi ăn uống của khách hàng của đội ngũ GreenChop.
                Sản phẩm giúp người dùng đảm bảo tối đa sự riêng tư, giãn cách
                và an toàn trong bữa ăn, từ đó, xoa dịu tâm lý ngại “ăn ngoài”
                của khách hàng.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={IntroImage2}
                alt="An toàn với Covid"
                className="w-[339px] h-[280px] object-contain"
              />
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-gray-700">
              <p>
                Không chỉ là các chuỗi nhà hàng, khách sạn,..., nhiều người tiêu
                dùng cũng đã tin tưởng và chọn lựa GreenChop như một người bạn
                đồng hành không thể thiếu cùng gia đình của mình.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={IntroImage3}
                alt="Đồng hành cùng gia đình"
                className="w-[300px] h-[240px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="relative mt-16 lg:mt-24 h-96 flex items-center justify-center text-white">
        <img
          src={BannerBackground}
          alt="Family eating"
          className="absolute w-full h-full object-cover -z-10 brightness-50"
        />
        <img
          src={QuoteIcon1}
          alt="Quote"
          className="absolute top-2/3 left-[70%] hidden lg:block"
        />
        <img
          src={QuoteIcon2}
          alt="Quote"
          className="absolute top-1/4 left-1/5 hidden lg:block"
        />
        <div className="container mx-auto px-4 text-center w-full lg:w-[50%]">
          <h2 className="text-3xl font-extrabold mb-8">
            Sản phẩm chính của GreenChop
          </h2>
          <p className="text-sm leading-7">
            GreenChop đã nghiên cứu tâm lý ăn uống của người Việt để cho ra được
            sản phẩm với cấu trúc thông minh và thiết kế tinh tế. Đũa xanh
            GreenChop cho phép người dùng dễ dàng tháo lắp đầu và thân đũa. Việc
            thay thế đầu đũa mới trong mỗi bữa ăn giúp đảm bảo tính riêng tư và
            tối thiểu khả năng bị lây virus Covid cũng như các vi khuẩn gây bệnh
            khác. Sản phẩm đảm bảo thân thiện với môi trường và bảo vệ sức khỏe
            của người dùng với đầu đũa bằng gỗ tre được khử khuẩn 100%.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-32 xl:pb-64">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="absolute bg-[#DCFFCA] w-96 h-96 rounded-full -z-20 top-1/4 left-33 hidden lg:block"></div>
              <div className="absolute bg-[#FFD5BD] w-48 h-48 rounded-full -z-10 top-3/4 left-99 hidden lg:block"></div>
              <img
                src={MissionImage}
                alt="Our Mission"
                className="rounded-lg shadow-2xl w-96 h-80 object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-extrabold mb-5">
                  Sứ mệnh của GreenChop
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Đội ngũ GreenChop gồm những người trẻ năng động và luôn mong
                  muốn cống hiến cho sức khỏe cộng đồng Việt Nam. Trên tiêu chí
                  đó, GreenChop đã và đang tiếp tục góp sức trong công cuộc
                  chống dịch hiện tại và nhu cầu vệ sinh thực phẩm lâu dài.
                  Trong tương lai, thương hiệu sẽ tiếp tục phát triển những dụng
                  cụ ăn uống cá nhân thông minh. Cùng với sự ủng hộ của các đối
                  tác và thực khách, GreenChop hứa hẹn sẽ xây dựng những thói
                  quen và môi trường ăn uống an toàn cho người Việt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
