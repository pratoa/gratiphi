import { Dimensions, Platform } from "react-native";
import colors from "./colors";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
  smallText: {
    fontSize: SCREEN_WIDTH * 0.045,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  mediumText: {
    fontSize: SCREEN_WIDTH * 0.05,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  largeText: {
    fontSize: SCREEN_WIDTH * 0.06,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title: {
    fontSize: 0.05 * SCREEN_WIDTH,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
