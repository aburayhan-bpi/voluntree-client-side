import React from "react";
import useAuth from "../hooks/useAuth";

const BannerCard = ({ singlePost }) => {
  const { user, themeToggle } = useAuth();
  return (
    <div>
      <div className="relative">
          <img
            src={singlePost?.thumbnail}
            alt={singlePost?.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end text-white p-4">
            <h2 className="text-2xl font-bold">{singlePost?.title}</h2>
            <p className="text-base mt-2 font-semibold">
              Volunteers Needed: {singlePost?.volunteersNeeded}
            </p>
          </div>
        </div>
    </div>
  );
};

export default BannerCard;
