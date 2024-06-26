import React from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import { styles } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "expo-router";

const navLinks = [
  { text: "About", href: "/about" },
  { text: "Our Service", href: "/services" },
  // { text: "Portfolio", href: "/portfolio" },
  { text: "Get in touch", href: "/contact" },
];

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box className="fixed w-full z-[99999] shadow-xl">
      <header
        className={`flex justify-between items-center bg-primary md:px-8 text-white font-sans ${classes.header} ${styles.body}`}
      >
        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Text className="font-extrabold text-accent text-[25px] max-[480px]:text-[21px]">
              e-Byte Africa
            </Text>
          </Link>
        </Group>

        <Group h="100%" gap={0} className="hidden md:flex">
          {navLinks.slice(0, 2).map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans ${classes.link} text-white`}
            >
              {link.text}
            </Link>
          ))}
          {navLinks.slice(2).map((link, index) => (
            <Link key={index} href={`${link.href}`} className="ml-5">
              <Btn
                text={link.text}
                style={`rounded-md h-[45px] bg-accent justify-center text-[16.5px] font-medium px-6 text-white hover:bg-secondary font-sans hover:text-black`}
              />
            </Link>
          ))}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          size={23}
          color="white"
        />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
        className="font-sans text-black p-0 m-0"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="block mx-auto px-4"
          bg={`#eaeaea`}
        >
          {navLinks.slice(0, 3).map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans ${classes.link}`}
              onPress={toggleDrawer}
            >
              {link.text}
            </Link>
          ))}
          {navLinks.slice(3).map((link, index) => (
            <Link key={index} href={`${link.href}`}>
              <Btn
                text={link.text}
                style={`rounded-md w-full h-[45px] mt-3 bg-primary justify-center text-[16.5px] font-medium px-14 text-white hover:bg-secondary font-sans`}
                click={toggleDrawer}
              />
            </Link>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
