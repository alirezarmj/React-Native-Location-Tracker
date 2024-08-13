import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DEFAULT_LOCATION = { latitude: 37.7749, longitude: -122.4194 }; // Default: San Francisco, CA

const useLocationService = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [permissionInfo, requestPermission] = useForegroundPermissions();
  const [hasAskedPermission, setHasAskedPermission] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const getLocation = async () => {
    if (!permissionInfo) {
      // The permissionInfo is still loading
      return;
    }

    if (permissionInfo.status === PermissionStatus.GRANTED) {
      // Fetch the current location only if permission is granted
      try {
        const location = await getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setLocation(coords);
        await AsyncStorage.setItem("lastLocation", JSON.stringify(coords));
      } catch (error) {
        Alert.alert("Error", "Could not fetch new location. Please try again.");
        // Attempt to load the last known location from storage
        const lastLocation = await AsyncStorage.getItem("lastLocation");
        if (lastLocation) {
          setLocation(JSON.parse(lastLocation));
        } else {
          // Use default location if no stored location is found
          setLocation(DEFAULT_LOCATION);
        }
      }
    } else if (!hasAskedPermission && !permissionDenied) {
      // Request permission to access location only once
      const { status } = await requestPermission();
      setHasAskedPermission(true); // Mark that permission request has been made

      if (status !== PermissionStatus.GRANTED) {
        Alert.alert("Permission Denied", "You need to grant location permissions to use this feature.");
        setPermissionDenied(true); // Mark that permission has been denied to avoid re-prompting

        // Attempt to load the last known location from storage
        const lastLocation = await AsyncStorage.getItem("lastLocation");
        if (lastLocation) {
          setLocation(JSON.parse(lastLocation));
        } else {
          // Use default location if no stored location is found
          setLocation(DEFAULT_LOCATION);
        }
      }
    }
  };

  useEffect(() => {
    getLocation(); // Call getLocation inside useEffect
  }, [permissionInfo]);

  return { location, getLocation };
};

export default useLocationService;
