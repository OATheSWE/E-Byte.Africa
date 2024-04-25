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
import classes from "./KeyFeatures.module.css";
import { keyFeatures, styles } from "../../data";
import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "@react-spring/web";
import Heading from "../Heading";

export default function KeyFeatures() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(keyFeatures.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });


  const features = trail.map((style, index) => (
    <animated.div key={index} style={style}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl" bg={`#eaeaea`}>
        <div className="bg-white flex w-[80px] h-[80px] justify-center items-center rounded-lg">
          {keyFeatures[index].icon}
        </div>
        <Text
          fz="lg"
          fw={500}
          className={`text-[20px] text-primary ${classes.cardTitle}`}
          mt="md"
        >
          {keyFeatures[index].title}
        </Text>
        <Text fz="sm" mt="sm" className="text-primary">
          {keyFeatures[index].description}
        </Text>
      </Card>
    </animated.div>
  ));

  return (
    <section ref={ref} className={`w-full py-10 ${styles.body}`}>
      <Heading title={`Key Features`} />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mt={50}>
        {features}
      </SimpleGrid>
    </section>
  );
}
