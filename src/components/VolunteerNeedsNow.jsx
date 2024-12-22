import React from "react";
import VolunteerCard from "./VolunteerCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  return (
    <div className="">
      <h2 className="text-center font-bold mt-10 mb-4 text-4xl">
        Volunteer Needs Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-amber-200 p-4 rounded-md">
        {posts.map((post, index) => (
          <VolunteerCard
            key={index}
            thumbnail={post.thumbnail}
            title={post.title}
            category={post.category}
            deadline={post.deadline}
          />
        ))}
        <div>
          <button className="p-2 border bg-blue-600 text-white rounded-lg flex items-center gap-2 group">
            <Link to="/all-volunteers">See All</Link>
            <FaArrowRight className="inline transition-transform transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
