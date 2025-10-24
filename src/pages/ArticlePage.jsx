// src/pages/ArticlePage.jsx

import React from "react";
import { Link, useParams } from "react-router-dom";

// Import hình ảnh
import ArticleBannerImg from "../assets/images/article-img1.png";
import CalendarIcon from "../assets/images/calendar.png";
import PopularArticleImg2 from "../assets/images/article-img2.png";
import PopularArticleImg3 from "../assets/images/article-img3.png";
import PopularArticleImg4 from "../assets/images/article-img4.png";
import PopularArticleImg5 from "../assets/images/article-img5.png";
import PopularArticleImg6 from "../assets/images/article-img6.png";

// Component Card cho bài viết ở sidebar
const SidebarArticleCard = ({ image, title, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Link to={link}>
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={link}>
          <h4 className="font-semibold text-sm leading-snug hover:text-green-600">
            {title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const { articleId } = useParams(); // Lấy ID bài viết từ URL

  // Dữ liệu giả, sau này sẽ fetch từ API dựa vào articleId
  const article = {
    title: "Exerci tation ullamcer suscipit m zril delenit augue",
    image: ArticleBannerImg,
    category: "Tin nổi bật",
    date: "28 - 10 - 2021",
    content: `exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
aoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril

 in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat`,
  };

  const popularArticles = [
    {
      id: 2,
      image: PopularArticleImg2,
      title: "Cons ectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 3,
      image: PopularArticleImg3,
      title: "Cons ectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 4,
      image: PopularArticleImg4,
      title: "Cons ectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      image: PopularArticleImg5,
      title: "Cons ectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 6,
      image: PopularArticleImg6,
      title: "Cons ectetuer adipiscing elit, sed diam nonummy nibh",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="w-full h-20 bg-green-50 flex items-center justify-center">
        <div className="container text-center text-sm">
          <h3>
            Tin tức /{" "}
            <Link to="/news" className="text-green-600">
              Bài viết
            </Link>
          </h3>
        </div>
      </div>

      {/* Article Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article>
                <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
                  {article.title}
                </h1>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full rounded-lg mb-4"
                />
                <div className="flex items-center gap-8 text-sm mb-6">
                  <span className="text-green-600 font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <img src={CalendarIcon} alt="calendar" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-700 text-sm leading-relaxed">
                  {/* Sử dụng pre-wrap để giữ lại các khoảng trắng và xuống dòng */}
                  <p style={{ whiteSpace: "pre-wrap" }}>{article.content}</p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 bg-orange-50/50 p-6 rounded-lg h-fit">
              <h2 className="text-2xl font-bold mb-6">Bài viết phổ biến</h2>
              <div className="space-y-6">
                {popularArticles.map((popArticle) => (
                  <SidebarArticleCard
                    key={popArticle.id}
                    image={popArticle.image}
                    title={popArticle.title}
                    link={`/article/${popArticle.id}`}
                  />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
