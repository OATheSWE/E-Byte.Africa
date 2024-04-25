import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./Welcome.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function Welcome() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
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
          <div className="flex max-lg:mx-auto">
            <Image
              src={ImageCollection.about}
              className={`object-cover mt-2`}
              alt="About Image"
            />
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className={`flex items-center `}>
          <div className={`${styles.body}`}>
            <animated.div style={rightColAnimation}>
              <Title className={`text-accent font-sans mb-2`} order={4}>
                \ What We Do \
              </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Title className={classes.title} order={2}>
                Welcome to e-Byte Africa: Revolutionizing School Management
              </Title>
            </animated.div>

            <animated.div style={rightColAnimation}>
              <Text className="my-2 text-secondary">
                At e-Byte Africa, we understand the complexities of running a
                successful educational institution in today's dynamic world.
                Based in the vibrant city of Lagos, Nigeria, we are proud to
                introduce our innovative AI-powered School Management Systems,
                designed specifically for K-12 private educational institutions.
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
