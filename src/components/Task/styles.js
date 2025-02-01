import { StyleSheet } from "react-native";
import { quaternaryColor, secondaryColor } from "../../includes/variables";

export default StyleSheet.create({
  card: {
    backgroundColor: secondaryColor,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: quaternaryColor,
  },
});
