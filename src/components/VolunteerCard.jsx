import React from "react";

const VolunteerCard = ({ thumbnail, title, category, deadline }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="rounded-lg w-full object-cover"
      />
      {/* Card Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
        <p className="text-sm text-gray-500 mt-1">Deadline: {deadline}</p>
        {/* View Details Button */}
        <button className="mt-4 bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default VolunteerCard;
