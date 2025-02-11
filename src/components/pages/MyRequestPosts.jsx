import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyRequestPosts = () => {
  document.title = "Request Posts | Voluntree";
  const { user } = useAuth();
  const [myReqPost, setMyReqPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/myReqPosts?email=${user?.email}`)
      .then((res) => {
        setMyReqPost(res.data);
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://voluntree-server-side.vercel.app/reqPosts/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Request has been deleted.",
              icon: "success",
            });
            const remaining = myReqPost.filter((prev) => prev._id !== id);
            setMyReqPost(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex gap-3 items-center">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          Requested Posts
        </h2>
        <p className="text-center w-10 font-semibold bg-green-200 text-green-600 rounded-md">
          {myReqPost.length}
        </p>
      </div>
      <div className="mt-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : myReqPost.length === 0 ? (
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
                    Volunteer Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myReqPost.map((singlePost) => (
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
                    <td className="px-6 py-4">{singlePost?.volunteerEmail}</td>
                    <td className="px-6 py-4 capitalize">
                      {singlePost?.category}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-600 p-1 rounded-lg text-xs capitalize">
                        {singlePost?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleCancel(singlePost?._id)}
                        className="font-medium text-red-600 bg-red-100 hover:bg-red-200 p-1 rounded-md dark:text-red-500"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequestPosts;
