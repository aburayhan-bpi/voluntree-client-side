import React from "react";
import { Link } from "react-router-dom";

const VolunteerPostCard = ({ singlePost, layout, truncateText }) => {
  const {
    category,
    deadline,
    description,
    location,
    organizerEmail,
    organizerName,
    thumbnail,
    title,
    volunteersNeeded,
    _id,
  } = singlePost || {};

  const formattedCategory = category.replace(/-/g, " ");

  return (
    <div className="h-full">
      <div className=" h-full rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col dark:bg-black/50">
        <img
          className="w-full h-60 
      "
          src={thumbnail}
          alt={title}
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-200 ">
            {title}
          </h3>
          <div className="flex justify-between mb-4">
            <span className="bg-red-200 text-red-600 rounded-lg p-1 text-sm capitalize">
              {formattedCategory}
            </span>
            <span className="bg-green-200 text-green-600 rounded-lg p-1 text-sm">
              {volunteersNeeded} Volunteers
            </span>
          </div>
          <p className="text-gray-700 text-base mb-4 flex-grow dark:text-gray-200">
            {/* {description} */}
            {truncateText(description, 80)}...
          </p>
          <div className="flex justify-between items-center text-gray-600">
            <div>
              <span className="block text-sm font-medium dark:text-gray-200">
                Organizer:
              </span>
              <span className="text-sm dark:text-gray-200">
                {organizerName}
              </span>
            </div>
            <div>
              <span className="block text-sm font-medium dark:text-gray-200">
                Deadline:
              </span>
              <span className="text-sm bg-red-200 text-red-600 rounded-lg p-[2px]">
                {deadline}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 mt-auto">
          <Link to={`/post-details/${_id}`}>
            <button className="w-full py-2 mt-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPostCard;
