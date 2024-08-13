import { View, Text, Image, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import colors from "../constants/colors";
import TimeAndDate from "./TimeAndDate";
import useGetCity from "../../hooks/useGetCity";

const ProfileTwo = () => {
  const { city } = useGetCity();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/location.png")} style={styles.image1} />
        <CustomText style={styles.text1}>{city}</CustomText>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/calender.png")} style={styles.image1} />
        {/* <CustomText style={styles.text1}>1 - 3 pm, July 3</CustomText> */}
        <TimeAndDate />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/truck.png")} style={styles.image1} />
        <CustomText style={styles.text1}>10 Orders</CustomText>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.image2Container}>
          <Image style={styles.image2} source={require("../../assets/images/pick.png")} />
          <CustomText style={styles.text2}>Pick-up</CustomText>
        </View>
        <View style={styles.image2Container}>
          <Image style={styles.image2} source={require("../../assets/images/recieve.png")} />
          <CustomText style={styles.text2}>Receive Cash</CustomText>
        </View>
        <View style={styles.image2Container}>
          <Image style={styles.image2} source={require("../../assets/images/recieve2.png")} />
          <CustomText style={styles.text2}>Received Returns</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ProfileTwo;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    gap: 5,
  },
  text1: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  image1: { width: 20, height: 20, resizeMode: "contain" },
  image2: { width: 16, height: 16, resizeMode: "contain" },
  text2: {
    color: colors.textColor,
    fontWeight: "400",
    lineHeight: 10,
    fontSize: 10,
  },
  image2Container: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 3,
    backgroundColor: colors.profileColor,
    borderRadius: 4,
    borderColor: colors.lightGray,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  iconsContainer: {
    flexDirection: "row",
  },
});
