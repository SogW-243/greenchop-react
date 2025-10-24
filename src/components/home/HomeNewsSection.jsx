// src/components/home/HomeNewsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import NewsImg1 from "@/assets/images/news-image1.png";
import NewsImg2 from "@/assets/images/news-image2.png";
import NewsImg3 from "@/assets/images/news-image3.png";
import CalendarIcon from "@/assets/images/calendar.png";
import { ChevronRight } from "lucide-react";

const NewsCard = ({ image, title, link }) => (
  <div className="flex flex-col text-left">
    <Link to={link}>
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
    </Link>
    <div className="flex justify-between w-full text-sm text-gray-500 mb-2">
      <span className="text-[#46B20F]">Lorem ipsum</span>
      <div className="flex items-center gap-2">
        <img src={CalendarIcon} alt="calendar" />
        <span>28 - 10- 2021</span>
      </div>
    </div>
    <Link to={link}>
      <h3 className="font-bold my-2 hover:text-green-600 text-base">{title}</h3>
    </Link>
    <p className="text-sm text-gray-600">
      exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo...
    </p>
  </div>
);

const HomeNewsSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-3xl font-extrabold mb-4">Tin tức</h2>
      <p className="text-sm text-gray-600 mb-12 max-w-2xl mx-auto">
        L nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril <br /> delenit augue duis dolore te
        feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
        adipiscing
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NewsCard
          image={NewsImg1}
          title="Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit"
          link="/article/1"
        />
        <NewsCard
          image={NewsImg2}
          title="Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit"
          link="/article/1"
        />
        <NewsCard
          image={NewsImg3}
          title="Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit"
          link="/article/1"
        />
      </div>
      <Link to="/news">
        <button className="mt-12 inline-flex items-center gap-2 px-6 py-3 border border-green-600 rounded font-bold text-sm text-gray-800 hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
          Xem thêm <ChevronRight size={16} />
        </button>
      </Link>
    </div>
  </section>
);

export default HomeNewsSection;
