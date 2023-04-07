import React from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const Goalinput = ({ goalInputHandler, addGoalHandler, value, visValue, modalValueHandle }) => {
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
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
            <Button title="Cancle" onPress={modalValueHandle} />
            </View>
        
        
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});
