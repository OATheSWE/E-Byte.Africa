import { Container, Title, Accordion } from "@mantine/core";
import classes from "./faq.module.css";
import { faqArray } from "../../data";

export default function Faq() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title} pb={`2rem`}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {faqArray.map((item) => (
          <Accordion.Item
            key={item.id}
            className={classes.item}
            value={`faq-${item.id}`}
          >
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
