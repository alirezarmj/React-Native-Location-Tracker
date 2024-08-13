import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomText from "./CustomText";

const TimeAndDate = () => {
  const [timeAndDate, setTimeAndDate] = useState("");

  useEffect(() => {
    const formatTimeAndDate = () => {
      const now = new Date();

      // Format the hours and minutes
      const hours = now.getHours();
      const ampm = hours >= 12 ? "pm" : "am";
      const formattedHours = hours % 12 || 12;
      const endHour = (formattedHours + 2) % 12 || 12;

      // Format the time string
      const formattedTime = `${formattedHours} - ${endHour} ${ampm}`;

      // Format the date
      const month = now.toLocaleString("default", { month: "long" });
      const day = now.getDate();

      setTimeAndDate(`${formattedTime}, ${month} ${day}`);
    };

    formatTimeAndDate();

    const intervalId = setInterval(() => {
      formatTimeAndDate();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>{timeAndDate}</CustomText>
    </View>
  );
};

export default TimeAndDate;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
  },
});
