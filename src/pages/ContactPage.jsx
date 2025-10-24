// src/pages/ContactPage.jsx

import React from "react";
import BenefitsSection from "../components/BenefitsSection"; // Import the reusable component

// Import images for contact info
import ClockIcon from "../assets/images/footer-clock.png";
import PhoneIcon from "../assets/images/footer-phone.png";
import MailIcon from "../assets/images/footer-mail.png";
import GlobeIcon from "../assets/images/footer-globe.png";
import MapIcon from "../assets/images/footer-map.png";

const ContactPage = () => {
  return (
    <>
      {/* Map Section */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.595910178309!2d105.82991481539203!3d21.00885239385559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7df3c938a7%3A0x872997753e414f33!2zNDI4IMSQLiBCacOqbiBQaOG7pywgUGjGsMahbmcgMTAsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678886482531!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 xl:pb-0">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-5">
              <h1 className="text-4xl font-extrabold mb-4">Liên hệ</h1>
              <h4 className="font-semibold mb-4">
                Đặt hàng trực tuyến (8h-22h)
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <img src={ClockIcon} alt="Clock" />
                  <span>Thứ 2 - Thứ 6</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={PhoneIcon} alt="Phone" />
                  <span>091 1717 222</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={MailIcon} alt="Mail" />
                  <p>greenchopvn@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={GlobeIcon} alt="Website" />
                  <p>Greenchop.vn</p>
                </div>
                <div className="flex items-start gap-3">
                  <img src={MapIcon} alt="Address" className="mt-1" />
                  <p>
                    428 Điện Biên Phủ, P11, <br />
                    Quận 10, TPHCM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7">
              <form>
                <h3 className="text-lg font-semibold mb-4">
                  Bạn có bất kì thắc mắc nào. <br />
                  Hãy để lại tin nhắn cho chúng tôi nhé!
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  <textarea
                    placeholder="Nội dung..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-6 float-right bg-green-600 text-white font-bold py-3 px-10 rounded-md hover:bg-green-700 transition-colors"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />
    </>
  );
};

export default ContactPage;
