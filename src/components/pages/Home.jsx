import React, { useState } from "react";
import Banner from "../Banner";
import VolunteerNeedsNow from "../VolunteerNeedsNow";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  document.title = "Home | Voluntree";
  const loadedPosts = useLoaderData();

  const [posts, setPosts] = useState(loadedPosts);
  console.log(posts);
  return (
    <div>
      <div>
        <Banner bannerPosts={posts}></Banner>
      </div>
      {/* Volunteeer need now section */}
      <section>
        <VolunteerNeedsNow></VolunteerNeedsNow>
      </section>
    </div>
  );
};

export default Home;
