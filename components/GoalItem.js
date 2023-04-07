import { StyleSheet, Text, View } from "react-native"

const GoalItem = ({item}) => {

    // console.log(item)
    return (
        <View style={styles.goalItem}><Text style={styles.goalText}>{item}</Text></View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
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