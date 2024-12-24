import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VolunteerPostCard from "../VolunteerPostCard";

const AllVolunteers = () => {
  document.title = "All Volunteers Posts | Voluntree";
  const loadedPosts = useLoaderData();
  const [posts, setPosts] = useState(loadedPosts);
  // console.log(posts);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(loadedPosts);

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
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      <p className="font-semibold">Total posts: {posts.length}</p>
      <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((singlePost) => (
          <VolunteerPostCard
            key={singlePost._id}
            singlePost={singlePost}
          ></VolunteerPostCard>
          // <p>{singlePost.title}</p>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteers;
