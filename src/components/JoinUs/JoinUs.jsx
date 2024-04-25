import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./JoinUs.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";
import Btn from "../button";
import { router } from "expo-router";

export default function Apply() {
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

  return (
    <section ref={ref} className={`${styles.body} my-20`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, sm: 9 }} className="flex">
          <animated.div style={leftColAnimation} className="">
            <Title className={classes.title} order={2} mb={10}>
              Join the e-Byte Revolution
            </Title>

            <Text className="my-2 text-secondary">
              Experience the future of school management with e-Byte Africa. Our
              team is dedicated to providing unparalleled support and expertise
              to help your institution thrive. Contact us today to schedule a
              demo and discover how we can transform your school's operations.
            </Text>

          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
