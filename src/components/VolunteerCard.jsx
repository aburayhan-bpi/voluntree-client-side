import React from "react";
import { Link } from "react-router-dom";

const VolunteerCard = ({
  thumbnail,
  title,
  category,
  deadline,
  _id,
  volunteersNeeded,
}) => {
  const formattedCategory = category.replace(/-/g, " ");

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      {/* Thumbnail */}
      <img src={thumbnail} alt={title} className="rounded-lg w-full h-52 " />
      {/* Card Content */}
      <div className="flex flex-col flex-grow mt-4">
        <h3 className="text-lg font-semibold text-gray-800 capitalize">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 capitalize">Category: {formattedCategory}</p>
        <p className="text-sm text-gray-500 mt-1">Deadline: {deadline}</p>
        <p className="text-sm text-gray-500 mt-1">
          Volunteers Need: {volunteersNeeded}
        </p>
      </div>
      {/* View Details Button */}
      <div className="mt-4">
        <Link to={`/post-details/${_id}`}>
          <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
