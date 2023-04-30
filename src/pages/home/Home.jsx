import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide />
    </div>
  );
};

export default Home;
