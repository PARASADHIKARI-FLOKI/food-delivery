import React from "react";
import Title from "./Title";
import { FaCheck, FaStar } from "react-icons/fa6";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import food1 from "../assets/food_1.png";
import food2 from "../assets/food_2.png";
import food3 from "../assets/food_12.png";
import food4 from "../assets/food_44.png";

const Testimonail = () => {
  return (
    <div>
      <div className="py-16">
        <Title
          title1={"DELICIOUS"}
          title2={"REVIEWS"}
          titleStyles={"text-center !pb-16"}
          paraStyles={"!block"}
        />
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* containeer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            {/* left side */}
            <div className="hidden sm:flex items-start justify-between flex-col gap-10">
              <Title
                title1={"What People"}
                title2={"Says"}
                titleStyles={"pb-10"}
                paraStyles={"!block"}
              />
              <div className="flex flex-col gap-1 bg-[#ebf9dc] p-2 rounded">
                <div className="flex text-[#217041] gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-[14px] font-[500]">
                  more than <b>+25,000 reviews</b>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Review card */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-[#ebf9dc]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-x-2">
                    <img
                      src={user1}
                      alt=""
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="text-[14px] font-[700]">John Doe</h5>
                  </div>
                  <div className="bg-[#217041] text-white rounded-full flex items-center justify-center gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2" />
                <div className="flex gap-x-1 text-[#217041] mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">High Quality</h4>
                <p>
                  The food was absolutely delicious! Every bite was bursting
                  with flavor, and the quality was top-notch. The service was
                  quick, and everything arrived fresh. Highly recommend trying
                  it out!
                </p>
                <div className="flex mt-5">
                    <img src={food1} alt="" height={44} width={44} className="rounded aspect-square object-cover" />
                    <img src={food2} alt="" height={44} width={44} className="rounded aspect-square object-cover" />
                </div>
              </div>
             {/* Review card */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-[#ebf9dc]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-x-2">
                    <img
                      src={user2}
                      alt=""
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="text-[14px] font-[700]">Izzabella Stress</h5>
                  </div>
                  <div className="bg-[#217041] text-white rounded-full flex items-center justify-center gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2" />
                <div className="flex gap-x-1 text-[#217041] mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="text-[16px] md:text-[17px] mb-2 font-bold">Tasty Flavour</h4>
                <p>
                 Amazing experience! The meals were perfectly cooked, and the flavors blended beautifully. The delivery was on time, and the packaging kept everything warm. Will definitely order again!
                </p>
                <div className="flex mt-5">
                    <img src={food3} alt="" height={44} width={44} className="rounded aspect-square object-cover" />
                    <img src={food4} alt="" height={44} width={44} className="rounded aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
