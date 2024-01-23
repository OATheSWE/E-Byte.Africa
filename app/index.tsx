import React from "react";
import { About, Contact, Header, Services } from "../src/components";


const home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default home;
