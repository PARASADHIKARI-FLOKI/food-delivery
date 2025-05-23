import React from "react";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaHeadphones,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Title from "../components/Title";

const Contact = () => {
  return (
        <div className="bg-[#fffdf4] pt-24 min-h-screen">

    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-24">
      {/* Contact form and details */}
      <div className="flex flex-col xl:flex-row gap-20 py-6">
        {/* contact form */}
        <div>
          <Title
            title1={"Get"}
            title2={"in Touch"}
            titleStyles={
              "text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"
            }
          />
          <p className="mb-5 max-w-xl">
            Have question or need help? Send us a message, and we'll get back to
            you as soon as possible.
          </p>
          <form>
            <div className="flex gap-x-5">
              <div className="w-1/2 mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 text-[14px] font-[400] bg-[#ebf9dc] rounded"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 text-[14px] font-[400] bg-[#ebf9dc] rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows="4"
                placeholder="write your message here"
                className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 text-[14px] font-[400] bg-[#ebf9dc] rounded resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-[14px] font-medium bg-[#217041] text-white px-7 py-3.5 rounded-full transition-all shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* contact details */}
        <div>
          {/* Title */}
          <Title
            title1={"Contact"}
            title2={"Details"}
            titleStyles={
              "text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"
            }
          />
          <p className="max-w-xl mb-4">
            We are alwarys here to assist you! Feel free to reach out to us
            through any of the following methods
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h5 className="text-[14px] md:text-[15px] mb-1 font-bold capitalize mr-4">
                location:
              </h5>
              <p className="flex items-center justify-start gap-x-2">
                <FaLocationDot /> 123 FoodLand Streer, Food city, FC 12345
              </p>
            </div>
            <div className="flex flex-cols">
              <h5 className="text-[14px] md:text-[15px] mb-1 font-bold capitalize mr-4">
                email:
              </h5>
              <p className="flex items-center justify-start gap-x-2">
                <FaEnvelope /> info@foodland.com
              </p>
            </div>
            <div className="flex flex-cols">
              <h5 className="text-[14px] md:text-[15px] mb-1 font-bold capitalize mr-4">
                phone:
              </h5>
              <p className="flex items-center justify-start gap-x-2">
                <FaPhone /> info@foodland.com +1 (800) 123-456789
              </p>
            </div>
            <div className="flex flex-cols">
              <h5 className="text-[14px] md:text-[15px] mb-1 font-bold capitalize mr-4">
                Support:
              </h5>
              <p className="flex items-center justify-start gap-x-2">
                <FaHeadphones /> 24/7 Support is open
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Location map */}
      <div>
        <Title
          title1={"Find"}
          title2={"us Here"}
          titleStyles={
            "text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"
          }
        />
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114210.14256573937!2d85.1702376047957!3d27.708873043137256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e1!3m2!1sen!2snp!4v1747986250744!5m2!1sen!2snp"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
    </div>
  );
};

export default Contact;
