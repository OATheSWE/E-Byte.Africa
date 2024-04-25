import React from "react";
import { Box, Space } from "@mantine/core";
import { Contact, Faq, PagesHeader } from "../../components";

const ContactPage = () => {
  return (
    <Box className=" overflow-x-hidden bg-primary">
      <PagesHeader text={`Contact`} text2={`Home / Contact`} />
      <Space h={`100px`} />
      <Contact />
      <Faq />
    </Box>
  );
};

export default ContactPage;
