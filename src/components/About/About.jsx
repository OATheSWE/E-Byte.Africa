import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import { useState } from "react";

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: 'smooth' });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full py-10 ${styles.body} bg-accent`}>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 5.3 }} className="flex">
          <animated.div style={leftColAnimation} className="flex items-stretch max-lg:mx-auto">
            <Image
              src="../../../assets/images/about.png"
              className={`w-full object-cover object-top rounded-xl`}
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6.7 }}>
          <animated.div
            style={rightColAnimation}
            className={``}
          >
            <Title className={`text-primary font-sans mb-2`} order={4}>
              \ What We Do \
            </Title>

            <Title className={classes.title} order={2}>
              Driving Success in the Digital Age: e-Byte Africa's Tech
              Innovation Journey
            </Title>

            <Text className="my-2">
              At e-Byte Africa, we're digital architects crafting innovative
              solutions that redefine the digital landscape. From helping
              businesses navigate the digital terrain and providing existing
              teams with the perfect fit for seamless project execution to
              building and maintaining projects, we bring a fresh perspective.
            </Text>

            <Text className="">
              Our expertise extends to integrating emerging technologies,
              ensuring your digital journey is at the forefront of innovation.
              Your success is our code, driving unparalleled digital excellence.
              🌐💻
            </Text>

            <Btn
              text="View More"
              style={`rounded-md h-[50px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-white hover:bg-secondary mt-5`}
              click={handleScrollUp}
            />
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
