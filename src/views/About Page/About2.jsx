import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../../components/button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, md: 6 }} className="flex" p={0}>
          <div className="flex max-lg:mx-auto w-full">
            <Image
              src={ImageCollection.about2}
              className={`object-cover mt-12`}
              alt="About Image"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className={`flex items-center`}>
          <div className={`${styles.body}`}>
            <animated.div style={rightColAnimation}>
              <Title className={`text-accent font-sans mb-2`} order={4}>
                \ Overview \
              </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Title className={classes.title} order={2}>
                The e-Byte Africa Story
              </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Text className="my-2 text-secondary">
                e-Byte Africa, headquartered in Lagos, Nigeria, is dedicated to
                revolutionizing education through innovative technology
                solutions. Our team combines expertise in software development
                and education management to empower K-12 private institutions.
              </Text>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Text className="my-2 text-secondary">
                Driven by integrity and innovation, we collaborate closely with
                educators and administrators to create cutting-edge tools that
                streamline administrative tasks and enhance the learning
                experience. Our commitment extends beyond technology — we're
                shaping the future of education one school at a time.
              </Text>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Btn
                text="View More"
                style={`rounded-md h-[50px] border-2 bg-accent justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-secondary hover:bg-secondary mt-5 hover:bg-transparent border-accent`}
                click={handleScrollUp}
              />
            </animated.div>
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
