// Exporting Icons from IconImport.tsx
import { AntDesign, Entypo, Feather, FontAwesome5, FontAwesome6, Fontisto, Foundation, MaterialIcons  } from "@expo/vector-icons";

const IconImports = {
  ShoppingCart: (props: any) => <AntDesign name="shoppingcart" {...props} />,
  WebPage: (props: any) => <MaterialIcons name="web" {...props} />,
  GlassChart: (props: any) => <FontAwesome6 name="magnifying-glass-chart" {...props} />,
  Bulb: (props: any) => <Foundation name="lightbulb" {...props} />,
  Handshake: (props: any) => <FontAwesome6 name="handshake-simple" {...props} />,
  Email: (props: any) => <Entypo name="email" {...props} />,
  Phone: (props: any) => <Feather name="phone" {...props} />,
  Check: (props: any) => <Feather name="check" {...props} />,
  Location: (props: any) => <Feather name="map-pin" {...props} />,
  Sun: (props: any) => <Fontisto name="day-sunny" {...props} />,
  Twitter: (props: any) => <FontAwesome6 name="x-twitter" {...props} />,
  Calendar: (props: any) => <FontAwesome6 name="calendar-check" {...props} />,
  Clipboard: (props: any) => <FontAwesome5 name="clipboard-check" {...props} />,
  Coins: (props: any) => <FontAwesome5 name="coins" {...props} />,
  Brain: (props: any) => <FontAwesome5 name="brain" {...props} />,
  Instagram: (props: any) => <AntDesign name="instagram" {...props} />,
  IDCard: (props: any) => <AntDesign name="idcard" {...props} />,
  Barchart: (props: any) => <AntDesign name="barschart" {...props} />,
  


};

export { IconImports };