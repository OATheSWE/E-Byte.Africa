import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./ServicesInfo.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";
import Heading from "../Heading";

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
    <section ref={ref} className={`w-full py-10 ${styles.body} bg-primary`}>
      <Heading title={`Our Solution`} />
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 6 }} className="">
          <animated.div style={leftColAnimation} className="">
            <Title className={classes.title} order={2}>
              Tailored Solutions for Every School
            </Title>

            <Text className="my-2 text-secondary">
              Welcome to e-Byte Africa, where we're dedicated to transforming
              education through innovative technology solutions tailored to meet
              the unique needs of every school. Our AI-powered School Management
              Systems offer a customizable approach, empowering educational
              institutions of all sizes to streamline administrative tasks and
              enhance the learning experience for students, teachers, and
              administrators alike.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={rightColAnimation} className={`text-right`}>
            <Title className={classes.title} order={2}>
              Maximizing Efficiency, Minimizing Waste
            </Title>

            <Text className="my-2 text-secondary">
              Did you know that schools spend an average of 20 - 30 hours per
              week on administrative tasks that can be automated with our
              platform? By digitizing processes such as admissions, student
              records, and fee management, EduSolve not only saves valuable time
              but also reduces paper waste and associated costs. The average
              school spends 200,000 - 400,000 naira on paper each year – imagine the
              impact of going paperless with our digital solution!
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
