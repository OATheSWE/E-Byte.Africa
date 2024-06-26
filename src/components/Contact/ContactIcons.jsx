import { Text, Box, Stack, rem } from "@mantine/core";
import classes from "./ContactInfo.module.css";
import { IconImports } from "../../../assets";

function ContactIcon({ icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <div className="flex w-[50px] h-[50px] justify-center items-center mr-5 bg-primary rounded-lg">
        {icon}
      </div>
      <div className="max-w-[170px] w-full">
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  {
    title: "Email",
    description: "ebyte.africa@gmail.com",
    icon: <IconImports.Email size={25} color={`#cb4430`} />,
  },
  {
    title: "Phone",
    description: "+234 701 275 7912, +234 9153388296",
    icon: <IconImports.Phone size={25} color={`#cb4430`} />,
  },
  {
    title: "Address",
    description: "Remote",
    icon: <IconImports.Location size={25} color={`#cb4430`} />,
  },
  {
    title: "Working hours",
    description: "24/7",
    icon: <IconImports.Sun size={25} color={`#FF3E54`} />,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
