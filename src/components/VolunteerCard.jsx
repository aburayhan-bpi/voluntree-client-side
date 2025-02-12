import React from "react";
import { Link } from "react-router-dom";

const VolunteerCard = ({
  thumbnail,
  title,
  category,
  deadline,
  description,
  _id,
  volunteersNeeded,
}) => {
  const formattedCategory = category.replace(/-/g, " ");

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full dark:bg-gray-800  dark:text-white">
      {/* Thumbnail */}
      <img src={thumbnail} alt={title} className="rounded-lg w-full h-52 " />
      {/* Card Content */}
      <div className="flex flex-col flex-grow mt-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 capitalize">
          {title}
        </h3>
        <div className="flex justify-between items-center my-2">
          <p className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-lg capitalize">
            {formattedCategory}
          </p>
          <p className="text-xs text-gray-500 bg-red-200 px-2 py-1 rounded-lg">
            {deadline}
          </p>
        </div>
        <p className="text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded-lg mt-1 w-fit">
          Volunteers Need: {volunteersNeeded}
        </p>
        <p className="truncate text-sm mt-2 text-gray-600 dark:text-white">
          {description}
        </p>
      </div>
      {/* View Details Button */}
      <div className="mt-4">
        <Link to={`/post-details/${_id}`}>
          <button className="bg-green-500 dark:bg-green-800 dark:hover:bg-green-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-600 w-full transition-all duration-200">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
