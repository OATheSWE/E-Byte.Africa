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
    window.scrollTo({ top: scrollPosition + 600, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full mt-[6.5rem] mb-10 bg-secondary`}>
      <Grid gutter={50} className={`font-sans`}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className={`flex flex-col justify-center max-lg:items-center max-lg:text-center items-center ${styles.body}`}
        >
          <div className={`max-lg:mt-10`}>
            <animated.div style={rightColAnimation}>
              <Title className={`text-primary font-sans mb-2`} order={4}>
                \ We Are Here \
              </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
            <Title
              className={`font-sans ${style.title} text-[34px] max-lg:text-[27px] text-primary`}
            >
              Welcome to <span className="text-accent">e-Byte Africa</span> –
              Shaping the future of education, One School at a time.
            </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
            <Btn
              text="View More"
              style={`rounded-md h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-secondary hover:bg-accent mt-5`}
              click={handleScrollUp}
            />
            </animated.div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} p={0}>
          <div className={`h-full`}>
            <Image
              src={ImageCollection.hero}
              className={`max-sm:object-contain w-full object-cover`}
              alt="Hero Image"
            />
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
