import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const NoteCard = ({noteObj, style}) => {
  const fullCard = noteObj.titleText && noteObj.contentText ? true : false;

  return (
    <View style={{...styles.card, ...style}}>
      {noteObj.titleText
        ? <Text 
          style={fullCard ? {...styles.titleText, ...styles.fullCardTitleText} : styles.titleText}
          >{noteObj.titleText}</Text>
        : <View></View>}
      {noteObj.contentText 
        ? <Text style={styles.contentText}>{noteObj.contentText}</Text>
        : <View></View>}
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
    fontSize: 20,
    textAlign: 'justify',
    width: '100%'
  },
  fullCardTitleText: {
    paddingBottom: 10
  },
  contentText: {
    fontSize: 20,
    textAlign: 'justify'
  }
})


export default NoteCard;