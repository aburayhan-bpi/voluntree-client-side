import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const SocialServiceVolunteersNeed = () => {
  const [needData, setNeedData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts?socialService=social-service`)
      .then((res) => {
        // console.log(res.data);
        setNeedData(res.data);
      });
  }, []);
  // console.log(needData);

  return (
    <div className="bg-amber-200 p-3 rounded-lg mt-10 mb-4">
      <h2 className="text-center font-bold  text-4xl">
       Social Service Volunteer Needs
      </h2>
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
        <button className="p-2 border bg-blue-600 text-white rounded-lg flex items-center gap-2 group">
          <Link to="/all-volunteers">See All</Link>
          <FaArrowRight className="inline transition-transform transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default SocialServiceVolunteersNeed;
