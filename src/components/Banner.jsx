import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import BannerCard from "./BannerCard";

const Banner = ({ bannerPosts }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        className="mySwiper rounded-lg h-96"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        <div>
          {bannerPosts.map((singlePost) => (
            <SwiperSlide key={singlePost._id}>
              <BannerCard singlePost={singlePost}></BannerCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default Banner;
