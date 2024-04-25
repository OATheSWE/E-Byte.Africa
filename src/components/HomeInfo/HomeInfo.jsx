import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./HomeInfo.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function HomeInfo() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    // Adjust the value (-100) based on how much you want the page to scroll down
    window.scrollTo({ top: scrollPosition + 1100, behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`w-full py-10 mt-12 ${styles.body} bg-secondary`}>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 6 }} className="">
          <animated.div
            style={leftColAnimation}
            className=""
          >
            <Title className={classes.title} order={2}>
              Addressing Challenges
            </Title>

            <Text className="my-2 text-primary">
              In the fast-paced environment of education, administrators face
              numerous challenges in efficiently managing student records,
              admissions, fees, and exams. We recognize these pain points and
              have developed a solution that streamlines administrative tasks,
              empowering educators to focus on what truly matters: nurturing the
              next generation.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={rightColAnimation} className={`text-right`}>
            <Title className={classes.title} order={2}>
              The e-Byte Advantage
            </Title>

            <Text className="my-2">
              Our platform offers a comprehensive suite of features, seamlessly
              integrating AI technology to optimize school management processes.
              From student enrollment to performance tracking, our intuitive
              interface provides administrators with the tools they need to
              succeed. With e-Byte Africa, say goodbye to paperwork and hello to
              efficiency.
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
