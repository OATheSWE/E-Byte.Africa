import { Box, Image, MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import './global.css';
import '@expo/metro-runtime';

const App = () => {

  return (
    <MantineProvider>
      <Box className={`flex items-center justify-center bg-gray-300 w-full flex-col`}>
        <Text className={`font-semibold text-[20px] text-black text-center`}>
          Open up App.tsx to start working on your website or app!
        </Text>
        <Image src="./assets/images/favicon.png" className={`object-cover w-[30%] mt-8`} />
      </Box>
    </MantineProvider>
  );
}

export default App; 
