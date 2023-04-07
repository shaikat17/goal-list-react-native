import React from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const Goalinput = ({ goalInputHandler, addGoalHandler, value, visValue, modalValueHandle }) => {
  // console.log(props)
  return (
    <Modal visible={visValue} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.inputField}
          value={value}
          placeholder="Enter Your Course Goal"
          onChangeText={goalInputHandler} placeholderTextColor='#fff'
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
            <Button title="Cancle" color='#eb3b5a' onPress={modalValueHandle} />
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
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    height: 100,
    width: 100,
    margin: 20
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#fff',
    width: "100%",
    padding: 8,
    color: '#fff',
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
