import React from "react";
import Banner from "../Banner";
import VolunteerNeedsNow from "../VolunteerNeedsNow";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      {/* Volunteeer need now section */}
      <section>
        <VolunteerNeedsNow></VolunteerNeedsNow>
      </section>
    </div>
  );
};

export default Home;
