import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import VolunteerPostCard from "../VolunteerPostCard";

const AllVolunteers = () => {
  document.title = "All Volunteers Posts | Voluntree";
  const loadedPosts = useLoaderData();
  const [posts, setPosts] = useState(loadedPosts);
  const [layout, setLayout] = useState("grid");
  // console.log(layout);
  // console.log(posts);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(loadedPosts);
  // console.log(filteredPosts);
  useEffect(() => {
    fetch(`http://localhost:5000/posts?search=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredPosts(data);
        // console.log(data);
      });
  }, [searchQuery]);

  return (
    <div>
      <div className="space-y-3 mt-4 mb-10 dark:text-gray-200 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">All volunteers collections</h2>
        <p className="text-center max-w-3xl mx-auto font-light">
          Together, we can make a difference in countless lives. Explore a wide
          array of volunteer opportunities and become a part of the change the
          world needs today.
        </p>
      </div>
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800"
        />
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex space-x-2">
          {/* Grid Layout Button */}
          <button
            onClick={() => setLayout("grid")}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
              />
            </svg>
          </button>

          {/* List Layout Button */}
          <button
            onClick={() => setLayout("table")}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18m-18 6h18"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="font-semibold dark:text-gray-200">
        Total posts: {filteredPosts.length}
      </p>
      <div
        className={`
          ${
            layout === "grid"
              ? "grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
              : "grid grid-cols-1 gap-4 mt-4 justify-center items-center"
          }
          
          
          
          `}
      >
        {layout === "grid" ? (
          filteredPosts.map((singlePost) => (
            <VolunteerPostCard
              key={singlePost._id}
              singlePost={singlePost}
              layout={layout}
            ></VolunteerPostCard>
          ))
        ) : (
          <div>
            {/* <div className="flex gap-3 items-center">
              <h2 className="text-xl font-semibold dark:text-gray-200">
                Requested Posts
              </h2>
              <p className="text-center w-10 font-semibold bg-purple-200 text-purple-600 rounded-md">
                {myReqPost.length}
              </p>
            </div> */}
            <div className="mt-4">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {filteredPosts.length === 0 ? (
                  <div>
                    <p className="rounded-lg text-red-500 font-semibold text-sm p-2">
                      No data available
                    </p>
                  </div>
                ) : (
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Thumbnail
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Organizer Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Volunteers Needed
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Deadline
                        </th>
                        <th scope="col" className="px-6 py-3">
                          View Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPosts.map((singlePost) => (
                        <tr
                          key={singlePost?._id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <img
                              className="w-32 rounded-md"
                              src={singlePost?.thumbnail}
                              alt=""
                            />
                          </th>
                          <td className="px-6 py-4">{singlePost?.title}</td>
                          <td className="px-6 py-4">
                            {singlePost?.organizerName}
                          </td>
                          <td className="px-6 py-4 capitalize">
                            {singlePost?.category}
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-600 p-1 rounded-lg text-xs capitalize">
                              {singlePost?.volunteersNeeded}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {singlePost?.description}
                          </td>
                          <td className="px-6 py-4">{singlePost?.deadline}</td>
                          <td className="px-6 py-4">
                            <Link to={`/post-details/${singlePost?._id}`}>
                              <button className="w-28 py-4 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                View Details
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}

        {}
      </div>
    </div>
  );
};

export default AllVolunteers;
