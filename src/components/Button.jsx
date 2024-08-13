import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import CustomText from "./CustomText";

function CustomButton({ title, onPress, iconSource, color = "white" }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Image style={styles.icon} source={iconSource} />
      <CustomText style={styles.text}>{title}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 59,
    height: 40,
    flexGrow: 1,
    marginVertical: 10,
    gap: 5,
    flexDirection: "row",
  },
  text: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 20,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});

export default CustomButton;
