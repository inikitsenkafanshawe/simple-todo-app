import { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import styles from "./styles";
import { primaryColor, tertiaryColor } from "../../includes/variables";

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState("");

  // Add a new task to the list
  const handleButtonPress = () => {
    onAddTask(title.trim());
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a task title"
          inputmode="text"
          placeholderTextColor={tertiaryColor}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <TouchableOpacity
        onPress={handleButtonPress}
        disabled={title.trim() === ""}
      >
        <FontAwesome5
          name="plus"
          size={24}
          color={title.trim() === "" ? tertiaryColor : primaryColor}
        />
      </TouchableOpacity>
    </View>
  );
}
