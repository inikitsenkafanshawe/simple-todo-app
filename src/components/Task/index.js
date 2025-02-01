import { Text, View, TouchableOpacity, Alert } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import { quaternaryColor } from "../../includes/variables";

export default function Task({ task, onStatusChange, onDeleteTask }) {
  // Change the status of this task.
  const handleSwitchPress = () => {
    onStatusChange(task.status === "done" ? "due" : "done", task.id);
  };

  // Delete the task.
  const handleDeletePress = () => {
    Alert.alert(
      "Delete Task",
      `This action will delete the task '${task.title}'.\n\nAre you sure?`,
      [
        {
          text: "Yes",
          onPress: () => {
            onDeleteTask(task.id);
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleSwitchPress}>
        <FontAwesome5
          name={task.status === "done" ? "check-circle" : "circle"}
          size={24}
          color={quaternaryColor}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            {
              textDecorationLine:
                task.status === "done" ? "line-through" : "none",
            },
          ]}
        >
          {task.title}
        </Text>
      </View>

      <TouchableOpacity onPress={handleDeletePress}>
        <FontAwesome name="trash" size={24} color={quaternaryColor} />
      </TouchableOpacity>
    </View>
  );
}
