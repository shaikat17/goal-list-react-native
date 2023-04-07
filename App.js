import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import GoalItem from './components/GoalItem';
import Goalinput from './components/Goalinput';

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [goalList, setGoalList] = useState([])

  const goalInputHandler = (enteredText) => {
    setInputValue(enteredText)
    // console.log('enteredText')
  }

  const addGoalHandler = () => {
    setGoalList(goals => [...goals, inputValue])
    setInputValue('')
    // console.log('hello')
  }

  const deleteGoalHandler = (item) => {
    // console.log(item)
    setGoalList( goals => goals.filter( goal => goal !== item))
  }


  return (
    <View style={styles.appContainer}>
      <Goalinput addGoalHandler={addGoalHandler} value={inputValue} goalInputHandler={goalInputHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={item => {
          return (
            <GoalItem item={item.item} deleteGoalHandler={deleteGoalHandler} />
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
  goalsContainer: {
    flex: 5
  }
});
