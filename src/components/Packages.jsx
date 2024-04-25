import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import { packages, styles } from "../data";
import { IconImports } from "../../assets";
import Btn from "./button";

export default function Packages() {
  return (
    <div
      className={`flex items-center justify-center sm:space-x-5 max-sm:flex-col max-sm:space-y-5 ${styles.body} py-16 bg-secondary`}
    >
      {packages.map((packag, index) => (
        <Card
          shadow="sm"
          radius="md"
          withBorder
          className="max-w-[350px] h-auto w-full hover:shadow-2xl transition duration-300 cursor-pointer hover:-translate-y-2 p-6"
          key={index}
        >
          <div className="flex items-center justify-center space-y-3 flex-col">
            <Text className="font-semibold">{packag.name}</Text>

            <Text className="text-[25px] font-bold">
              {packag.price.perTerm}
            </Text>

            <Text className="text-center">{packag.text}</Text>

            <Text className="text-[25px] font-bold">
              {packag.price.subTerm}
            </Text>

            <Btn
              style={`bg-primary w-full max-w-[150px] h-[40px] hover:bg-accent duration-300 transition`}
              text={`Register`}
            />

            <Text className="text-center pb-7">{packag.description}</Text>

            <div className="w-full h-0.5 bg-black"></div>
          </div>

          {packag.features.map((feature) => (
            <div className="flex my-3 items-center space-x-4">
              <IconImports.Check size={20} color={`green`} />
              <Text>{feature}</Text>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
}
