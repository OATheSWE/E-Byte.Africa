import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Services.module.css";
import { services, styles } from "../../data";
import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "@react-spring/web";
import Heading from "../Heading";

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(services.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });


  const features = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <div className="bg-white flex w-[80px] h-[80px] justify-center items-center rounded-lg">
          {services[index].icon}
        </div>
        <Text
          fz="lg"
          fw={500}
          className={`text-[20px] text-secondary ${classes.cardTitle}`}
          mt="md"
        >
          {services[index].title}
        </Text>
        <Text fz="sm" mt="sm">
          {services[index].description}
        </Text>
      </Card>
    </animated.div>
  ));

  return (
    <section ref={ref} className={`w-full py-10 ${styles.body}`}>
      <Heading title={`Services`} description={`Our Expertice`} />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mt={50}>
        {features}
      </SimpleGrid>
    </section>
  );
}
