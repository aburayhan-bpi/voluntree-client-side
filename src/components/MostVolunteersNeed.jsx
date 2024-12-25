import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const MostVolunteersNeed = () => {
  const [needData, setNeedData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts?mostVolnNeed=true`).then((res) => {
      //   console.log(res.data);
      setNeedData(res.data);
    });
  }, []);
  // console.log(needData);

  return (
    <div className="bg-amber-200 p-3 rounded-lg mt-10 mb-4 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-center font-bold  text-4xl">Most Volunteer Needs</h2>
      <p className="text-center max-w-3xl mx-auto my-3">
        Support the missions with the highest volunteer needs and help
        communities overcome their biggest challenges with collective strength.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-4 rounded-md">
        {needData.map((singleData, index) => (
          <VolunteerCard
            key={index}
            thumbnail={singleData?.thumbnail}
            title={singleData?.title}
            category={singleData?.category}
            volunteersNeeded={singleData?.volunteersNeeded}
            deadline={singleData?.deadline}
            _id={singleData?._id}
          />
        ))}
      </div>
      <div>
        <button className="p-2 border bg-blue-600 text-white rounded-lg flex items-center gap-2 group dark:bg-gray-800 dark:border-blue-600">
          <Link to="/all-volunteers">See All</Link>
          <FaArrowRight className="inline transition-transform transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default MostVolunteersNeed;
