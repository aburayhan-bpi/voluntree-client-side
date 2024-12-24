import React from "react";
import useAuth from "../hooks/useAuth";

const BannerCard = ({ singlePost }) => {
  const { user, themeToggle } = useAuth();
  return (
    <div className="w-full bg-gray-100 bg-opacity-10 rounded-lg">
      <div
        className={
          themeToggle
            ? "w-full bg-white overflow-hidden rounded-lg shadow-md"
            : "w-full overflow-hidden rounded-lg shadow-md"
        }
      >
        <img
          src={singlePost?.thumbnail}
          alt={singlePost?.title}
          className="w-full h-96 object-fit rounded-t-lg"
        />
        <div className="p-4 rounded-b-lg">
          <h2
            className={
              themeToggle
                ? "text-xl font-semibold  text-black"
                : "text-xl font-semibold  text-white"
            }
          >
            {singlePost?.title}
          </h2>
          <p
            className={
              themeToggle ? "text-sm text-black" : "text-sm text-white"
            }
          >
            {singlePost?.genre}
          </p>
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
