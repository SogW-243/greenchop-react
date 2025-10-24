// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/Logo.png";
import FooterLogo from "@/assets/images/footer-logo.png";

// 1. Import các icon cần dùng từ lucide-react
import {
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Clock,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F2FFEC] pt-0 xl:pt-10">
      <div className="container mx-auto pb-10">
        <div className="px-5 xl:px-44">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo & Slogan */}
            <div className="w-[50%] md:w-[80%] md:pt-6 xl:pt-0 xl:w-[80%]">
              <img
                src={Logo}
                alt="GreenChop Logo"
                className="max-w-full h-auto"
              />
              <p className="text-sm">
                GreenChop là bạn đồng hành của người tiêu dùng
              </p>
            </div>

            {/* Trang chủ */}
            <div>
              <h3 className="font-semibold mt-12 mb-4 text-green-600">
                Trang chủ
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:underline">
                    Về greenchop
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:underline">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="hover:underline">
                    Tin tức
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hỗ trợ */}
            <div>
              <h3 className="font-semibold mt-12 mb-4 text-green-600">
                Hỗ trợ
              </h3>
              <p className="text-sm">Đặt hàng trực tuyến (8h-22h)</p>
              <div className="flex items-center gap-3 mt-2 text-sm">
                {/* 2. Thay thế icon */}
                <Clock size={16} className="text-orange-500" />
                <span>Thứ 2 - Thứ 6</span>
              </div>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <Phone size={16} className="text-orange-500" />
                <span>091 1717 222</span>
              </div>
            </div>
            {/* Liên hệ */}
            <div>
              <h3 className="font-semibold mt-12 mb-4 text-green-600">
                Liên hệ
              </h3>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <Mail size={16} className="text-orange-500" />
                <p>greenchopvn@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <Globe size={16} className="text-orange-500" />
                <p>Greenchop.vn</p>
              </div>
              <div className="flex items-start gap-3 mt-2 text-sm">
                <MapPin size={16} className="text-orange-500 mt-1" />
                <p>
                  428 Điện Biên Phủ, P11, <br />
                  Quận 10, TPHCM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-1 border-gray-500 mx-0 xl:mx-88"></div>
      <div className="container mx-auto flex justify-between items-center py-4 px-3 xl:px-44">
        <a href="#">
          <img src={FooterLogo} alt="Bộ Công Thương" />
        </a>
        <div className="flex gap-4 ">
          <a href="#">
            <Youtube size={20} />
          </a>
          <a href="#">
            <Facebook size={20} />
          </a>
          <a href="#">
            <Instagram size={20} />
          </a>
          <a href="#">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
