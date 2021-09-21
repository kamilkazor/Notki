import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const NoteCard = ({text}) => {
  return (
    <View style={styles.card}>
      <Text>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
    padding: 15,
    backgroundColor: 'gray'
  }
})


export default NoteCard;