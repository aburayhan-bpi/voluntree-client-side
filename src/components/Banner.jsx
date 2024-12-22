import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
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
        <SwiperSlide>
          <img
            className="w-full h-full object-fit"
            src="https://i.ibb.co/wCG5nyc/Stardew-Valley.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-fit"
            src="https://i.ibb.co/NSkmvKk/Satisfactory.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-fit"
            src="https://i.ibb.co/wCG5nyc/Stardew-Valley.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-fit"
            src="https://i.ibb.co/MSK1v4t/Elden-Ring.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
