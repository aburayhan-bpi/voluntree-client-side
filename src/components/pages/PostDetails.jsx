import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const campaign = useLoaderData();
  console.log(campaign);
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <img
            src={campaign.thumbnail}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full uppercase shadow-lg">
            {campaign.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">
              {campaign.title}
            </h3>
            <p className="text-gray-700 text-lg mb-6">{campaign.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm">
                    Location
                  </p>
                  <p className="text-gray-800 text-base">{campaign.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm">
                    Deadline
                  </p>
                  <p className="text-gray-800 text-base">{campaign.deadline}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm">
                    Organizer
                  </p>
                  <p className="text-gray-800 text-base">
                    {campaign.organizerName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm">
                    Volunteers Needed
                  </p>
                  <p className="text-gray-800 text-base font-bold">
                    {campaign.volunteersNeeded}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Button */}
          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 shadow-lg transition duration-300">
            Be a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
