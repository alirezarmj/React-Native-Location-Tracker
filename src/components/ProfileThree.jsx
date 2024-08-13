import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";
import barcode from "../../assets/images/barcode.png";
import CustomButton from "./Button";

const ProfileThree = () => {
  return (
    <View style={styles.container}>
      <CustomButton title="Labels" color={colors.yellow} iconSource={barcode} />
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require("../../assets/images/threeDot.png")} />
      </View>
    </View>
  );
};

export default ProfileThree;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",

    borderColor: colors.driverColor,
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
