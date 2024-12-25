import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyVolunteerPosts = () => {
  document.title = "Volunteer Posts | Voluntree";
  const { user } = useAuth();
  const [myVoluntPost, setMyVoluntPost] = useState([]);
  const axiosSecure = useAxiosSecure();
  // console.log("User Email:", user?.email);

  //  .get(`https://voluntree-server-side.vercel.app/posts?email=${user?.email}`, {
  //         withCredentials: true,
  //       })

  useEffect(() => {
    // axios
    //   .get(`https://voluntree-server-side.vercel.app/myPosts?email=${user?.email}`, {
    //     withCredentials: true,
    //   })
    axiosSecure.get(`/myPosts?email=${user?.email}`).then((res) => {
      // console.log(res.data);
      setMyVoluntPost(res.data);
    });
  }, []);
  // console.log(myVoluntPost);

  // handle update
  // const handleUpdate = (id) => {};

  const handleDelete = (id) => {
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
          .delete(`https://voluntree-server-side.vercel.app/posts/${id}`)
          .then((res) => {
            // console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Request has been deleted.",
              icon: "success",
            });
            const remaining = myVoluntPost.filter((prev) => prev._id !== id);
            setMyVoluntPost(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="flex gap-3 items-center">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          My Volunteers Need Posts
        </h2>
        <p className="text-center w-10 font-semibold bg-purple-200 text-purple-600 rounded-md">
          {myVoluntPost.length}
        </p>
      </div>
      <div className="mt-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {myVoluntPost.length === 0 ? (
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
                    Volunteers Need
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myVoluntPost.map((singlePost) => (
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
                        alt="thumbnail"
                      />
                    </th>
                    <td className="px-6 py-4">{singlePost?.title}</td>
                    <td className="px-6 py-4">{singlePost?.organizerEmail}</td>
                    <td className="px-6 py-4 capitalize">
                      {singlePost?.category}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-600 p-1 rounded-lg capitalize">
                        {singlePost?.volunteersNeeded}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link to={`/posts/update/${singlePost?._id}`}>
                        <button className="font-medium text-green-600 bg-green-100 hover:bg-green-200 p-1 rounded-md dark:text-red-500">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(singlePost?._id)}
                        className="font-medium text-red-600 bg-red-100 hover:bg-red-200 p-1 rounded-md dark:text-red-500"
                      >
                        Delete
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

export default MyVolunteerPosts;
