import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

import ProfileOne from "./ProfileOne";
import ProfileTwo from "./ProfileTwo";
import ProfileThree from "./ProfileThree";

const Card = () => {
  return (
    <View style={styles.container}>
      <ProfileOne />
      <ProfileTwo />
      <ProfileThree />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 17,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // X=0, Y=4
    shadowOpacity: 0.08, // 8% opacity
    shadowRadius: 20, // Blur=20
    // Shadow for Android
    elevation: 10, // Adjust this value as needed to match the shadow depth on Android
  },
});
