import { useEffect, useState } from "react";
import useLocationService from "./useLocationService";
import { MeteoAPI } from "../api/meteo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DEFAULT_CITY = "San Francisco";

const useGetCity = () => {
  const { location } = useLocationService();
  const [city, setCity] = useState();

  const getCity = async (coords) => {
    try {
      const address = await MeteoAPI.fetchAddressByCoords(coords);
      setCity(address);
      await AsyncStorage.setItem("lastCity", address);
    } catch (error) {
      console.log("Fetching address based on coordinates failed", error.message);
      const lastCity = await AsyncStorage.getItem("lastCity");
      if (lastCity) {
        setCity(lastCity);
      } else {
        setCity(DEFAULT_CITY);
      }
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getCity(location);
    }
  }, [location]);

  return { city };
};

export default useGetCity;
