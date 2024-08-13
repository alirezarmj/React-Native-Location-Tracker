import { View, Text, StyleSheet, StatusBar as RNStatusBar } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import colors from "../../constants/colors";
import Header from "../../components/Header";
import Card from "../../components/Card";
import LocationData from "../../components/LocationData";

const Home = () => {
  return (
    <Screen style={styles.screen}>
      {/* Ensure StatusBar is yellow */}
      <RNStatusBar backgroundColor={colors.yellow} barStyle="dark-content" />

      <View style={styles.container}>
        <Header />
        <Card />
        <LocationData />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
    flex: 1,
    // paddingTop: RNStatusBar.currentHeight || 0, // Add padding if necessary
  },
  container: {
    flex: 1,
    marginTop: 0, // No need to use StatusBar.currentHeight here
  },
});
