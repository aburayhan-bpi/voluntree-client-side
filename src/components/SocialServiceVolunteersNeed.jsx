import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const SocialServiceVolunteersNeed = () => {
  const [needData, setNeedData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://voluntree-server-side.vercel.app/posts?socialService=social-service`
      )
      .then((res) => {
        // console.log(res.data);
        setNeedData(res.data);
      });
  }, []);
  // console.log(needData);

  return (
    <div className=" p-3 rounded-lg mt-10 mb-4 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-center font-bold  text-4xl">
        Social Service Volunteer Needs
      </h2>
      <p className="text-center max-w-3xl mx-auto my-3">
        Join hands in social service initiatives that transform lives and build
        stronger communities. Your time makes all the difference.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 rounded-md justify-center">
        {needData.map((singleData, index) => (
          <VolunteerCard
            key={index}
            thumbnail={singleData?.thumbnail}
            title={singleData?.title}
            category={singleData?.category}
            volunteersNeeded={singleData?.volunteersNeeded}
            deadline={singleData?.deadline}
            description={singleData?.description}
            _id={singleData?._id}
          />
        ))}
      </div>
      <div>
        <button className="p-2 border-2 border-green-600 text-green-600 rounded-lg flex items-center gap-2 group dark:bg-gray-800 dark:border-blue-600">
          <Link to="/all-volunteers">See All</Link>
          <FaArrowRight className="inline transition-transform transform group-hover:translate-x-1" />
        </button>
        {/* <button className="p-2 border bg-blue-600 text-white rounded-lg flex items-center gap-2 group dark:bg-gray-800 dark:border-blue-600">
          <Link to="/all-volunteers">See All</Link>
          <FaArrowRight className="inline transition-transform transform group-hover:translate-x-1" />
        </button> */}
      </div>
    </div>
  );
};

export default SocialServiceVolunteersNeed;
