import React from "react";
import { Box } from "@mantine/core";
import { About, PagesHeader, KeyFeatures, ServicesInfo, Packages } from "../../components";

const ServicesPage = () => {
  return (
    <Box className="">
      <PagesHeader text={`Services`} text2={`Home / Services`} />
      <ServicesInfo />
      <Packages />
    </Box>
  );
};

export default ServicesPage;
