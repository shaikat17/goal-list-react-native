import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  // console.log(item)
  return (
    <Pressable onPress={() => deleteGoalHandler(item
    )} android_ripple={{color: '#eb3b5a'}}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
