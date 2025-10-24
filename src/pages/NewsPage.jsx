// src/pages/NewsPage.jsx

import React from "react";
import { Link } from "react-router-dom";

// Import hình ảnh
import NewsImg1 from "../assets/images/gc-news__img1.png";
import NewsImg2 from "../assets/images/gc-news__img2.png";
import PopularImg1 from "../assets/images/news-image1.png";
import PopularImg2 from "../assets/images/news-image2.png";
import CalendarIcon from "../assets/images/calendar.png";

// Component Card cho bài viết phổ biến (để tái sử dụng)
const PopularArticleCard = ({ image, title, date }) => {
  return (
    <div className="flex flex-col">
      <Link to="/article/1" className="block">
        {" "}
        {/* Thay "1" bằng ID bài viết */}
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
      </Link>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span>Lorem ipsum</span>
        <div className="flex items-center gap-2">
          <img src={CalendarIcon} alt="calendar" />
          <span>{date}</span>
        </div>
      </div>
      <Link to="/article/1">
        <h3 className="text-lg font-bold hover:text-green-600">{title}</h3>
      </Link>
      <p className="text-sm text-gray-600 mt-2">
        Dolor sit amet, cons ectetuer adipiscing elit, sed diam in on nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
        wisi enim...
      </p>
    </div>
  );
};

const NewsPage = () => {
  // Dữ liệu giả cho các bài viết phổ biến
  const popularArticles = [
    {
      id: 1,
      image: PopularImg1,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
    {
      id: 2,
      image: PopularImg2,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
    {
      id: 3,
      image: PopularImg1,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
    {
      id: 4,
      image: PopularImg2,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
    {
      id: 5,
      image: PopularImg1,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
    {
      id: 6,
      image: PopularImg2,
      title: "Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit",
      date: "28 - 10- 2021",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="w-full h-[155px] bg-[#F2FFEC] flex items-center justify-center">
        <div className="container text-center">
          <h1 className="text-4xl text-left pl-6 xl:pl-33 font-bold text-gray-800">
            Tin tức
          </h1>
        </div>
      </div>

      {/* Featured News Section */}
      <section className="relative py-16 lg:pb-96">
        <div className="container mx-auto px-4 max-w-4xl h-full">
          {/* Bài viết nổi bật 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 lg:mb-0">
            <div className="w-full lg:w-1/2">
              <img
                src={NewsImg1}
                alt="Tin nổi bật 1"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-green-600 font-semibold">Tin nổi bật</span>
              <h2 className="text-2xl font-bold my-2">
                Exerci tation ullamcer suscipit m zril delenit augue
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <Link
                to="/article/1"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-green-600 rounded font-bold text-sm text-gray-800 hover:bg-green-600 hover:text-white transition-colors"
              >
                Xem thêm <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>

          {/* Bài viết nổi bật 2 - positioned */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:absolute lg:top-[60%] lg:left-1/2 lg:-translate-x-1/2 w-full lg:max-w-4xl">
            <div className="w-full lg:w-1/2">
              <img
                src={NewsImg2}
                alt="Tin nổi bật 2"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-green-600 font-semibold">Tin nổi bật</span>
              <h2 className="text-2xl font-bold my-2">
                Exerci tation ullamcer suscipit m zril delenit augue
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <Link
                to="/article/1"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-green-600 rounded font-bold text-sm text-gray-800 hover:bg-green-600 hover:text-white transition-colors"
              >
                Xem thêm <i className="fa-solid fa-angles-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular News Section */}
      <section className="pt-16 lg:pt-96 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Bài viết phổ biến
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {popularArticles.map((article) => (
              <PopularArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                date={article.date}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-6 mt-16 text-lg">
            <a href="#" className="text-green-600">
              1
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600">
              2
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600">
              3
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
