import {
  Card,
  Image,
  Text,
  Group,
  SimpleGrid,
  Title,
  Center,
  Space,
} from "@mantine/core";
import classes from "./Portfolio.module.css";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { PPTS, styles } from "../../data";
import Btn from "../../components/button";
import { Heading, PagesHeader } from "../../components";
import { Link } from "expo-router";

export default function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const trail = useTrail(PPTS.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const all = trail.map((style, index) => (
    <animated.div key={index} style={style} ref={ref}>
      <Card
        withBorder
        radius="md"
        className={`${classes.card} flex fex-col space-y-3 items-center w-full max-w-[400px] shadow-md transition duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
        mt={0}
      >
        <Card.Section className="h-[180px] w-full max-w-[400px] overflow-hidden mt-[0.15rem]">
          <Image
            src={PPTS[index].src}
            className="w-full h-full transition duration-500 hover:scale-110"
          />
        </Card.Section>

        <Text className={classes.title} fw={700}>
          {PPTS[index].project}
        </Text>

        <Text fz="sm" lineClamp={4} className="text-center">
          {PPTS[index].detail}
        </Text>

        <a href={PPTS[index].link} key={`link-${index}`} target="_blank">
          <Group justify="center" className="w-[100vw]">
            <Btn
              text="See Project"
              style={`rounded-full h-[40px] bg-primary justify-center text-[20px] max-lg:text-[17px] font-medium px-8 text-white hover:bg-secondary mt-1`}
            />
          </Group>
        </a>
      </Card>
    </animated.div>
  ));

  return (
    <section className={``} >
      <PagesHeader text={`Portfolio`} text2={`Home / Portfolio`} />
      <Space h={`4rem`} />
      <Heading title={`Portfolio`} description={`Our Work`} />
      <div
        className={`${styles.body} pb-12 grid place-items-center xl:justify-center`}
      >
        <SimpleGrid mt={20} cols={{ base: 1, xs: 2, sm: 3, lg: 4 }}>
          {all}
        </SimpleGrid>
      </div>

      <Center className="mx-auto mt-8">
        <Link href="/contact">
          <Btn
            text="Get in Touch"
            style={`rounded-md h-[45px] bg-primary justify-center text-[17px] font-semibold px-14 text-white hover:bg-secondary`}
          />
        </Link>
      </Center>
    </section>
  );
}
