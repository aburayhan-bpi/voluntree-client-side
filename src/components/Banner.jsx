import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerCard from "./BannerCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Banner = () => {
  const { data: allPosts = [] } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://voluntree-server-side.vercel.app/posts"
      );
      return res.data;
    },
  });

  console.log(allPosts);

  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        {allPosts.map((singlePost) => (
          <SwiperSlide key={singlePost?._id}>
            <div className="relative">
              <div className="relative">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                {/* Image */}
                <img
                  className="w-full h-[35rem]"
                  src={singlePost?.thumbnail}
                  alt={singlePost?.title}
                />
              </div>
              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {/* <Link to="/join-employee"> */}
                <div className="flex flex-col gap-3 px-6 py-3 rounded-xl font-bold text-4xl text-white justify-center items-center">
                  <p className="">{singlePost?.title}</p>
                  <p className="text-xl">
                    Volunteers need: {singlePost?.volunteersNeeded}
                  </p>
                </div>
                {/* </Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Banner;

// {allPosts.map((singlePost) => (
//   <SwiperSlide key={singlePost._id}>
//     <BannerCard singlePost={singlePost}></BannerCard>
//   </SwiperSlide>
// ))}
