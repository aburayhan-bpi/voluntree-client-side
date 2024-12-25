import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddVolunteer = () => {
  document.title = "Add Volunteer | Voluntree";
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData();
    const imageFile = formElement.thumbnail.files[0];

    if (imageFile) {
      try {
        formData.append("key", "14819cebf3a76eac1909552eb0e0ff1a");
        formData.append("image", imageFile);

        const uploadResponse = await fetch(`https://api.imgbb.com/1/upload`, {
          method: "POST",
          body: formData,
        });

        const uploadResult = await uploadResponse.json();
        if (uploadResult.success) {
          const imageUrl = uploadResult.data.display_url;

          // Format deadline using toLocaleDateString
          const formattedDeadline = deadline.toLocaleDateString("en-CA"); // Outputs: YYYY-MM-DD

          const postData = {
            title: formElement.title.value,
            category: formElement.category.value,
            location: formElement.location.value,
            volunteersNeeded: parseInt(formElement.volunteersNeeded.value),
            deadline: formattedDeadline, // Formatted deadline
            description: formElement.description.value,
            thumbnail: imageUrl,
            organizerName: user?.displayName,
            organizerEmail: user?.email,
          };

          // console.log("Post Data:", postData);

          // axios
          //   .post("https://voluntree-server-side.vercel.app/posts", postData, {
          //     withCredentials: true,
          //   })
          axiosSecure.post(`/posts`, postData).then((res) => {
            // console.log(res.data);
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Post added successfully!",
                icon: "success",
              });
              formElement.reset();
            }
          });
        } else {
          // console.error("Upload failed:", uploadResult.error.message);
          toast.error("Failed to upload image. Please try again.");
        }
      } catch (error) {
        // console.error("Image upload error:", error);
        toast.error("An error occurred while uploading the image.");
      }
    } else {
      toast.error("Please upload a valid thumbnail image.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-blue-100 dark:bg-black  dark:text-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-gray-200">
        Add Volunteer Need Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thumbnail */}
        <div>
          <label className="block font-medium text-gray-700 mb-2 dark:text-white">
            Thumbnail
          </label>
          <input
            type="file"
            name="thumbnail"
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none "
            accept="image/*"
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block font-medium text-gray-700 mb-2 dark:text-white">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium text-gray-700 mb-2 dark:text-white">
            Category
          </label>
          <select
            name="category"
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
            required
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 dark:text-white">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Number of Volunteers Needed */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 dark:text-white">
              Number of Volunteers Needed
            </label>
            <input
              type="number"
              name="volunteersNeeded"
              min="1"
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
              placeholder="Enter the number of volunteers needed"
              required
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 dark:text-white">
              Deadline
            </label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              name="deadline"
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-2 dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 border-none dark:text-white"
            rows="4"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        {/* Organizer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-2 dark:text-white">
              Organizer Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="block w-full bg-gray-100 border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-none"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2 dark:text-white">
              Organizer Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="block w-full bg-gray-100 border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:border-none"
            />
          </div>
        </div>

        {/* Add Post Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteer;
