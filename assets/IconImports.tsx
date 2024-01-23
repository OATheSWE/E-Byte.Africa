// Exporting Icons from IconImport.tsx
import { AntDesign, Entypo, Feather, FontAwesome6, Fontisto, Foundation, MaterialIcons  } from "@expo/vector-icons";

const IconImports = {
  ShoppingCart: (props: any) => <AntDesign name="shoppingcart" {...props} />,
  WebPage: (props: any) => <MaterialIcons name="web" {...props} />,
  GlassChart: (props: any) => <FontAwesome6 name="magnifying-glass-chart" {...props} />,
  Bulb: (props: any) => <Foundation name="lightbulb" {...props} />,
  Handshake: (props: any) => <FontAwesome6 name="handshake-simple" {...props} />,
  Email: (props: any) => <Entypo name="email" {...props} />,
  Phone: (props: any) => <Feather name="phone" {...props} />,
  Location: (props: any) => <Feather name="map-pin" {...props} />,
  Sun: (props: any) => <Fontisto name="day-sunny" {...props} />,
  Twitter: (props: any) => <FontAwesome6 name="x-twitter" {...props} />,
  Instagram: (props: any) => <AntDesign name="instagram" {...props} />,


};

export { IconImports };