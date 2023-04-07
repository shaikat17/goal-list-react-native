import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder='Enter Your Course Goal'/>
        <Button title='Add Goal'/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
