import { Box, Image, MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import "../global.css";
import "@expo/metro-runtime";
import { Slot, Stack } from 'expo-router'
import { Footer, NavBar } from "../src/components";



const App = () => {
  return (
    <MantineProvider>
       <NavBar />
       {/* <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
          <Stack.Screen name="contact" />
          <Stack.Screen name="porfolio" />
          <Stack.Screen name="services" />
       </Stack> */}
       <Slot />
       <Footer />
    </MantineProvider>
  );
};

export default App;
