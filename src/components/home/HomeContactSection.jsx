// src/components/home/HomeContactSection.jsx
import React from "react";
import ContactImage from "@/assets/images/contact-image.png";

const HomeContactSection = () => (
  <section className=" lg:pb-33">
    <div className="container mx-auto px-4 max-w-7xl mt-12">
      <div className="flex flex-col gap-10 xl:gap-0 md:flex-row bg-white rounded-lg overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center p-1">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-auto object-cover max-w-md"
          />
        </div>
        <div className="md:w-1/2 mb-24 xl:mb-0 py-2 pr-0 xl:pr-24 lg:py-12">
          <h3 className="text-lg font-semibold mb-4">
            Bạn có bất kì thắc mắc nào. <br />
            Hãy để lại tin nhắn cho chúng tôi nhé!
          </h3>
          <form className="space-y-4">
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
            <button
              type="submit"
              className="float-right bg-green-600 text-white font-bold py-3 px-10 rounded-md hover:bg-green-700"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default HomeContactSection;
