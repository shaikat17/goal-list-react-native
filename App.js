import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [goalList, setGoalList] = useState([])

  const goalInputHandler = (enteredText) => {
    setInputValue(enteredText)
  }

  const addGoalHandler = () => {
    setGoalList(goals => [...goals, inputValue])
    setInputValue('')
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} value={inputValue} placeholder='Enter Your Course Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={item => {
          return (
            <View style={styles.goalItem}><Text style={styles.goalText}>{item.item}</Text></View>
          )
        }} keyExtractor={(item, index) => index}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
