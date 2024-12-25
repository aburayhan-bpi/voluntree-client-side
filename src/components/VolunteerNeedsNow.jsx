import React, { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const VolunteerNeedsNow = () => {
  const posts = [
    {
      thumbnail: "https://i.ibb.co/NSkmvKk/Satisfactory.jpg",
      title: "Tree Planting Initiative",
      category: "Environment",
      deadline: "2024-12-31",
    },
    {
      thumbnail: "https://i.ibb.co/wCG5nyc/Stardew-Valley.jpg",
      title: "Animal Shelter Assistance",
      category: "Animal Welfare",
      deadline: "2024-12-28",
    },
    {
      thumbnail: "https://i.ibb.co/NSkmvKk/Satisfactory.jpg",
      title: "Tree Planting Initiative",
      category: "Environment",
      deadline: "2024-12-31",
    },
    {
      thumbnail: "https://i.ibb.co/wCG5nyc/Stardew-Valley.jpg",
      title: "Animal Shelter Assistance",
      category: "Animal Welfare",
      deadline: "2024-12-28",
    },
    {
      thumbnail: "https://i.ibb.co/NSkmvKk/Satisfactory.jpg",
      title: "Tree Planting Initiative",
      category: "Environment",
      deadline: "2024-12-31",
    },
    {
      thumbnail: "https://i.ibb.co/wCG5nyc/Stardew-Valley.jpg",
      title: "Animal Shelter Assistance",
      category: "Animal Welfare",
      deadline: "2024-12-28",
    },
    // Add more posts...
  ];
  const [needData, setNeedData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://voluntree-server-side.vercel.app/posts?volnNeed=true`)
      .then((res) => {
        // console.log(res.data);
        setNeedData(res.data);
      });
  }, []);
  // console.log(needData);
  return (
    <div className="bg-amber-200 p-3 rounded-lg mt-10 mb-4 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-center font-bold text-4xl">Volunteer Needs Now</h2>
      <p className="text-center max-w-3xl mx-auto my-3">
        Your time and skills are needed now more than ever. Explore immediate
        volunteer openings and be the change in someone's life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-md justify-center">
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

export default VolunteerNeedsNow;
