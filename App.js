import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold, // If you need the bold version as well
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
}
