import React, { useEffect, useState } from "react";
import { Title, Text, Grid, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import style from "./Header.module.css";
import { ImageCollection } from "../../../assets";


export default function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 600, behavior: 'smooth' });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full mt-32 mb-10 ${styles.body}`}>
      <Grid gutter={50} className={`font-sans`}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className="flex flex-col justify-center max-lg:items-center max-lg:text-center items-center"
        >
          <animated.div style={rightColAnimation} className={`max-lg:mt-10`}>
            <Title className={`text-primary font-sans mb-2`} order={4}>
              \ We Are Here \
            </Title>

            <Title
              className={`font-sans ${style.title} text-[34px] max-lg:text-[27px]`}
            >
              Welcome to <span className="text-primary">e-Byte Africa</span> – Where Digital Innovation Meets
              Excellence 🌐💡
            </Title>

            <Text className="mt-2">
              Transforming Visions into Digital Triumphs. Our Code, Your
              Success! Let's Build Something Extraordinary Together.
            </Text>

            <Btn
              text="View More"
              style={`rounded-md h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-white hover:bg-secondary mt-5`}
              click={handleScrollUp}
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={leftColAnimation} className={style.floating}>
            <Image
              src={ImageCollection.hero} 
              className={`max-sm:object-contain w-full object-cover`}
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
