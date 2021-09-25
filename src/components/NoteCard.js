import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const NoteCard = ({noteObj, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
      <Text style={styles.titleText}>{noteObj.titleText}</Text>
      <Text>{noteObj.contentText}</Text>
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
  },
  titleText: {
    fontWeight: 'bold'
  }
})


export default NoteCard;