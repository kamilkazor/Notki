import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const NoteCard = ({noteObj, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
      {noteObj.titleText ? <Text style={styles.titleText}>{noteObj.titleText}</Text> : <View></View>}
      {noteObj.contentText ? <Text style={styles.contentText}>{noteObj.contentText}</Text> : <View></View>}
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
    padding: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  contentText: {
    fontSize: 20
  }
})


export default NoteCard;