import React from "react";
import useAuth from "../hooks/useAuth";

const BannerCard = ({ singlePost }) => {
  const { user, themeToggle } = useAuth();
  return (
    <div className="relative w-full bg-gray-100 bg-opacity-10 rounded-lg">
      <div
        className={
          themeToggle
            ? "w-full bg-white overflow-hidden rounded-lg shadow-md"
            : "w-full overflow-hidden rounded-lg shadow-md"
        }
      >
        {/* Image Container with Text Overlay */}
        <div className="relative">
          <img
            src={singlePost?.thumbnail}
            alt={singlePost?.title}
            className="w-full h-96  rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-white p-4">
            <h2 className="text-2xl font-bold">{singlePost?.title}</h2>
            <p className="text-base mt-2 font-semibold">
              Volunteers Needed: {singlePost?.volunteersNeeded}
            </p>
          </div>
        </div>

        {/* Content Below Image */}
        <div className="p-4 rounded-b-lg">
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <div className="rating rating-sm">
                {[...Array(5)].map((_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating"
                    className={`mask mask-star-2 bg-orange-400 ${
                      index < Math.floor(singlePost?.rating) ? "checked" : ""
                    }`}
                    disabled
                  />
                ))}
              </div>
              <p
                className={
                  themeToggle ? "ml-2  text-black" : "ml-2  text-white"
                }
              >
                {singlePost?.rating}
              </p>
            </div>
            <p
              className={
                themeToggle
                  ? "text-lg font-bold text-black"
                  : "text-lg font-bold text-white/60"
              }
            >
              Year: {singlePost?.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
