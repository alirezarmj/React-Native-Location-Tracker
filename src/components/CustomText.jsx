import { Text, StyleSheet } from "react-native";

const CustomText = ({ children, style, ...props }) => (
  <Text style={[styles.text, style]} {...props}>
    {children}
  </Text>
);

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Lato_400Regular", // Default font for all text
  },
});
