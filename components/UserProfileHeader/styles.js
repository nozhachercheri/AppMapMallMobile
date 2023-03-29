/** @format */

import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { Color } from "../../common";

export default StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  fullName: {
    fontWeight: "400",
    color: Color.blackTextPrimary,
    backgroundColor: "transparent",
    fontSize: 20,
    marginBottom: 6,
  },
  address: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#9B9B9B",
    fontWeight: "600",
  },
  textContainer: {
    marginTop:11,
    marginLeft: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginTop:10,
    padding: 8,
  },
  avatar: {
    marginTop:10,
    height: width / 6,
    width: width / 6,
    borderRadius: 8,
  },
  loginText: {
    color: "#666",
  },
});
