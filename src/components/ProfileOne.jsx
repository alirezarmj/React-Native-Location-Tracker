import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import colors from "../constants/colors";

const ProfileOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image style={{ width: 35, height: 33 }} source={require("../../assets/images/man.png")} />
          <View>
            <CustomText style={styles.driver}>Driver</CustomText>
            <CustomText>John Doe</CustomText>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.circle}>
            <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/ChatAdd1.5.png")} />
          </View>
          <View style={styles.circle}>
            <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/phone1.5.png")} />
          </View>
        </View>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.collectContainer}>
          <CustomText style={styles.collect}>Collecting</CustomText>
        </View>
        <View style={styles.timeContainer}>
          <CustomText style={styles.eta}>ETA</CustomText>
          <CustomText style={styles.time}>50min</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProfileOne;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  driver: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    color: colors.driverColor,
  },
  name: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: colors.textColor,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: colors.profileColor,
    borderRadius: 100,
    paddingHorizontal: 1,
    paddingVertical: 4,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 4, // Adjust gap between the circles as needed
  },
  circle: {
    width: 33, // Diameter (2 * radius)
    height: 33,
    borderRadius: 16, // Radius (half of the diameter)
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  collect: {
    lineHeight: 10,
    fontSize: 10,
    fontWeight: "400",
    color: colors.blue,
  },
  eta: {
    lineHeight: 12,
    fontSize: 10,
    fontWeight: "400",
    color: colors.driverColor,
  },
  time: { lineHeight: 12, fontSize: 10, fontWeight: 400, color: colors.textColor },
  collectContainer: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: colors.lightBlue,
    borderRadius: 100,
  },
  rightSide: {
    gap: 8,
  },
});
