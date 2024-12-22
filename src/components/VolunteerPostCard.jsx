import React from "react";
import { Link } from "react-router-dom";

const VolunteerPostCard = ({ singlePost }) => {
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

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <img className="w-full h-60 object-cover" src={thumbnail} alt={title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 text-sm">{category}</span>
          <span className="text-gray-600 text-sm">
            {volunteersNeeded} Volunteers
          </span>
        </div>
        <p className="text-gray-700 text-base mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center text-gray-600">
          <div>
            <span className="block text-sm font-medium">Organizer:</span>
            <span className="text-sm">{organizerName}</span>
          </div>
          <div>
            <span className="block text-sm font-medium">Deadline:</span>
            <span className="text-sm">{deadline}</span>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 mt-auto">
        <Link to={`/post-details/${_id}`}>
          <button
            onClick={() => alert("Redirecting to details page...")}
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerPostCard;
