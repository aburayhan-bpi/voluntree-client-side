import React, { useState } from "react";
import Banner from "../Banner";
import VolunteerNeedsNow from "../VolunteerNeedsNow";
import { useLoaderData } from "react-router-dom";
import MostVolunteersNeed from "../MostVolunteersNeed";
import SocialServiceVolunteersNeed from "../SocialServiceVolunteersNeed";
import FAQ from "../FAQ";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
  document.title = "Home | Voluntree";
  // const loadedPosts = useLoaderData();

  // const [posts, setPosts] = useState(loadedPosts);
  // console.log(posts);
  return (
    <div>
      <div>
        <Banner></Banner>
        {/* <Banner bannerPosts={posts}></Banner> */}
      </div>
      {/* Volunteer need now section */}
      <section>
        <VolunteerNeedsNow></VolunteerNeedsNow>
      </section>
      <section>
        <MostVolunteersNeed></MostVolunteersNeed>
      </section>
      <section>
        <SocialServiceVolunteersNeed></SocialServiceVolunteersNeed>
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
