import React, { FunctionComponent } from "react";
import { Box, Text } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

interface HeaderText {
  text: string;
  text2: string;
}

const PagesHeader: FunctionComponent<HeaderText> = ({ text, text2 }) => {
  const [ref, inView] = useInView({
    threshold: 0.4, // Adjust this value based on your preference
  });

  // Animation for the header (coming from the top)
  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-100%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 5 },
  });

  return (
    <Box className="w-full bg-secondary h-[350px] flex flex-col items-center justify-center">
      <animated.div ref={ref} style={headerAnimation}>
        <Text className="text-[48px] font-bold text-primary">{text}</Text>
        <Text className="text-[24px] text-white">{text2}</Text>
      </animated.div>
    </Box>
  );
};

export default PagesHeader;
