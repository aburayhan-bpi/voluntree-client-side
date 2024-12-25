import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { TbCategory } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const PostDetails = () => {
  document.title = "Post Details | Voluntree";
  const { user } = useAuth();
  const campaign = useLoaderData();

  //   states
  const [volunteersNeeded, setVolunteersNeeded] = useState(
    campaign.volunteersNeeded
  );
  const [suggestion, setSuggestion] = useState("");
  const [status, setStatus] = useState("requested");

  const handleModal = () => {
    // console.log("modal clicked");
    if (volunteersNeeded === 0) {
      return toast.error("Volunteers fullfilled!");
    }
    document.getElementById("my_modal_3").showModal();
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    // console.log("request submitted");
    const volunteerRequestData = {
      thumbnail: campaign.thumbnail,
      title: campaign.title,
      description: campaign.description,
      category: campaign.category,
      location: campaign.location,
      volunteersNeeded: parseFloat(campaign.volunteersNeeded),
      deadline: campaign.deadline,
      organizerName: campaign.organizerName,
      organizerEmail: campaign.organizerEmail,
      postId: campaign._id,
      suggestion,
      status,
      volunteerName: user?.displayName,
      volunteerEmail: user?.email,
    };

    // send data to db
    axios
      .post("http://localhost:5000/volunteerRequests", volunteerRequestData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Volunteer Requested!",
            icon: "success",
          });
          // Update volunteersNeeded with the new value returned from the backend
          // console.log(res.data.updatedVolunteersNeeded);
          setVolunteersNeeded(res.data.updatedVolunteersNeeded);

          setSuggestion("");
        }
      });
    // console.log(volunteersNeeded);
    // console.log(volunteerRequestData);
    document.getElementById("my_modal_3").close();
  };

  useEffect(() => {
    // console.log("Updated volunteersNeeded:", volunteersNeeded);
  }, [volunteersNeeded]);

  return (
    <div className="mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 dark:bg-gray-800">
        {/* Image Section */}
        <div className="relative">
          <img
            src={campaign.thumbnail}
            alt={campaign.title}
            className="w-full h-[33rem] object-"
          />
          <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full uppercase shadow-lg">
            {campaign.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-extrabold text-blue-800 dark:text-blue-600 mb-4">
              {campaign.title}
            </h3>
            <p className="text-gray-700 text-lg mb-6 dark:text-gray-200">
              {campaign.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-200">
                    Location
                  </p>
                  <p className="text-gray-800 text-base capitalize dark:text-gray-200">
                    {campaign.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-200">
                    Deadline
                  </p>
                  <p className="text-gray-800 text-base dark:text-gray-200">
                    {campaign.deadline}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-200">
                    Organizer
                  </p>
                  <p className="text-gray-800 text-base dark:text-gray-200">
                    {campaign.organizerName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaUserAlt className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-600 text-sm dark:text-gray-200">
                    Volunteers Needed
                  </p>
                  <p className="text-gray-800 text-base font-bold dark:text-gray-200">
                    {volunteersNeeded}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Button */}
          <button
            onClick={handleModal}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 shadow-lg transition duration-300 
            dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-500 dark:text-white
            "
          >
            Be a Volunteer
          </button>
        </div>
      </div>
      {/* modal start */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box border border-gray-200 dark:bg-gray-800 dark:text-gray-200 shadow-lg max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Thumbnail Card */}
          <div
            className="p-4 bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-md mb-6 flex flex-wrap lg:flex-nowrap items-center gap-4
          dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-300
          "
          >
            <img
              src={campaign?.thumbnail}
              alt={campaign?.title}
              className="w-full lg:w-32 h-72 lg:h-32 rounded-lg object-cover shadow-lg"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-blue-800">
                {campaign?.title}
              </h3>
              <p className="text-sm text-gray-600">{campaign?.description}</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <TbCategory className="text-blue-600" />
                  <span className="text-sm text-gray-800 capitalize">
                    {campaign?.category}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span className="text-sm text-gray-800">
                    {campaign?.location}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-blue-600" />
                  <span className="text-sm text-gray-800">
                    Deadline: {campaign?.deadline}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-blue-600" />
                  <span className="text-sm text-gray-800">
                    Volunteers Need: {volunteersNeeded}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmitRequest} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Volunteer Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Volunteer Name
                </label>{" "}
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-blue-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Volunteer Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-blue-700"
                />
              </div>
              {/* Organizer Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Organizer Name
                </label>
                <input
                  type="text"
                  value={campaign?.organizerName || ""}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-blue-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Organizer Email
                </label>
                <input
                  type="email"
                  value={campaign?.organizerEmail || ""}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-blue-700"
                />
              </div>
            </div>

            {/* Suggestion Box */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                Suggestion
              </label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                rows="4"
                placeholder="Enter your suggestion here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-blue-700"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition shadow-md"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* modal end */}
    </div>
  );
};

export default PostDetails;
