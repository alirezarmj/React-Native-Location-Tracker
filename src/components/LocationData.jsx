import { Alert, Button, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "./CustomText";
import colors from "../constants/colors";
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from "expo-location";
import { MeteoAPI } from "../../api/meteo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useLocationService from "../../hooks/useLocationService";

const DEFAULT_LOCATION = { latitude: 37.7749, longitude: -122.4194 }; // Default: San Francisco, CA

const LocationData = () => {
  const { location } = useLocationService();
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <CustomText style={styles.text}>Last Latitude</CustomText>
        <CustomText style={styles.number}>{location.latitude}</CustomText>
      </View>
      <View style={styles.dataContainer}>
        <CustomText style={styles.text}>Last Longitude</CustomText>
        <CustomText style={styles.number}>{location.longitude}</CustomText>
      </View>
    </View>
  );
};

export default LocationData;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },
  text: {
    color: colors.driverColor,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
  },
  number: {
    color: colors.textColor,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
});
