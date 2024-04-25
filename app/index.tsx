import React from "react";
import { About, Contact, Header, HomeInfo, JoinUs, KeyFeatures, Welcome } from "../src/components";


const home = () => {
  return (
    <div className="overflow-x-hidden bg-primary">
      <Header />
      {/* <About /> */}
      <Welcome />
      <HomeInfo />
      <KeyFeatures />
      <JoinUs />
      <Contact />
    </div>
  );
};

export default home;
