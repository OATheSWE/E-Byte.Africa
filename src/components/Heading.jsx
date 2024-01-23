/* eslint-disable react/prop-types */
import { Title } from "@mantine/core";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

export default function Heading({ title, description, description2 }) {
  const [ref, inView] = useInView({
    threshold: 0.4, // Adjust this value based on your preference
  });

  // Animation for the header (coming from the top)
  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(100%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <animated.div ref={ref} style={headerAnimation}>
      <Title className={`text-primary font-sans mb-2 text-center`} order={4}>
        \ {title} \
      </Title>

      <Title
        className={`text-secondary text-center lg:text-[40px] text-[30px] font-bold mb-7`}
      >
        {description}
      </Title>
      <Title
        className={`text-white text-center lg:text-[40px] text-[30px] font-bold mb-7`}
      >
        {description2}
      </Title>
    </animated.div>
  );
}
