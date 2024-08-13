import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Pick-ups</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow,
    height: 104,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 16,
    paddingTop: StatusBar.currentHeight || 0, // Adjust for the status bar height
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Lato_700Bold",
    lineHeight: 19,
    color: colors.textColor,
  },
});
