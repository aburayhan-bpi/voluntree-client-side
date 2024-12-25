import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdatePostPage = () => {
  document.title = "Update Post | Voluntree";
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const loadedData = useLoaderData();
  const [myData, setMyData] = useState(loadedData);
  const [deadline, setDeadline] = useState(new Date()); // Default to current date

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData();
    const imageFile = formElement.thumbnail.files[0];

    let imageUrl = myData?.thumbnail; // Default to the current thumbnail from myData

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
          imageUrl = uploadResult.data.display_url; // Update imageUrl if upload is successful
        } else {
          console.error("Upload failed:", uploadResult.error.message);
          toast.error("Failed to upload image. Please try again.");
          return; // Stop form submission if image upload fails
        }
      } catch (error) {
        console.error("Image upload error:", error);
        toast.error("An error occurred while uploading the image.");
        return; // Stop form submission if image upload throws an error
      }
    }

    const formattedDeadline = deadline.toLocaleDateString("en-CA");

    const postData = {
      title: formElement.title.value,
      category: formElement.category.value,
      location: formElement.location.value,
      volunteersNeeded: parseInt(formElement.volunteersNeeded.value),
      deadline: formattedDeadline,
      description: formElement.description.value,
      thumbnail: imageUrl, // Using the imageUrl, either uploaded or from myData
      organizerName: user?.displayName,
      organizerEmail: user?.email,
      postId: myData?._id,
    };

    // console.log("Post Data:", postData);
    // axios
    //   .patch(`http://localhost:5000/posts/${myData?._id}`, postData, {withCredentials: true})
    axiosSecure.patch(`/posts/${myData?._id}`, postData).then((res) => {
      // console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Post updated successfully!",
          icon: "success",
        });
        formElement.reset();
        navigate("/manage-posts");
      }
    });
  };
  //   console.log(myData?.category);
  return (
    <div className="max-w-4xl mx-auto bg-blue-100 dark:bg-black  dark:text-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Update Volunteer Need Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thumbnail */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-white mb-2">
            Thumbnail
          </label>
          <input
            type="file"
            name="thumbnail"
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
            accept="image/*"
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-white mb-2">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={myData?.title}
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-white mb-2">
            Category
          </label>
          <select
            name="category"
            // value={myData?.category || ""} // Set the category from myData as default
            value={myData?.category}
            onChange={(e) => setMyData({ ...myData, category: e.target.value })}
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
            required
          >
            <option value="">Select Category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-white mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={myData?.location}
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
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
              defaultValue={myData?.volunteersNeeded}
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
              placeholder="Enter the number of volunteers needed"
              required
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-white mb-2">
              Deadline
            </label>
            <DatePicker
              selected={deadline} // Controlled value
              onChange={(date) => setDeadline(date)} // Update state
              name="deadline"
              className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700 dark:text-white mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={myData?.description}
            className="block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-none"
            rows="4"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        {/* Organizer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 dark:text-white mb-2">
              Organizer Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="block w-full bg-gray-100 border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:text-white dark:border-none"
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
              className="block w-full bg-gray-100 border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:text-white dark:border-none"
            />
          </div>
        </div>

        {/* Add Post Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePostPage;
