import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  Platform,
} from "react-native";
import uuid from "react-uuid";
import Task from "./src/components/Task";
import Form from "./src/components/Form";
import {
  appName,
  primaryColor,
  secondaryColor,
} from "./src/includes/variables";

export default function App() {
  // Init list of tasks.
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Walk the dog",
      status: "done",
    },
    {
      id: uuid(),
      title: "Do the dishes",
      status: "done",
    },
    {
      id: uuid(),
      title: "Mop the floor",
      status: "due",
    },
  ]);

  // Add a task.
  const handleAddTask = (title) => {
    const newTask = { id: uuid(), title, status: "due" };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
  };

  // Change the status.
  const handleStatusChange = (value, id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = value;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Delete the task.
  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>{appName}</Text>
      <Form onAddTask={handleAddTask} />
      <FlatList
        keyExtractor={(task) => task.id}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            task={item}
            onStatusChange={handleStatusChange}
            onDeleteTask={handleDeleteTask}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.message}>Add a task and get things done!</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flext-start",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: primaryColor,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: secondaryColor,
    padding: 20,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
});
