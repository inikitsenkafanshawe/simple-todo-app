import { StyleSheet } from "react-native";
import { primaryColor } from "../../includes/variables";

export default StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: primaryColor,
    padding: 20,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    marginRight: 20,
  },
  textInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor,
  },
});
