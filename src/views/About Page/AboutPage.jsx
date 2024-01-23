import React from "react";
import { Box, Image, Space, Text, Title } from "@mantine/core";
import { Heading, PagesHeader } from "../../components";
import { useTrail, animated } from "@react-spring/web"; // Import useTrail and animated
import About2 from "./About2";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const leaders = [
    {
      name: "Osborne Aigbiremolen",
      role: "Co-Founder",
      image: "../../../assets/images/osborne.jpeg",
    },
    {
      name: "Ifechukwu Success",
      role: "Co-Founder",
      image: "../../../assets/images/ifechi.jpg",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(leaders.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const animatedLeaders = trail.map((style, index) => (
    <animated.div key={index} style={style} className="flex flex-col">
      <Image
        src={leaders[index].image}
        className={`w-[300px] max-h-[300px] h-full object-cover object-top rounded-xl`}
      />
      <Text className="text-[20px] font-bold text-center text-primary">
        {leaders[index].name}
      </Text>
      <Text className="text-[16px] font-medium text-center text-secondary">
        {leaders[index].role}
      </Text>
    </animated.div>
  ));

  return (
    <Box className="" ref={ref}>
      <PagesHeader text={`About`} text2={`Home / About`} />
      <About2 />
      <Space h={`50px`} />  
      <Heading title={`Team`} description={`Our Leaders`} />
      <div className="flex sm:flex-row flex-col items-center lg:justify-evenly justify-center max-sm:space-y-5 sm:space-x-5">
        {animatedLeaders}
      </div>
    </Box>
  );
};

export default AboutPage;