import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.yellow,

    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
