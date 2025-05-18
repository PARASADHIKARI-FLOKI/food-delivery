import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Item from "./Item";

const PopularFoods = () => {
  const { foods } = useContext(ShopContext);
  const [PopularFoods, setPopularFoods] = useState([]);

  useEffect(() => {
    const data = foods.filter((item) => item.popular);
    setPopularFoods(data.slice(0, 6));
  },[foods]);
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-16">
      <Title
        title1={"POPULAR"}
        title2={"FOODS"}
        titleStyles={"text-center !pb-16"}
        paraStyles={"!block"}
      />
      {/* container of swiper */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[255px]"
      >
        {PopularFoods.map((food) => {
          return (
            <SwiperSlide key={food._id} className="pl-16">
              <Item food={food} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PopularFoods;
