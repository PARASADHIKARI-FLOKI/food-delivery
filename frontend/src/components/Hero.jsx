import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import { TbTruckDelivery } from "react-icons/tb";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoMdRestaurant } from "react-icons/io";
import { AiFillShop } from "react-icons/ai";
import { PiChefHatFill } from "react-icons/pi";

// 👇 Custom CSS for floating animation
const style = `
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-31deg); }
  50% { transform: translateY(-10px) rotate(-31deg); }
}
.floating-f {
  animation: float 2.5s ease-in-out infinite;
}
`;

const Hero = () => {
  return (
    <div className="bg-[#ebf9dc]">
      {/* Inject custom animation style */}
      <style>{style}</style>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 xl:py-36">
        <div className="flex items-center justify-center gap-6 flex-col xl:flex-row">
          {/* Left side */}
          <div className="flex flex-1 flex-col pt-12 xl:pt-32">
            <h1 className="text-[45px] leading-tight md:text-[55px] md:leading-[1.3] mb-4 font-bold max-w-[46rem]">
              Grab Exclusive{" "}
              <span className="inline-flex">
                <span className="inline-flex items-center justify-center p-5 h-16 w-16 bg-[#217041] text-white rounded-full floating-f">
                  F
                </span>
                ood
              </span>{" "}
              Discounts Now!
            </h1>
            <p className="text-base text-gray-700 max-w-xl">
             <span className="font-bold">FoodLand:</span> A world of flavors, freshness, and delight. Discover dishes
              that satisfy your cravings, excite your taste buds, and bring people
              together. From classic favorites to modern delights, find the perfect
              meal for every moment.
            </p>
            <div className="mt-6">
              <Link
                to={"/menu"}
                className="text-[14px] font-[500] bg-[#217041] text-white px-7 py-3.5 rounded-full transition-all hover:bg-[#1a5c35]"
              >
                Explore Now
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-1 relative z-10 top-12">
            <div className="relative">
              <img src={bg} alt="hero" height={666} width={666} />

              {/* Badge 1 */}
              <div className="hidden sm:block absolute top-8 right-14 max-w-48 bg-[#fffdf4] shadow-sm pl-2 py-2 rounded-xl">
                <div className="flex gap-2">
                  <TbTruckDelivery size={31} className="text-[#217041]" />
                  <h5 className="text-[14px] md:text-[15px] mb-1 font-bold relative top-1">
                    Fast Delivery
                  </h5>
                </div>
                <p className="text-xs">Fresh, hot meals at your doorstep.</p>
              </div>

              {/* Badge 2 */}
              <div className="hidden sm:block absolute top-52 right-6 max-w-60 bg-[#fffdf4] shadow-sm p-2 rounded-xl">
                <div className="flex gap-2">
                  <IoMdRestaurant size={26} className="text-[#217041]" />
                  <h5 className="text-[14px] md:text-[15px] mb-1 font-bold">
                    99+ Dishes
                  </h5>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="hidden sm:block absolute top-3/4 right-12 max-w-48 bg-[#fffdf4] shadow-sm pl-2 py-2 rounded-xl">
                <div className="flex gap-2">
                  <AiFillShop size={23} className="text-[#217041]" />
                  <h5 className="text-[14px] md:text-[15px] mb-1 font-bold">
                    200+ Branches
                  </h5>
                </div>
                <p className="text-sm">Bringing great food closer to you.</p>
              </div>

              {/* Badge 4 */}
              <div className="hidden sm:block absolute top-28 left-3 max-w-48 bg-[#fffdf4] shadow-sm pl-2 py-2 rounded-xl">
                <div className="flex gap-2">
                  <IoPeopleCircleOutline size={31} className="text-[#217041]" />
                  <h5 className="text-[14px] md:text-[15px] mb-1 font-bold relative top-1">
                    Happy Customers
                  </h5>
                </div>
                <p className="text-sm">Serving smiles with every delicious bite.</p>
              </div>

              {/* Badge 5 */}
              <div className="hidden sm:block absolute top-72 left-3 max-w-48 bg-[#fffdf4] shadow-sm p-2 rounded-xl">
                <div className="flex gap-2">
                  <PiChefHatFill size={28} className="text-[#217041]" />
                  <h5 className="text-[14px] md:text-[15px] mb-1 font-bold relative top-1">
                    Expert Cooks
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
