import React from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const Goalinput = ({ goalInputHandler, addGoalHandler, value, visValue }) => {
  // console.log(props)
  return (
    <Modal visible={visValue} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={value}
          placeholder="Enter Your Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
